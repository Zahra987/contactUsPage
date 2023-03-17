var navLinks=document.getElementsByClassName('navLink');
var nanLinkList=Object.values(navLinks);
var link=document.getElementById('home');
nanLinkList.map((item) => {
  if (item==link){
    item.style.color="rgb(196, 196, 4)";
  }else{
    item.style.color="black";
      }
  })