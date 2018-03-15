let trainedNet;

function encode(arg) {
   return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
   return data.map(d => {
       return {
           input: encode(d.input),
           output: d.output
       }
   })
}

function train(data) {
   let net = new brain.NeuralNetwork();
   net.train(processTrainingData(data));
   trainedNet = net.toFunction();
   console.log('Finished training...');
};

function execute(input) {
   let results = trainedNet(encode(input));
   let output;
   results.trump > results.kardashian ? output = 'Trump' : output = 'Kardashian';
   return output;
}

train(trainingData);

// console.log(execute("These aren't real. Kanye would never write Yeezy on the side"));

console.log(execute("Whether we are Republican or Democrat, we must now focus on strengthening Background Checks!"));

// console.log(execute("We do have a Trade Deficit with Canada, as we do with almost all countries (some of them massive). P.M. Justin Trudeau of Canada, a very good guy, doesn’t like saying that Canada has a Surplus vs. the U.S.(negotiating), but they do...they almost all do...and that’s how I know!"));
