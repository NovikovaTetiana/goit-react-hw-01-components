import PropTypes from 'prop-types';
import {Container, Title, List, ListItem} from './Statistics.styled'

export default function Statistics({ title, stats }) {
  return (
   <section><Container>
    <Title> {title && <h2>{title}</h2>}</Title> 
     <ul><List>
        {stats.map(({ id, label, percentage }) => {
          return (
           <li key={id}>
             <ListItem>  <span>{label}</span></ListItem>
             <ListItem>  <span>{percentage}</span></ListItem>
            </li>
          );
        })}</List> 
      </ul></Container> 
    </section>
    
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
