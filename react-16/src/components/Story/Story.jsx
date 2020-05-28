import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {

  const [metadata, setMetadata] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const updateProgress = useCallback(() => {
    if (metadata?.duration !== null && currentTime !== null) {
      const elapsedTime = ((currentTime / metadata.duration) * 100);
      return `${elapsedTime.toFixed(3)}%`;
    }
    return '0%';
  }, [currentTime, metadata]);

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link className="user__thumb">
              <img src={user.avatar} alt={user.name} />
            </Link>

            <Link className="user__name">{user.name}</Link>
          </div>

          <button className="story__close" onClick={() => handleClose()}>
            <i class="fas fa-times" />
          </button>
        </header>

        <div className="story__progress">
          <div className="story__progress__elapsed" style={{ width: updateProgress() }}></div>
        </div>

        {story.videoUrl &&
          <div className="container">
            <div className="story__video__wrapper">
              <video
                className="video-player"
                src={story.videoUrl}
                autoPlay
                loop
                playsInline
                onTimeUpdate={event => setCurrentTime(event.target.currentTime)}
                onLoadedMetadata={event => {
                  setMetadata({
                    videoHeight: event.target.videoHeight,
                    videoWidth: event.target.videoWidth,
                    duration: event.target.duration
                  });
                }}
              />
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default Story;
