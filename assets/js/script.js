var input = document.querySelector('.submit');
const button = document.querySelector('.button');
const task_zone = document.querySelector('.task-zone');
// console.log(task_zone);

button.onclick = function() {
    let content = input.value;
    input.value = '';
    const iDiv = document.createElement('div');
    iDiv.className = 'task';
    iDiv.innerHTML = content;
    task_zone.appendChild(iDiv);
}