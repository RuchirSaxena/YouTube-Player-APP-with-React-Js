import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

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
        this.onVideoSearch('react js');
    }

    onVideoSearch = (searchTerm) => {
       // debugger;
        YTSearch({ key: API_KEY, term: searchTerm }, (videos) => {
            console.log(videos);
            this.setState(() => {
                return {
                    videos: videos,
                    seletedVideo: videos[0]
                }
            });
        });
    }

    onVideoSelect = (selectedVideo) => {
        this.setState(() => {
            return {
                seletedVideo: selectedVideo
            };
        });
    }
    render() {
        const videoSerarch = _.debounce((searchTerm) => {
            debugger;
            this.onVideoSearch(searchTerm)
        },1000);
        return (
            <React.Fragment>
                <SearchBar onVideoSearch={videoSerarch} />
                <VideoDetail video={this.state.seletedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />,
    document.querySelector('.container')
);

