const tasks = JSON.parse(localStorage.getItem('list_tarefas')) || []

const body = document.querySelector('body')

// Inputs
const inputEl = document.querySelector('#input-el')
const switchInput = document.querySelector('#switch-input')

// Save Button
const saveButton = document.querySelector('#save-input')
const item = document.getElementsByTagName('li')
const ul = document.getElementById('ul')

function showTasks() {
  ul.classList.add('tasks-list')
  ul.innerHTML = ''

  for (let item of tasks) {
    // Li
    const taskIndex = tasks.indexOf(item)
    const li = document.createElement('li')

    const taskInput = document.createElement('input')
    taskInput.value = item
    taskInput.setAttribute('disabled', '')
    taskInput.classList.toggle('input-disabled')

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-style')
    editBtn.textContent = 'EDIT'

    editBtn.addEventListener('click', () => {
      taskInput.classList.toggle('input-disabled')
      taskInput.toggleAttribute('disabled')
    })

    // DELETE BUTTON
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-style')
    deleteBtn.textContent = 'DELETE'

    // deleteBtn EventListener
    deleteBtn.addEventListener('click', () => {
      tasks.splice(taskIndex, 1)
      li.remove()
      saveLocalStorage()
      checkTasks()
    })
    li.append(taskInput, editBtn, deleteBtn)
    ul.appendChild(li)
  }
}

showTasks()

// Adding a Event Listerner method to the saveButton
inputEl.addEventListener('keydown', e => {
  if (e.code === 'Enter' && inputEl.value.length) {
    // ul.classList.add('tasks-list')
    addTask()
  }
})

switchInput.addEventListener('click', () => {
  body.classList.toggle('change-bg')
})

saveButton.addEventListener('click', () => {
  // If the input.value.length is not null, the user can save the task by calling the add Task function
  if (inputEl.value.length) {
    addTask()
  }
})

function addTask() {
  const task = inputEl.value
  tasks.push(task)
  inputEl.value = ''
  showTasks()
  saveLocalStorage()
}

function saveLocalStorage() {
  localStorage.setItem('list_tarefas', JSON.stringify(tasks))
}

// Function to 
function checkTasks(){
  if(!ul.innerHTML){
    ul.classList.remove('tasks-list')
  }
}
checkTasks()
