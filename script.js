function add(){
    const Todo=document.getElementById("todo-input");
    const list=document.getElementById("todo-list");
    console.log(Todo.value);

   if( Todo.value.trim() !==""){

    const addlist=document.createElement("a");
    
    addlist.className="todo-item" ;
addlist.innerHTML=`
<span>${Todo.value}</span>

 <button onclick="removeTodo(this)">delete</button>

`;



list.appendChild(addlist)

Todo.value="";

   }
}
function removeTodo(button){
    

    const removeTodo=button.parentElement;
    removeTodo.remove();
}




