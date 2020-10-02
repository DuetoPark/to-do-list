var insertBtn = document.getElementById('insertBtn');
var data = document.getElementById('inputData');
var toDoList = document.getElementById('toDoList');
var cnt=1;


insertBtn.addEventListener('click',clickButton);


function newList(cnt){
  var appendList = document.createElement('p');
  appendList.setAttribute("id","p"+cnt);
  appendList.textContent = data.value;
  appendList.innerHTML = "<input type='checkbox' id='ckbox"+cnt+"' onclick='checkedEvent("+cnt+")' ><label for='ckbox"+cnt+"'></label>" + appendList.textContent + " <button onclick='remove("+cnt+")' class='setting_X_button'>X</button>";
  toDoList.appendChild(appendList);
}

function clickButton(){
  if(data.value === ""){
    alert("please type a task");
  }else{
  newList(cnt);
  data.value = "";
  data.autofocus;
  cnt = cnt + 1;
  }
}



function enterKeyEvent(){
  if(window.event.keyCode == 13){
    clickButton();
  }
}



function remove(cnt){
  var list = document.getElementById("p"+cnt);
  toDoList.removeChild(list);
}

function checkedEvent(cnt){
  var checkBox = document.getElementById('ckbox'+cnt);
  var list = document.getElementById("p"+cnt);

  if (checkBox.checked == true) {
    list.className = "status_complete"
  } else {
    list.className = "status_notComplete"
  }
}
