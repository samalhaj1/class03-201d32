'use strict'
// 
 let maxtries = 6;
let rewards = ['2017', '2018','2016'];
for (var i=1; i<maxtries;i++){

    let username6 = prompt(' name one of the years that Real Madrid won a champions leage cup?');
    if (username6 == rewards [0]){alert ('correct');
    break;
 }

 else if (username6 == rewards [1]){alert ('correct');
 break;
}
else if (username6 == rewards [2]){alert ('correct');
break;
}
else if (i == maxtries)
{
    alert ('you have finished your tries the correwct answer is '+rewards);
    

}
else {
    alert (' try again ');
}


}








       