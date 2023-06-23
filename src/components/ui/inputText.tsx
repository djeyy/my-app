import React, {useState} from 'react';
import {EyeIconSvg} from "./svgIcons/EyeIconSvg";
import {EyeBlockIconSvg} from "./svgIcons/EyeBlockIconSvg";

type Props = {
  type: string;
  value: any;
  placeholder: string;
  isLabel: boolean;
  isVisible: boolean;
  [key: string]: any;
}

export const InputText = ({value, setValue, type, placeholder, isLabel, isVisible, ...props}: Props) => {
  const [visible, setVisible] = useState(true)

  return (
    <div className={'inputText'}>
      <div className={"inputText form-item"} >
        {isLabel && <label className={value ? "inputText__label form-label valid" : "inputText__label form-label"} >{placeholder}</label>}
        <input {...props}
               className={"inputText__input form-input"}
               type={visible ? type : 'text'}
               value={value || ''}
        />
        {isVisible
          ? <div className={'inputText__visible'} onClick={() => setVisible(!visible)}>
            {visible
              ? <EyeIconSvg/>
              : <EyeBlockIconSvg/>
            }
          </div>
          : <></>
        }
      </div>
    </div>
  );
};