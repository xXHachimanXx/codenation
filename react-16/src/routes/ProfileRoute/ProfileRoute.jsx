import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

import { BASE_LINK } from "../../utils/constants.js";
import { useParams } from 'react-router-dom';

const ProfileRoute = () => {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [userNameState, setUserNameState] = useState('');
  const [userNick, setUserNick] = useState('');

  const [posts, setPosts] = useState([]);
  const {userName} = useParams();  

  const { pathname } = window.location;
  const param = pathname.split("/")[2];

  useEffect( () => {
    fetch(BASE_LINK + `users?search=${param}`)
      .then(res => res.json())
      .then(data => {
        setUser(data[0]);
        setUserAvatar(data[0].avatar);
        setUserNameState(data[0].name);
        setUserNick(data[0].username);
        setUserId(data[0].id);
      })

    console.log(userName);
  }, [userName]);

  useEffect( () => {
    fetch(BASE_LINK + `users/${userId}/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))    
  }, [user]);

  return (
    <div data-testid="profile-route">
      {        
        user ? (          
          <>
          <UserProfile
            avatar={userAvatar}
            name={userNameState}
            username={userNick}
          />          
          <UserPosts posts={posts} />
          </>
        ) : (<Loading />)
      }
    </div>
  );
};

export default ProfileRoute;
