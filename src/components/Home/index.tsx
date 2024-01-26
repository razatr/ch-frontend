import {FC, useState, ChangeEvent} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {logoutAction, updateUser} from "../../reducers/auth";
import {IUser, UserInfo} from "../../models/IUser";
import { userSelector } from '../../selectors/auth';

interface HomeProps {
  
}

const userInfoFromUser = (user: IUser): UserInfo => ({
  name: user.name,
  surname: user.surname,
  lastActive: user.lastActive,
  birthday: user.birthday,
  weight: user.weight,
  height: user.height,
  avatar: user.avatar,
})

const Home: FC<HomeProps> = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const [updatedUser, setUpdatedUser] = useState<UserInfo>(userInfoFromUser(user));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedUser({
      ...updatedUser,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      {`Привет ${user.name}`}
      <div>
        <input name="name" type="text" value={updatedUser?.name ?? ''} placeholder='Введите имя' onChange={handleChange}/>
        <input name="surname" type="text" value={updatedUser?.surname ?? ''} placeholder='Введите фамилию' onChange={handleChange}/>
        <input name="weight" type="text" value={updatedUser?.weight ?? ''} placeholder='Введите ваш вес' onChange={handleChange}/>
        <input name="height" type="text" value={updatedUser?.height ?? ''} placeholder='Введите ваш рост' onChange={handleChange}/>
        <button onClick={() => dispatch(updateUser(updatedUser))}>Редактировать</button>
      </div>
      <button onClick={() => dispatch(logoutAction())}>Выйти</button>
    </div>
  );
};

export default Home;
