import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/model/todoSlice";

function Todos(props) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdate = (todo) => {
    
    props.childCalledFunction(todo);
    
  };


  const handleClick =()=> {
    console.log("handleClick executed");
    props.handleOpen();
  }
   
  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-teal-600 px-4 py-2 rounded w-2/4"
            key={todo.id}
            todo={todo}
          >
            <div className="text-white">
              {todo.firstName + " " + todo.lastName}
            </div>
            <div className="flex justify-end">
            <button 
            onClick={() => {handleUpdate(todo) ; handleClick(); }}  
                // onClick={ props.handleOpen}
                
                className="text-white bg-sky-800 border-0 py-1 px-4 focus:outline-none hover:bg-black rounded text-md mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a1 1 0 00-1 1v3.586L7.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 9.586V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Update
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-sky-800 border-0 py-1 px-4 focus:outline-none hover:bg-black rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
