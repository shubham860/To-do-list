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
      
      document.getElementById("todolist").innerHTML += '<li id="'+count+'"><button type="button" onclick="del('+count+')"></button>'+item+'</li>';
       document.getElementById("ip").value = "";
  }
}

function del(count)
{
  document.getElementById(count).innerHTML = "";
}

function clear()
{
  document.getElementById("todolist").innerHTML = "";
}
