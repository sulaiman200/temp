interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let todos: Todo[] = [];

// Render the todo list
const renderTodos = (todoList: HTMLUListElement) => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      toggleTodo(todo.id);
      renderTodos(todoList);
    });

    const text = document.createElement("span");
    text.textContent = todo.text;

    todoItem.appendChild(checkbox);
    todoItem.appendChild(text);
    todoList.appendChild(todoItem);
  });
};

// Add a new todo
const addTodo = (newTodoText: string) => {
  if (newTodoText.trim()) {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: newTodoText,
      completed: false,
    };
    todos.push(newTodo);
  }
};

// Toggle the completion status of a todo
const toggleTodo = (id: number) => {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
};

// Initialize the app
const init = () => {
  const todoList = document.getElementById("todo-list") as HTMLUListElement;
  const newTodoInput = document.getElementById("new-todo") as HTMLInputElement;
  const addTodoButton = document.getElementById("add-todo") as HTMLButtonElement;

  addTodoButton.addEventListener("click", () => {
    addTodo(newTodoInput.value);
    newTodoInput.value = "";
    renderTodos(todoList);
  });

  renderTodos(todoList);
};

init(); 
