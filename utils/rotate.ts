export const rotate = (matrix: number[][]): number[][] => {
    const result = []

    for (let i = 0;  i < matrix[0].length; i++) {
        const row = []
        for (let j = 0; j < matrix.length; j++) {
           row.push(matrix[j][i]);
        } 
        result.push(row);
    }
    for (let i = 0; i < result.length; i++) {
        result[i].reverse();
    }
    return result;
}