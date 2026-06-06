const arr = [10, 20, 30, 40, 50];
let pos = 3;

let index = pos - 1;

for(let i = index; i < arr.length - 1; i++)
{
    arr[i] = arr[ i + 1];
}
arr.length--;
console.log(arr);