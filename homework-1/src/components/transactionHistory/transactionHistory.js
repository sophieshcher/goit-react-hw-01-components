// import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css'

export default function TransactionHistory({items}) {
    return(
        <table className={styles.table}>
             <thead className={styles.thead}>
                <tr>
                    <th className={styles.headind}>Type</th>
                    <th className={styles.headind}>Amount</th>
                    <th className={styles.headind}>Currency</th>
                </tr>
            </thead>
            <tbody>{items}</tbody>
        </table>
        
    )
}