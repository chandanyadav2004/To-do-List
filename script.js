const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');

function addTask(){
    if(inputBox.value==""){
        alert("You Must Write SomeThing");
    }
    else{
        let li=document.createElement("li");
            li.innerHTML=inputBox.value;
            listContainer.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\v00df";
            li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

