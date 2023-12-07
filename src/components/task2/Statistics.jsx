import React from "react";
import s from "./Statistics.module.css";

export const Statistic =({ title, stats }) => {
    return (
    <>
        <section className={s.statics}>
             {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li key={id} className={s.item}>
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}</span>
              </li>
            );
          })}
        </ul>
</section>
</>
    )
};
