import React from "react";
import s from '../task4/Transaction.module.css'

export function Transaction({ transactions }) {
    return (
      <section className={s.section}>
        <table className={s.transaction}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
  
          <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
              <tr key={id} className={s.transactionRowBody}>
                <td className="s.tdType">{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }