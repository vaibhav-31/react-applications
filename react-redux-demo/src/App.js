import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './Components/CakeContainer';
import Store from './Redux/Store';
import HooksCakeContainer from './Components/HooksCakeComponent'

function App() {
  return (
  <Provider store={Store}>
    <div className="App">
      
     {/* <CakeContainer /> */}
     <HooksCakeContainer />
     </div>
  </Provider>
    
  );
}

export default App;
