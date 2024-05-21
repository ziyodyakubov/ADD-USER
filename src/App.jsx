import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [users, setUser] = useState([])
  const [form,setForm] = useState([])

  const handleChange = (event) =>{
    event.preventDefault()
    const {name,value} = event.target
    setForm({...form,[name]:value})
  } 

  const adduser = (event)=>{
      event.preventDefault()
      users.push(form)
      setUser([...users])
      event.target.reset()
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
            <div className="col-md-8">
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                    <th>T/R</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone number</th>
                    <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users.map((item,index)=>(
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-header text-center">
                  <h1>Add user</h1>
                </div>

                <div className="card-body">
                  <form onSubmit={adduser} id="todo">
                    <input type="text" name="name" onChange={handleChange} placeholder='Enter name' className='form-control my-2'/>
                    <input type="number" name="age" onChange={handleChange} placeholder='Enter age' className='form-control my-2'/>
                    <input type="tel" name="phone" onChange={handleChange} placeholder='Enter phone number' className='form-control my-2'/>
                    <input type="text" name="address" onChange={handleChange} placeholder='Enter address' className='form-control my-2' />
                  </form>
                </div>

                <div className="card-footer">
                <button id="form" type='submit' className='btn btn-primary' form="todo">Add User</button>
                </div>
              </div>
            </div>      
        </div>
      </div>
    </>
  )
}

export default App
