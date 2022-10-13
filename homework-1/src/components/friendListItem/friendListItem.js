import styles from "./friendListItem.module.css";
import PropTypes from "prop-types";

export default function FriendListItem({ avatar, name, isOnline, variant }) {
  return (
    <li className={styles.item}>
      <span className={styles[variant]}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
