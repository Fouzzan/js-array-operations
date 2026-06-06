const arr1 = [2, 5, 7, 4, 1],
arr2 = [3, 6, 8, 9, 10];

const arr = [];
for(let i = 0; i < arr1.length; i++)
{
    arr.push(arr1[i])
}
for(let i = 0; i < arr2.length; i++)
{
    arr[arr.length] = arr2[i];
}
for(let i = 0; i < arr.length - 1; i++)
{
    for(let j = 0; j < arr.length - 1 - i ; j++)
    {
        if(arr[j] > arr[j + 1])
        {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);