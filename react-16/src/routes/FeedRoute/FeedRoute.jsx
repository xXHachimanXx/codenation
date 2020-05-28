import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const BASE_LINK = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/";
const GET_STORIES_LINK = BASE_LINK + "stories/";
const GET_USERS_LINK = BASE_LINK + "users/";

const FeedRoute = () => {

  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  // Get Stories
  useEffect(() => {
    fetch(GET_STORIES_LINK)
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, [users]);

  // Get users
  useEffect(() => {
    fetch(GET_USERS_LINK)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // GET USERS FETCHED
  useEffect(() => {
    if (usersFetched !== users.length) {
      fetch(GET_USERS_LINK + `${users[usersFetched].id}/posts`)
        .then((res) => res.json())
        .then(data => {
          setPosts([...posts, ...data]);
          setUsersFetched(usersFetched + 1);
        });
    }
  }, [users, usersFetched]);

  const getUserById = (userId) => users.find(user => user.id === userId);
  const getUserPostById = (postId) => getUserById(postId);

  return (
    <div data-testid="feed-route">
      {(stories.length > 0 && users.length > 0) &&
        (
          <Stories
            stories={stories}
            getUserHandler={getUserById}
          />
        )
      }

      {users.length !== usersFetched ?
        (<Loading />) :
        (<Posts
          posts={posts}
          getUserHandler={getUserPostById}
        />)
      }
    </div>
  );
};

export default FeedRoute;
//<Posts />
/*


*/
