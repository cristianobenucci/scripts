function scaveng(){
  var how_long = 2;
  var leftovers = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 3000,
    5: 0,
    6: 0,
  };
  var doc=document;
  url=doc.URL;
  var unlocked_levels = doc.getElementsByClassName('btn btn-default free_send_button');
  var units = {
    0: 'spear',
    1: 'sword',
    2: 'axe',
    3: 'archer',
    4: 'light',
    5: 'marcher',
    6: 'heavy'
  };
  if(document.querySelector("#scavenge_screen > div > div.candidate-squad-container > table > tbody > tr:nth-child(2) > td:nth-child(4) > input").name == 'light')
  var archers = false;
  else
  var archers = true;
  var unitss_available = [0,0,0,0,0,0,0];
  var allUnits = 0;
  for(let j = 0; j < 7; j++){
      if(archers == false)
      if(j == 3 | j == 5)
      continue;
      let field = $('[name='+units[j]+']');
      let available = Number(field[0].parentNode.children[1].innerText.match(/\d+/)[0]);
      unitss_available[j] = available - leftovers[j] > 0 ? available - leftovers[j] : 0;
      allUnits += unitss_available[j];
  }
  if(document.querySelector('#menu_row2_village > a').text !== 'NaN'){
  if(unlocked_levels.length == 0 || allUnits < 10)
  if(document.querySelector('.arrowRight')!=null)
  document.querySelector('.arrowRight').click();
  else{
  if(document.querySelector("#scavenge_screen > div > div.candidate-squad-container > table > tbody > tr:nth-child(2) > td:nth-child(4) > input").name == 'light')
  var archers = false;
  else
  var archers = true;
  var hours = [550,1870,3300,4800,6340,7930,9540,11190,12860,14550,16260,17990,19730,21500,23270,25060];
  
  var units_available = [0,0,0,0,0,0,0];
  for(let j = 0; j < 7; j++){
      if(archers == false)
      if(j == 3 | j == 5)
      continue;
      let field = $('[name='+units[j]+']');
      let available = Number(field[0].parentNode.children[1].innerText.match(/\d+/)[0]);
      units_available[j] = available - leftovers[j] > 0 ? available - leftovers[j] : 0;
  }
  var units_capacity = [25,15,10,10,80,50,50];
  var total_capacity = 0;
  for(let j = 0; j < 7; j++){
      if(archers == false)
      if(j == 3 | j == 5)
      continue;
      total_capacity += units_available[j]*units_capacity[j];
  }
  if(unlocked_levels.length == 4)
  var capacity = hours[how_long-1];
  if(unlocked_levels.length == 3)
  var capacity = hours[how_long-1]*1.5;
  if(unlocked_levels.length == 2)
  var capacity = hours[how_long-1]*3;
  if(unlocked_levels.length == 1)
  var capacity = hours[how_long-1]*7.5;
  var ratio = capacity / total_capacity;
  if(ratio > 1)
  ratio = 1;
  for(let j = 0; j < 7; j++){
      if(archers == false)
      if(j == 3 | j == 5)
      continue;
      fill(units[j],Math.floor(units_available[j]*ratio));
  }
  function fill(unit, number){
    let field = $('[name='+unit+']');
    number = Number(number);
    field.trigger('focus');
    field.trigger('keydown');
    field.val(number);
    field.trigger('keyup');
    field.trigger('change');
    field.blur();
  }
  setTimeout(function() {
    var doc=document;
    url=doc.URL;
    var unlocked_levels = doc.getElementsByClassName('btn btn-default free_send_button');
    if(unlocked_levels.length == 0)
    return;
    else{
    var button = document.querySelector(`#scavenge_screen > div > div.options-container > div:nth-child(${unlocked_levels.length}) > div.status-specific > div > div.action-container > a.btn.btn-default.free_send_button`);
  button.click();
    }
  }, Math.floor((Math.random() * 100) + 200));
  }
} else {
  let mp3_url = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';
    new Audio(mp3_url).play();
}
  }
  var doc=document;
  url=doc.URL;
  var unlocked_levels = doc.getElementsByClassName('btn btn-default free_send_button');
  if(document.querySelector('#menu_row2_village > a').text !== 'NaN' && document.querySelector('#menu_row2_village > a').text !== 'NBA'){
  if(unlocked_levels.length == 0)
  document.querySelector('.arrowRight').click();
  else{
  setInterval(scaveng,Math.floor((Math.random() * 200) + 400));
  }
  } else {
    let mp3_url = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';
    new Audio(mp3_url).play();
  }
  
