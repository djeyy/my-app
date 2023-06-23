import React from 'react';

type Props = {
  placeholder: string;
  [key: string]: any;
}

export const CheckBox = ({placeholder, ...props}: Props) => {
  return (
    <div className={'inputCheckbox'}>
      <label className={'inputCheckbox__label'} htmlFor={placeholder} >{placeholder}</label>
      <input
        {...props}
        id={placeholder}
        className={'inputCheckbox__checkbox'}
        type={'checkbox'}/>
    </div>
  );
};