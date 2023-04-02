function countNumEverySecond(num1, num2) {
    let progressCount = num1;

    let intervalId = setInterval(function () {
        if (progressCount <= num2) {
            console.log(progressCount);
            progressCount++;
        }
        else clearInterval(intervalId);
    }, 1000);
}

countNumEverySecond(5, 15);