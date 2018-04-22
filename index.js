function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
function increaseRankBy(n){
  const ullis=document.querySelectorAll(' .ranked-list');
  const firstList = ullis[0]
  const secondList = ullis[1]
  let children = firstList.children
      let start = 1
      for (let i = 0; i<children.length;  i++) {
        children[i].innerHTML=parseInt(start + n);
      }
    children = secondList.children
      start = 12

      for (let i = 0, l = children.length; i < l; i++) {
        children[i].innerHTML=start - i + n;
      }
}
function deepestChild() {
  var value=document.querySelectorAll(' #grand-node div');
  return value[value.length-1];
   
  }
  
  
  
  
