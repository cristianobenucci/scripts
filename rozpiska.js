let firstSpan = document.querySelector(".village_anchor");
let playerId = firstSpan.getAttribute('data-player');
const wysylka = document.querySelectorAll(`.text .village_anchor[data-player='${playerId}'] > a[target="_self"]`);
let whatToSend = document.querySelectorAll('.text a[target="_blank"]');
for(let i = 0; i < wysylka.length; i++){
    let occurrence = wysylka[i].text;
    let allOccurrence = [i];
    let rozpiska = [];
    for(let j = i + 1; j < wysylka.length; j++){
        if(occurrence == wysylka[j].text){
            allOccurrence.push(j);
        }
    }
    for(let g = 0; g < allOccurrence.length; g++){
        rozpiska.push(allOccurrence[g]+ 1 + "    " + whatToSend[allOccurrence[g] + 1].text + "  ");
    }
    document.querySelector("div.text").innerHTML+=`<br>${rozpiska}`;
}
// console.log(wysylka[9].text);

// //*[@id="1869100"]/div[2]/b[5]/b/b[134]
// #\31 869100 > div.text > b:nth-child(17) > b > b:nth-child(821)

// document.querySelectorAll('.text a[target="_blank"')

// document.querySelector("div.text").innerHTML+="siema";
