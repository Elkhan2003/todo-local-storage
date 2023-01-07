import React from "react";

import scss from "./TodoItem.module.scss";

interface Todo {
	complete: boolean;
	text: string;
}

interface Props {
	todo: Todo;
	id: number;
	completeTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<Props> = ({
	todo,
	id,
	completeTodo,
	deleteTodo
}) => {
	return (
		<>
			<div className={scss.todo__item} style={todo.complete ? ready : notReady}>
				{todo.text}
				<button onClick={() => completeTodo(id)}>
					{todo.complete ? "Отменить" : "Выполнить"}
					complete
				</button>
				<button onClick={() => deleteTodo(id)}>delete</button>
			</div>
		</>
	);
};

const ready = {
	textDecoration: "line-through"
};

const notReady = {
	textDecoration: "none"
};
