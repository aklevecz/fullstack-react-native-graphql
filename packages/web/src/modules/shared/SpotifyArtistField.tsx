import * as React from 'react';
import { FieldProps } from "formik";
import SpotifyWebApi from 'spotify-web-api-js';
import * as Modal from 'react-modal';
import './spotifySearch.css';

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
    artistName: string;
    spotifyId: string;
    spotify: any;
    accessToken: string;
    results: string[];
    modalIsOpen: boolean;
    header: string;
    headerColor: string;
  }

interface Props {
    nextPage: () => void;
}

export class SpotifyArtistField extends React.PureComponent<FieldProps<any> & Props, State>{
    constructor(props:any){
        super(props);
        this.state = {
            artistName : "",
            spotifyId:"",
            spotify : new SpotifyWebApi(),
            accessToken: (this.props as any).accessToken,
            results:[],
            modalIsOpen: false,
            header:"Search for your artist, they must be on Spotify.",
            headerColor:"white",
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true}); 
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
       
    }

    closeModal(e:any) {
        e.preventDefault();
        this.setState({modalIsOpen: false});
        if (e.target.id==="confirm"){
            this.props.form.setFieldValue('artist', this.state.artistName);
            this.props.form.setFieldValue('spotifyId', this.state.spotifyId);
            this.props.nextPage();
        }
    }

    onKeyPress = (e:any) => {
        if (e.key==="Enter"){
            this.search();
        }
    }
    onChange = (e:any) => {
        console.log(e.keyCode);
        this.setState({artistName:e.target.value});    
    }

    handleClick = (e:any) => {
        const {id, innerText} = e.currentTarget;
        console.log(id, innerText);
        this.setState({artistName:innerText.replace(/\n/ig, ''),spotifyId:id});
        this.openModal();
    }

    search = () =>{
        this.state.spotify.setAccessToken(this.state.accessToken);
        this.state.spotify.searchArtists(this.state.artistName)
        .then((datad:any) => {
            console.log(datad.artists.items);
            if (datad.artists.items.length===0){
                this.setState({header:"Sorry, but this had no results-- please try again.",
                headerColor:"white"});
            } else {
                this.setState({header:"Click on the artist you are giving up a ticket for",
                headerColor:"white"});
            };
            this.setState({results:datad.artists.items});
        },(err:any) => {
            this.setState({header:"There was an error, please refresh the page",
                            headerColor:"red"});
        });
    }

    render(){
        return (
        <div>
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
                style={customStyles}
        >
        <div>
            <div style={{textAlign:"center",fontWeight:"bold",fontSize:'2em'}}>{this.state.artistName}?</div> 
            <div id="confirm-cancel-container">
                <button id="cancel" onClick={this.closeModal}>CANCEL</button>
                <button id="confirm" onClick={this.closeModal}>CONFIRM</button>   
            </div>
          </div>      
        </Modal>
            <h1 style={{color:`${this.state.headerColor}`}}>{this.state.header}</h1>
            <div style={{display:'flex',justifyContent:"flex-around"}}>
            <input style={{margin:"10px",
                            color:"white",
                            border:"2px white solid",
                            }}
                   onKeyPress={this.onKeyPress}
                   onChange={this.onChange}/>
                <button style={{width:"32%",color:"white",marginTop:"10px",
                            height:"39px",border:"2px white solid"}} type="button" onClick={this.search}>
                    SEARCH
                </button>
          </div>
          {this.state.results.map((a:any,i:any)=>{
              console.log(a);
              let artistName = a.name.substring(0,24)
              if (artistName.length===24){
                  artistName += "...";
              }
              return (
                    <div onClick={this.handleClick} className="artist-search" key={a.id} id={a.id}>
                        <img className="artist-image" src={a.images.length!==0 ? a.images[a.images.length-1].url : "http://jp.popapostle.com/images/episodes/JP/amino-acid-sequences.JPG"}/>
                        <div className="artist-name">{artistName}</div>
                    </div>);
          })}
          </div>
        )
    }
}
