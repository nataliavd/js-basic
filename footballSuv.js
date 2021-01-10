function footballSuv(arg1, arg2, arg3) {
    let team = arg1;
    let type = arg2;
    let n = Number(arg3);
    let price = 0;
    let totalPrise=0;
    let isValid=false;
    let isVal=false;
    switch (team) {
        case "Argentina":
            if (type === 'flags') {
                price += 3.25;
            } else if (type === 'caps') {
                price += 7.20;
            } else if (type === 'posters') {
                price += 5.10;
            } else if (type === 'stickers') {
                price += 1.25;
            } else {
                isVal=true;
            } break;
        case "Brazil":
            if (type === 'flags') {
                price += 4.20;
            } else if (type === 'caps') {
                price += 8.50;
            } else if (type === 'posters') {
                price += 5.35;
            } else if (type === 'stickers') {
                price += 1.20;
            } else {
                isVal=true;
            } break;
        case "Croatia":
            if (type === 'flags') {
                price += 2.75;
            } else if (type === 'caps') {
                price += 6.90;
            } else if (type === 'posters') {
                price += 4.95;
            } else if (type === 'stickers') {
                price += 1.10;
            } else {
              isVal=true;
            } break;
        case "Denmark":
            if (type === 'flags') {
                price += 3.10;
            } else if (type === 'caps') {
                price += 6.50;
            } else if (type === 'posters') {
                price += 4.80;
            } else if (type === 'stickers') {
                price += 0.90;
            } else {
                isVal=true;
            } break;
        default:isValid=true;
            break
        }
    totalPrise+=(n*price);
    if(isValid){
    console.log(`Invalid country!`);
    }else if(isVal){
        console.log(`Invalid stock!`);
    }
    else{
    console.log(`Pepi bought ${n} ${type} of ${team} for ${(totalPrise).toFixed(2)} lv.`);}
        
}
footballSuv('USA', 'caps', '18');
footballSuv('Brazil', 'stickers', '5');