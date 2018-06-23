function list() {
  var item =  document.getElementById("ip").value;
  if(item == "")
  {
    window.alert("YOU MUST ENTER SOME TASK..");
  }
  else
  {
      document.getElementById("todolist").innerHTML += '<li><input type="checkbox" id="myCheck" class="strikethrough"><label for="strike" class="strikeThis">'+item+'</label></li>';
       document.getElementById("ip").value = "";
  }
}


function refresh()
{
  document.getElementById("todolist").innerHTML = "";
}
