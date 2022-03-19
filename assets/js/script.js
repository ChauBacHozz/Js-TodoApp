var input = document.querySelector('.submit');
const button = document.querySelector('.button');
const task_zone = document.querySelector('.task-zone');
// console.log(task_zone);

function blankCheck(content) {
    return content.trim().length === 0;
}

button.onclick = function() {
    if (!blankCheck(input.value)) {
        let content = input.value;
        input.value = '';
        let iDiv = document.createElement('div');
        iDiv.className = 'task';
        let check_Div = document.createElement('span');
        check_Div.className = 'task-check ti-check';
        iDiv.appendChild(check_Div);
        let text_Div = document.createElement('div');
        text_Div.className = 'task-content';
        text_Div.innerHTML = content;
        iDiv.appendChild(text_Div);
        let trash_Div = document.createElement('span');
        trash_Div.className = 'task-trash ti-trash';
        iDiv.appendChild(trash_Div);
        task_zone.appendChild(iDiv);
    }
}

