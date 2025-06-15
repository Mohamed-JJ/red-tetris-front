export type Matrix = number[][]

export const createMatrix = (width: number, height: number) => {
    const Matrix: Matrix = []

    while (height--){
        Matrix.push(new Array(width).fill(0))
    }
    return Matrix
}
