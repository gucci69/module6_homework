let arr = [1, 0.20, 5, null, undefined, 22, 4, 0, 'w', 91, 0, 33];
function getArrayOddAndEvenCount(arr) {
    let zeroCount = 0;
    let numberCount = 0;
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" ||!isNaN(arr[i])) {
            numberCount += 1;
            if (arr[i] === 0) {
                zeroCount += 1;
            } else if (arr[i] % 2 === 0) {
                evenCount += 1;
            } else {
                oddCount += 1;
            }
        }
    }
    
    console.log(`В массиве ${numberCount} цифр, ${zeroCount} нулей, ${evenCount} чётных, ${oddCount} нечётных`);
}
   getArrayOddAndEvenCount(arr);