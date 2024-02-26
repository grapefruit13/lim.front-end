import Image from 'next/image';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { SVGS } from './../../../constants/importImage';
import Link from 'next/link';

const cx = classNames.bind(styles);

const Header = () => (
  <>
    <div className={cx('container')}>
      <Link href={'/'}>
        <Image src={SVGS.logo.url} alt={SVGS.logo.alt} width={240} height={60} />
      </Link>
      <span>
        <Image src={SVGS.darkMode.url} alt={SVGS.darkMode.alt} />
      </span>
    </div>
  </>
);

export default Header;
