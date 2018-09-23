
import { suki, events } from "@roryduncan/suki";

// below are the other modules that suki has to offer

// import keyboard from "@roryduncan/suki/keyboard"
// import { Tween } from "@roryduncan/suki/tween"
// import { gamestate, State } from "@roryduncan/suki/state"
// import { EventEmitter } from "@roryduncan/suki/events"
// import { World } from "@roryduncan/suki/world"


// when the DOM is ready, start the rendering loop
suki.whenReady(() => suki.start());


let timeString = null;
// main logic loop
suki.events.on(events.STEP, (time, $) => {

  const seconds = ~~(time.elapsed / 1000);
  timeString = `${seconds}`;

})

// main rendering loop
suki.events.on(events.RENDER, (time, $) => {
  const fontSize = window.innerHeight / 5
  $.clear("#357")
  $.font(`${fontSize}px Helvetica`);
  $.textBaseline ("middle");
  $.fillStyle("#fff");
  let textDimensions = $.context.measureText(timeString);
  
  let padding = {
    left: (window.innerWidth - textDimensions.width) / 2,
    top: (window.innerHeight - (fontSize)) / 2,
  };


  $.fillText(timeString, padding.left, padding.top)
})