import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {
            stories.length > 0 &&
            stories.map((story, index) => {
              const user = getUserHandler(story.userId); // <--
              // onClick={handleStories(story)}
              return (
                <button
                  key={story.id}
                  className={index === 0 ? "user__thumb user__thumb--hasNew" : "user__thumb"}
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
