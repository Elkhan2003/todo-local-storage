import React, { useEffect, useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem";

export const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const createTodo = () => {
		if (inputValue) {
			setTodos([...todos, { text: inputValue, complete: false }]);
			setInputValue("");

			localStorage.setItem(
				"todos",
				JSON.stringify([...todos, { text: inputValue, complete: false }])
			);
		}
	};
	// console.log(todos)

	useEffect(() => {
		let localTodo = JSON.parse(localStorage.getItem("todos"));
		localTodo && setTodos(localTodo);
	}, []);

	const completeTodo = (id) => {
		let arr = [...todos];
		arr[id].complete = !arr[id].complete;
		localStorage.setItem("todos", JSON.stringify(arr));
		setTodos(arr);
	};

	const deleteTodo = (id) => {
		let arr = [...todos];
		arr.splice(id, 1);
		localStorage.setItem("todos", JSON.stringify(arr));
		setTodos(arr);
	};

	return (
		<>
			<div>
				<input
					placeholder="type something"
					type="text"
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
				/>
				<button onClick={createTodo}>ADD</button>
			</div>
			{todos.map((el, id) => {
				return (
					<TodoItem
						todo={el}
						id={id}
						deleteTodo={deleteTodo}
						completeTodo={completeTodo}
						key={id}
					/>
				);
			})}
		</>
	);
};
