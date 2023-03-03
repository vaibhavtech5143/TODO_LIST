import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  // const addData = () => {
  //   setData([...data, {
  //     name: name,
  //     email: email,
  //   }])
  // }

  // Method 1


  // optimal method of above code

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }


  const removeData = (index) => {

    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);

  }


  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField onChange={(event) => {
            setName(event.target.value)
          }}
            id="filled-basic"
            value={name}
            label="Name"
            variant="filled" />
          <TextField
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            id="filled-basic" value={email} label="Email" variant="filled" />
          <Button variant="contained" color="error" onClick={addData}>
            <AddIcon /></Button>
        </Stack>
      </div>

      {/* Data */}

      <div className="data">

        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
      </div>
      {

        data.map((element, index) => {
          return (
            <div className="data_val" key={index}>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Button variant="contained" color="error" onClick={() => { removeData(index) }}> <DeleteIcon /></Button>
            </div>
          )

        })


      }



    </div >
  );
}

export default App;
