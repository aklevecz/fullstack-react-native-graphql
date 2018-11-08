import * as React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../animations/data.json';
console.log(animationData);

export class Home extends React.Component {

    render() {
        const defaultOptions = {
            loop:true,
            autoplay: true,
            animationData
        };

        return (
            <div style={{marginTop:"2%"}}>
            <Lottie height={"20%"} width={"20%"} options={defaultOptions}
              isPaused={false}/>
            <svg viewBox="0 0 411 691" style={{marginTop:"10px"}}>
                <rect id="BG_1_" y="1.3" fill="#1A1A1A" width="411" height="689"/>
                <rect x="64.8" y="23.2" fill="none" stroke="#FFFFFF" strokeMiterlimit="10" width="152.3" height="152.3"/>
                <text transform="matrix(1 0 0 1 74.7642 40.3312)"><tspan x="0" y="0" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Hello Friend!</tspan><tspan x="0" y="12" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Do you have a ticky you </tspan><tspan x="0" y="24" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">don’t need? Do you enjoy </tspan><tspan x="0" y="36" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">being a generous being? </tspan><tspan x="0" y="48" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Well oh boy! You are in </tspan><tspan x="0" y="60" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">the right place! Löst Mini </tspan><tspan x="0" y="72" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Ticky is here to make your </tspan><tspan x="0" y="84" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">altruistic intentions </tspan><tspan x="0" y="96" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">seamless, fun, &amp; whatever </tspan><tspan x="0" y="108" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">else we can come up with </tspan><tspan x="0" y="120" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">as heartfelt musicteers :D </tspan></text>
                <polygon fill="none" stroke="#FFFFFF" strokeMiterlimit="10" points="369.4,380.5 217.1,327.9 217.1,175.6 369.4,228.2 "/>
                <text transform="matrix(1 0 0 1 227.0981 208.7008)"><tspan x="0" y="0" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">How </tspan><tspan x="0" y="12" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">does it work? </tspan><tspan x="0" y="24" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Create a listing </tspan><tspan x="0" y="36" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">using the + icon on the </tspan><tspan x="0" y="48" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">left. You will be asked to </tspan><tspan x="0" y="60" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">input the artist, venue, </tspan><tspan x="0" y="72" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">date, &amp; then upload your </tspan><tspan x="0" y="84" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">ticky to the cloud. Other </tspan><tspan x="0" y="96" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">cuties in search of tickies </tspan><tspan x="0" y="108" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">can then view your listing </tspan><tspan x="22.9" y="120" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">&amp; grab your ticky!</tspan><tspan x="57.6" y="132" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Wow COOL! </tspan></text>
                <rect x="64.8" y="328.5" fill="none" stroke="#FFFFFF" strokeMiterlimit="10" width="152.3" height="152.3"/>
                <text transform="matrix(1 0 0 1 74.7642 345.5973)"><tspan x="0" y="0" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Why the heck? Because </tspan><tspan x="0" y="12" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">fuck Stubhub, fuck Tick</tspan><tspan x="118.8" y="12" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">-</tspan><tspan x="0" y="24" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">etmaster, fuck the </tspan><tspan x="0" y="36" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">secondary market in </tspan><tspan x="0" y="48" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">general. You get back </tspan><tspan x="0" y="60" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">what you put into the </tspan><tspan x="0" y="72" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">world, &amp; the easier we </tspan><tspan x="0" y="84" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">make such gestures, the </tspan><tspan x="0" y="96" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">better we will all be for it. </tspan><tspan x="0" y="108" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">All of the source code for </tspan><tspan x="0" y="120" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">this app can be found <a href="https://github.com/traysiMay/fullstack-react-native-graphql">here</a></tspan></text>
                <g id="heart">
                    <path id="path2417" fill="#FFFFFF" d="M297.3,136.2c-2-2.2-6.9-6.6-11-9.6c-12.1-9.1-13.7-10.4-18.6-14.9c-9-8.3-12.9-16.7-12.9-28
                        c0-5.5,0.4-7.7,1.9-10.9c2.6-5.5,6.5-9.6,11.4-12.2c3.5-1.8,5.2-2.6,11.1-2.6c6.1,0,7.4,0.7,11,2.7c4.4,2.4,8.9,7.6,9.8,11.2
                        l0.6,2.3l1.4-3.1c8-17.6,33.7-17.3,42.6,0.4c2.8,5.6,3.1,17.7,0.6,24.4c-3.3,8.8-9.4,15.6-23.6,25.9c-9.3,6.8-19.9,17-20.6,18.4
                        C300.3,141.8,301.1,140.4,297.3,136.2z"/>    
                </g>
                <g id="eatshitanddie">
                    <line fill="none" stroke="#FFFFFF" strokeWidth="6" strokeMiterlimit="10" x1="94.8" y1="217.9" x2="119.4" y2="235.4"/>
                    <line fill="none" stroke="#FFFFFF" strokeWidth="6" strokeMiterlimit="10" x1="115.8" y1="214.3" x2="98.3" y2="238.9"/>
                    <line fill="none" stroke="#FFFFFF" strokeWidth="6" strokeMiterlimit="10" x1="166.4" y1="216.6" x2="136.6" y2="221.7"/>
                    <path fill="none" stroke="#FFFFFF" strokeWidth="6" strokeMiterlimit="10" d="M102.8,258.5c0,0,43.3,47.7,65.8-12.1"/>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M108.5,263.6c-7.2,6.8-12.2,25.8-2.5,32.6c4.9,3.5,11.8,2,16.4-1.5c6.1-4.6,8-12.1,8.9-19.3
                                c0.4-3.2-4.6-3.1-5,0c-0.7,5.2-2,10.9-6,14.6c-3.6,3.3-10.6,5-13.2-0.3c-3.2-6.6,0-17.8,5.1-22.6
                                C114.4,264.9,110.9,261.4,108.5,263.6L108.5,263.6z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M117.4,269.9c-3.2,2.8-5.5,6-6.1,10.3c-0.2,1.3,1.3,2.5,2.5,2.5c1.5,0,2.3-1.2,2.5-2.5
                                c0.4-2.8,2.6-5,4.6-6.7C123.4,271.3,119.8,267.8,117.4,269.9L117.4,269.9z"/>
                        </g>
                    </g>
                </g>
                <g id="fist">
                    <polygon fill="#FFFFFF" points="274.1,480.8 274.1,474.9 278,448.1 253.2,412.8 271.2,383.9 298.2,395.5 296.8,402.3 285.4,406.9 
                        275.7,399.2 272.4,408.9 284.9,414 301.9,440.2 294.5,446.4 299.9,446.7 301.9,472 301.9,449 307.9,446.7 303.9,442.4 298,428.2 
                        288.3,416.3 305.9,420.3 314.7,427.9 327,418.3 327,428.8 321.6,443 315.3,451.8 314.5,480.8 	"/>
                    <polygon fill="#FFFFFF" points="275.2,383.9 284.6,368.9 296.8,375 288.6,388.9 	"/>
                    <polygon fill="#FFFFFF" points="298.8,377 311.9,385 299.9,402.3 298.8,394.1 290.1,389.6 	"/>
                    <polygon fill="#FFFFFF" points="311.9,388.9 323,396.7 307.3,419.1 295.4,412.8 	"/>
                    <polygon fill="#FFFFFF" points="325,400.8 333.4,408.9 314.7,425.4 309.2,420.3 	"/>
                </g>
                <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="64.8" y1="513.7" x2="369.4" y2="513.7"/>
                <rect x="64.4" y="526.3" fill="none" width="306" height="131.3"/>
                <text transform="matrix(1 0 0 1 181.6909 533.3659)"><tspan x="0" y="0" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Want to help?</tspan><tspan x="-9.4" y="12" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Have other ideas?</tspan><tspan x="-29.3" y="24" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Have a burning question?</tspan><tspan x="-13" y="36" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Want to get lunch?</tspan><tspan x="-19.3" y="48" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Want to share music?</tspan><tspan x="-18" y="60" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">Have some criticism?</tspan><tspan x="-59.7" y="72" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">::Well then feel free to drop me a line::</tspan><tspan x="-25.5" y="96" fill="#FFFFFF" fontFamily="'Montserrat'" fontWeight="500" fontSize="9.5653px">arielklevecz@gmail.com</tspan></text>
                </svg>
                </div>
        );
    }
}

