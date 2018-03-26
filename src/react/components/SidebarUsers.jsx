import React from 'react';
import './SidebarUsers.css';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

export default ({ users }) => (
  <div>
    {console.log('acaaaaaa', users)}
    {users.map((user, index) => (
      <Badge className={user.card ? 'backgroundGreen' : 'nothing'} key={index}>
        {user.name}
      </Badge>
    ))}
  </div>
);