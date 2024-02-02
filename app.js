/**
 * The addTask function adds a new task to a task list and creates a delete button for each task.
 */
function addTask(){
    const todoValue = document.getElementById('taskInput').value;

    // check if input is not empty
    if(todoValue !== ""){
        var li = document.createElement('li');
        const listValue = document.createTextNode(todoValue)
        li.appendChild(listValue)

        document.getElementById('taskList').appendChild(li)

        // Add a button
        var button = document.createElement('button');
        const buttonValue = document.createTextNode("Delete Task")
        button.appendChild(buttonValue)
        button.onclick = function(){
            li.remove()
        }

        document.getElementById('taskInput').value = ""
        
        li.appendChild(button)
    }else{
        alert("Please input a value");
    }
}