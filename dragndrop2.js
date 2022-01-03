const draggables = document.querySelectorAll('.item');
const containers = document.querySelectorAll('.placeholder');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', function() {
        draggable.classList.add('hold');
        setTimeout(() => {
            draggable.classList.add('hide');
        }, 0);
    });
    draggable.addEventListener('dragend', function() {
        draggable.className = 'item';
    });
});

containers.forEach(container => {
    container.addEventListener('dragover', function(event) {
        event.preventDefault();
        const afterElement = getDragAfterElement(container, event.clientY);
        const draggable = document.querySelector('.hold');
        if (afterElement == null) {
            container.append(draggable)
        } else {
            container.insertBefore(draggable, afterElement);
        }
    })
});

function getDragAfterElement(container, y) {     // returns an item under item we're holding 
    const draggableElements = [...container.querySelectorAll(".item:not(.hold)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}