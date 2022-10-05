import PropTypes from 'prop-types';
import styles from './profile.module.css'

export default function Portfolio({photoURL, userName, userTag, userLocation, quantityOfFolowers, quantityOfViews, quantityOfLikes}) {
    return(
        <div className={styles.card}>
            <div className={styles.information}>
                <img className={styles.photo} src={photoURL}></img>
                <p className={styles.name}>{userName}</p>
                <p className={styles.tag}>@{userTag}</p>
                <p className={styles.location}>{userLocation}</p>
            </div>
            <ul className={styles.statsInformation}>
                <li>
                    <span className={styles.lable}>Followers</span>
                    <span className={styles.quontity}>{quantityOfFolowers}</span>
                </li>
                <li>
                    <span className={styles.lable}>Views</span>
                    <span className={styles.quontity}>{quantityOfViews}</span>
                </li>
                <li>
                    <span className={styles.lable}>Likes</span>
                    <span className={styles.quontity}>{quantityOfLikes}</span>
                </li>
            </ul>
        </div>
    )
}

Portfolio.propTypes = {
    photoURL: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userTag: PropTypes.string.isRequired,
    userLocation: PropTypes.string.isRequired,
    quantityOfFolowers: PropTypes.number,
    quantityOfViews: PropTypes.number,
    quantityOfLikes: PropTypes.number

}