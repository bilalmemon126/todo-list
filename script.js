let addBtn = document.getElementById('addBtn')
let i = 0;

addBtn.addEventListener('click', function () {
    input = document.getElementById("addText").value;
    i++;
    if(input === ""){
        alert("plaese Enter Value")
    }
    else{
        todo = document.getElementById("todo")
        task = document.createElement("div")
        task.classList.add("task")
        task.id = "task"+i;
        todo.appendChild(task)

        para = document.createElement("p")
        para.classList.add("para")
        para.innerHTML = input
        task.appendChild(para)

        input = document.getElementById("addText").value = "";

        edit = document.createElement("button")
        edit.classList.add("edit")
        edit.id = "edit"+i;
        edit.innerHTML = `<span class="material-symbols-outlined">edit</span>`
        task.appendChild(edit)

        edit.addEventListener("click", function(){
            get = this;
            text = get.previousElementSibling.innerHTML;
            input = document.getElementById("addText").value = text;

            updateBtn = document.getElementById("updateBtn")
            updateBtn.classList.remove("hide")
            addBtn.classList.add("hide")

            updateBtn.addEventListener("click", function(){
                input = document.getElementById("addText").value;
                if(input === ''){
                    // alert("plaese Enter Value")
                }
                else{
                    addBtn.classList.remove("hide")
                    updateBtn.classList.add("hide")
                    text = get.previousElementSibling.innerHTML = input;
                    input = document.getElementById("addText").value = '';
                }
            })

        })

        dlt = document.createElement("button")
        dlt.classList.add("dlt")
        edit.id = "dlt"+i;
        dlt.innerHTML = `<span class="material-symbols-outlined">delete</span>`
        task.appendChild(dlt)

        dlt.addEventListener("click", function(){
            this.parentElement.remove();
        })


        task.draggable = true;
        task.addEventListener("dragstart", function(event){
            event.dataTransfer.setData("text/plain", event.target.id);
        })


        todo.addEventListener("dragover", function(event){
            event.preventDefault();
        })
        todo.addEventListener("drop", function(event){
            event.preventDefault();
            data = event.dataTransfer.getData("text/plain");
            dragElement = document.getElementById(data)
            event.target.appendChild(dragElement)
        })


        doing = document.getElementById("doing")
        doing.addEventListener("dragover", function(event){
            event.preventDefault();
        })
        doing.addEventListener("drop", function(event){
            event.preventDefault();
            data = event.dataTransfer.getData("text/plain");
            dragElement = document.getElementById(data)
            event.target.appendChild(dragElement)
        })


        done = document.getElementById("done")
        done.addEventListener("dragover", function(event){
            event.preventDefault();
        })
        done.addEventListener("drop", function(event){
            event.preventDefault();
            data = event.dataTransfer.getData("text/plain");
            dragElement = document.getElementById(data)
            event.target.appendChild(dragElement)
        })



    }

})
