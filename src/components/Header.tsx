import React, {useContext} from 'react';
import {Context} from "../context/context";
import {LogoSvg} from "./ui/logoSvg";
import {Container} from "./Container";
import {Button} from "./ui/Button";
import {logout} from "../common/loguot.function";
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {ExitSvg} from "./ui/svgIcons/ExitSvg";

export const Header = () => {
  const {user, setUser} = useContext(Context);
  const isMobile = useMediaQuery({maxWidth: 768})
  const navigate = useNavigate();

  return (
    <div className={'header'}>
      <Container>
        <div className={'header__wrapper'}>
          <div className={'header__logo'}>
            <LogoSvg/>
          </div>
          <div className={'header__title'}>{user?.name}</div>
          <div className={'header__button'}>
            <Button onClick={() => logout(user, setUser, navigate)} text={isMobile ? '' : 'Выход'} after={false} before={isMobile} svg={<ExitSvg/>}/>
          </div>
        </div>
      </Container>
    </div>
  );
};