// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
     cats.shift()
     return cats;
}

function appendCat(name){
    let cat = cats.slice();
    cat.push(name);
    return cat;
}

function prependCat(name){
    let cat = cats.slice();
    cat.unshift(name)
    
    return cat
}

function removeLastCat(){
    let cat = [...cats];
    cat.splice(2, 1);
    return cat;
}

function removeFirstCat(){
    let cat = [...cats]
    cat.splice(0, 1)
    return cat;
}
