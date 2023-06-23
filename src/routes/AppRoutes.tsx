import React, {useContext, useEffect} from 'react';
import {Context} from "../context/context";
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthPage} from "../pages/AuthPage";
import {switchRoutes} from "../common/route-role";
import {localStorageWrite} from "../common/user/local-storage.helper";

export const AppRoutes = () => {
  const {user} = useContext(Context);

  useEffect(() => {
    localStorageWrite(user)
  }, [user.active])

  return (
    <>
      {user.active
        ? <Routes>
          {switchRoutes[user.type]}
        </Routes>
        : <Routes>
          <Route key="auth" path="/" element={<AuthPage />}>
            <Route index element={<Navigate to='auth' replace />} />
            <Route path={'auth'} element={<AuthPage/>}/>
            <Route path={'*'} element={<AuthPage/>}/>
          </Route>
        </Routes>}
    </>
  );
};