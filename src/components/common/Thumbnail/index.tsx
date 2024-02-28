import classNames from 'classnames/bind';
import styles from './Thumbnail.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

const Thumbnail: React.FC<{ title: string }> = ({ title }) => (
  <div className={cx('container')}>
    <span className={cx('container-title')}>{title}</span>
  </div>
);

export default Thumbnail;
