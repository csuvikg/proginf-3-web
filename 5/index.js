import { state } from './state.js';
import { render } from './render.js';
import { delegate } from './utils.js';

const root = document.querySelector('ul');

window.onload = (event) => render(root, state);

const input = document.querySelector("#textinput");
window.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        state.addTodo(input.value);
        input.value = "";
        render(root, state);
    }
});

function handleButtonClick() {
    const button = this;
    const todo = state.todos.find(t => t.id === button.dataset.id);
    todo.toggleCompleted();
    render(root, state);
}

delegate(root, "click", "button", handleButtonClick);
