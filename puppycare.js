function puppycare(input) {
    let index = 0;
    let allFood = Number(input[index]);
    let food = allFood * 1000;
    index++;
    let eatenFood =input[index];
    index++
    let sum = 0;
    while (eatenFood !== 'Adopted') {
        let eatenFood1=Number(eatenFood);
        sum += eatenFood1;
        eatenFood = input[index];
        index++;

    } if (sum <= food) {
        console.log(`Food is enough! Leftovers: ${food - sum} grams.`);
    } else {
        console.log(`Food is not enough. You need ${sum - food} grams more.`);
    }
}
puppycare(['4', '130', '345', '400', '180', '230', '120', 'Adopted']);