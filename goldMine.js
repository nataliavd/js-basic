function goldMine(input){
    let index=0;
    let location=Number(input[index]);
    index++;
    for(i=0; i<location; i++){
        let sum=0;
        let average=0;
        let wishAverage=Number(input[index]);
        index++
        let day=Number(input[index]);
        index++;
        
        for(j=0; j<day; j++){
            let dayAverage=Number(input[index]);
        index++
            sum+=dayAverage;
        }average=sum/day;
        if(average>=wishAverage){
            console.log(`Good job! Average gold per day: ${(average).toFixed(2)}.`);
        }else{
            console.log(`You need ${(wishAverage-average).toFixed(2)} gold.`);
        }
    }
}
goldMine(['2','10','3','10','10','11','20','2','20','10']);