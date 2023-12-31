const toDoList = () => {
    this.toDoArray = [];

    return {toDoArray};
}

const project = (projectTitle) => {
    this.title = projectTitle;
    this.itemList = toDoList();
    return {title, itemList}
}

const projectUI = (project) => {
    const projectContainer = document.createElement("div");
    projectContainer.className = "project-container";

    const title = document.createElement("span");
    title.innerHTML = project.title;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.addEventListener("click", () => {
        projectContainer.remove();
    });

    projectContainer.appendChild(title);
    projectContainer.appendChild(deleteBtn);

    return projectContainer;
}

const projectForm = document.getElementById("project-form");
projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const [projectSidebar] = document.getElementsByClassName("project-sidebar");
    const [projectTitle] = document.getElementsByName("project-title");
    const item = project(projectTitle.value);
    const itemUI = projectUI(item);
    projectSidebar.appendChild(itemUI);
});

const [projectSidebar] = document.getElementsByClassName("project-sidebar");
projectSidebar.appendChild((() => {
    const homeProject = document.createElement("div");
    homeProject.className = "project-container";

    const title = document.createElement("span");
    title.innerHTML = "Home";

    homeProject.appendChild(title);
    
    return homeProject;
})());


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
    deleteBtn.addEventListener("click", () => {
        todo.remove();
    });

    todo.appendChild(checkbox);
    todo.appendChild(title);
    todo.appendChild(date);
    todo.appendChild(deleteBtn);

    return todo;
}

const clearToDo = () => {
    const [todoContainer] = document.getElementsByClassName("todo-container");
    todoContainerChildren = todoContainer.children;
    console.log(todoContainerChildren);
    for (let i = 1; i < todoContainerChildren.length; i++) {
        todoContainerChildren.item(i).remove();
    }
}