const d = document,
  local = localStorage;
 
export default function addTask(btnAdd, btnDelete,input){
  let localTask=[];

  const $template = d.getElementById("template-task").content,
    $listTask = d.querySelector(".list-task"),
    $fragment = d.createDocumentFragment(),
    $input = d.querySelector(input);

  const createTasks =()=>{
    localTask = JSON.parse(local.getItem("Task"));
    $listTask.textContent ="";
    localTask.forEach((el)=>{
      $template.querySelector("p").textContent = el;
      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $listTask.appendChild($fragment);
  }

  const addTask=()=>{
    if($input.value !== ""){
        localTask.push($input.value);
        local.setItem("Task",JSON.stringify(localTask));
        createTasks();
        $input.value = "";
      }else {
        alert("Ingrese un texto")
      }
  }

  d.addEventListener("click",(e)=>{
    if(e.target.matches(btnAdd) || e.target.matches(`${btnAdd} *`)){
      addTask();
    }

    if(e.target.matches(btnDelete) || e.target.matches(`${btnDelete} *`)){
      const $taskS = d.querySelectorAll(".container-task"),
        span = e.target.parentElement;
      let index = 0;
      for (let i = 0; i < $taskS.length; i++) {
        if($taskS[i]===span) index = i
      }
      localTask.splice(index,1);
      local.setItem("Task",JSON.stringify(localTask));
      createTasks();
    }
  })

  d.addEventListener("DOMContentLoaded",(e)=>{
    if(local.getItem("Task") === null){
      local.setItem("Task",JSON.stringify(localTask));
    } else{
      createTasks();
    }
  });


  d.addEventListener("keyup",(e)=>{
    if(e.key === "Enter"){
      addTask();
    }
  })
}