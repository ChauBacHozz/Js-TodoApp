var input = document.querySelector('.submit');
input.addEventListener("keyup", function(e){
    if (e.keyCode === 13) {
        e.preventDefault();
        button.click();
    }
});

const button = document.querySelector('.button');
const task_zone = document.querySelector('.task-zone');
const head = document.querySelector('.heading');

head.onclick = function () {
    console.log(document.querySelectorAll('.task'));
}

function blankCheck(content) {
    return content.trim().length === 0;
}

button.onclick = function() {
    if (!blankCheck(input.value)) {
        let content = input.value;
        input.value = '';

        var iDiv = document.createElement('div');
        iDiv.className = 'task';

        var check_Div = document.createElement('div');
        check_Div.className = 'task-check';

        var check_icon = document.createElement('i');
        check_icon.className = 'ti-check';
        check_icon.addEventListener('click',completedCheck);
        check_Div.appendChild(check_icon); 
        iDiv.appendChild(check_Div);

        var text_Div = document.createElement('div');
        text_Div.className = 'task-content';
        text_Div.innerHTML = content;
        iDiv.appendChild(text_Div);

        var trash_Div = document.createElement('div');
        trash_Div.className = 'task-trash';
        var trash_icon = document.createElement('i');
        trash_icon.className = 'ti-trash';
        trash_icon.addEventListener("click", deleteItem);
        
        
        trash_Div.appendChild(trash_icon); 
        iDiv.appendChild(trash_Div);

        task_zone.appendChild(iDiv);
        iDiv.classList.add('moveIn');
        setTimeout (function () {
            iDiv.classList.remove('moveIn');
            
        }, 500);

    }
}
function deleteItem(e) {
    const parent = e.target.parentElement.parentElement;
    parent.classList.add('moveOut');
    parent.children[0].classList.add('moveOut');
    parent.children[1].classList.add('moveOut');
    parent.children[2].classList.add('moveOut');
    setTimeout(function(){
        parent.remove();
    },300)

}

function completedCheck(e) {
    const parent = e.target.parentElement.parentElement;
    parent.style.setProperty(
        "opacity", 0.5
    );
    console.log(parent.children[1]);
    parent.children[1].style.setProperty(
        "text-decoration", "line-through"
    );
}


