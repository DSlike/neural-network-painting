//Initialize Neural network
const Architect = synaptic.Architect;
const Trainer = synaptic.Trainer;

// Neural network configuration
const input = 6,
      pool = 30,
      output = 4,
      connections = 25,
      gates = 15,
      tableCells = 10;

var iteration = 2;

var trainingData = [];

var netWork;
netWork = new Architect.Liquid(input, pool, output, connections, gates);
trainer = new Trainer(netWork);

const imageSize = 100,
      maxColor = 255;
