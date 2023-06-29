const todoItem = (t, d, dD, p, n, cL) => {
    this.title = t;
    this.description = d;
    this.dueDate = dD;
    this.priority = p;

    return {title, description, dueDate, priority};
}

const toDoItemUI = (todoItem) => {
    const todo = document.createElement("div");
    todo.className = `item-container ${todoItem.priority}`

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const title = document.createElement("span")
    title.innerHTML = todoItem.title;

    const date = document.createElement("span")
    date.innerHTML = todoItem.dueDate;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.type ="button";

    todo.appendChild(checkbox);
    todo.appendChild(title);
    todo.appendChild(date);
    todo.appendChild(deleteBtn);

    return todo;
}

const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const [title] = document.getElementsByName("title");
    const [description] = document.getElementsByName("description");
    const [dueDate] = document.getElementsByName("due-date");
    let priority = document.getElementsByName("priority");
    for (let i = 0; i < priority.length; i++) {
        if (priority[i].checked) {
            priority = priority[i];
            break;
        }
    }

    const [todoContainer] = document.getElementsByClassName("todo-container");
    const item = todoItem(title.value, description.value, dueDate.value, priority.value);
    const itemUI = toDoItemUI(item);
    todoContainer.appendChild(itemUI);
});
