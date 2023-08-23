let input = document.getElementById("texte");
let tasklist = document.getElementById("tasklist");

function addTask(){
    if(input.value ==""){
        return null
    }else{
        let li =document.createElement("li");
        li.innerHTML = input.value;
        tasklist.appendChild(li);


        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)

    }
    input.value ="";
    saveData()
}

tasklist.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("selected")
        saveData()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data",tasklist.innerHTML)
}
function showData(){
    tasklist.innerHTML = localStorage.getItem("data")
}
showData()