
import './App.css';
import FirstClassComponent from './Component/ClassComponent/FirstClassComponent.js';
import FirstFunctionComponent from './Component/FunctionComponent/Hooks/FirstFunctionComponent.js';
import Login from './Component/FunctionComponent/Login/Login'
import Table from './Component/FunctionComponent/Login/Table';
import RenderingList from './Component/Axios/RenderingList';
import TopLevel from './Component/Context/TopLevel';
import UseRefExample from './Component/UseRefExample';
import { useState } from 'react';
import StopWatch from './Component/StopWatch';
import Hover from './Component/HOC/Hover';

const printName = (name) => {
  console.log('the name is ' +name)
}

function App() {
  // const [data, setData] = useState([]);
  // const addData = (log) => {
  //   let logs = [...data, log];
  //   setData(logs);
  // }
  return (
    <div className="App">
       {/* <FirstClassComponent city="patna" work="developer" show print={printName}/>
       <FirstClassComponent city="siwan" work="magento-developer"/> */}
       {/* <FirstFunctionComponent /> */}
       {/* <Login addData = {addData} /> */}
       {/* <Table func={data} /> */}
       <RenderingList />
       {/* <StopWatch /> */}
       {/* <TopLevel /> */}
       {/* <UseRefExample /> */}
      {/* <Hover /> */}
    </div>
  );
}

export default App;
