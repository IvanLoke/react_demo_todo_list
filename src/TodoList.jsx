import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <ul className="list">
        {todos.length === 0 && "No todos"}
        {todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              completed={todo.completed}
              title={todo.title}
              key={todo.key}
              toogleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}
