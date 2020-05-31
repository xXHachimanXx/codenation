import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {

  const [showStory, setShowStory] = useState(false);
  const [selectedStory, setSelectedStory] = useState({})
  const [selectedProfile, setSelectedProfile] = useState({});

  const handleStories = (story) => {
    const user = getUserHandler(story.userId);
    setSelectedStory(story);
    setSelectedProfile(user);
    setShowStory(!showStory);
  }

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {
            stories.map((story, index) => {
              const user = getUserHandler(story.userId); // <--

              return (
                user &&
                <button
                  key={story.id}
                  className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
                  onClick={() => handleStories(story)}
                >
                  <div className="user__thumb__wrapper">
                    {<img src={user.avatar} alt={user.name} />}
                  </div>
                </button>
              );
            })
          }
        </div>
      </section>

      {
        showStory &&
        (<Story
          story={selectedStory}
          user={selectedProfile}
          handleClose={() => setShowStory(!showStory)}
        />)
      }
    </React.Fragment>
  );
};

export default Stories;
