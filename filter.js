// filtrum e kaxvac paymani

const arr = [10,20,30,40,50,60];

let filter = arr.filter((elem, index, innerArr) =>{
    if(elem < 40){
    return elem;
    }
})
console.log(filter);