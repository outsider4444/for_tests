import "../App.css";
import React, {useState, useEffect, useReducer, useRef} from 'react';
import {collection, addDoc, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import {useLocation} from "react-router-dom";
import classes from "./Todo.module.css"
import constsFirebase from "../consts";


const Todo = () => {
    const [name, setName] = useState("");
    const [score, setScore] = useState(0);
    const [todos, setTodos] = useState([]);


    const addTodo = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "User"), {
                Name: name,
                Score: score,
            });
            console.log("Document written with ID: ", docRef.id);
            fetchPost();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const fetchPost = async () => {
        console.log(constsFirebase)
        await getDocs(collection(db, "User"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setTodos(newData);
                console.log(todos, newData);
            })
    }
    useEffect(() => {
        fetchPost();
    }, [])


    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Todo-App
                </h1>

                <div>
                    <div>
                        <input type="text" placeholder="What is your name?" onChange={(e) => setName(e.target.value)}/>
                        <input type="text" placeholder="What is your score" onChange={(e) => setScore(e.target.value)}/>
                    </div>
                    <div className="btn-container">
                        <button type="submit" className="btn" onClick={addTodo}>
                            Submit
                        </button>
                    </div>
                </div>

                <div className="todo-content">
                    {todos?.map((todo, i) => (
                        <p key={i}> {todo.Name}: {todo.Score}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Todo