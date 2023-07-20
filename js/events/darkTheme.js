const d = document,
  local = localStorage;
export default function toggleTheme(btnTheme){
  const etDark = d.querySelectorAll("[data-dark-theme]"),
  $template = d.getElementById("template-task").content;

  const darkTheme = ()=>{
    const taskDark = d.querySelectorAll(".container-task");
    console.log(taskDark);
    etDark.forEach(el=>{
      el.classList.add("theme-dark");
    });
    
    //Task model and task current
    $template.querySelector(".container-task").classList.add("taskList-dark");
    if(taskDark.length !== 0 ){
      taskDark.forEach((el)=>{
        el.classList.add("taskList-dark");
      });
    }
    local.setItem("Mode","dark");
  };
  const ligthTheme = ()=>{
    const taskDark = d.querySelectorAll(".container-task");

    etDark.forEach(el=>{
      el.classList.remove('theme-dark');
    });

    //Task model and task current
    $template.querySelector(".container-task").classList.remove("taskList-dark");
    if(taskDark.length !== 0 ){
      taskDark.forEach((el)=>{
        el.classList.remove("taskList-dark");
      });
    }
    local.setItem("Mode","ligth");
  };


  d.addEventListener("click", e =>{
    if(e.target.matches(btnTheme) || e.target.matches(`${btnTheme} *`)){
     console.log("CLICK", local.getItem("Mode"))
      if(local.getItem("Mode") !== "dark"){
        darkTheme();
      }else {
        ligthTheme();
      }
    }
  });


  d.addEventListener("DOMContentLoaded",(e)=>{
    console.log("ENTRE AL DOm");
    if(local.getItem("Mode") === null) local.setItem("Mode","ligth");
    
    if(local.getItem("Mode") === "dark") darkTheme();
  
    if(local.getItem("Mode") === "ligth") ligthTheme();
  });
}

