import * as React from 'react';
import { ViewListing } from '@abb/controller';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { dateArray } from '../../../constants';

export class ViewListingConnector extends React.PureComponent<
    RouteComponentProps<{
        listingId: string}>
    > {
    private copyText: React.RefObject<HTMLSpanElement>;

    constructor(props: any){
        super(props);
        this.copyText = React.createRef();
    }


    CopyToClipboard = (e:any) => {
        const url = 'https://lostminiticky.com'+this.props.location.pathname;
        const textField = document.createElement('textarea')
        textField.innerText = url
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()

        if (this.copyText.current){
            this.copyText.current.className="copy-glow";
            setTimeout(()=>{this.copyText.current ? this.copyText.current.className="" : console.log('fuck')}, 5000);
        }

    }

    render() {
        const {
            match: {
                params: {listingId}
            }
        } = this.props;
        const desk = window.innerWidth > 600;
    return(

        <ViewListing listingId={listingId}>
            {(data)=>{

                if (!data.listing) {
                    return <div>...loading</div>
                }

                let dateString='';
                if (data.listing){
                    console.log(data.listing.date);
                    const date = data.listing.date.split('-')
                    const month = dateArray[parseInt(date[1], 10)-1];
                    dateString = month+' '+date[2];
                }
                const avail = JSON.parse(data.listing.pictureUrl);
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
                <div style={{cursor:"pointer"}} onClick={this.CopyToClipboard}>
                    <svg viewBox={`0 0 ${desk ? 411 : 120} 31`}>
                        <rect x="4.5" y="4.4" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" width="13.6" height="20.3"/>
                        <rect x="8" y="8.5" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" width="13.6" height="20.3"/>
                    </svg>
                    <span ref={this.copyText} id="copyText">COPIED</span>
                </div>    
                <div id="viewlisting-footer">
                    {avail.length > 0 
                        ? 
                        <Link to={`/listing/${listingId}/grab`}>
                            <svg x="0px" y="0px"
                                viewBox="0 0 411 500">
                            <g>
                                <line fill="none" x1="205.5" y1="250" x2="147.5" y2="310"/>
                                <circle fill="none" cx="205.5" cy="250" r="69.5"/>
                                <circle fill="none" cx="205.5" cy="250" r="83.5"/>
                                <polyline fill="none" points="205.5,250 238.3,548.4 205.5,250 172.7,-48.4 205.5,250 -92.9,282.8 205.5,250 503.9,217.2 
                                    205.5,250 378.3,566.7 205.5,250 32.7,-66.7 205.5,250 -111.2,422.8 205.5,250 522.2,77.2 205.5,250 444.4,493.4 205.5,250 
                                    -33.4,6.6 205.5,250 -37.9,488.9 205.5,250 448.9,11.1 205.5,250 265.3,574.1 205.5,250 145.7,-74.1 205.5,250 -118.6,309.8 
                                    205.5,250 529.6,190.2 205.5,250 420.3,463.7 205.5,250 -9.3,36.3 205.5,250 -8.2,464.8 205.5,250 419.2,35.2 205.5,250 
                                    211.6,434.5 205.5,250 199.4,65.5 205.5,250 21,256.1 205.5,250 390,243.9 205.5,250 230.2,626.9 205.5,250 180.8,-126.9 
                                    205.5,250 -171.4,274.7 205.5,250 582.4,225.3 205.5,250 258.2,308.2 205.5,250 152.8,191.8 205.5,250 147.3,302.7 205.5,250 
                                    263.7,197.3 205.5,250 256.8,317.9 205.5,250 154.2,182.1 205.5,250 137.6,301.3 205.5,250 273.4,198.7 205.5,250 543.4,469.7 
                                    205.5,250 -132.4,30.3 205.5,250 -14.2,587.9 205.5,250 425.2,-87.9 205.5,250 491.4,290.1 205.5,250 -80.4,209.9 205.5,250 
                                    165.4,535.9 205.5,250 245.6,-35.9 205.5,250 215.3,253.9 205.5,250 195.7,246.1 205.5,250 201.6,259.8 205.5,250 209.4,240.2 
                                    205.5,250 451.9,509.5 205.5,250 -40.9,-9.5 205.5,250 -54,496.4 205.5,250 465,3.6 205.5,250 231.2,324.6 205.5,250 179.8,175.4 
                                    205.5,250 130.9,275.7 205.5,250 280.1,224.3 205.5,250 516.9,369.7 205.5,250 -105.9,130.3 205.5,250 85.8,561.4 205.5,250 
                                    325.2,-61.4 	"/>
                                <radialGradient id="SVGID_1_" cx="205.5" cy="250" r="166.9012" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{stopColor:"#230000"}}/>
                                    <stop  offset="0.73" style={{stopColor:"#93432A"}}/>
                                    <stop  offset="1" style={{stopColor:"#230000"}}/>
                                </radialGradient>
                                <circle opacity="0.15" fill="url(#SVGID_1_)" cx="205.5" cy="250" r="166.9"/>
                                <radialGradient id="SVGID_2_" cx="205.5" cy="250" r="83.4506" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0.15" style={{stopColor:"#FFFFFF"}}/>
                                    <stop  offset="0.2114" style={{stopColor:"#E2D1D2"}}/>
                                    <stop  offset="0.2918" style={{stopColor:"#BF9A9C"}}/>
                                    <stop  offset="0.3613" style={{stopColor:"#A67276"}}/>
                                    <stop  offset="0.4163" style={{stopColor:"#975A5E"}}/>
                                    <stop  offset="0.45" style={{stopColor:"#915155"}}/>
                                    <stop  offset="0.5553" style={{stopColor:"#6C3638"}}/>
                                    <stop  offset="0.6842" style={{stopColor:"#44191A"}}/>
                                    <stop  offset="0.787" style={{stopColor:"#2C0707"}}/>
                                    <stop  offset="0.85" style={{stopColor:"#230000"}}/>
                                    <stop  offset="0.8572" style={{stopColor:"#270201"}}/>
                                    <stop  offset="0.8647" style={{stopColor:"#340805"}}/>
                                    <stop  offset="0.8723" style={{stopColor:"#48120B"}}/>
                                    <stop  offset="0.88" style={{stopColor:"#652114"}}/>
                                    <stop  offset="0.8878" style={{stopColor:"#8B331F"}}/>
                                    <stop  offset="0.8955" style={{stopColor:"#B8492D"}}/>
                                    <stop  offset="0.9" style={{stopColor:"#D65836"}}/>
                                    <stop  offset="0.903" style={{stopColor:"#C95232"}}/>
                                    <stop  offset="0.9146" style={{stopColor:"#9D3C25"}}/>
                                    <stop  offset="0.9267" style={{stopColor:"#782A1A"}}/>
                                    <stop  offset="0.9392" style={{stopColor:"#591B10"}}/>
                                    <stop  offset="0.9523" style={{stopColor:"#410F09"}}/>
                                    <stop  offset="0.9661" style={{stopColor:"#300604"}}/>
                                    <stop  offset="0.9812" style={{stopColor:"#260201"}}/>
                                    <stop  offset="1" style={{stopColor:"#230000"}}/>
                                </radialGradient>
                                <circle opacity="0.5" fill="url(#SVGID_2_)" cx="205.5" cy="250" r="83.5"/>
                                <radialGradient id="SVGID_3_" cx="205.5" cy="250" r="69.5421" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0.15" style={{stopColor:"#FFFFFF"}}/>
                                    <stop  offset="0.2824" style={{stopColor:"#C2C2C2"}}/>
                                    <stop  offset="0.4253" style={{stopColor:"#888888"}}/>
                                    <stop  offset="0.5636" style={{stopColor:"#575757"}}/>
                                    <stop  offset="0.6936" style={{stopColor:"#313131"}}/>
                                    <stop  offset="0.8134" style={{stopColor:"#161616"}}/>
                                    <stop  offset="0.9192" style={{stopColor:"#060606"}}/>
                                    <stop  offset="1" style={{stopColor:"#000000"}}/>
                                </radialGradient>
                                <circle fill="url(#SVGID_3_)" cx="205.5" cy="250" r="69.5"/>
                                <polyline opacity="3.000000e-02" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" points="205.5,250 
                                    238.3,548.4 205.5,250 172.7,-48.4 205.5,250 -92.9,282.8 205.5,250 503.9,217.2 205.5,250 378.3,566.7 205.5,250 32.7,-66.7 
                                    205.5,250 -111.2,422.8 205.5,250 522.2,77.2 205.5,250 444.4,493.4 205.5,250 -33.4,6.6 205.5,250 -37.9,488.9 205.5,250 
                                    448.9,11.1 205.5,250 265.3,574.1 205.5,250 145.7,-74.1 205.5,250 -118.6,309.8 205.5,250 529.6,190.2 205.5,250 420.3,463.7 
                                    205.5,250 -9.3,36.3 205.5,250 -8.2,464.8 205.5,250 419.2,35.2 205.5,250 211.6,434.5 205.5,250 199.4,65.5 205.5,250 21,256.1 
                                    205.5,250 390,243.9 205.5,250 230.2,626.9 205.5,250 180.8,-126.9 205.5,250 -171.4,274.7 205.5,250 582.4,225.3 205.5,250 
                                    258.2,308.2 205.5,250 152.8,191.8 205.5,250 147.3,302.7 205.5,250 263.7,197.3 205.5,250 256.8,317.9 205.5,250 154.2,182.1 
                                    205.5,250 137.6,301.3 205.5,250 273.4,198.7 205.5,250 543.4,469.7 205.5,250 -132.4,30.3 205.5,250 -14.2,587.9 205.5,250 
                                    425.2,-87.9 205.5,250 491.4,290.1 205.5,250 -80.4,209.9 205.5,250 165.4,535.9 205.5,250 245.6,-35.9 205.5,250 215.3,253.9 
                                    205.5,250 195.7,246.1 205.5,250 201.6,259.8 205.5,250 209.4,240.2 205.5,250 451.9,509.5 205.5,250 -40.9,-9.5 205.5,250 
                                    -54,496.4 205.5,250 465,3.6 205.5,250 231.2,324.6 205.5,250 179.8,175.4 205.5,250 130.9,275.7 205.5,250 280.1,224.3 205.5,250 
                                    516.9,369.7 205.5,250 -105.9,130.3 205.5,250 85.8,561.4 205.5,250 325.2,-61.4 	"/>
                            </g>
                            <g id="free-ticky-warped-text" transform="translate(0,-10)">
                                <g>
                                    <g className="glow-path">
                                        <path  fill="#FFFFFF" d="M163.9,227.4c0,4.1,0,6.1,0,10.2c4.9-1.3,7.4-1.8,12.4-2.7c0,1.6,0,2.4,0,4c-5,0.7-7.5,1.2-12.4,2.3
                                            c0,4.7,0,7.1,0,11.8c-1.4,0.1-2.1,0.2-3.5,0.3c0-11.2,0-16.8,0-28c6.8-3.1,10.3-4.3,17.4-6.2c0,1.6,0,2.4,0,4.1
                                            C172.2,224.5,169.4,225.4,163.9,227.4z"/>
                                        <path fill="#FFFFFF" d="M200.1,251.2c-2.2-4.3-3.3-6.5-5.6-10.7c-0.7,0.1-1.2,0.2-1.6,0.2c-2.5,0.1-3.8,0.2-6.3,0.4
                                            c0,4.2,0,6.3,0,10.4c-1.5,0.1-2.2,0.1-3.6,0.2c0-11.2,0-22.5,0-33.7c4-0.8,6-1.2,10-1.6c3.3-0.4,6,0.6,7.9,2.7
                                            c1.9,2.1,2.9,5.2,2.9,9c0,2.7-0.5,5.1-1.5,7c-1,1.9-2.4,3.4-4.2,4.3c2.4,4.7,3.7,7.1,6.1,11.8
                                            C202.6,251.1,201.8,251.1,200.1,251.2z M198.2,234c1.2-1.4,1.8-3.4,1.8-6c0-2.6-0.6-4.5-1.8-5.8c-1.2-1.3-3-1.8-5.3-1.6
                                            c-2.5,0.3-3.7,0.4-6.2,0.8c0,6.2,0,9.3,0,15.4c2.5-0.2,3.7-0.3,6.2-0.5C195.2,236.2,197,235.5,198.2,234z"/>
                                        <path fill="#FFFFFF" d="M228.3,247.5c0,1.7,0,2.5,0,4.2c-7.4-0.3-11.1-0.4-18.6-0.5c0-11.8,0-23.7,0-35.5
                                            c7.3,0.3,10.9,0.7,18.1,2.2c0,1.7,0,2.5,0,4.2c-5.7-1.1-8.6-1.4-14.4-1.8c0,4.3,0,6.5,0,10.9c5.2,0.2,7.8,0.5,12.9,1.1
                                            c0,1.7,0,2.5,0,4.1c-5.1-0.6-7.7-0.8-12.9-1c0,4.6,0,6.8,0,11.4C219.4,246.9,222.4,247.1,228.3,247.5z"/>
                                        <path fill="#FFFFFF" d="M252,250c0,1.4,0,2,0,3.4c-6.9-0.7-10.5-1-17.8-1.4c0-10.9,0-21.7,0-32.6c7.1,1.9,10.6,3.2,17.4,6.4
                                            c0,1.4,0,2.1,0,3.4c-5.4-2.3-8.2-3.2-13.8-4.8c0,3.9,0,5.9,0,9.8c5,1,7.5,1.6,12.3,3.1c0,1.4,0,2,0,3.4
                                            c-4.8-1.2-7.3-1.8-12.3-2.6c0,4.1,0,6.2,0,10.3C243.6,248.8,246.4,249.2,252,250z"/>
                                    </g>
                                    <g className="glow-path">
                                        <path fill="#FFFFFF" d="M161.1,272c-3.3-0.5-4.9-0.7-8.1-1.2c0-1.2,0-1.9,0-3.1c7.7,0.9,11.8,1.2,20,1.8c0,1.6,0,2.4,0,3.9
                                            c-3.4-0.3-5.1-0.5-8.5-0.9c0,10.3,0,15.4,0,25.7c-1.4-0.6-2.1-0.8-3.4-1.4C161.1,286.8,161.1,281.9,161.1,272z"/>
                                        <path fill="#FFFFFF" d="M176.9,269.7c1.4,0.1,2.2,0.1,3.6,0.2c0,11.1,0,22.2,0,33.3c-1.4-0.3-2.2-0.5-3.6-0.9
                                            C176.9,291.4,176.9,280.5,176.9,269.7z"/>
                                        <path fill="#FFFFFF" d="M192.7,303.4c-2.1-1.8-3.7-4.1-4.9-6.9c-1.2-2.8-1.8-5.9-1.8-9.2c0-3.3,0.6-6.2,1.8-8.8
                                            c1.2-2.6,2.8-4.6,4.9-6.1c2.1-1.5,4.4-2.2,7-2.2c2,0,3.9,0.5,5.5,1.4c1.7,0.9,3.1,2.3,4.3,4.1c-1,1.3-1.4,1.9-2.4,3.2
                                            c-1.9-2.8-4.4-4.2-7.3-4.3c-1.9,0-3.6,0.5-5.2,1.6c-1.5,1.1-2.8,2.7-3.6,4.7c-0.9,2-1.3,4.2-1.3,6.7c0,2.5,0.4,4.8,1.3,6.9
                                            c0.9,2.1,2.1,3.9,3.6,5.2c1.5,1.3,3.3,2,5.2,2.1c2.9,0.1,5.3-1.3,7.3-4.1c1,1.3,1.4,1.9,2.4,3.1c-1.2,1.9-2.6,3.3-4.3,4.2
                                            c-1.7,0.9-3.5,1.4-5.6,1.3C197.1,306.1,194.8,305.1,192.7,303.4z"/>
                                        <path fill="#FFFFFF" d="M223.2,289.3c-1.9,2.8-2.8,4.1-4.7,6.9c0,3.6,0,5.4,0,9c-1.5,0.2-2.2,0.2-3.7,0.4c0-11.8,0-23.5,0-35.3
                                            c1.5,0,2.2,0,3.7-0.1c0,7.8,0,11.7,0,19.5c5.6-8.2,8.4-12.4,13.8-20.1c1.6-0.1,2.5-0.1,4.1-0.2c-4.3,6-6.4,9.3-10.8,15.9
                                            c4.6,7,6.9,10.3,11.5,16c-1.7,0.5-2.5,0.7-4.2,1.2C229,297.7,227.1,295,223.2,289.3z"/>
                                        <path fill="#FFFFFF" d="M248.5,287.4c0,4,0,5.9,0,9.9c-1.4,0.6-2.1,0.9-3.4,1.4c0-4.1,0-6.2,0-10.4c-3.9-6.7-5.9-10.5-9.8-18.7
                                            c1.5-0.1,2.3-0.1,3.8-0.2c3.2,6.4,4.8,9.4,7.9,14.8c3.1-6.9,4.7-10.2,7.7-16.1c1.3-0.1,2-0.2,3.3-0.4
                                            C254.3,274.6,252.4,278.7,248.5,287.4z"/>
                                    </g>
                                </g>
                            </g>
                            </svg>
                        </Link>
                        :
                        <div style={{color:'white'}}>DIS TICKY HATH BIN TAKEN</div>
                    }
                    
                    </div>
                </div>
                )
            }}
        </ViewListing>
        );
    }
}
