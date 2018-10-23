import React from 'react';

const VideoListItem = ({ video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <React.Fragment>
            <li onClick={() => onVideoSelect(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-heading" src={imageUrl} alt="" />
                    </div>

                    <div className="media-body">
                        <div className="media-heading">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
};

export default VideoListItem;