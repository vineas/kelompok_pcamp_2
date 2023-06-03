const printPijarCamp = (num) => {
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Pijar camp");
    } else if (i % 5 === 0) {
      console.log("Camp");
    } else if (i % 3 === 0) {
      console.log("Pijar ");
    } else {
      console.log(i);
    }
  }
};

printPijarCamp(20);
