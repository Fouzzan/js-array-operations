const arr = [1, 2, 1, 4, 5, 4];

const dupes = [];

for(let i = 0; i < arr.length; i++)
{
    for(let j = i + 1; j < arr.length; j++)
    {
        if(arr[i] === arr[j] && !dupes.includes(arr[i]))
        {
            dupes.push(arr[i])
        }
    }
}
console.log(dupes);