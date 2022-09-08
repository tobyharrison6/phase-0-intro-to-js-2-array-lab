const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
        cats.pop("Bob")
}
function destructivelyRemoveFirstCat() {
        cats.shift("Bob")
}

function appendCat(name){
    return newCats = [...cats, "Broom"];
}

function appendCat(name){
    const newCats = cats.slice();
    newCats.push(name)
    return newCats
}

function prependCat(name){
    const newCats = cats.slice();
    newCats.unshift(name)
    return newCats
}

function removeLastCat(name){
    const newCats = cats.slice();
    newCats.pop(name)
    return newCats
}

function removeFirstCat(name){
    const newCats = cats.slice();
    newCats.shift(name)
    return newCats
}
    
