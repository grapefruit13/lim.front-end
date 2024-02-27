import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Header from '@/components/common/layout/Header';
import Footer from '@/components/common/layout/Footer';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = ({ children }: { children: ReactNode }) => (
  <div className={cx('layout')}>
    <Header />
    <div className={cx('layout-content-container')}>{children}</div>
    <Footer />
  </div>
);

export default MainLayout;
