var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todos = [];
// Render the todo list
var renderTodos = function (todoList) {
    todoList.innerHTML = "";
    todos.forEach(function (todo) {
        var todoItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", function () {
            toggleTodo(todo.id);
            renderTodos(todoList);
        });
        var text = document.createElement("span");
        text.textContent = todo.text;
        todoItem.appendChild(checkbox);
        todoItem.appendChild(text);
        todoList.appendChild(todoItem);
    });
};
// Add a new todo
var addTodo = function (newTodoText) {
    if (newTodoText.trim()) {
        var newTodo = {
            id: todos.length + 1,
            text: newTodoText,
            completed: false,
        };
        todos.push(newTodo);
    }
};
// Toggle the completion status of a todo
var toggleTodo = function (id) {
    todos = todos.map(function (todo) {
        return todo.id === id ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;
    });
};
// Initialize the app
var init = function () {
    var todoList = document.getElementById("todo-list");
    var newTodoInput = document.getElementById("new-todo");
    var addTodoButton = document.getElementById("add-todo");
    addTodoButton.addEventListener("click", function () {
        addTodo(newTodoInput.value);
        newTodoInput.value = "";
        renderTodos(todoList);
    });
    renderTodos(todoList);
};
init();
