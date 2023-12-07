import { Profile } from './task1/Profile';
import dataUser from '../data/user.json';
import { Statistic } from './task2/Statistics';
import dataStatistic from '../data/data.json'
import { FriendsList } from './task3/Friends';
import dataFriends from '../data/friends.json'
import  {Transaction} from './task4/Transaction'
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <div>
      <Profile user={dataUser} />
      <Statistic title="Upload stats" stats={dataStatistic} />
      <FriendsList friends={dataFriends}/>
      < Transaction transactions={transactions} />
    </div>
  );
}
