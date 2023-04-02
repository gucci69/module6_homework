function isPrimeNumber(num) {
    if ((num < 2) || (num > 1000)) return "данные неверны";
    let a = Math.sqrt(num);
    for (let i = 2; i <= a; i++)
        if (num % i === 0) return "непростое число";
    return "простое число";
}
console.log(isPrimeNumber(2));