function programmingBook(arg1,arg2,arg3,arg4,arg5){
    let pagePrice=Number(arg1);
    let frontPrice=Number(arg2);
    let percentCopy=Number(arg3);
    let disignPrice=Number(arg4);
    let percentTeam=Number(arg5);
    let sum=0;
    let sum1=0;
    let sum2=0;
    let sum3=0
    sum=(899*pagePrice)+(2*frontPrice);
    sum1+=sum-(sum*percentCopy/100)
    sum3+=sum1+disignPrice;
    sum2+=sum3-(sum3*percentTeam/100)
    console.log(`Avtonom should pay ${(sum2).toFixed(2)} BGN.`);
    
}
programmingBook(0.05,1.20,40,19.99,20)