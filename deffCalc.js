let spear = Number(document.querySelector(".all_unit strong[data-count='spear']").textContent);
let sword = Number(document.querySelector(".all_unit strong[data-count='sword']").textContent);
let heavy = Number(document.querySelector(".all_unit strong[data-count='heavy']").textContent)*4;
let defence = (((spear + sword + heavy)/20000).toFixed(2));
document.querySelector("#show_units > h4").innerHTML=`Jednostki = <span style="color:red;">${defence}</span>`;
