import React, { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";

interface TodoList {
	complete: boolean;
	text: string;
}

export const TodoList: React.FC = () => {
	const [todos, setTodos] = useState<TodoList[]>([]);
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

	useEffect(() => {
		const storedTodos = localStorage.getItem("todos");
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		} else {
			setTodos([]);
		}
	}, []);

	// useEffect(() => {
	// 	localStorage.setItem("todos", JSON.stringify(todos));
	// }, [todos]);

	const completeTodo = (id: number) => {
		let arr = [...todos];
		arr[id].complete = !arr[id].complete;
		localStorage.setItem("todos", JSON.stringify(arr));
		setTodos(arr);
	};

	const deleteTodo = (id: number) => {
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
