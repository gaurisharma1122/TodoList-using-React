import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, status, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((item) => {
          return (
            <Todo
              key={item.id}
              text={item.text}
              todo={item}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
