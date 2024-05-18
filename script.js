const inputBox = document.getElementById("input-box");
const noteContainer = document.getElementById("note-container");
const limit = document.getElementById("limit");

function addNote(){
    if(inputBox.value === ""){
        alert("You must write something...")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        noteContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    limit.innerText = "0";
    saveData();
}

inputBox.addEventListener("keypress", function(){
    if(inputBox.value.length === 50){
        alert("50 Characters Max")
    }
})

inputBox.addEventListener("input", function(){
    if(inputBox.value.length < 51){
        limit.innerText = inputBox.value.length
        if(inputBox.value.length === 50){
            limit.style.color = 'red'
        }else{
            limit.style.color = '#000'
        }
    }
})

noteContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", noteContainer.innerHTML);
}

function showTask(){
    noteContainer.innerHTML = localStorage.getItem("data");
}

showTask();