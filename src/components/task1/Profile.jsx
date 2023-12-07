import React from 'react';
import s from './Prifile.module.css';

export const Profile = props => {
  const {
    user: {
      username,
      tag,
      location,
      avatar,
      stats: { followers, views, likes },
    },
  } = props;
  return (
    <>
      <div className={s.profile}>
        <div className={s.description}>
          <img src={avatar} alt="User avatar" className={s.avatar} />
          <p className={s.name}>{username}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.statsList}>
          <li className={s.statsItem}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{followers}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{views}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
