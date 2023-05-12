import {useCallback, useEffect, useState, useMemo} from "react";
import Name from "./Name.js"
import Number from "./Number.js"

function FirstFunctionComponent() {
  // const[number, setNumber] = useState(0)
  // const[name, setName] = useState('vaibhav')

  const [info, setInfo] = useState({
    number: 10,
    name: 'vaibhav',
    salary: 100000
  })

  const handler= () => {
    setInfo ({
      ...info,
      number: 50
    })
  }

  useEffect(() => {
    console.log('Running effect for name')
  },[info.name])
  
  useEffect(() => {
    console.log('Effect running for number');
  },[info.number])

  useEffect(() => {
    let timer = setInterval(() => {
      console.log('timer');
    },2000)
    return () => {
      console.log('Running effect after removing component');
      clearInterval(timer)
    }
  },[])

  
  const totaIncome = useCallback(() => {
    let income = info.salary*12
    console.log(income);
  },[info.salary])

  const user = {
    name: 'vaibhav',
    designation: 'developer'
  }

  const memonizedUser = useMemo(() => {
     return user
  },[])

    return (
       <div>
         <Number number={info.number} print={totaIncome}/>
         <button onClick={handler}>+</button>
         <Name name={info.name} userInfo={memonizedUser}/>
         <button onClick={() => setInfo({...info, name:'vishap'})}>Change Name</button>
         <button onClick={() => setInfo({...info, salary:10000})}>Change Salary</button>

       </div>
    )
  }

export default FirstFunctionComponent;