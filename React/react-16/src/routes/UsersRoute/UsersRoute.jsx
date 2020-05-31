import React, { useState, useEffect } from 'react';

import { GET_USERS_LINK } from "../../utils/constants";

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(GET_USERS_LINK)
      .then((res) => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
