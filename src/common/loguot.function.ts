import {User} from "./user/user.type";
import React from "react";


export const logout = (user: User, setUser: React.Dispatch<User>, navigate: any) => {
  setUser({...user,
    id: null,
    name: '',
    quantity: null,
    receiptDate: '',
    deliveryDate: '',
    type: '',
    active: false
  })

  navigate('/')

  localStorage.clear()
}