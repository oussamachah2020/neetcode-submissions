class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let n = board.length;
        let checkCount = 0
        let boxKey;
        
        let rows = {};
        let cols = {};
        let boxes = {}


        for(let i = 0; i < 9; i++) {
            if(!rows[i]) rows[i] = {}

            for(let j = 0; j < 9;j++) {
            boxKey = Math.floor(i / 3) * 3 + Math.floor(j / 3)

            if(!cols[j]) cols[j] = {}
            if(!boxes[boxKey]) boxes[boxKey] = {}

            if(board[i][j] === ".") continue

            let val = board[i][j]
            
            if(rows[i][val] || cols[j][val] || boxes[boxKey][val]) {
                return false;
            }else {
                rows[i][val] = true;
                cols[j][val] = true;
                boxes[boxKey][val] = true
            }
            }
        }

        return true
    }
}
