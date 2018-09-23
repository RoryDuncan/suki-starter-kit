import { suki, events } from "@roryduncan/suki";

// below are the other modules that suki has to offer

// import keyboard from "@roryduncan/suki/keyboard"
// import { Tween } from "@roryduncan/suki/tween"
// import { gamestate, State } from "@roryduncan/suki/state"
// import { EventEmitter } from "@roryduncan/suki/events"
// import { World } from "@roryduncan/suki/world"


// when the DOM is ready, start the rendering loop
suki.whenReady(() => suki.start());


// main logic loop
suki.events.on(events.STEP, (time, $) => {
  /* ... */
})

// main rendering loop
suki.events.on(events.RENDER, (time, $) => {
  /* ... */
})