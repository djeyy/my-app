import React, {useContext, useEffect, useState} from 'react';
import {InputText} from '../components/ui/inputText';
import {Button} from '../components/ui/Button';
import {Context} from "../context/context";
import {localStorageWrite} from "../common/user/local-storage.helper";

export const AuthPage = () => {
  const {user, setUser} = useContext(Context);
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const auth = async () => {
    try {
      const res = await fetch('users.json', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })

      const {users} = await res.json();

      const currentUser = users.find((user: any) => user?.login === login)

      console.log(currentUser)

      if (!currentUser) alert('Пользователь не найден')

      if (currentUser.password !== password) alert('Не верный пароль')

      setUser({...user, active: true, type: currentUser?.type, name: currentUser?.name});

      await localStorageWrite(user)

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={'authPage'}>
      <div className={'login'}>
        <div className={'login__title'}>Авторизация</div>
        <div className={'login__input'}>
          <InputText
            type={'text'}
            value={login}
            onChange={({target: {value}}: any) => setLogin(String(value))}
            isLabel={true}
            isVisible={false}
            placeholder={'login'}/>
        </div>
        <div className={'login__input'}>
          <InputText
            type={'password'}
            value={password}
            onChange={({target: {value}}: any) => setPassword(String(value))}
            isLabel={true}
            isVisible={true}
            placeholder={'password'}/>
        </div>
        <div className={'login__button'}>
          <Button
            text={'Войти'}
            after={false}
            before={false}
            svg={null}
            onClick={auth}/>
        </div>
      </div>
    </div>
  );
};