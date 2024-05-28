import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/model/todoSlice";
import Todos from "./Todos";

function AddTodo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [update, setUpdate] = useState("");

  const dispatch = useDispatch();

 

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (update == "") {
      dispatch(
        addTodo({
          firstName: firstName,
          lastName: lastName,
          email: email,
          address: address,
        })
      );
      setFirstName("");
      setLastName("");
      setEmail("");
      setAddress("");
    }
     else {
      updateTodoFun();
    }
  };

  const childCalledFunction = (todo) => {
    setFirstName(todo.firstName);
    setLastName(todo.lastName);
    setEmail(todo.email);
    setAddress(todo.address);
    setUpdate(todo);
   
  };

  const updateTodoFun = (e) => {
    
    if (firstName && lastName && email && address !== null) {
      dispatch(
        updateTodo({
          id: update.id,
          firstName: firstName,
          lastName: lastName,
          email: email,
          address: address,
        })
      );
    }
    setAddress("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setUpdate("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter First Name.."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter Last Name.."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter Email .."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter Address .."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {!!update ? "Update" : "Add Name"}
        </button>
      </form>

      <Todos childCalledFunction={childCalledFunction} />
    </>
  );
}

export default AddTodo;
