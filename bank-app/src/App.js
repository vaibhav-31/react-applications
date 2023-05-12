import 'bulma'
import AccountType from './components/AccountType';
import Balance from './components/Balance';
import Banking from './components/Banking';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div className='section'>
      <Header />
      <Balance />
      <Banking />
      <AccountType />
      <Login />
    </div>
  );
}

export default App;
