import react, { useState } from 'react'
import './App.css';

function Calculator() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [name,setName]=useState('')

  const handleNumChange = (e) => {
    const { name, value } = e.target;
    name === 'num1' ?
      setNum1(value)
      :
      setNum2(value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);

  };
  console.log(operation)

  const handleResult = () => {
   
    if (operation == '+') {
      const addition = parseFloat(num1) + parseFloat(num2)
      alert(addition)
    }
    else if(operation=='-'){
    const subtraction= parseFloat(num1) - parseFloat(num2)
    alert(subtraction)
    }
    else if(operation=='*'){
      const multiplication= parseFloat(num1) * parseFloat(num2)
      alert(multiplication)
    }
    else if(operation=='/'){
      const division=parseFloat(num1) / parseFloat(num2)
      alert(division)
    }
    else{

    }
     setNum1('')
     setNum2('')
     setOperation('')


  }

  const handleChange=(e)=>{
       const {value,type,name}=e.target
       setName(value)
       console.log(name)
  }
  const handleClick=()=>{
    alert(name)
    setName('')
  }









  return (
    <div className="App">
      <div>
        <label>Number 1:</label>
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={e=>handleNumChange(e)}
        />
      </div>
      <div>
        <label>Number 2:</label>
        <input
          type="number"
          name="num2"
          value={num2}
          onChange={e=>handleNumChange(e)}
        />
      </div>
      <div>
        <label>Operation:</label>
        <select
          value={operation}
          onChange={e=>handleOperationChange(e)}
        >
          <option value="">Select operation</option>
          <option value="+">Addition</option>
          <option value="-">Subtraction</option>
          <option value="*">Multiplication</option>
          <option value="/">Division</option>
        </select>
      </div>
      <div>
        <button type='button' onClick={() => handleResult()} >Calculate</button>
      </div>
      <br/><br/>
      <div>
        <input
            type='text'
            name='name'
            value={name}
            onChange={e=>handleChange(e)}
            
        />
        <button type='button' onClick={()=>handleClick()}>Click Me</button>
      </div>
       
    </div>
  );
}

export default Calculator;
