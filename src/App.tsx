import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {User} from "./common/user/user.type";
import {localStorageRead} from "./common/user/local-storage.helper";
import {AppRoutes} from "./routes/AppRoutes";
import { Context } from './context/context';

export function App() {
  const [user, setUser] = useState<User>(localStorageRead('user'))

  return (
    <Context.Provider value={{
      user,
      setUser
    }}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </Context.Provider>
  )
}
