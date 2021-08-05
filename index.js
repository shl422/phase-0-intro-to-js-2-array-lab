// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
   }
   destructivelyAppendCat('Missy');
  function destructivelyPrependCat(name){
    cats.unshift(name);
    }
  function destructivelyRemoveLastCat() {
    cats.pop()
  }
  destructivelyRemoveLastCat();
  function destructivelyRemoveFirstCat() {
  cats.shift()
  }
  function appendCat(name) {
  return [...cats, name];
  }
   appendCat("Lizzie");
  function prependCat(name) {
  return [name, ...cats];
  }
   prependCat("Daisy");
  function removeLastCat() {
  
      return cats.slice(0,2)
  
  }
  removeLastCat();
  function removeFirstCat() {
   return cats.slice(1);
  }
  