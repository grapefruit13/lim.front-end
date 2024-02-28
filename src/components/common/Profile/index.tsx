import Image from 'next/image';
import classNames from 'classnames/bind';
import { PNGS } from '@/constants/importImage';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const Profile = () => (
  <div className={cx('container')}>
    <div className={cx('container-mimoticon-wrapper')}>
      <Image
        className={cx('container-mimoticon-wrapper-img')}
        src={PNGS.mimoticon.url}
        alt={PNGS.mimoticon.alt}
        fill
        sizes='100%'
      />
    </div>
    <div className={cx('container-introduction')}>
      I am a web developer living in Korea.
      <br />
      This is a place I document anything about Development.
    </div>
  </div>
);

export default Profile;
