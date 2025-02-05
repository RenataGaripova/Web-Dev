//task1
function unique(arr) {
    let uniques = new Set(arr);
    return Array.from(uniques);
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
alert( unique(values) ); // Hare, Krishna, :-O

//task2
function aclean(arr) {
    let map = new Map();
    for (let elem in arr) {
        let sorted = elem.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );


//task3
let map = new Map();

map.set("name", "John");

let list = Array.from(map.keys());

let keys = map.keys();