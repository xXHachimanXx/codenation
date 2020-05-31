import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

import { GET_STORIES_LINK, GET_USERS_LINK} from "../../utils/constants";

const FeedRoute = () => {

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
  }, [users, usersFetched, posts]);

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
