var buildingNames = [
    "main",
    "barracks",
    "stable",
    "garage",
    "church",
    "snob",
    "smith",
    "place",
    "statue",
    "market",
    "wood",
    "stone",
    "iron",
    "farm",
    "storage",
    "hide",
    "wall",
  ];
  
  const buildingValues = {};
  
  buildingNames.forEach((buildingName) => {
    const selector = `a.btn-build[data-building="${buildingName}"]`;
    const element = document.querySelector(selector);
    const value = element?.textContent?.slice(-2);
    
    if (!isNaN(value)) {
      buildingValues[buildingName] = `${buildingName}${parseInt(value)}`;
    } else {
      // Handle the case where the value cannot be parsed to a valid number
      buildingValues[buildingName] = `${buildingName}1`; // Or any other suitable default value
    }
  });
  buildingNames.forEach((buildingName) => {
    if((document.querySelector(`#main_buildrow_${buildingName} > td.inactive.center`))!=null){
        buildingValues[buildingName] = `${buildingName}30`;
    }
  });

  
console.log(buildingValues);

const order = ["wood1","stone1","iron1","stone2","wood2","main2","storage2","iron2","main3","wood3","main4","storage3","iron3","stone3","iron4","wood4","stone4","wood5","wood6","stone5","iron5","wood7","stone6","stone7","wood8","stone8","wood9","stone9","stone10","farm2","barracks1","market1","wall1","wall2","stone11","farm3","wood10","iron6","wall3","iron7","storage4","farm4","farm5","iron8","storage5","wood11","wood12","stone12","iron9","wood13","stone13","wall4","iron10","market2","stone14","wood14","iron11","stone15","wood15","storage6","stone16","iron12","wood16","iron13","storage7","wood17","stone17","main5","storage8","storage18","iron14","market3","farm6","market4","main6","farm7","main7","wall5","market5","wood18","iron15","storage9","stone19","wood19","storage10","stone20","main8","wood20","iron16","storage11","iron17","stone21","main9","main10","wood21","storage12","farm8","farm9","storage13","stone22","wood22","iron18","storage14","stone23","wood23","storage15","stone24","iron19","wood24","storage16","stone25","iron20","wood25","main11","storage17","stone26","iron21","main12","wood26","storage18","stone27","main13","main14","wood27","storage19","storage20","stone28","iron22","main15","farm10","wood28","farm11","farm12","storage21","stone29","main16","iron23","iron24","main17","main18","farm13","storage22","storage23","stone30","main19","iron25","iron26","iron27","wood29","iron28","iron29","storage24","iron30","wood30"];
let lastBuilding = 154;

for(let i = 0; i < 17; i++){
    for(let n = 0; n < order.length; n++){
        if(order[n] == Object.values(buildingValues)[i]){
            if(lastBuilding > n){
                lastBuilding = n;
            }
        }
    }
}


console.log(lastBuilding);
console.log(order[lastBuilding]);

let whatToBuild = order[lastBuilding].replace(/[0-9]/g,'');
console.log(whatToBuild);

document.querySelector(`a[data-building="${whatToBuild}"]`).click();
