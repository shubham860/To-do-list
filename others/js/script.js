function list() {
  var item =  document.getElementsByClassName("input").value;
  if(item == "")
  {
    window.alert("YOU MUST ENTER SOME TASK..");
  }
  else{
       var item =  document.getElementsByClassName("input").value;
       var text = document.createTextnode(item);
       var newitem = document.createElement("li");
       newitem.appendChild(text);
       document.getElementById("todolist").appendChild();
      }
}
