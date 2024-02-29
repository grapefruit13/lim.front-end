import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';

const cx = classNames.bind(styles);
const COMMENTS_ID = 'comments';

const Comment = () => {
  useEffect(() => {
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.setAttribute('repo', 'grapefruit13/self-blog-comments');
    scriptElem.setAttribute('issue-term', 'pathname');
    scriptElem.setAttribute('theme', 'github-dark');
    scriptElem.setAttribute('crossorigin', 'anonymous');
    scriptElem.async = true;

    const commentContainer = document.getElementById(COMMENTS_ID);
    if (commentContainer) {
      commentContainer.appendChild(scriptElem);

      return () => {
        const commentContainer = document.getElementById(COMMENTS_ID);
        if (commentContainer) commentContainer.innerHTML = '';
      };
    }
  }, []);

  return <section id={COMMENTS_ID} className={cx('container')}></section>;
};

export default Comment;
