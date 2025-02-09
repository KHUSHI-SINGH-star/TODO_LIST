const task_add=document.querySelector(".taskAdder");
const title=document.querySelector(".title");
const date=document.querySelector(".date");
const description=document.querySelector(".Description");
const output=document.querySelector(".output");

task_add.addEventListener("click",()=>{
    let taskText=title.value.trim();
    if(taskText===""){
        alert("please enter task");
    }else{

 let DateText=Date.value;
 let datetext=Number(DateText);
 let descriptionText=description.value;
 let text=`TITLE:${taskText}
 DATE:${datetext}
 DESCRIPTION:${descriptionText}`;
let newElement=document.createElement("ul");

newElement.innerHTML=`<input type=checkbox> ${text} <button class="delete_button"> delete</button>`;
output.appendChild(newElement);

title.value="";
description.value="";
date.value="";


const delBtn=newElement.querySelector("button");
delBtn.addEventListener("click",()=>{
    newElement.remove();
})
  } })
  

