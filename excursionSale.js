function excursionSale(input) {
    let index = 0;
    let seaEx = Number(input[index]);
    index++;
    let mountainEx = Number(input[index]);
    index++;
    let type = input[index];
    index++;
    let counter = 0;
    let sum = 0;
    let seaCounter = 0;
    let mountainCounter = 0;
    let isSale = false;
    while (counter <= (seaEx + mountainEx)) {
        if (type === 'sea') {
            seaCounter++
            if (seaCounter > seaEx) {
                sum += 0;
            } else {
                sum += 680;
            }
        } else if(type==='mountain') {
            mountainCounter++;
            if (mountainCounter > mountainEx) {
                sum += 0;
            } else {
                sum += 499;
            }
        }
        if (type === 'Stop') {
            isSale = true;
            break;
        } counter++;
        type=input[index];
        index++

    }if(counter>=(seaEx + mountainEx)){
        console.log(`Good job! Everything is sold.`);
    }console.log(`Profit: ${sum} leva.`);
}
excursionSale(['2', '2', 'sea', 'mountain', 'sea', 'sea', 'mountain']);
excursionSale(['6', '3', 'sea', 'mountain', 'mountain', 'mountain', 'sea', 'Stop']);