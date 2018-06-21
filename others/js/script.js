var count = 0;
function list() {
  var item =  document.getElementById("ip").value;
  if(item == "")
  {
    window.alert("YOU MUST ENTER SOME TASK..");
  }
  else
  {
      count += 1;

      document.getElementById("todolist").innerHTML += '<li id="'+count+'"><input type="checkbox" id="myCheck" onclick="strike()" class="strikethrough"> <label for="packersOff" class="strikeThis">'+item+'</label></li>';
       document.getElementById("ip").value = "";
  }
}

function del(count)
{
  document.getElementById(count).innerHTML = "";
}

function refresh()
{
  document.getElementById("todolist").innerHTML = "";
}
