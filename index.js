function getFirstSelector(selector) {
  return document.querySelector(selector);
};
function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
};
function increaseRankBy(n){
  var el = document.querySelectorAll('.ranked-list');
  for (let i=0, l= el.length; i<l;i++){
    el[i].innerHTML = parseInt(el[i]+n).tostring;
  }
};
function deepestChild() {
return document.getElementById('grand-node').getElementsByTagName('div')[3];
  };
  