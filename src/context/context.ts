import React, {createContext} from "react";
import {localStorageRead} from "../common/user/local-storage.helper";
import {User} from "../common/user/user.type";

interface Context {
  user: User;
  setUser: React.Dispatch<User>
}

export const Context = createContext<Context>({
  user: localStorageRead('user'),
  setUser: (value) => value,
})