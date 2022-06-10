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
      checkInputAttribute(taskInput, editBtn, taskIndex, tasks)
    })
    // DELETE BUTTON
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-style')
    deleteBtn.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg>`
    
  

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

function checkInputAttribute(input, button, index, array){
  if(!input.classList.contains('input-disabled')){
    editValue(input, button, index, array)
  }
}

function editValue(input, button, index, array){
  input.focus()
  button.addEventListener('click', ()=>{
    array[index] = input.value
    saveLocalStorage()
    showTasks()
  })

  input.addEventListener('keydown', (e)=>{
    if(e.code === "Enter" && input.value.length){
      array[index] = input.value
      saveLocalStorage()
      showTasks()
    }
  })
}

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
function checkTasks() {
  if (!ul.innerHTML) {
    ul.classList.remove('tasks-list')
  }
}

checkTasks()
