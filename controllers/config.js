//Initialize Neural network
const Architect = synaptic.Architect;
const Trainer = synaptic.Trainer;

// Neural network configuration
const input = 8,
      pool = 20,
      output = 4,
      connections = 20,
      gates = 15,
      tableCells = 10,
      iterationStep = 2;

const imageSize = 80,
      maxColor = 255;

var iteration = 0;

var trainingData = [];

var netWork;
netWork = new Architect.Liquid(input, pool, output, connections, gates);
// netWork = new Architect.Perceptron(input, 30, 15, output);
trainer = new Trainer(netWork);
