// create socket
// listen for events

const cp = require("child_process");

const names = [`Zippy`, `yoda`, `Yoda`, `Xerxes`];
const barks = [
  `woof`,
  "bark",
  "growl",
  "[sniff sniff]",
  "yip yip",
  "arf",
  "zzzzzz..."
];

// Start the child process
const child = cp.fork(`client.js`, names, { cwd: `./` });
console.log(`PARENT--> Child started`);

// Process incoming messages
child
  .on("exit", () => {
    clearInterval(interval);
    console.log(`PARENT--> All done`);
  })
  .on("message", msg => console.log(`PARENT--> ${msg}`));

// Send messages to child

// Change the bark every 2 seconds
let max = barks.length;
let ndx = 0;
let interval = setInterval(() => {
  if (!child.connected) {
    clearInterval(interval);
  } else {
    ndx = Math.floor(Math.random() * max) + 0;
    console.log(`NDX: ${ndx}`);
    let data = barks[ndx];

    child.send({
      msg_type: `ACTION`,
      action_type: `CHANGE`,
      data: data
    });
  }
}, 6000);

child.send({ WTF: `'is this`, I_AM: `lost...` });
