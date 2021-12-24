function dragandDrop() {
    const items = document.querySelectorAll('.item');
    const placeholders = document.querySelectorAll('.placeholder');

    const dragstart = (event) => {
        event.target.classList.add('hold');
        setTimeout(() => event.target.classList.add('hide'), 0);
    }

    const dragend = (event) => {
        event.target.classList.remove('hold', 'hide');
    }

    const dragover = (event) => {
        event.preventDefault();
    }

    const dragenter = (event) => {
        event.target.classList.add('hovered');
    }

    const dragleave = (event) => {
        event.target.classList.remove('hovered');
    }

    const dragdrop = (event) => {
        const item = document.querySelector('.hold');
        event.target.append(item);
        event.target.classList.remove('hovered');
    }

    for (let item of items) {
        item.addEventListener('dragstart', dragstart);
        item.addEventListener('dragend', dragend);
    }

    for (let place of placeholders) {
        place.addEventListener('dragover', dragover);
        place.addEventListener('dragenter', dragenter);
        place.addEventListener('dragleave', dragleave);
        place.addEventListener('drop', dragdrop);
    }
}

dragandDrop();