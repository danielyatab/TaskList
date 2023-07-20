import toggleTheme from "./events/darkTheme.js";
import addTask from "./events/taskAdd.js";

const d =document,
  w= window;

// Carga antes de diseño
d.addEventListener("DOMContentLoaded",(e)=>{
});
toggleTheme("#btn-theme");
addTask("#btn-task","#btn-delete","#input-task");
