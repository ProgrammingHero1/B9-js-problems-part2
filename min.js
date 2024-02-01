const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log('cheapest one is: ', cheap);