// Declaring the variables for the input, the input value,
// ul and button

const inputEl = document.querySelector('#input-el')

const tasksList = document.querySelector('.tasks-list')

const saveBtn = document.querySelector('#save-btn')

// ------------------------------------
// LI, DIV, IPUT AND BUTTONS ----------------------------------------

const li = document.createElement('li')
li.className = 'list-item'

const div = document.createElement('div')
div.className = 'task'



const inputField = document.createElement('input')
inputField.id = "saved-task"
inputField.value = 'OKKKKADKADKASDKMAS '


const editBtn = document.createElement('button')
editBtn.id = "edit-btn"
editBtn.textContent = 'EDIT'

const delBtn = document.createElement('button')
delBtn.id = "delete-btn"
delBtn.textContent = 'DELETE'
// ----------------------------------------


// Adding a Event Listener to saveBtn
saveBtn.addEventListener('click', () =>{
  // savedTask.value = inputText
  div.append(inputField, editBtn, delBtn)
  li.appendChild(div)
  let listItems = li.innerHTML
  tasksList.innerHTML += listItems
  insertValue(tasksList)
}
)

function insertValue(element){
  let children = element.childNodes
  for(let i=0; i < children.length; i++){
    if(children[i].childNodes[0].value == ''){
      children[children.length - 1].childNodes[0].value = inputEl.value
    }
  }
}
// let children = tasksList.childNodes
