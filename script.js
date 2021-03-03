
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');



draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
        // console.log('moving');
        draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    })
   
});


containers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        console.log(draggable);
        container.appendChild(draggable);
    })
})


