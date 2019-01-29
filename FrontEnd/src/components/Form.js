import React, {Component} from 'react'
import ListButton from './ListButton'
class Form extends Component {
    state = {
        src: ""
    };

    youtube_parser = (url) => {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length === 11)
            ? match[7]
            : false;
    }

    _getLinkButton = text => this.setState({src: text})
    _getLinkButton = text => this.setState({src: text})
    render() {
        //default link if cant get songs
        const links = (this.props.song.length == 0)
        ? [
            {
                name: "rain",
                link: "https://www.youtube.com/watch?v=lasWefVUCsI"
            }
        ]: this.props.song

        let defaultLink;

        if (this.props.song.length == 0) {
            defaultLink = "https://www.youtube.com/watch?v=lasWefVUCsI";
        } else if (this.state.src == '') {
            defaultLink = this.props.song[0].link;
        } else {
            defaultLink = this.state.src;
        }

        let url = `https://www.youtube.com/embed/${this.youtube_parser(defaultLink)}?autoplay=1`
        return (
            <div style={{
                textAlign: "center"
            }}>
                <div class="video-responsive" >
                    <iframe title="This is a unique title" width="420" height="345" frameBorder="0" src={url}></iframe>
                </div>
                <ListButton links={links} getLinkButton ={this._getLinkButton}/>
            </div>
        )
    }
}

export default Form;