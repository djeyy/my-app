import React from 'react';

type Props = {
  text: string;
  after: boolean;
  before: boolean;
  svg: React.JSX.Element | null;
  [fey: string]: any;
}

export const Button = ({text, after, before, svg, ...props}: Props) => {
  return (
    <div className={`button`} {...props} >
      {before
        ? <span className={'button__icon'}>{svg}</span>
        : <></>
      }
      {text && <span className={'button__text'}>{text}</span>}
      {after
        ? <span className={'button__icon'}>{svg}</span>
        : <></>
      }
    </div>
  );
};