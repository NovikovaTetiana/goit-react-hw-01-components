import PropTypes from 'prop-types';
import { Container, List, Description, ListItem } from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats,
}) {
  const { followers, views, likes } = stats;
  return (
 
  < Container>
      <div>
        <div>
          <img src={avatar} alt="User avatar" />

          <Description>
            <p>{username}</p>
            <p>{tag}</p>
            <p>{location}</p>
          </Description>
        </div>

        <ul>
          <List>
            <li>
              <ListItem>
                <span>Followers</span>
                <span>{followers}</span>
              </ListItem>
            </li>
            <li>
              <ListItem>
                <span>Views</span>
                <span>{views}</span>
              </ListItem>
            </li>
            <li>
              <ListItem>
                <span>Likes</span>
                <span>{likes}</span>
              </ListItem>
            </li>
          </List>
        </ul>
      </div>
      </Container>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
