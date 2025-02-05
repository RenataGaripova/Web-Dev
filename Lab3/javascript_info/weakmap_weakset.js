//task1
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);

alert("Read message 0: " + readMessages.has(messages[0])); // true
  
messages.shift();

//task2

let timeReadMap = new WeakMap();
timeReadMap.set(messages[0], new Date(2017, 1, 1));