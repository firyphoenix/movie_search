const os = require('os');
console.log("OS Type  :  "+os.type())
console.log("Platform   :  " + os.platform());
console.log("Architechture   :  "+ os.arch());
console.log("Version  :  " + os.version());
console.log( "Release  :  " + os.release());
const cpu = os.cpus();
console.log("Specs : ")
console.log("Model : " + cpu[0].model);
console.log("Speed  :  " + cpu[0].speed)
//Free memory
const free = os.freemem();
freegb = free / (1000 * 1000 * 1000);
console.log("Free Memory  :  "  + freegb + "GB");

//Total Memory
const total = os.totalmem();
totalgb = total/ (1000 * 1000 * 1000);
console.log("Total Memory  :  " + totalgb + "GB");


// Home Directory
const homedir = os.homedir();
console.log("Home Directory  :  " + homedir);

//tmp Directory
console.log("Temp Directory  :  " + os.tmpdir())
// Username
console.log("Username  :  "+ os.userInfo().username);
