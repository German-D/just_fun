function slavecb() {
  console.log ("в слейв что-то произошло")
}

var slaveInstance = slave(slavecb);

slaveInstance.start();
