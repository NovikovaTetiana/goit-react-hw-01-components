import user from 'user'
import data from 'data'
import friends from 'friends'
import transactions from 'transactions'

import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList  from 'components/FriendList/FriendList'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory'

export const App = () => {
  return (

    <div>
     <Profile {...user} />
     <Statistics title="Upload stats" stats={data}/>
     <FriendList friends={friends} />
     <TransactionHistory items={transactions} />;
    </div>
  
  );
};


