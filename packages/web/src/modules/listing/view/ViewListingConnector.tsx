import * as React from 'react';
import { ViewListing } from '@abb/controller';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { dateArray } from '../../../constants';
import * as Modal from 'react-modal';
import Lottie from 'react-lottie';
import * as tickyAnimation from '../../../animations/freeTicky2.json';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '70%',
      maxWidth              : '350px'
    }
  };

interface State {
    modalIsOpen: boolean;
    input: string | null;
    artist: string;
    venue: string;
}

export class ViewListingConnector extends React.PureComponent<
    RouteComponentProps<{
        listingId: string}>, State
    > {
    private copyText: React.RefObject<HTMLSpanElement>;

    constructor(props: any){
        super(props);
        this.copyText = React.createRef();
        this.state = {
            modalIsOpen: false,
            input:null,
            artist: "",
            venue: "",
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(input:string, artist:string, venue:string) {
        if (input === 'copy') {
            this.CopyToClipboard(artist, venue);
        }
        this.setState({modalIsOpen: true, input, artist, venue }); 
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
       
    }

    closeModal(e:any) {
        e.preventDefault();
        this.setState({modalIsOpen: false});
        if (e.target.id==="confirm"){
            this.props.history.push(`/listing/${this.props.match.params.listingId}/grab`);
        }
    }


    CopyToClipboard = (artist:string, venue:string) => {
        console.log(this.props.match.params.listingId);
        const url = `https://be.lostminiticky.com/ssr/?artist=${artist}&venue=${venue}&id=${this.props.match.params.listingId}`.replace(/ /g, '%20');
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

    handleFocus = (e:any) => {
        e.target.select();
    }

    render() {
        const {
            match: {
                params: {listingId}
            }
        } = this.props;
        const desk = window.innerWidth > 600;

        const tickyOptions = {
            loop:true,
            autoplay: true,
            animationData: tickyAnimation
        };

    return(
        <div>
        <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        >
        <div>
            {this.state.input === 'ticky' &&
            <div>
            <div style={{textAlign:"center",fontWeight:"bold",fontSize:'2em'}}>Are you sure you want to grab this ticky?</div> 
            <div id="confirm-cancel-container">
                <button id="cancel" onClick={this.closeModal}>oH NOPE!</button>
                <button id="confirm" onClick={this.closeModal}>YEP!</button>   
            </div>
            </div>}
            {this.state.input === 'copy' &&
            <div style={{display:"block"}}>
            <div style={{textAlign:"center",fontWeight:"bold",fontSize:'2em'}}>this link has been copied to your clippyboard :)</div> 
                <div id="confirm-cancel-container" >
                    <input onFocus={this.handleFocus} style={{margin:"0 auto", width:"100%",color:"black", borderBottom:"2px black solid",outline:"none",backgroundColor:"white"}} defaultValue={`https://be.lostminiticky.com/ssr/?artist=${this.state.artist}&venue=${this.state.venue}&id=${listingId}`.replace(/ /g, '%20')}/>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button id="cancel" onClick={this.closeModal}>close</button>
                </div>
            </div>}
          </div>      
        </Modal>
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
                <div style={{cursor:"pointer"}} id="copyIcon" onClick={()=>{this.openModal('copy', data.listing!.artist, data.listing!.venue)}}>
                    <svg viewBox={`0 0 ${desk ? 411 : 120} 31`}>
                        <rect x="4.5" y="4.4" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" width="13.6" height="20.3"/>
                        <rect x="8" y="8.5" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" width="13.6" height="20.3"/>
                    </svg>
                    <span ref={this.copyText} id="copyText">COPIED</span>
                </div>    
                <div id="viewlisting-footer">
                    {avail.length > 0 
                        ? 
                        // <Link to={`/listing/${listingId}/grab`}>
                        <div style={{cursor:"pointer"}} id="ticky" onClick={()=>{this.openModal('ticky', 'null', 'null')}}>
                            <Lottie options={tickyOptions}/>
                        </div>
                        // </Link>
                        :
                        <div style={{color:'white'}}>DIS TICKY HATH BIN TAKEN</div>
                    }
                    
                    </div>
                </div>
                )
            }}
        </ViewListing>
        </div>
        );
    }
}
