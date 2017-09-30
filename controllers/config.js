//Initialize Neural network
const Architect = synaptic.Architect;
const Trainer = synaptic.Trainer;

// Neural network configuration
var input = 4;
var pool = 30;
var output = 4;
var connections = 25;
var gates = 15;

var iteration = 10;

var trainingData = [];

var netWork;
netWork = new Architect.Liquid(input, pool, output, connections, gates);
trainer = new Trainer(netWork);
