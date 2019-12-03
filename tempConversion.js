const ftoc = function(fahrenheit) { 
  let fTemp = fahrenheit; 
  let fToCel = (fTemp - 32) * 5 / 9; 
  
  return Math.round(fToCel*10) /10;
}

const ctof = function(celsius) { 
  let cTemp = celsius; 
  let cToFahr = cTemp * 9 / 5 + 32; 
  
  return Math.round(cToFahr*10) / 10;
}

module.exports = {
  ftoc,
  ctof
}



ftoc(32);
ftoc(100); 
ftoc(-100); 
ctof(0); 
ctof(73.2); 
ctof(-10); 

