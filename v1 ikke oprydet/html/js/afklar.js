

//var fase1 = document.getElementById("fase_1");
//var fase2 = document.getElementById("fase_2");
//var fase3 = document.getElementById("fase_3");
//var fase4 = document.getElementById("fase_4");
//var fase5 = document.getElementById("fase_5");

/*
var nextButton = document.getElementById("next_button");

var faserArray = ["fase_1", "fase_2", "fase_3", "fase_4", "fase_5"];

var currentFase = 0

console.log(currentFase);
console.log(faserArray[currentFase])
function nextFase(){
	for (var i = currentFase; i < faserArray.length; i++) {
	 	faserArray[i].style.display = 'none';
	 	faserArray[i + 1].style.display = 'block';
	 }
	 //if (faserArray[i].style.display = 'block') {

//}
}
*/





/*
 FUNGER
function nextFase(){
		fase_1.style.display = 'none';
	 		fase_2.style.display = 'block';
}

*/

//Funger ikke

//if (faserArray[i].style.display = 'block') {
//	 		faserArray[i].style.display = 'none';
//	 		faserArray[i + 1].style.display = 'block';
//	 	}


let video = document.querySelector(".video");
let glass = document.querySelector(".hour-glass");
let btn = document.getElementById("play-pause");

function togglePlayPause() {
	if (video.paused) {
		btn.className = "pause";
		video.play();
	} else {
		btn.className = "play";
		video.pause();
	}
}

btn.onclick = function() {
	togglePlayPause();
}

video.addEventListener('timeupdate', function() {
	let glassPos = video.currentTime / video.duration;
	glass.style.width = glassPos * 100 + "%";
});

let btnFullscreen = document.getElementById("expand-compress");
let container = document.querySelector(".videoplayer");

function getFullscreenElement() {
    return document.getFullscreenElement
    || document.webkitFullscreenElement
	|| document.mozFullscreenElement
    || document.msFullscreenElement;
}

function toggleFullscreen() {
    if (getFullscreenElement()) {
        btnFullscreen.className = "expand";
        document.exitFullscreen();
    } else {
        btnFullscreen.className = "compress";
        document.querySelector(".videoplayer").requestFullscreen().catch(console.log);

    }
}

btnFullscreen.onclick = function() {
    toggleFullscreen();
}

var showing = [1, 0, 0, 0, 0, 0];
var faserArray = ['fase_1', 'fase_2', 'fase_3', 'fase_4', 'fase_5', 'fase_6'];
function nextFase() {
    var faseElementer = [];
    for (var i = 0; i < faserArray.length; i++) {
        faseElementer.push(document.getElementById(faserArray[i]));
        console.log(faseElementer);
    }
    for (var i = 0; i < showing.length; i++) {
        if (showing[i] == 1) {
            faseElementer[i].style.display = 'none';
            showing[i] = 0;
            if (i == showing.length - 1) {
                faseElementer[0].style.display = 'block';
                showing[0] = 1;
            } else {
                faseElementer[i + 1].style.display = 'block';
                showing[i + 1] = 1;
            }
            break;
        }
    }
}

//ALLE FUNKTIONER TIL BUTTONS FASE 1
function fase1button2(){
        fase_1.style.display = 'none';
		fase_2.style.display = 'block';
		showing[0] = 0
		showing[1] = 1
}

function fase1button3(){
        fase_1.style.display = 'none';
		fase_3.style.display = 'block';
		showing[0] = 0
		showing[2] = 1
}

function fase1button4(){
        fase_1.style.display = 'none';
		fase_4.style.display = 'block';
		showing[0] = 0
		showing[3] = 1
}

function fase1button5(){
        fase_1.style.display = 'none';
		fase_5.style.display = 'block';
		showing[0] = 0
		showing[4] = 1
}

function fase1button6(){
        fase_1.style.display = 'none';
		fase_6.style.display = 'block';
		showing[0] = 0
		showing[5] = 1
}

//ALLE FUNKTIONER TIL BUTTONS FASE 2
function fase2button1(){
        fase_2.style.display = 'none';
		fase_1.style.display = 'block';
		showing[1] = 0
		showing[0] = 1
}

function fase2button3(){
        fase_2.style.display = 'none';
		fase_3.style.display = 'block';
		showing[1] = 0
		showing[2] = 1
}

function fase2button4(){
        fase_2.style.display = 'none';
		fase_4.style.display = 'block';
		showing[1] = 0
		showing[3] = 1
}

function fase2button5(){
        fase_2.style.display = 'none';
		fase_5.style.display = 'block';
		showing[1] = 0
		showing[4] = 1		
}

function fase2button6(){
        fase_2.style.display = 'none';
		fase_6.style.display = 'block';
		showing[1] = 0
		showing[5] = 1
}

//ALLE FUNKTIONER TIL BUTTONS FASE 3
function fase3button1(){
        fase_3.style.display = 'none';
		fase_1.style.display = 'block';
		showing[2] = 0
		showing[0] = 1
}

function fase3button2(){
        fase_3.style.display = 'none';
		fase_2.style.display = 'block';
		showing[2] = 0
		showing[1] = 1
}

function fase3button4(){
        fase_3.style.display = 'none';
		fase_4.style.display = 'block';
		showing[2] = 0
		showing[3] = 1
}

function fase3button5(){
        fase_3.style.display = 'none';
		fase_5.style.display = 'block';
		showing[2] = 0
		showing[4] = 1
}

function fase3button6(){
        fase_3.style.display = 'none';
		fase_6.style.display = 'block';
		showing[2] = 0
		showing[5] = 1
}

//ALLE FUNKTIONER TIL BUTTONS FASE 4
function fase4button1(){
        fase_4.style.display = 'none';
		fase_1.style.display = 'block';
		showing[3] = 0
		showing[0] = 1
}

function fase4button2(){
        fase_4.style.display = 'none';
		fase_2.style.display = 'block';
		showing[3] = 0
		showing[1] = 1
}

function fase4button3(){
        fase_4.style.display = 'none';
		fase_3.style.display = 'block';
		showing[3] = 0
		showing[2] = 1
}

function fase4button5(){
        fase_4.style.display = 'none';
		fase_5.style.display = 'block';
		showing[3] = 0
		showing[4] = 1
}

function fase4button6(){
        fase_4.style.display = 'none';
		fase_6.style.display = 'block';
		showing[3] = 0
		showing[5] = 1
}

//ALLE FUNKTIONER TIL BUTTONS FASE 5
function fase5button1(){
        fase_5.style.display = 'none';
		fase_1.style.display = 'block';
		showing[4] = 0
		showing[0] = 1
}

function fase5button2(){
        fase_5.style.display = 'none';
		fase_2.style.display = 'block';
		showing[4] = 0
		showing[1] = 1
}

function fase5button3(){
        fase_5.style.display = 'none';
		fase_3.style.display = 'block';
		showing[4] = 0
		showing[2] = 1
}

function fase5button4(){
        fase_5.style.display = 'none';
		fase_4.style.display = 'block';
		showing[4] = 0
		showing[3] = 1
}

function fase5button6(){
        fase_5.style.display = 'none';
		fase_6.style.display = 'block';
		showing[4] = 0
		showing[5] = 1
}

/* #region Pop up */
var jsbtn = document.querySelector ('.button');
var popupbg =document.querySelector ('.popup-bg');
var popupclose =document.querySelector ('.popup-close');
var tmrw = new Date();
var date = (tmrw.getDate()+1)+'/'+(tmrw.getMonth()+1)+'-'+tmrw.getFullYear();

jsbtn.addEventListener ('click',function(){
    popupbg.classList.add('bg-active')
}); 

popupclose.addEventListener ('click',function(){
    popupbg.classList.remove('bg-active')
});


document.getElementById("date").innerHTML = date;
/* #endregion */