import React from 'react';
import styles from './styles.scss';

import { RaisedButton } from '../../components/forms';

const Header = () => (
  <div className={styles.header}>
    Header
    <RaisedButton
      label="Login"
      primary
    />
  </div>
);

export default Header;
