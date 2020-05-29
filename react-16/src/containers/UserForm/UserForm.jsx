import React, { useState } from 'react';
import UserProfile from "../UserProfile/UserProfile";

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  return (
    <React.Fragment>
      <form data-testid="user-form">
        <UserProfile />

        <div className="container">
          
        </div>
      </form>
    </React.Fragment>
  );
};

export default UserForm;
