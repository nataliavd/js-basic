function spaceShip(arg1,arg2,arg3,arg4){
    let wigth=Number(arg1);
    let length=Number(arg2);
    let high=Number(arg3);
    let astro=Number(arg4);
    let space=wigth*length*high;
    let room=(astro+0.40)*2*2;
    let people=Math.floor(space/room);
    if(people>=3 && people<=10){
        console.log(`The spacecraft holds ${people} astronauts.`)
    }else if(people<3){
        console.log(`The spacecraft is too small.`);
    }else{
        console.log(`The spacecraft is too big.`);
    }
}
spaceShip(3.5,4,5,1.70);
spaceShip(4.5,4.8,5,1.75);