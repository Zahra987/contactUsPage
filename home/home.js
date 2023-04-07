var navLinks=document.getElementsByClassName('navLink');
var nanLinkList=Object.values(navLinks);
var link=document.getElementById('home');
var close = document.getElementsByClassName('close');
var detailsBg= document.getElementsByClassName('details-bg');
var detailsContainer= document.getElementsByClassName('details-container');
var detailsBoxOnImg= document.querySelectorAll('.gallery .container>div');
console.log(detailsBoxOnImg);
nanLinkList.map((item) => {
  if (item==link){
    item.style.color="rgb(196, 196, 4)";
  }else{
    item.style.color="black";
      }
  })

close[0].onclick=function(){
  detailsBg[0].style.visibility='hidden';
  detailsContainer[0].style.visibility='hidden';
}

detailsBoxOnImg[0].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[1].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[2].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[3].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[4].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[5].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[6].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[7].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[8].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[9].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[10].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[11].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[12].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[13].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[14].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[15].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[16].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[17].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[18].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[19].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[20].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[21].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[22].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
detailsBoxOnImg[23].onclick=function(){
  detailsBg[0].style.visibility='visible';
  detailsContainer[0].style.visibility='visible'; 
}
    