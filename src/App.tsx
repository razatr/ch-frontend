import React, {useEffect} from 'react';
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import {useAppDispatch, useAppSelector} from "./hooks";
import {isAuthSelector} from "./store/selectors/auth";
import {checkAuth} from "./store/reducers/auth";
import {isLoadingSelector} from "./store/selectors/appSelectors";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch])

  const isAuth = useAppSelector(isAuthSelector)
  
  const isLoading = useAppSelector(isLoadingSelector)

  return (
    isLoading ?
      <div>Загрузка</div> :
      <div className="App">
        {isAuth ? <Home /> : <LoginForm/>}
      </div>
  );
}

export default App;
