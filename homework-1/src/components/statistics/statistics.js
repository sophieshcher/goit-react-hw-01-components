import styles from './statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({title, stats}) {
    
    return(
        <div className={styles.mainWrap}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.statsWrap}>
                {stats}
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}