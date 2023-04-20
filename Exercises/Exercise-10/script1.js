var paragraph = document.querySelector('p.paragraph');
let rainbow = document.querySelector('div#rainbow');
let dark = document.querySelector('div#dark');

function toggleClass(){


 if(paragraph.className === 'paragraph'){
  paragraph.className = 'rainbowClass' ;
 }else if(paragraph.className === 'rainbowClass'){
  paragraph.className = 'dark'
 }else if(paragraph.className === 'dark'){ 
  paragraph.className = 'rainbowClass' ;
 }
}

rainbow.addEventListener('click', toggleClass);
dark.addEventListener('click', toggleClass);