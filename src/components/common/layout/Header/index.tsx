import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { SVGS } from '@/constants/importImage';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => (
  <div className={cx('container')}>
    <Link className={cx('container-logo-wrapper')} href={'/'}>
      <Image
        className={cx('container-logo-wrapper-svg')}
        src={SVGS.logo.url}
        alt={SVGS.logo.alt}
        fill
        sizes='100%'
      />
    </Link>
    <span>
      <Image src={SVGS.darkMode.url} alt={SVGS.darkMode.alt} />
    </span>
  </div>
);

export default Header;
