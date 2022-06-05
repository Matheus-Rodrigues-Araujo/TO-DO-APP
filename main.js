// Declaring the most important variables

const inputEl = document.querySelector('#input-el')
const saveButton = document.querySelector('#save-input')
const item = document.getElementsByTagName('li')
const ul = document.getElementById('ul')


// Adding a Event Listerner method toi the saveButton
inputEl.addEventListener('keydown', e => {
  // ul.classList.add('tasks-list')
  if (e.code === 'Enter' && inputEl.value.length) {
    ul.classList.add('tasks-list')
    addTask()
  }
})

saveButton.addEventListener('click', () => {
  // If the input.value.length is not null, the user can save the task by calling the add Task function
  if (inputEl.value.length) {
    ul.classList.add('tasks-list')
    addTask()
  }
})

function addTask() {
  // Variable li is created
  const li = document.createElement('li')
  // The variable 'li' is passed as an argument to the createTask function
  createTask(li)

  // ul append what was built by the createTask function
  ul.append(li)

  // When the task is saved, the inputEl.value is deleted
  inputEl.value = ''
}

function createTask(element) {
  // INPUT
  // Creating an input element and setting the input.value to input.value and providing the disabled attribute
  const taskInput = document.createElement('input')
  taskInput.value = inputEl.value
  taskInput.setAttribute('disabled', '')
  taskInput.classList.toggle('input-disabled')

  // EDIT BUTTON
  // Creating the edit button and adding a classlist to it
  // and a textContent
  const editBtn = document.createElement('button')
  editBtn.classList.add('edit-style')
  editBtn.textContent = 'EDIT'
  // editBtn EventListener
  editBtn.addEventListener('click', () => {
    taskInput.classList.toggle('input-disabled')
    taskInput.toggleAttribute('disabled')
  })

  // DELETE BUTTON
  // Creating the delete button and adding a classlist to it
  // and a textContent
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-style')
  deleteBtn.textContent = 'DELETE'

  // deleteBtn EventListener
  deleteBtn.addEventListener('click', () => {
    element.remove()
    //If the ul has no children, the class 'tasks-list' will be removed
    if(!ul.childElementCount){
      ul.classList.remove('tasks-list')
    }
  })
  // Returns the elements that were created
  return element.append(taskInput, editBtn, deleteBtn)
}
