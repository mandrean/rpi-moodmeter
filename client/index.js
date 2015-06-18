// STATES:
// bad = gpio_4
// good = gpio_14
// great = gpio_15
// fantastic = gpio_18

var Gpio = require('onoff').Gpio,
    request = require('request');

var endpoint = "http://172.20.10.5:3000/mood/";
    button_bad = new Gpio(4, 'in', 'both');
    button_good = new Gpio(14, 'in', 'both');
    button_great = new Gpio(15, 'in', 'both');
    button_fantastic = new Gpio(18, 'in', 'both');

button_bad.watch(function(err, value) {
  console.log("Bad! Value: " + value);

  if (value === 1) {
    request.get(endpoint + "1");
    console.log(endpoint + "1");
  }
});

button_good.watch(function(err, value) {
  console.log("Good! Value: " + value);
  if (value === 1) {
    request.get(endpoint + "2");
    console.log(endpoint + "2");
  }
});

button_great.watch(function(err, value) {
  console.log("Great! Value: " + value);
  if (value === 1) {
    request.get(endpoint + "3");
    console.log(endpoint + "3");
  }
});

button_fantastic.watch(function(err, value) {
  console.log("Fantastic! Value: " + value);
  if (value === 1) {
    request.get(endpoint + "4");
    console.log(endpoint + "4");
  }
});