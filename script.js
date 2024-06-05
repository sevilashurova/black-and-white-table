function generateTable() {
    let tableSelector = document.getElementById("table-selector");
    let selectedValue = tableSelector.value;
    let tableContainer = document.getElementById("table-container");

    tableContainer.innerHTML = "";

    let table = document.createElement("table");

    for (let i = 0; i < selectedValue; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < selectedValue; j++) {
            let cell = document.createElement("td");

            if ((i === j) || (i + j === selectedValue - 1)) {
                cell.classList.add("marked");
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}
generateTable();
