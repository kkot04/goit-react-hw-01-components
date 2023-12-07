import React from "react";
import s from './Friends.module.css'

export const FriendsList = ({ friends }) => {
    return (
      <>
        <section className={s.section}>
          <ul className={s.friendsList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
              return (
                <li key={id} className={s.friendsItem}>
                  <span
                    className={
                      isOnline === true ? s.friendStatus1 : s.friendStatus2
                    }
                  >
                    {isOnline}
                  </span>
                  <img
                    src={avatar}
                    alt="friend avatar"
                    className={s.friendsAvatar}
                  />
                  <p className={s.friendsName}>{name}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </>
    );
  };