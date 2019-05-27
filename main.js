'use strict';
const thead = document.querySelector('thead')
const tbody = document.querySelector('tbody');
const tr = tbody.querySelectorAll("tr");
const arrayOfRows = [...tbody.children];

thead.addEventListener("click", function(event) {
    const clicked = event.target.closest('th');
    const column = clicked.cellIndex;
    const typeOfColumn = clicked.dataset.type;

    if (!clicked) {
        return;
    }
    arrayOfRows.sort((a, b) => {
        const rowA = a.cells[column].textContent;
        const rowB = b.cells[column].textContent;
        if (typeOfColumn === 'number') {
            return rowA - rowB;
        }
        if (typeOfColumn === 'string'){
            return rowA > rowB ? 1 : -1;
        }
        return 0;
    });

    arrayOfRows.forEach((row) => tbody.appendChild(row))
});

