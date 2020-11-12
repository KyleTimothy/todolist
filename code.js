
var addToDoButton = document.getElementById("addToDo")
addToDoButton.addEventListener('click', AddButton =>{

var ul = document.getElementById("dynamicList")
var candidate = document.getElementById("candidate")

var li = document.createElement("li");

li.setAttribute('id', candidate.value)

li.appendChild(document.createTextNode(candidate.value))

return ul.appendChild(li)



})

var removeItem = document.getElementById("deleteToDo")

removeItem.addEventListener('click', deleteButton =>{

 // addToDoButton
var ul = document.getElementById("dynamicList")
var candidate = document.getElementById("candidate")

var item = document.getElementById(candidate.value)
ul.removeChild(item)


})






/* 
addToDoButton.addEventListener('click', Button1 =>{

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');





    var paragraph = document.createElement('li')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph)

   



})


addToDoButton.addEventListener('click', trashCan =>{
let deleteToDoButton = document.getElementById('deleteToDo')
let toDoContainer = document.getElementById('toDoContainer')

})



 */



/*
  

1. create text box 
2. enter data in textbox 
3. make newly created data in the textbox into list 
4. list childs under them. 



  */