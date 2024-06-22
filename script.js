const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");
var scrollImg = document.querySelector('.scroll-img');

var images= ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg",
    "9.jpeg","10.jpeg","11.jpeg","12.jpeg"
]

function openFullImg(image) {
    fullImgBox.style.display='flex';
    fullImg.src=image;
}

function closeFullImg() {
    fullImgBox.style.display="none";
}

function deleteImage(deleteIcon) {
        const imgItem = deleteIcon.parentNode;
        imgItem.remove()
}

var i=0;
function goPrevious() {
    if(i<=0) i = images.length;
        i--;
        return setImg();
}

function goNext() {
    if(i>=images.length-1) i = -1;
        i++;
        return setImg();
}

function setImg() {
    return scrollImg.setAttribute('src','images/'+images[i]);   
}


