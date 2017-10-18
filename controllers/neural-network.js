function start(){
  getTrainData((trainingData) => {
    function train() {
      trainingData = _.shuffle(trainingData);

      trainer.train(trainingData, {
        rate: 0.1,
        iterations: 1,
        error: 0.00005,
      });
      paint();
        iteration ++;
        document.getElementsByTagName('span')[0].innerHTML = ("Iteration: " + iteration);
        requestAnimationFrame(train);
    }
    train(trainingData);
  });
}
