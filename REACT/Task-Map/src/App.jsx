import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'


function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  async function handleadd() {
    await setTodos([...todos, {todo, iscompleted: false}])
    setTodo('')
    console.log(todos)
  }

  function handleinput(e) {
    setTodo(e.target.value)
  }

  return (
    <>
          <Navbar />

          <div className="main w-[90vw] h-[80vh] bg-sky-400 m-auto my-8 p-9 rounded-md">

            <h3 className=''>Add Todo</h3>

            <input onChange={handleinput} type="text" className='todoinput border-2 rounded-lg border-gray-600 w-1/2' />
            <button onClick={handleadd} className=' border-2 border-black rounded-md m-3 px-3 bg-violet-400 hover:bg-violet-500 cursor-pointer'>Add</button>

            <h3>Your Todos</h3>

            {todos.map( (item) => {
                return(
                  <div key={item.todo} className="todos flex justify-between">

                  <div className="todo">{item.todo}</div>
              
                  <div className="buttons flex gap-7">
                        <button className=' border-2 border-black rounded-md px-3 bg-violet-400 hover:bg-violet-500 cursor-pointer'>Delete</button>
                        <button className=' border-2 border-black rounded-md px-3 bg-violet-400 hover:bg-violet-500 cursor-pointer'>Edit</button>
                  </div>
              
                  </div>
                )
            })}

            



          </div>
    </>
  )
}

export default App
