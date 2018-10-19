import * as React from 'react';
import { ViewListing } from '@abb/controller';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export class ViewListingConnector extends React.PureComponent<
    RouteComponentProps<{
        listingId: string}>
    > {

    render() {
        const {
            match: {
                params: {listingId}
            }
        } = this.props;

    return(
        <ViewListing listingId={listingId}>
            {(data)=>{

                if (!data.listing) {
                    return <div>...loading</div>
                }

                let dateString='';
                if (data.listing){
                    const date = new Date(data.listing.date).toString().split(' ');
                    dateString = date[1]+' '+date[2];
                }
                const avail = JSON.parse(data.listing.pictureUrl);
                console.log(avail);
                return (
                <div id="viewlisting-container">

                <Helmet>
                    <title>{data.listing.artist}-{data.listing.venue}</title>
                    <meta name="description" content={`${data.listing.artist}`} />
                    <meta name="theme-color" content="#008f68" />
                </Helmet>
                <div id="viewlisting-artist" >{data.listing.artist.toUpperCase()}</div>
                <div id="viewlisting-venue" >{data.listing.venue.toUpperCase()}</div>
                <div id="viewlisting-date" >{dateString}</div>
                
                <div id="viewlisting-footer">
                    {avail.length > 0 
                        ? 
                        <Link to={`/listing/${listingId}/grab`}>
                            <svg
                                viewBox="0 0 408.46 226.111">
                            <g>
                                <rect stroke="#FFFFFF" strokeWidth="10" strokeMiterlimit="10" width="408.46" height="226.111"/>
                                <text transform="matrix(1 0 0 1 73.123 138.2393)" fill="#FFFFFF" fontFamily="''PhenixAmerican''" fontSize="63.3638">Löst Ticky</text>
                                <polyline fill="#FFFFFF" points="0,0 59.035,59.035 6.154,111.916 60.175,165.937 0,226.111"/>
                            </g>
                            </svg>
                        </Link>
                        :
                        <div style={{color:'white'}}>NOTHING TO GRAB</div>
                    }
                    
                    {/* <div>
                    <Link to={`/listing/${listingId}/chat`}>chat</Link>
                    </div>
                    */}
                    <Link to={`/listing/${listingId}/edit`}><div id="lose-ticky">Lose ür Ticky</div></Link>
                    </div>
                </div>
                )
            }}
        </ViewListing>
        );
    }
}
