function catFood(input){
    let index=0;
    let cats=Number(input[index]);
    index++;
    let group1=0;
    let group2=0;
    let group3=0;
    let price=0;
    let caunter=0;
    let price1=0;
    while(caunter<cats){
      let eaten=Number(input[index]);
      price+=eaten;
      if(eaten>=100 && eaten<200){
          group1++
      }else if(eaten>=200 && eaten<300){
          group2++
      }else{
          group3++
      }caunter++
      eaten=Number(input[index]);
      index++;
    }price1+=(price/1000)*12.45
    
    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${(price1).toFixed(2)} lv.`);
}

catFood(['10','256','348','198','322','186','294','321','100','200','300'])