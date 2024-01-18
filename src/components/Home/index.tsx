import React, {FC, useState} from 'react';
import {useAppDispatch} from "../../hooks";
import {logoutAction, } from "../../reducers/auth";
import {IUser} from "../../models/IUser";
import UserService from "../../services/UserService";

interface HomeProps {
  user: IUser
}

const Home: FC<HomeProps> = ({user}) => {
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      {`Привет ${user.email}`}
      {
        users.map(user => (<div key={user.id}>{user.email}</div>))
      }
      <button onClick={() => dispatch(logoutAction())}>Выйти</button>
      <button onClick={() => getUsers()}>Показать пользователей</button>
    </div>
  );
};

export default Home;
