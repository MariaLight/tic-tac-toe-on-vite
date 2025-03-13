const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
export const checkIfWinner = (currentPlayer, field) => {
    let isWinner = false;
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
        isWinner = WIN_PATTERNS[i].every((item) => {
            return field[item] === currentPlayer;
        })
        if (isWinner) {
            return true;
        }
    }
    return false;
}