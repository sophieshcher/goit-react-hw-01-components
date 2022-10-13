import styles from './friendList.module.css'
import PropTypes from 'prop-types';

export default function FriendsList({friends}) {
    return(
        <div className='wrapper'>{friends}</div>
    )
}
FriendsList.prototype = {
    friends: PropTypes.array
}