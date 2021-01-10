function excursion(arg1,arg2,arg3,arg4){
    let people=Number(arg1);
    let sleeps=Number(arg2);
    let cards=Number(arg3);
    let tickets=Number(arg4);
    let price=0;
    let priceForPerson=0;
    priceForPerson+=(sleeps*20)+(cards*1.60)+(tickets*6);
    price+=(priceForPerson*people)+((priceForPerson*people)*25/100);
    console.log(price.toFixed(2));
}
excursion('20','14','30','6');
excursion('131','9','33','46');