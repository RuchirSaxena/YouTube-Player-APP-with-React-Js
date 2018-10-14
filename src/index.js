import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from "./components/video_detail";


const API_KEY = 'AIzaSyCJK-aGH0IYfcokFc53vjeKq8MDOBQzkUY';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            seletedVideo: null
        };
        YTSearch({ key: API_KEY, term: 'react js' }, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                seletedVideo: videos[0]
            });
        });

    }

    onVideoSelect(selectedVideo) {
        this.setState(() => {
            return {
                seletedVideo: selectedVideo
            };
        });
    }
    render() {
        return (
            <React.Fragment>
                <SearchBar />
                <VideoDetail video={this.state.seletedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect.bind(this)} videos={this.state.videos} />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />,
    document.querySelector('.container')
);

