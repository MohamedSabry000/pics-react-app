import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
  import { ExternalLink } from 'react-external-link';
class Image extends React.Component{

    state = {
        imageRef: React.createRef(),
        spans: 0,
        urls: this.props.image.urls, 
        alt_description: this.props.image.alt_description, 
        description: this.props.image.description, 
        likes: this.props.image.likes, 
        tags: this.props.image.tags, 
        links: this.props.image.links
    }

    componentDidMount = () => {
        this.state.imageRef.current.addEventListener('load', this.setSpans);
    }
    componentDidUpdate = () => {
        this.state.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
            const height = this.state.imageRef.current.clientHeight;

            const spans = Math.ceil(height/2)+2;

            this.setState({spans});
            this.props.spans(spans);
    }

    render(){
        
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>

                <figure className="fig column">
                    <img ref={this.state.imageRef} variant="top" src={this.state.urls.regular} alt={this.state.alt_description} />

                    <div className="row">
                        <div className="thumbs-rating-container" id="thumbs-rating-344" data-content-id="344">
                            <div className="circle-nr">{this.state.likes}</div>
                            <div className="circle-like">
                                <ExternalLink href={this.state.links.download}>

                                    <span className="thumbs-rating-up thumbs-rating-voted" >
                                        <i className="bi bi-cloud-download-fill"></i>
                                    </span>
                                </ExternalLink>

                            </div> 
                            <div className="circle-nr" style={{margin: "-2px 23px"}}>
                                <ExternalLink href={this.state.links.html}>

                                    <span className="thumbs-rating-up thumbs-rating-voted" >
                                        <i className="bi bi-box-arrow-right" style={{color:"white"}}></i>
                                    </span>
                                </ExternalLink>

                            </div> 
                        </div>                       
                    </div>
                    
            </figure>
            </div>
        )
    }
}

export default Image;