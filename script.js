'use strict';

window.onload = () => {
    const solver = new ProblemSolver();
    const cells = [];

    const canvas = document.getElementById("canvas");
    for (let r = 0; r < 8; r++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let c = 0; c < 8; c++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            if ((r + c + 1) % 2 == 0) {
                cell.classList.add("black");
            } else {
                cell.classList.add("white");
            }

            cells.push(cell);
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }

    const solveButton = document.getElementById("solveButton");
    solveButton.onclick = () => {
        if (solver.solve()) {
            console.log("solved")
            for (let r = 0; r < 8; r++) {
                cells[r*8 + solver.queens[r]].textContent = "X";
            }
        } else {
            console.log("failed")
        }
    };
}