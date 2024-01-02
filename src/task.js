import { el } from 'date-fns/locale';
import { createFormButton } from './ui.js';   
import { appendTodoToDOM } from './todo.js';
import { todoArray } from './ui.js';

document.addEventListener('DOMContentLoaded', function() {
    // Set the initial heading
    document.querySelector('.main-section-heading').textContent = 'Inbox';
    console.log(todoArray);
    appendTodoToDOM(todoArray);
    // Create the 'Add Todo' button
    createFormButton();
});


export function selectLi() {
    document.querySelector('ul').addEventListener('click', function(event) {
        // Check if the clicked element is an 'li'
        if (event.target.tagName.toLowerCase() === 'li') {
            const textContent = event.target.textContent;
            document.querySelector('.main-section-heading').textContent = textContent;

            if (textContent === 'Inbox') {
                appendTodoToDOM(todoArray);
                createFormButton();
            } else {
                if (document.querySelector('.create-form-button')) {
                    document.querySelector('.top-section').removeChild(document.querySelector('.create-form-button'));
                }
                appendTodoToDOM(todoArray);
            }
        }
    });
    // Append the default todos when the page loads
    appendTodoToDOM(todoArray);
}