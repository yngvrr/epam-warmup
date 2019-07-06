module.exports = function warmup(temperature) {
//  Formula	
//  (°C × 9/5) + 32 = °F
  
  var fahrenheit =  (temperature * 9/5) + 32;
  
  return fahrenheit;
};
