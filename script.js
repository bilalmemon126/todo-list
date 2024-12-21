let addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', function () {
    let input = document.getElementById("addText").value;
    let input1 = document.getElementById("addText").value = "";
    if(input === ""){
        alert("plaese Enter Value")
    }
    else{
        let todo = document.getElementById("todo")
    
        let task = document.createElement("div")
        task.classList.add('task')
    
        task.innerHTML = `
            <p class="para">${input}</p>
            <button class="edit"><span class="material-symbols-outlined">edit</span></button>
            <button class="delete"><span class="material-symbols-outlined">delete</span></button>`
    
        todo.appendChild(task)
    
    
    
        let dlt = task.querySelector(".delete");
        dlt.addEventListener("click", function(){
            task.remove();
    
        })
    
    
        let edit = task.querySelector(".edit");
        edit.addEventListener("click", function(){
            para = task.querySelector(".para").innerHTML;
            input = document.getElementById("addText").value = para;
            task.remove();
        })

    }

})
