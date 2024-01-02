import { add } from "date-fns";
import { Todo } from "./todo.js";
import { appendTodoToDOM } from "./todo.js";

export const todoArray = [

  //default todos
  {
    dueDate: "2023-12-14" , 
    importance: "low",
    name: "Inbox",
    notes: "lorem ipsum",
    title: "keshu"
  },
  {
    dueDate: "2023-12-14" , 
    importance: "low",
    name: "Inbox",
    notes: "lorem ipsum",
    title: "keshu"
  },
  {
    dueDate: "2023-12-14" , 
    importance: "low",
    name: "Inbox",
    notes: "lorem ipsum",
    title: "keshu"
  }
  
];

//project list Array with default projects
const projectList = ['Default Project 1', 'Default Project 2', 'Default Project 3'];

appendProjectsFromList();
// appendTodoToDOM(todoArray);
const mainSection = document.querySelector(".main-section");

export function createForm() {
  // Create form element

  if (!document.querySelector("#todoForm")) {
    const form = document.createElement("form");
    form.id = "todoForm";
    form.innerHTML = `

        <input type="text" id="title" name="title" required placeholder = 'title' >
        <label for="dueDate">Due Date:</label>
        <input type="date" id="dueDate" name="dueDate" required> 
        <label for="notes">Notes:</label>
        <textarea id="notes" name="notes"></textarea>

        <div class="importance">Importance:
        <label for="low">
        <input type="radio" id="low" name="importance" value="low" required>
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
        <input type="radio" id="medium" name="importance" value="medium">
        
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
        <input type="radio" id="high" name="importance" value="high">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.15 122.88"><defs><style>.cls-1{fill:#ff1200;fill-rule:evenodd;}.cls-2{fill:#333;}</style></defs><title>high-risk-alert</title><path class="cls-2" d="M59.75,79.33l25.39,39.89c.77,1.2,1.43,3.66,0,3.66H30.7c-1.43,0-.77-2.46,0-3.66L56.09,79.33a2.31,2.31,0,0,1,3.66,0Zm2.82-29.59,36,5.13a.53.53,0,0,1,.49.51l.2,4.37a.55.55,0,0,1-.45.56L63.62,65.79c-4.87.56-8-1.23-9.62-3.81a8.08,8.08,0,0,1-1.17-4.21,8.3,8.3,0,0,1,1.11-4.2c1.48-2.55,4.4-4.32,8.61-3.84ZM55.7,112.3h4.42v3.91H55.7V112.3Zm4.42-2.71H55.7c-.44-5.37-1.36-8.77-1.36-14.14a3.58,3.58,0,0,1,7.16,0c0,5.36-.93,8.78-1.38,14.14Z"/><path class="cls-1" d="M18.9,103.81A59.87,59.87,0,0,1,1.23,72.24,60.94,60.94,0,0,1,0,60.08,60.09,60.09,0,0,1,115.58,37.16a59.47,59.47,0,0,1-5.46,56,61.68,61.68,0,0,1-7.43,9.09.48.48,0,0,1-.68,0l-3-3a.51.51,0,0,1-.16-.11l-8.37-8.37a.48.48,0,0,1,0-.68l4.39-4.39a.48.48,0,0,1,.68,0L102,92.14a54.88,54.88,0,0,0,3.76-5.57A53,53,0,0,0,109,80.08a51.62,51.62,0,0,0,2.9-9.49,52.26,52.26,0,0,0,1-9.43H104a.49.49,0,0,1-.49-.49V54.46A.5.5,0,0,1,104,54h8.57A52.61,52.61,0,0,0,108,37.76a53.61,53.61,0,0,0-9.6-14l-5.73,5.73a.49.49,0,0,1-.69,0l-4.39-4.39a.5.5,0,0,1,0-.68l5.53-5.53a53.15,53.15,0,0,0-14.54-8.31C73.43,8.6,70,7.45,64.3,7.23v7.85a.5.5,0,0,1-.49.49H57.59a.49.49,0,0,1-.49-.49V7.42c-5.7.54-13.25,2-18.28,4.2a52.73,52.73,0,0,0-14.1,9.09l5.74,5.74a.5.5,0,0,1,0,.68l-4.39,4.39a.49.49,0,0,1-.69,0l-5.67-5.67A52.52,52.52,0,0,0,7.28,56.94H16.1a.48.48,0,0,1,.49.49v6.22a.48.48,0,0,1-.49.48H7.33a53.37,53.37,0,0,0,1.32,8.39,52.72,52.72,0,0,0,2.85,8.53,53.9,53.9,0,0,0,3.56,6.83,52.39,52.39,0,0,0,4.18,5.83l7.08-7.08a.51.51,0,0,1,.69,0L31.4,91a.51.51,0,0,1,0,.69c-4,4.05-7.91,7.93-11.82,12.08a.47.47,0,0,1-.68,0Z"/></svg>
        </label></div>
        <div class= 'form-btn'>
        <input type="submit" value="Submit">
        <button type="button" id="cancel">Cancel</button></div>
    `;

    // Add event listener to the form
    formSubmissionEvent(form);

    // Append the form to the body of the document
    document.getElementById("todoFormContainer").appendChild(form);

    // Add event listener to the cancel button
    formCancelEvent();
  }
}

function formSubmissionEvent(form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let todoData = Object.fromEntries(new FormData(event.target));
    // todo.push(Object.fromEntries(new FormData(event.target)));

    todoData.name = currentTabName();

    todoArray.push(todoData);
    appendTodoToDOM(todoArray);
    // console.log(todoArray);
    form.reset();
    form.remove();
    document.getElementById("modal-background").style.display = "none";
  });
}

function formCancelEvent() {
  document.getElementById("cancel").addEventListener("click", function () {
    document.getElementById("modal-background").style.display = "none";
    document.getElementById("todoForm").reset();
  });
}

export function createFormButton() {
  // Check for existing button with the class "create-form-button"
  if (!document.querySelector(".create-form-button")) {
    // Create button element
    const button = document.createElement("button");
    button.textContent = "Add Todo";
    button.classList.add("create-form-button"); // Assign the class

    // Add event listener to the button
    // button.addEventListener("click", createForm);
    button.addEventListener("click", function () {
      createForm();
      document.getElementById("modal-background").style.display = "block";
    });

    // Append the button to the mainSection
    mainSection.querySelector('.top-section').appendChild(button);
    // mainSection.appendChild(button);
  }
}

// Function to create a new project div

function createProjectDiv(projectValue) {
  let div = document.createElement("div");
  div.classList.add("project");

  // Create a span for the project value
  let projectSpan = document.createElement("span");
  projectSpan.textContent = projectValue;

  // Create a span for the delete button
  let deleteButton = document.createElement("span");
  // deleteButton.textContent = "Delete"; // You can replace this with your delete icon
  deleteButton.innerHTML = `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="109.484px" height="122.88px" viewBox="0 0 109.484 122.88" enable-background="new 0 0 109.484 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"/></g></svg>`; // You can replace this with your delete icon
  deleteButton.classList.add("delete-button"); // Add a class for styling

  // Append the project value and delete button to the div
  div.appendChild(projectSpan);
  div.appendChild(deleteButton);

  return div;
}

// Function to handle the delete button click event
function handleDeleteButtonClick(event) {
  event.stopPropagation();

  // Get the project's name
  const projectName = this.parentNode.querySelector('span').textContent;

 
  // Find the index of the project in the projectList array
  const projectIndex = projectList.indexOf(projectName);

  // If the project is in the array, remove it
  if (projectIndex !== -1) {
    projectList.splice(projectIndex, 1);
  }

  for (let i = todoArray.length - 1; i >= 0; i--) {
    if (todoArray[i].name === projectName) {
      todoArray.splice(i, 1);
    }
  }

  this.parentNode.remove();

  let inboxElement = document.querySelector(".list__inbox");

  // Create a new event
  let clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  // Dispatch the event
  inboxElement.dispatchEvent(clickEvent);
}

// Function to handle the project span click event
function handleProjectSpanClick() {
  // Get the clicked project's name
  const projectName = this.textContent;
  // console.log(projectName)
  // Set the main section's heading to the project's name
  document.querySelector(".top-section > h1").textContent = projectName;


  appendTodoToDOM(todoArray);
  // Call createFormButton to allow the user to add todo's to the project
  createFormButton();
}


function appendProjectsFromList() {
  // Get the project list div
  const projectListDiv = document.querySelector(".project-list");

  // Clear the current projects
  projectListDiv.innerHTML = '';

  // Append the projects from the projectList array
  projectList.forEach(projectName => {
    let div = createProjectDiv(projectName);

    // Add event listeners to the delete button and project span
    div.querySelector(".delete-button").addEventListener("click", handleDeleteButtonClick);
    div.querySelector("span").addEventListener("click", handleProjectSpanClick);

    projectListDiv.appendChild(div);
  });
}


// Function to handle the form submit event
function handleFormSubmit(event) {
  event.preventDefault();
  let projectValue = this.querySelector("input").value;
  // let div = createProjectDiv(projectValue);

  projectList.push(projectValue);


  appendProjectsFromList();
  // Add event listeners to the delete button and project span
  // div.querySelector(".delete-button").addEventListener("click", handleDeleteButtonClick);
  // div.querySelector("span").addEventListener("click", handleProjectSpanClick);

  // document.querySelector(".project-list").appendChild(div);
  this.querySelector("input").value = "";
  this.parentNode.remove();

  // projectList.push(projectValue);
  // console.log(projectList);
}

export function addProject() {
  // Check if the projectInput div already exists
  if (!document.querySelector("#project")) {
    const projectInput = document.createElement("div");

    projectInput.innerHTML = `
      <form>
        <label for="project">Project:</label><br>
        <input type="text" id="project" name="project" placeholder='Folder:Name' required><br>
        <input type="submit" value="Submit">
      </form>`;

    // Add event listener to the form
    projectInput.querySelector("form").addEventListener("submit", handleFormSubmit);

    document.querySelector(".side-bar").appendChild(projectInput);
  }
}

function currentTabName() {
  return document.querySelector(".main-section h1").textContent;
}
