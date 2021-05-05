import React from "react";
import ReactPlayer from "react-player";
const ResponsivePlayer = () => {
    return (
        <div className="player-wrapper">
            <ReactPlayer
                className="react-player"
                width="70%"
                height="450px"
                controls={true}
                url="video/video.mp4"
            />
        </div>
    );
};

export default ResponsivePlayer;
