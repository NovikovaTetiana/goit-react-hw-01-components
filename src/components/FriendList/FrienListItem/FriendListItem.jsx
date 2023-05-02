import PropTypes from 'prop-types';
import {Container, List, Status, StatusTrue, StatusFalse } from './FriendListItem.styled';

function FriendListItem ({avatar, name, isOnline}){
  return (
   <List><li>
 <Container>  <Status>{isOnline ? < StatusTrue/> : < StatusFalse/>}</Status>
   <img src={avatar} alt="User avatar" width="48" />
  <p>{name}</p></Container>
</li></List> 
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}


export default FriendListItem 