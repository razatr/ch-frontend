import {FC, useState, ChangeEvent} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {logoutAction, updateUser} from "../../store/reducers/auth";
import {IUser, UserInfo} from "../../models/IUser";
import { userSelector } from '../../store/selectors/user';
import EditableInfo from './EditableInfo';
import { useStyles } from './styles';
import { getHistoryAction } from '../../store/reducers/food-history';
import FoodHistory from '../FoodHistoryList';

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
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const [updatedUser, setUpdatedUser] = useState<UserInfo>(userInfoFromUser(user));
  const [editMode, setEditMode] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedUser({
      ...updatedUser,
      [event.target.name]: event.target.value
    });
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    const newDate = new Date(inputValue);

    if (!isNaN(newDate.getTime())) { 
      setUpdatedUser({
        ...updatedUser,
        [event.target.name]: newDate
      });
    } else {
      setUpdatedUser({
        ...updatedUser,
        [event.target.name]: null
      });
    }
  };

  const editAction = () => {
    if(editMode) {
      dispatch(updateUser(updatedUser));
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  }
  
  return (
    <div className={classes.home}>
      <h1>{`Привет ${user.name}`}</h1>
      <div>
        <EditableInfo editMode={editMode} name="name" type="text" value={updatedUser?.name ?? ''} placeholder='Введите имя' onChange={handleChange}/>
        <EditableInfo editMode={editMode} name="surname" type="text" value={updatedUser?.surname ?? ''} placeholder='Введите фамилию' onChange={handleChange}/>
        <EditableInfo editMode={editMode} name="weight" type="text" value={updatedUser?.weight ?? ''} placeholder='Введите ваш вес' onChange={handleChange}/>
        <EditableInfo editMode={editMode} name="height" type="text" value={updatedUser?.height ?? ''} placeholder='Введите ваш рост' onChange={handleChange}/>
        <EditableInfo editMode={editMode} name="birthday" type="date" value={updatedUser?.birthday ?? 0} onChange={handleDateChange}/>
        <button onClick={editAction}>{editMode ? 'Сохранить' : 'Редактировать'}</button>
      </div>
      <button onClick={() => dispatch(getHistoryAction())}>Посомтреть контроль</button>
      <FoodHistory />
      <button onClick={() => dispatch(logoutAction())}>Выйти</button>
    </div>
  );
};

export default Home;
