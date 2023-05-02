import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendList/FrienListItem/FriendListItem'
import {Container} from './FriendList.styled'

export default function FriendList({ friends }) {
  return (
   <Container><ul>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul></Container> 
  );
}
  
FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
}


