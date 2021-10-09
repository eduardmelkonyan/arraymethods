// const arr = [10,20,30,40,50];

// const arrMap = arr.map((elem, index, innerArr) => {
//     return elem -5;
// })
// console.log(arrMap);

// Amen elementin karoxanum es tiv gumarel, bazmapatkel, bajanel, bazmapatkel

const arr = [10,20,30,40,50];

const matrix = [[1,2,3], [10,20,30], [40,50,60]];
matrix.map((elem, index, innerArr) =>{
    console.log('inner Elem', elem);
    console.log('inner Index', index);
    console.log('Inner Arr', innerArr)
})
for (let i = 0; i < matrix.length; ++i){
    for( j = 0; j < matrix[i].length; ++j){
console.log(matrix[i][j]);
    }
}