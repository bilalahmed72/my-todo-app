var addList = document.getElementById("list")
function addtodo (){
    var adds = document.getElementById("todo-items")

    //create list tag
    var list = document.createElement('tr')
    var col = document.createElement('td')
    var col1 = document.createElement('td')
    var col2 = document.createElement('td')
    var liText = document.createTextNode(adds.value)
    adds.value = ""
    list.appendChild(col)
    col.appendChild(liText)
    addList.appendChild(list)

    //create edit button tag
    var edbut = document.createElement("button")
    var editText = document.createTextNode("")
    edbut.appendChild(editText)
    edbut.setAttribute("class","btn btn-primary fa fa-pencil-square-o editb")
    edbut.setAttribute("onclick","editItem(this)")
    col1.appendChild(edbut)
    list.appendChild(col1)
    col1.setAttribute("class","rowbar")
    
    //create del button tag
    var delbut = document.createElement("button")
    var deltext = document.createTextNode("")
    delbut.setAttribute("class","btn btn-danger fa fa-trash removeb")
    delbut.setAttribute("onclick","delItem(this)")
    delbut.appendChild(deltext)
    col2.appendChild(delbut)
    list.appendChild(col2)
    col2.setAttribute("class","row2")

    
}
   
function delItem(e){
    e.parentNode.parentNode.remove()
}

function deleteall(){
    list.innerHTML = ""
}

function editItem(e){
    console.log(e.parentNode.parentNode.firstChild.textContent,"e.parentNode.parentNode.firstChild")
    var val1 = e.parentNode.parentNode.firstChild.textContent;
    var editValue = prompt("Enter edit task",val1)
    console.log(editValue)
    e.parentNode.parentNode.firstChild.textContent = editValue
}


