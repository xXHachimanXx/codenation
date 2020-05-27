import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const BASE_LINK = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/";
const GET_STORIES_LINK = BASE_LINK + "stories";
const GET_USERS_LINK = BASE_LINK + "users";
const GET_POSTS_LINK = BASE_LINK + "posts";

const FeedRoute = () => {

  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const [users, setUsers] = useState([]);

  // Get Stories
  useEffect(() => {
    fetch(GET_STORIES_LINK)
      .then((res) => res.json())
      .then((data) => setStories(data));
  });

  // Get users
  useEffect(() => {
    fetch(GET_USERS_LINK)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [])

  const getUserById = (userId) => users.find(user => user.id === userId);

  return (
    <div data-testid="feed-route">
      {(
        <Stories
          stories={stories}
          getUserHandler={getUserById}
        />
      )}


    </div>
  );
};

export default FeedRoute;
//<Posts />
/*

      {users.length !== usersFetched?
      (<Loading />) :
      (<Posts
            posts={posts}
            getUserHandler={getUserPostById}
      />)
      }
*/
