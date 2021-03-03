
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
        const draggable = document.querySelector('.dragging');
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        console.log(afterElement);
        if (afterElement === undefined) {
        container.appendChild(draggable);

        } else {
            container.insertBefore(draggable, afterElement);
        }

        // console.log(e.clientX);

        // const elements = container.children;
        // // console.log(elements);
        // for (let element of elements) {
        //     element.addEventListener('dragover', (e) => {
        //         console.log(element);
        //     })
        // }
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        // console.log(box);
        // if ( offset < 0 && offset > closest.offset ) {
        //     return { offset: offset, element: child }
        // } else {

        // }
         
        return ( offset < 0 && offset > closest.offset )? 
                {offset: offset, element: child}: closest;

    }, {offset: Number.NEGATIVE_INFINITY}).element;
}







