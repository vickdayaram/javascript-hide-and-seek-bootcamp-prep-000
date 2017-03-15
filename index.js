


function getFirstSelector(selector){
  return document.querySelector(selector);
}



function nestedTarget(){
  return document.querySelector('#nested .target');

}


function increaseRankBy(n){

  //1. find ID "app"
  //2. find class ".ranked-list"
  //3. while there are divs in ranked list, add n to each value, until there is no more divs
  const lis = document.querySelectorAll('.ranked-list');
   for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i] + n).toString()
 }
}



function deepestChild(){
  var current = document.getElementById("grand-node"); // document is a scope of the html
  // grandnodeElem is the scope of the grand-node which has nested divs
  var child = current.querySelector('div');
  while(child){
    current = child;
    child = current.querySelector('div');
  }
  return current;
 }
