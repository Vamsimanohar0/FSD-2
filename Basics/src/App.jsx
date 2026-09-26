import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [marks, setMarks] = useState("")
  const [submit, setSubmit] = useState(false)

  const handleform = () =>{
    setSubmit(true);
  }
  
  return (
    <>
      <h2>Name: </h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <h2>Marks: </h2>
      <input type="number" value={marks} onChange={(e) => setMarks(e.target.marks)} />
      <br />
      <button onClick={handleform}>Submit</button>
      <div> {submit ? <h1>Form Submited!, Welcome {name} : {marks}</h1> : <h1>Please enter details</h1> } </div>
    </>
  )
}

export default App