import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { SVGS } from '@/constants/importImage';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => (
  <div className={cx('container')}>
    <span className={cx('container-copyright')}>
      Copyright {new Date().getFullYear()} @lim
    </span>
    <div className={cx('container-github-wrapper')}>
      <Link href='https://github.com/grapefruit13' target='_blank'>
        <Image
          className={cx('container-github-wrapper-img')}
          src={SVGS.github.white.url}
          alt={SVGS.github.white.alt}
          fill
          sizes='100%'
        />
      </Link>
    </div>
    <div className={cx('container-linkedin-wrapper')}>
      <Image
        className={cx('container-linkedin-wrapper-img')}
        src={SVGS.linkedIn.url}
        alt={SVGS.linkedIn.alt}
        fill
        sizes='100%'
      />
    </div>
  </div>
);

export default Footer;
