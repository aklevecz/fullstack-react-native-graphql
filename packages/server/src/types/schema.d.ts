// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation | ISubscription;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
viewHunted: Array<IHunted>;
findListings: Array<IListing>;
searchListings: Array<IListing>;
viewListing: IListing | null;
messages: Array<IMessage>;
viewTickets: Array<ITickets>;
me: IUser | null;
refreshToken: IAccessResponse;
}

interface ISearchListingsOnQueryArguments {
input?: ISearchListingsInput | null;
offset: number;
limit: number;
}

interface IViewListingOnQueryArguments {
id: string;
}

interface IMessagesOnQueryArguments {
listingId: string;
}

interface IHunted {
__typename: "Hunted";
id: string;
artist: string;
hunt: string;
venue: string;
date: string;
finderId: string;
filename: string;
}

interface IListing {
__typename: "Listing";
id: string;
artist: string;
venue: string;
pictureUrl: string;
date: string;
owner: IUser;
}

interface IUser {
__typename: "User";
id: string;
email: string;
spotifyName: string;
}

interface ISearchListingsInput {
artist?: string | null;
}

interface IMessage {
__typename: "Message";
text: string;
user: IUser;
listingId: string;
}

interface ITickets {
__typename: "Tickets";
id: string;
artist: string;
venue: string;
listingId: string;
date: string;
}

interface IAccessResponse {
__typename: "AccessResponse";
accessToken: string;
}

interface IMutation {
__typename: "Mutation";
createListing: string;
deleteListing: boolean;
updateListing: boolean;
createMessage: boolean;
createTicket: boolean;
grabTicket: ITicket | null;
sendForgotPasswordEmail: boolean | null;
forgotPasswordChange: Array<IError>;
login: ILoginResponse;
logout: boolean | null;
register: Array<IError>;
}

interface ICreateListingOnMutationArguments {
input: ICreateListingInput;
}

interface IDeleteListingOnMutationArguments {
id: string;
}

interface IUpdateListingOnMutationArguments {
listingId: string;
input: IUpdateListingInput;
}

interface ICreateMessageOnMutationArguments {
message: IMessageInput;
}

interface ICreateTicketOnMutationArguments {
input: ITicketInput;
}

interface IGrabTicketOnMutationArguments {
listingId: string;
}

interface ISendForgotPasswordEmailOnMutationArguments {
email: string;
}

interface IForgotPasswordChangeOnMutationArguments {
newPassword: string;
key: string;
}

interface ILoginOnMutationArguments {
email: string;
password: string;
}

interface IRegisterOnMutationArguments {
email: string;
password: string;
}

interface ICreateListingInput {
artist: string;
picture?: any | null;
venue: string;
date: string;
spotifyId: string;
}

interface IUpdateListingInput {
name?: string | null;
picture?: any | null;
pictureUrl?: string | null;
category?: string | null;
description?: string | null;
price?: number | null;
beds?: number | null;
guests?: number | null;
latitude?: number | null;
longitude?: number | null;
amenities: Array<string>;
}

interface IMessageInput {
text: string;
listingId: string;
}

interface ITicketInput {
ticket?: any | null;
listingId: string;
}

interface ITicket {
__typename: "Ticket";
ticketId: string;
}

interface IError {
__typename: "Error";
path: string;
message: string;
}

interface ILoginResponse {
__typename: "LoginResponse";
errors: Array<IError>;
sessionId: string | null;
}

interface ISubscription {
__typename: "Subscription";
newMessage: IMessage;
}

interface INewMessageOnSubscriptionArguments {
listingId?: string | null;
}
}

// tslint:enable
