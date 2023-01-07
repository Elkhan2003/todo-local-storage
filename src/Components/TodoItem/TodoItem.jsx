import React from "react";

import css from "./Todoitem.module.scss";

export const TodoItem = ({ todo, id, completeTodo, deleteTodo }) => {
	return (
		<>
			<div className={css.wrapper}>
				<div
					className={css.todo__item}
					style={todo.complete ? ready : notReady}
				>
					{todo.text}
					<button onClick={() => completeTodo(id)}>
						{todo.complete ? "Отменить" : "Выполнить"}
						complete
					</button>
					<button onClick={() => deleteTodo(id)}>delete</button>
				</div>
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
