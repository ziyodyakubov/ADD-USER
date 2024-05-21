import { useState } from 'react'
import 'boxicons'
import { nanoid } from 'nanoid'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [users, setUser] = useState([])
  const [form,setForm] = useState([])
  const [search,SearchUser] = useState("")

  const handleChange = (event) =>{
    event.preventDefault()
    const {name,value} = event.target
    setForm({...form,[name]:value})
  } 
 
  const adduser = (event)=>{
      event.preventDefault()
      let id = nanoid()
      let nimadir = {...form,id}
      users.push(nimadir)
      setUser([...users])
      event.target.reset()
  }

  const deleteUser = (id) =>{
    let new_users = users.filter(item=> item.id !== id)
    setUser([...new_users])
  }

     

  return (
    <>
      <div className="container">
        <div className="row mt-5">
            <div className="col-md-9">
              <input onChange={(e)=>SearchUser(e.target.value)} type="text" className='mb-4 w-100 p-2 rounded-2 border border-secondary-subtle' placeholder='Search your name' />
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                    <th>T/R</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone number</th>
                    <th>Address</th>
                    <th className='text-center'>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users?.filter((item)=>{
                        if(item?.name?.toLowerCase().includes(search.toLowerCase())){
                          return item
                        }
                     }).map((item,index)=>(
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td className='text-center' onClick={()=>deleteUser(item.id)}><box-icon type='solid' name='trash'></box-icon></td>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-header text-center">
                  <h3>Add user</h3>
                </div>

                <div className="card-body">
                  <form onSubmit={adduser} id="todo">
                    <input type="text" required name="name" onChange={handleChange} placeholder='Enter name' className='form-control my-2'/>
                    <input type="number" required name="age" onChange={handleChange} placeholder='Enter age' className='form-control my-2'/>
                    <input type="tel" required name="phone" onChange={handleChange} placeholder='Enter phone number' className='form-control my-2'/>
                    <input type="text" required name="address" onChange={handleChange} placeholder='Enter address' className='form-control my-2' />
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
