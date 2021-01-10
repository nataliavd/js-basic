function sumAndProduct(input) {
    let n = Number(input[0]);
    let isFlag=false;
    for (a = 1; a <= 9; a++) {
        for (b = 9; b >= a; b--) {
            for (c = 0; c <= 9; c++) {
                for (d = 9; d >= c; d--) {
                    if ((a + b + c + d) === (a * b * c * d) && n % 10 === 5) {
                        console.log(`${a}${b}${c}${d}`)
                        return;
                    } else if (Math.floor((a*b*c*d)/(a+b+c+d))===3 && n % 3 === 0) {
                        console.log(`${d}${c}${b}${a}`);
                        return;
                    }
                }
            }
        }
    }
    console.log(`Nothing found`);
}
sumAndProduct(['123']);
sumAndProduct(['145']);
sumAndProduct(['214']);