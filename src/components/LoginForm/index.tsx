import React, {FC, useState} from 'react';
import {useAppDispatch} from "../../hooks";
import {loginAction, registrationAction} from "../../reducers/auth";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();

  return (
    <div>
      <input
        onChange={ e => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder='Email'
      />
      <input
        onChange={ e => setPassword(e.target.value)}
        value={password}
        type="text"
        placeholder='Password'
      />
      <button onClick={() => dispatch(loginAction(email, password))}>Логин</button>
      <button onClick={() => dispatch(registrationAction(email, password))}>Регистрация</button>
    </div>
  );
};

export default LoginForm;