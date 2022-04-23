'use strict';

class ProblemSolver {
    constructor() {
        this.queens = Array(8).fill(-1);
    }

    /**
     * clears the board
     */
    clear() {
        this.queens = Array(8).fill(-1);
    }

    /**
     * @param {number} row 
     * @param {number} col 
     * @returns {boolean} if there is a queen on square
     */
    hasQueen(row, col) {
        return this.queens[row] === col;
    }

    /**
     * 
     * @param {number} row 
     * @param {number} col 
     */

    threatened(row, col) {
        if (this.queens[row] !== -1) {
            return true;
        }

        for (let r = 0; r < 8; r++) {
            if (col === this.queens[r]) {
                return true;
            }
            if (this.queens[r] !== -1 && Math.abs(col - this.queens[r]) === Math.abs(row - r)) {
                return true;
            }
        }
        return false;
    }

    tryAddQueen(row, col) {
        if (this.threatened(row, col)) {
            return false;
        } else {
            this.queens[row] = col;
            return true;
        }
    }

    removeQueen(row) {
        this.queens[row] = -1;
    }

    solve() {
        this.clear();
        return this.solveRecursive(0);
    }

    /**
     * solves the puzzle
     * @param {number} row 
     * @returns {boolean} if it was solved
     */
    solveRecursive(row) {
        if (row === 8) {
            return true;
        }
        for (let col = 0; col < 8; col++) {
            if (this.tryAddQueen(row, col)) {
                if (this.solveRecursive(row + 1)) {
                    return true;
                }
                this.removeQueen(row);
            }
        }
        return false;
    }
}
