/**
 * upto 100: ---> 100
 * more than 101-200: --> 90
 * more than 200: --> 70
*/

function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}

const total = discountedPrice(201);
console.log(total)