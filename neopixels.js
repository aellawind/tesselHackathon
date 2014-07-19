var Neopixels = require('neopixels');

var neopixels = new Neopixels();

var tracer = function(numLEDs) {
  // trail is how many LEDs are lit at once
  var trail = 1; 
  var arr = [];

  for (var i = 0; i < numLEDs/2; i++) {
  	
  	// each pixel is 3 bytes, so we create a buffer of length 180 to represent that
    var buf = new Buffer(3*numLEDs);
    buf.fill(0) // initialize everything to 0

    for (var j = 0; j< 3*numLEDs; j += 3) {
    	if ((j*3) % 2===0) {
        buf[(1+j)] = 120;
      } else {
        buf[(j)] = 120;
        buf[(1+j)] = 120;
      }
    }

    // for loop grb
// (3*(i+numLEDs*col/3)+col+1 +3

    // // here we are creating the color for each pixel
    // for (var col = 0; col < 3; col++){
    //     var bufnum = (3*(i+numLEDs*col/3)+col+1 +3*k);
	   //  var trailnum  = 0xFF*(trail-k)/trail;
	   //  // console.log('trailnum', bufnum, trailnum);
	   //  buf[col*i] = 255;
	   //  //buf[(3*(i+numLEDs*col/3)+col+1 +3*k)] =255;//0xFF*(trail-k)/trail;
	   //  console.log('a',buf[(3*(i+numLEDs*col/3)+col+1 +3*k)]);
    // }

    arr[i] = buf;
  }
  return arr;

}

neopixels.on('end', function() {
  neopixels.animate(60, Buffer.concat(tracer(60)));
});

// The first argument represents the number of lights (or pixels) we have
// The second argument is the data we are sending in
neopixels.animate(60, Buffer.concat(tracer(60)));

// each pixel is 3 bytes
// grb 
// send out an animation that is the number of pixels 60
// 60*3 = 180 bytes
// send over a buffer that is the 180 bytes and each frame of the animation 

//180 bytes to each frame 