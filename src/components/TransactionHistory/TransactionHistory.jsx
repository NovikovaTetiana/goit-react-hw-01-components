import PropTypes from 'prop-types';
import {Table, Tr} from './TransactionHistory.styled'

function TransactionHistory ({items}){
  return (
    <Table>
  <thead>
     <th  >Type</th>
      <th >Amount</th>
    <th >Currency</th>
  </thead>

  <tbody>
        {items.map(({ id, type, amount, currency }) => (
        <Tr key={id}>
           <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Tr>
        ))}
      </tbody>
    </Table>
  )
}

TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};


export default TransactionHistory