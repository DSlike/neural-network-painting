let tData,
    lastCalledTime,
    fps;

function start(){
  getTrainData((trainingData) => {
    tData = trainingData;
    go();
  });
}

function go(trainingData){
  requestAnimFrame();
  train();
  paint();

  iteration += iterationStep;
  document.getElementsByTagName('span')[0].innerHTML = ("Iteration: " + iteration + "<br>FPS:"+fps);

  requestAnimationFrame(go);
}

function train() {
  tData = _.shuffle(tData);

  trainer.train(tData, {
    rate: 0.1,
    iterations: iterationStep,
    error: 0.005,
    shuffle: true
  });
}

function requestAnimFrame() {
  if(!lastCalledTime) {
     lastCalledTime = Date.now();
     fps = 0;
     return;
  }
  delta = (Date.now() - lastCalledTime)/1000;
  lastCalledTime = Date.now();
  fps = Math.round(1/delta);
}
