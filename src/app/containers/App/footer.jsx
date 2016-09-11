import React from 'react';
import style from './styles.scss';
import { Main } from '../../constants';

const Footer = () => (
  <div
    style={{
      background: Main.COLOR.PRIMARY,
    }}
    className={style.footer}
  >
    Footer!
  </div>
);

export default Footer;
