import { addProject } from "./ui"; 
import { selectLi } from "./task";

const addProjectBtn = document.querySelector('.add-project-btn');
selectLi();

addProjectBtn.addEventListener('click', addProject)


