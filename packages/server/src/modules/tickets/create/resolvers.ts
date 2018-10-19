import { ResolverMap } from "../../../types/graphql-utils";
import { processUpload } from "../../listing/shared/processUpload";
import { Ticket } from "../../../entity/Ticket";
import { ticketCacheKey } from "../../../constants";
import * as aws from 'aws-sdk';
import * as fs from "fs";
import { isAuthenticated } from "../../shared/isAuthenticated";

// ** to do **
// add logic for placing on s3
// push to cache upon creation
export const resolvers: ResolverMap = {
  Mutation: {
    createTicket: async (_, { input: { ticket, listingId } }, { session,redis }) => {
      await isAuthenticated(session);
      const pictureUrl = ticket ? await processUpload(ticket) : null;
      
        const s3 = new aws.S3({
          signatureVersion: 'v4',
          region: 'us-west-1',
        });      

        const ContentType = pictureUrl.split('.')[1] === "pdf" ? "application/pdf" : "binary";
        
       fs.readFile('./images/'+pictureUrl, (err, fileData) => {
          console.log(err);
          const params = {
            Bucket:'last-minute-ticket',
            ACL: 'public-read',
            Key: pictureUrl,
            Body: fileData,
            ContentType
          };
          
          s3.putObject( params, ( error:any, data:any ) => {
                  if( error ) {
                    console.log( error );
                  }
                  console.log('etag?');
                  console.log(data);
             });


        });
      
      const ticketOb = await Ticket.create({
        filename: pictureUrl,
        ownerId: session.userId,
        listingId
      }).save()
      console.log(ticketOb);
      const ticks = await redis.lpush(ticketCacheKey, JSON.stringify({tid:ticketOb.id,lid:listingId}));
      console.log("TICK EDIT")
      console.log(ticks);
      
      return true;
    }
  }
};
