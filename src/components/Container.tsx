import React from 'react';

export const Container = ({children}: any) => {
  return (
    <div className={'container'}>
      {children}
    </div>
  );
};