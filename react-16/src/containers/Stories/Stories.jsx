import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {
            stories.map((story, index) => {
              const user = getUserHandler(story.userId); // <--
              // onClick={handleStories(story)}
              return (
                <button
                  key={story.id}
                  className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
                >
                  <div className="user__thumb__wrapper">
                    {user && <img src={user.avatar} alt={user.name} />}
                  </div>
                </button>
              );
            })
          }
        </div>
      </section>

      {
        //showStory && (<Story story={selectedStory} user={selectedProfile} handleClose={() => toggleShowStory(!showStory)} />)
      }
    </React.Fragment>
  );
};

export default Stories;
