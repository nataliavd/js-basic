function worksout(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let firstDayKm = Number(input[index]);
    index++;
    let sum = firstDayKm;
    let totalsum = firstDayKm;e
    for (let i = 0; i < days; i++) {
        let dayPercent = Number(input[index]);
        index++;
        sum += sum * dayPercent / 100;
        totalsum += sum;
    }
    if (totalsum >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalsum - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalsum)} more kilometers`);
    }
}
worksout(['5', '30', '10', '15', '20', '5', '12']);
worksout(['4', '100', '30', '50', '60', '80']);