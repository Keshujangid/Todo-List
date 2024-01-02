import { fi } from "date-fns/locale";
import { todoArray } from "./ui";
import { isToday, isThisWeek, parseISO } from 'date-fns';


function isDueToday(todo) {
  return isToday(parseISO(todo.dueDate));
}

function isDueThisWeek(todo) {
  return isThisWeek(parseISO(todo.dueDate));
}

// Heading-related functions
function getMainSectionHeading() {
  return document.querySelector(".top-section > h1").textContent;
}

function filterTodosByHeading(todoArray, heading) {
  if (heading === "Inbox") {
    return todoArray;
  } else if (heading === "Today") {
    return todoArray.filter(isDueToday);
  } else if (heading === "Week") {
    return todoArray.filter(isDueThisWeek);
  } else {
    return todoArray.filter((todo) => todo.name === heading);
  }
}

function clearTodoBox() {
  document.querySelector(".todo-box").innerHTML = "";
}


// Append filtered todos to the DOM
function appendFilteredTodos(filteredTodos) {
  filteredTodos.forEach(createAndAppendTodoDiv);
}


// Create and append todo div
function createAndAppendTodoDiv(todo) {
  const todoDiv = createTodoDiv(todo);
  attachTodoEventListeners(todoDiv, todo);
  document.querySelector(".todo-box").appendChild(todoDiv);
}


// Create the todo div
function createTodoDiv(todo) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");

  todoDiv.innerHTML = `
      <h2>${todo.title}</h2>
      <p>${todo.notes}</p>
      <span id='due-date'>Due: ${todo.dueDate}</span>
      <span id= 'importance'>Importance: ${todo.importance}</span>
      <button class="edit-todo">Edit
      <svg class="svg" viewBox="0 0 512 512">
        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
      </button>
      
      <button class="delete-todo">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
    <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
  <span class="tooltiptext">remove</span>
</button>

    `;
  // showNots(todo, todoDiv);

  // ... (set todo content within the div)
  return todoDiv;
}


// 

// Attach event listeners to todo div
function attachTodoEventListeners(todoDiv, todo) {
  const deleteButton = todoDiv.querySelector(".delete-todo");
  const editButton = todoDiv.querySelector(".edit-todo");

  deleteButton.addEventListener("click", () => handleDeleteTodo(todo, todoDiv));
  editButton.addEventListener("click", () => handleEditTodo(todo, todoDiv));
}


// Delete todo
function handleDeleteTodo(todo, todoDiv) {
  const index = todoArray.indexOf(todo);
  todoArray.splice(index, 1);
  todoDiv.remove();
}


// Edit todo
function handleEditTodo(todo, todoDiv) {
  const editForm = createEditForm(todo);
  // ... (replace todo content with edit form)
  editForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Update the todo data
    todo.title = this.querySelector("#title").value;
    todo.notes = this.querySelector("#notes").value;
    todo.dueDate = this.querySelector("#dueDate").value;
    todo.importance = this.querySelector(
      "input[name='importance']:checked"
    ).value;

    // Update the todo div
    todoDiv.querySelector("h2").textContent = todo.title;
    todoDiv.querySelector("p").textContent = todo.notes;
    todoDiv.querySelector("#due-date").textContent = `Due: ${todo.dueDate}`;
    todoDiv.querySelector(
      "#importance"
    ).textContent = `Importance: ${todo.importance}`;

    // Remove the form
    // filterTodosByHeading(todoArray, getMainSectionHeading());
    // appendTodoToDOM(todoArray);
    this.remove();


    document.getElementById("modal-background").style.display = "none";
  });

  // Append the form to the todo div
  document.getElementById("modal-background").style.display = "block";

  document.querySelector("#todoFormContainer").innerHTML = "";
  document.querySelector("#todoFormContainer").appendChild(editForm);
}


// Create the edit form
function createEditForm(todo) {
  const editForm = document.createElement("form");
  // ... (create form fields with todo data)
  editForm.id = "edit-form";
  editForm.innerHTML = `
    <label for="title">Title:</label>
    <input type="text" id="title" name="title" value="${todo.title}" required>
    <label for="notes">Notes:</label>
    <input type="text" id="notes" name="notes" value="${todo.notes}" required>
    <label for="dueDate">Due Date:</label>
    <input type="date" id="dueDate" name="dueDate" value="${todo.dueDate}" required>
    <div class = 'importance'> Importance:
    <label for="low">
    <input type="radio" id="low" name="importance" value="Low" required ${todo.importance === "Low" ? "checked" : ""}>

      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   id="Layer_1"
   data-name="Layer 1"
   viewBox="0 0 122.88 122.88"
   version="1.1"
   sodipodi:docname="low-risk-icon.svg"
   inkscape:version="1.1.2 (0a00cf5339, 2022-02-04)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview13"
     pagecolor="#ffffff"
     bordercolor="#999999"
     borderopacity="1"
     inkscape:pageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="0"
     showgrid="false"
     inkscape:zoom="3.8248699"
     inkscape:cx="61.309275"
     inkscape:cy="61.309275"
     inkscape:window-width="1366"
     inkscape:window-height="704"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1" 
     inkscape:current-layer="Layer_1" />
  <defs
     id="defs4">
    <style
       id="style2">.cls-1{fill:#333;}.cls-2{fill:#88c400;}</style>
  </defs>
  <path
     class="cls-1"
     d="M19.33,106.17A61.43,61.43,0,0,1,61.44,0,60.91,60.91,0,0,1,84.87,4.66,62,62,0,0,1,118.2,38a60.85,60.85,0,0,1-5.58,57.24,62.84,62.84,0,0,1-7.6,9.3.5.5,0,0,1-.7,0l-3.07-3.06a.45.45,0,0,1-.17-.11l-8.56-8.56a.5.5,0,0,1,0-.7L97,87.62a.5.5,0,0,1,.7,0l6.61,6.61a54.73,54.73,0,0,0,3.85-5.7,53.34,53.34,0,0,0,7.34-26H106.4a.5.5,0,0,1-.5-.5V55.7a.5.5,0,0,1,.5-.5h8.76a53.73,53.73,0,0,0-4.72-16.58,54.59,54.59,0,0,0-9.82-14.37l-5.86,5.86a.5.5,0,0,1-.7,0l-4.49-4.49a.5.5,0,0,1,0-.7l5.65-5.65a54.23,54.23,0,0,0-14.87-8.5c-5.25-2-8.73-3.15-14.6-3.38v8a.5.5,0,0,1-.5.5H58.89a.5.5,0,0,1-.5-.5V7.59c-5.83.55-13.55,2-18.69,4.29a54.32,54.32,0,0,0-14.42,9.3l5.87,5.87a.5.5,0,0,1,0,.7l-4.49,4.49a.5.5,0,0,1-.7,0l-5.8-5.8a54,54,0,0,0-9,14.86A54.62,54.62,0,0,0,7.44,58.23h9a.5.5,0,0,1,.5.5v6.36a.5.5,0,0,1-.5.5h-9a53.66,53.66,0,0,0,1.35,8.58,53.12,53.12,0,0,0,2.91,8.72,54.31,54.31,0,0,0,3.64,7,52.69,52.69,0,0,0,4.28,6l7.24-7.24a.5.5,0,0,1,.7,0l4.49,4.49a.5.5,0,0,1,0,.7C28,97.93,24,101.9,20,106.15a.48.48,0,0,1-.69,0Z"
     id="path6" />
  <path
     class="cls-2"
     d="M67.22,68.68,36.13,89.17a.54.54,0,0,1-.72-.06l-3.12-3.2a.55.55,0,0,1,0-.73L55.52,57.11c3.35-3.73,7-4.51,9.94-3.61a8.14,8.14,0,0,1,3.76,2.43,8.47,8.47,0,0,1,2,4c.6,3-.43,6.28-4,8.77Z"
     id="path8" />
</svg>

    </label>
    <label for="medium">
    <input type="radio" id="medium" name="importance" value="Medium" required ${todo.importance === "Medium" ? "checked" : ""}>

      <svg
id="Layer_1"
data-name="Layer 1"
viewBox="0 0 122.88 122.88"
version="1.1"
sodipodi:docname="medium-risk-icon.svg"
inkscape:version="1.1.2 (0a00cf5339, 2022-02-04)"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns="http://www.w3.org/2000/svg"
xmlns:svg="http://www.w3.org/2000/svg">
<sodipodi:namedview
  id="namedview15"
  pagecolor="#ffffff"
  bordercolor="#999999"
  borderopacity="1"
  inkscape:pageshadow="0"
  inkscape:pageopacity="0"
  inkscape:pagecheckerboard="0"
  showgrid="false"
  inkscape:zoom="3.8248699"
  inkscape:cx="61.309275"
  inkscape:cy="61.309275"
  inkscape:window-width="1366"
  inkscape:window-height="704"
  inkscape:window-x="0"
  inkscape:window-y="0"
  inkscape:window-maximized="1"
  inkscape:current-layer="Layer_1" />
<defs
  id="defs4">
 <style
    id="style2">.cls-1{fill:#333;}.cls-2{fill:#fe8d00;}</style>
</defs>
<title
  id="title6">medium-risk</title>
<path
  class="cls-1"
  d="M19.33,106.17A61.43,61.43,0,0,1,61.44,0,60.91,60.91,0,0,1,84.87,4.66,62,62,0,0,1,118.2,38a60.85,60.85,0,0,1-5.58,57.24,62.84,62.84,0,0,1-7.6,9.3.5.5,0,0,1-.7,0l-3.07-3.06a.45.45,0,0,1-.17-.11l-8.56-8.56a.5.5,0,0,1,0-.7L97,87.62a.5.5,0,0,1,.7,0l6.61,6.61a54.73,54.73,0,0,0,3.85-5.7,53.34,53.34,0,0,0,7.34-26H106.4a.5.5,0,0,1-.5-.5V55.7a.5.5,0,0,1,.5-.5h8.76a53.73,53.73,0,0,0-4.72-16.58,54.59,54.59,0,0,0-9.82-14.37l-5.86,5.86a.5.5,0,0,1-.7,0l-4.49-4.49a.5.5,0,0,1,0-.7l5.65-5.65a54.23,54.23,0,0,0-14.87-8.5c-5.25-2-8.73-3.15-14.6-3.38v8a.5.5,0,0,1-.5.5H58.89a.5.5,0,0,1-.5-.5V7.59c-5.83.55-13.55,2-18.69,4.29a54.32,54.32,0,0,0-14.42,9.3l5.87,5.87a.5.5,0,0,1,0,.7l-4.49,4.49a.5.5,0,0,1-.7,0l-5.8-5.8a54,54,0,0,0-9,14.86A54.62,54.62,0,0,0,7.44,58.23h9a.5.5,0,0,1,.5.5v6.36a.5.5,0,0,1-.5.5h-9a53.66,53.66,0,0,0,1.35,8.58,53.12,53.12,0,0,0,2.91,8.72,54.31,54.31,0,0,0,3.64,7,52.69,52.69,0,0,0,4.28,6l7.24-7.24a.5.5,0,0,1,.7,0l4.49,4.49a.5.5,0,0,1,0,.7C28,97.93,24,101.9,20,106.15a.48.48,0,0,1-.69,0Z"
  id="path8" />
<path
  class="cls-2"
  d="M54,59.65l5.3-37a.53.53,0,0,1,.52-.5L64.23,22a.55.55,0,0,1,.57.46l5.57,36.15c.56,5-1.26,8.22-3.9,9.83a8.3,8.3,0,0,1-4.31,1.2,8.67,8.67,0,0,1-4.3-1.14c-2.6-1.52-4.41-4.5-3.92-8.81v0Z"
  id="path10" />
</svg>
    </label>
    <label for="high">
    <input type="radio" id="high" name="importance" value="High" required ${todo.importance === "High" ? "checked" : ""}>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.15 122.88"><defs><style>.cls-1{fill:#ff1200;fill-rule:evenodd;}.cls-2{fill:#333;}</style></defs><title>high-risk-alert</title><path class="cls-2" d="M59.75,79.33l25.39,39.89c.77,1.2,1.43,3.66,0,3.66H30.7c-1.43,0-.77-2.46,0-3.66L56.09,79.33a2.31,2.31,0,0,1,3.66,0Zm2.82-29.59,36,5.13a.53.53,0,0,1,.49.51l.2,4.37a.55.55,0,0,1-.45.56L63.62,65.79c-4.87.56-8-1.23-9.62-3.81a8.08,8.08,0,0,1-1.17-4.21,8.3,8.3,0,0,1,1.11-4.2c1.48-2.55,4.4-4.32,8.61-3.84ZM55.7,112.3h4.42v3.91H55.7V112.3Zm4.42-2.71H55.7c-.44-5.37-1.36-8.77-1.36-14.14a3.58,3.58,0,0,1,7.16,0c0,5.36-.93,8.78-1.38,14.14Z"/><path class="cls-1" d="M18.9,103.81A59.87,59.87,0,0,1,1.23,72.24,60.94,60.94,0,0,1,0,60.08,60.09,60.09,0,0,1,115.58,37.16a59.47,59.47,0,0,1-5.46,56,61.68,61.68,0,0,1-7.43,9.09.48.48,0,0,1-.68,0l-3-3a.51.51,0,0,1-.16-.11l-8.37-8.37a.48.48,0,0,1,0-.68l4.39-4.39a.48.48,0,0,1,.68,0L102,92.14a54.88,54.88,0,0,0,3.76-5.57A53,53,0,0,0,109,80.08a51.62,51.62,0,0,0,2.9-9.49,52.26,52.26,0,0,0,1-9.43H104a.49.49,0,0,1-.49-.49V54.46A.5.5,0,0,1,104,54h8.57A52.61,52.61,0,0,0,108,37.76a53.61,53.61,0,0,0-9.6-14l-5.73,5.73a.49.49,0,0,1-.69,0l-4.39-4.39a.5.5,0,0,1,0-.68l5.53-5.53a53.15,53.15,0,0,0-14.54-8.31C73.43,8.6,70,7.45,64.3,7.23v7.85a.5.5,0,0,1-.49.49H57.59a.49.49,0,0,1-.49-.49V7.42c-5.7.54-13.25,2-18.28,4.2a52.73,52.73,0,0,0-14.1,9.09l5.74,5.74a.5.5,0,0,1,0,.68l-4.39,4.39a.49.49,0,0,1-.69,0l-5.67-5.67A52.52,52.52,0,0,0,7.28,56.94H16.1a.48.48,0,0,1,.49.49v6.22a.48.48,0,0,1-.49.48H7.33a53.37,53.37,0,0,0,1.32,8.39,52.72,52.72,0,0,0,2.85,8.53,53.9,53.9,0,0,0,3.56,6.83,52.39,52.39,0,0,0,4.18,5.83l7.08-7.08a.51.51,0,0,1,.69,0L31.4,91a.51.51,0,0,1,0,.69c-4,4.05-7.91,7.93-11.82,12.08a.47.47,0,0,1-.68,0Z"/></svg>
    </label>
    </div>
    <input type="submit" value="Save Changes">
`;
  return editForm;
}



export function appendTodoToDOM(todoArray) {

  // Get the main section's heading
  const heading = getMainSectionHeading()

  // Filter the todos based on the heading
  const filteredTodos = filterTodosByHeading(todoArray, heading);

  clearTodoBox();

  // Append the filtered todos to the DOM
  appendFilteredTodos(filteredTodos);


}
