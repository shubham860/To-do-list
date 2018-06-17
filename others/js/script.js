function todolist() {
  if(input.value == "")
  {
    alert("YOU MUST ENTER SOME TASK..");
  }
  else{
       var item =  document.getElementsById("btn1").value;
       var text = document.createTextnode(item);
       var newitem = document.createElement("li");
       newitem.appendChild(text);
       document.getElementById("todolist").appendChild();
      }
}
