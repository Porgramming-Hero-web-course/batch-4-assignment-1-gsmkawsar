{
    // problem 2 

    function removeDuplicates(arr: number[]): number[] {
        const result: number[] = [];

        for (let i = 0; i < arr.length; i++) {
            if (!result.includes(arr[i])) {
                result.push(arr[i])
            }
        }
        return result;
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
   
    // 
}