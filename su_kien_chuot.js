window.onload=function init() {
    let imgObj = null;
    imgObj= document.getElementById("img");
    imgObj.style.position='relative';
    imgObj.style.left='50px';
    console.log(imgObj.style.left);

}
function moveright(){
    let imgObj = null;
    imgObj= document.getElementById("img");
    imgObj.style.position='relative';
    imgObj.style.left=parseFloat(imgObj.style.left)+50+"px";
}
function moveleft(){
    let imgObj = null;
    imgObj= document.getElementById("img");
    imgObj.style.position='relative';
    imgObj.style.left=parseFloat(imgObj.style.left)-50+"px";
}