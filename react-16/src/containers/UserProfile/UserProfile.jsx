import React from 'react';

import { DEFAULT_USER} from "../../utils/constants";

import './UserProfile.scss';

const UserProfile = ({ avatar=DEFAULT_USER.avatar, name=DEFAULT_USER.name, username=DEFAULT_USER.username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="profile-data">
        <div className="user">
          <figure className="user__thumb">
            <img src={avatar} alt={name} />
          </figure>

          <p className="user__name">
            {name}
            {username && <span>@{username}</span>}
          </p>

        </div>
      </div>
    </section>
  )
};

export default UserProfile;
