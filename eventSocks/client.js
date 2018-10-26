// connect to socket
// send and receive messages
//? Our packet should be:
//? child.send({
//?   msg_type: `ACTION`,
//?   action_type: "CHANGE",
//?   data: data
//? });

process.on("message", mesg => {
  // console.dir(mesg);
  // const args = process.argv.slice(2);
  if (mesg.msg_type === "ACTION") actionHandler(mesg.action_type, mesg.data);
  else if (mesg.msg_type === "CONTROL")
    controlHandler(mesg.action_type, mesg.data);
  else {
    console.log(`<--CLIENT: ${mesg[0]}`);
  }
});

let actionHandler = (type, data) => {
  let barkTimer = 0;
  switch (type) {
    case "START":
      let barkTimer = setInterval(() => {
        if (theBark.slice(0, 3) == "zzz")
          console.log(`<--CLIENT: The dog is sleeping, shhhhhhhhh...`);
        else console.log(`<--CLIENT: ${theBark}`);
      }, 2000);

      break;

    case "STOP":
      cancelInterval(barkTimer);
      break;

    case "CHANGE": //new bark
      theBark = data;
      break;

    case "SORT":
      const mySort = (a, b) =>
        a.toLowerCase() > b.toLowerCase() ? 1 : b > a ? -1 : 0;

      process.send(data.sort(mySort));
      break;

    default:
      process.send(`CLIENT sent: unknown action '${type}'`);
  }
};

let controlHandler = (type, data) => {
  switch (type) {
    case "SHUTDOWN":
      console.log(`CLIENT rec'd fake SHUTDOWN msg`);
      break;

    default:
      process.send(`CLIENT sent: unknown action ${type}`);
  }
};
