document.addEventListener('DOMContentLoaded', () => {
    // our code will go inside here



    let textField1 = document.getElementById("textField1");
    let plusButton = document.getElementById("plusButton");
    let toDoList = document.getElementById("toDoList"); // grab ul
    let completedlist = document.getElementById("completedList");

    textField1.addEventListener('keypress', function(e) {
        const todo = textField1.value;
        if (e.keyCode === 13)
            if (textField1.value) {
                addItem(todo); // addItem(todo)
                textField1.value = "";
            }

    })

    plusButton.addEventListener('click', function() {
        const todo = textField1.value;
        if (todo) {
            addItem(todo);
            textField1.value = "";
        }

    })

    function addItem(newItem) {
        const list = document.createElement("li");
        const task = document.createElement("div");
        const taskText = document.createTextNode(newItem);
        const check = document.createElement("div");
        const checkIcon = document.createElement("i");
        const deleteItem = document.createElement("div");
        const deleteIcon = document.createElement("i");


        list.setAttribute("class", "todo-list");

        task.setAttribute("class", "column tasks");
        task.appendChild(taskText);
        list.appendChild(task);
        toDoList.append(list);

        check.setAttribute("class", "column check");
        checkIcon.setAttribute("class", "fas fa-check");
        deleteItem.setAttribute("class", "column delete");
        deleteIcon.setAttribute("class", "fas fa-trash");

        check.appendChild(checkIcon);
        list.appendChild(check);
        toDoList.append(list);

        deleteItem.appendChild(deleteIcon);
        list.appendChild(deleteItem);
        toDoList.append(list);

        //Complete Item
        checkIcon.addEventListener('click', completeItem);
        //remove Item
        deleteIcon.addEventListener('click', deleteItems);

    }

    function completeItem() {
        let item = this.parentNode.parentNode; //grab li
        let parent = item.parentNode; // grab ul
        let id = parent.id;

        let finisedTask = document.getElementById('completedList') // got stuck here due to wrong id name
        parent.removeChild(item);
        console.log(item.childNodes[1]);
        item.removeChild(item.childNodes[1]); // got stuck here 
        console.log(item.childNodes[1]);
        finisedTask.insertBefore(item, finisedTask.childNodes[0]);

    }

    function deleteItems() {
        //console.log("running");
        let item = this.parentNode.parentNode;
        //console.log("item is "+ item);
        let parent = item.parentNode;
        //console.log("parent is "+ parent);
        parent.removeChild(item);
    }
})