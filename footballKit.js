function footballKit(arg1, arg2) {
    let tShirt = Number(arg1);
    let wishSum = Number(arg2);
    let sum = 0;
    let shorts = tShirt * 0.75;
    let socks = shorts * 0.20;
    let boots = (tShirt + shorts) * 2;
    let totalSum = 0;
    sum += tShirt + shorts + socks + boots;
    totalSum += sum * 0.85;
    if (totalSum >= wishSum) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${(totalSum).toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(wishSum - totalSum).toFixed(2)} lv. more.`);
    }
}
footballKit('25','100');
footballKit('55','310');
footballKit('59.99','500');