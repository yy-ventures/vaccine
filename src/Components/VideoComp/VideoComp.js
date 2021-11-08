import React from 'react';
import "./VideoComp.scss";
import YouTube from 'react-youtube';

const VideoComp = () => {
    const optsMob = {
        height: "360",
        width: "100%"
    }
    const optsDesk = {
        height: "720",
        width: "100%"
    }
    return (
        <section className="video-section">
            <div className="laureate-video">
                <div className="video-main desk">
                    <YouTube videoId="LqPRpqqM-PI" opts={optsDesk} />
                </div>
                <div className="video-main mobile">
                    <YouTube videoId="LqPRpqqM-PI" opts={optsMob} />
                </div>
            </div>
            <div className="corner-blue-circle"></div>
        </section>
    );
};

export default VideoComp;