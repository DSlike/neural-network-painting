function start(){
  getTrainData((trainingData) => {
    function train() {
      trainingData = _.shuffle(trainingData);

      trainer.train(trainingData, {
        rate: .1,
        iterations: 2,
        error: .00005,
        shuffle: true,
        log: 1,
        schedule: {
          every: 2,
          do: function(data) {
            paint(() => {
              setTimeout(function() {
                iteration += 2;
                $("span").text("Iteration: " + iteration);
                train();
              }, 50);
            });
          }
        }
      });
    }
    train(trainingData);
  });
}
