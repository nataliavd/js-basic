function excursionCalc(arg1, arg2) {
    let people = Number(arg1);
    let season = arg2;
    let price = 0;
    let totalprice = 0;
    switch (season) {
        case 'spring':
            if (people <= 5) {
                price += 50;
            } else {
                price += 48;
            } totalprice += price * people;
            break;
        case 'summer':
            if (people <= 5) {
                price += 48.50;
            } else {
                price += 45;
            } totalprice += (price * people)-((price*people)*15/100);
            break;
        case 'autumn':
            if (people <= 5) {
                price += 60;
            } else {
                price += 49.50;
            } totalprice += price * people;
            break;
        case 'winter':
            if (people <= 5) {
                price += 86;
            } else {
                price += 85;
            } totalprice += (price * people)+((price*people)*8/100);
            break;
    }console.log(`${(totalprice).toFixed(2)} leva.`);
}
excursionCalc('5', 'spring');
excursionCalc('10', 'summer');
excursionCalc('15', 'autumn');
excursionCalc('20', 'winter');