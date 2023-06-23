import React from 'react';
import {Navigate, Route} from 'react-router-dom';
import {Layout} from '../components/Layout';
import {AdminPage} from '../pages/AdminPage';
import {UserPage} from '../pages/UserPage';

export type RoutsState = {
  [state: string]: any
}

export const switchRoutes: RoutsState = {
  'admin': (
    <Route key='admin' path='/' element={<Layout />}>
      <Route index element={<Navigate to='admin' replace />} />
      <Route path='admin' element={<AdminPage/>} />
    </Route>
  ),
  'manager': (
    <Route key='manager' path='/' element={<Layout />}>
      <Route index element={<Navigate to='user' replace />} />
      <Route path='user' element={<UserPage/>} />
    </Route>
  )
}
