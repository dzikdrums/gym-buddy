import React, { useEffect, useState } from 'react';
import UsersList from '../components/organisms/UsersList/UsersList';
import Segment from '../components/atoms/Segment/Segment';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const { id } = useParams();
  const [users, setUsers] = useState();
  const [groups, setGroups] = useState();

  useEffect(() => {
    axios.get('/groups').then(({ data }) => {
      setGroups(data.groups);
    });
  }, []);

  useEffect(() => {
    if (groups) {
      axios.get(`/students/${id || groups[0]}`).then(({ data }) => {
        setUsers(data.students);
      });
    }
  }, [id, groups]);

  console.log(groups);

  return (
    <>
      <nav>
        <p>Groups:</p>
        {groups &&
          groups.map((group) => (
            <NavLink key={group} to={`/group/${group}`}>
              {group}
            </NavLink>
          ))}
      </nav>
      <Segment>{users && <UsersList users={users} />}</Segment>
    </>
  );
};

export default Dashboard;
