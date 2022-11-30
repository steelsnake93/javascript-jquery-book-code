// array literal
var colors;
colors = ['white', 
          'black', 
          'custom'];

// array constructor
var colors = new Array('white', 
                        'black', 
                        'custom');

// update the third item

colors[2] = 'beige';

var el = document.getElementById('colors');
el.textContent = colors[2];