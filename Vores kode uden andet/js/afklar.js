//JS KODE FOR VIDEO
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

//JS KODE FOR "NEXT"-KNAP
var showing = [1, 0, 0, 0, 0, 0, 0];
var faserArray = ['fase_7', 'fase_1', 'fase_2', 'fase_3', 'fase_4', 'fase_5', 'fase_6'];
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
		showing[1] = 0
		showing[2] = 1
}

function fase1button3(){
        fase_1.style.display = 'none';
		fase_3.style.display = 'block';
		showing[1] = 0
		showing[3] = 1
}

function fase1button4(){
        fase_1.style.display = 'none';
		fase_4.style.display = 'block';
		showing[1] = 0
		showing[4] = 1
}

function fase1button5(){
        fase_1.style.display = 'none';
		fase_5.style.display = 'block';
		showing[1] = 0
		showing[5] = 1
}

function fase1button6(){
        fase_1.style.display = 'none';
		fase_6.style.display = 'block';
		showing[1] = 0
		showing[6] = 1
}

function fase1button7(){
        fase_1.style.display = 'none';
		fase_7.style.display = 'block';
		showing[1] = 0
		showing[0] = 1
}


//ALLE FUNKTIONER TIL BUTTONS FASE 2
function fase2button1(){
        fase_2.style.display = 'none';
		fase_1.style.display = 'block';
		showing[2] = 0
		showing[1] = 1
}

function fase2button3(){
        fase_2.style.display = 'none';
		fase_3.style.display = 'block';
		showing[2] = 0
		showing[3] = 1
}

function fase2button4(){
        fase_2.style.display = 'none';
		fase_4.style.display = 'block';
		showing[2] = 0
		showing[4] = 1
}

function fase2button5(){
        fase_2.style.display = 'none';
		fase_5.style.display = 'block';
		showing[2] = 0
		showing[5] = 1
}

function fase2button6(){
        fase_2.style.display = 'none';
		fase_6.style.display = 'block';
		showing[2] = 0
		showing[6] = 1
}

function fase2button7(){
        fase_2.style.display = 'none';
		fase_7.style.display = 'block';
		showing[2] = 0
		showing[0] = 1
}

//ALLE FUNKTIONER TIL BUTTONS FASE 3
function fase3button1(){
        fase_3.style.display = 'none';
		fase_1.style.display = 'block';
		showing[3] = 0
		showing[1] = 1
}

function fase3button2(){
        fase_3.style.display = 'none';
		fase_2.style.display = 'block';
		showing[3] = 0
		showing[2] = 1
}

function fase3button4(){
        fase_3.style.display = 'none';
		fase_4.style.display = 'block';
		showing[3] = 0
		showing[4] = 1
}

function fase3button5(){
        fase_3.style.display = 'none';
		fase_5.style.display = 'block';
		showing[3] = 0
		showing[5] = 1
}

function fase3button6(){
        fase_3.style.display = 'none';
		fase_6.style.display = 'block';
		showing[3] = 0
		showing[6] = 1
}
function fase3button7(){
        fase_3.style.display = 'none';
		fase_7.style.display = 'block';
		showing[3] = 0
		showing[0] = 1
}

//ALLE FUNKTIONER TIL BUTTONS FASE 4
function fase4button1(){
        fase_4.style.display = 'none';
		fase_1.style.display = 'block';
		showing[4] = 0
		showing[1] = 1
}

function fase4button2(){
        fase_4.style.display = 'none';
		fase_2.style.display = 'block';
		showing[4] = 0
		showing[2] = 1
}

function fase4button3(){
        fase_4.style.display = 'none';
		fase_3.style.display = 'block';
		showing[4] = 0
		showing[3] = 1
}

function fase4button5(){
        fase_4.style.display = 'none';
		fase_5.style.display = 'block';
		showing[4] = 0
		showing[5] = 1
}

function fase4button6(){
        fase_4.style.display = 'none';
		fase_6.style.display = 'block';
		showing[4] = 0
		showing[6] = 1
}
function fase4button7(){
        fase_4.style.display = 'none';
		fase_7.style.display = 'block';
		showing[4] = 0
		showing[0] = 1
}

//ALLE FUNKTIONER TIL BUTTONS FASE 5
function fase5button1(){
        fase_5.style.display = 'none';
		fase_1.style.display = 'block';
		showing[5] = 0
		showing[1] = 1
}

function fase5button2(){
        fase_5.style.display = 'none';
		fase_2.style.display = 'block';
		showing[5] = 0
		showing[2] = 1
}

function fase5button3(){
        fase_5.style.display = 'none';
		fase_3.style.display = 'block';
		showing[5] = 0
		showing[3] = 1
}

function fase5button4(){
        fase_5.style.display = 'none';
		fase_4.style.display = 'block';
		showing[5] = 0
		showing[4] = 1
}

function fase5button6(){
        fase_5.style.display = 'none';
		fase_6.style.display = 'block';
		showing[5] = 0
		showing[6] = 1
}

function fase5button(){
        fase_5.style.display = 'none';
		fase_6.style.display = 'block';
		showing[5] = 0
		showing[6] = 1
}
function fase5button7(){
        fase_5.style.display = 'none';
		fase_7.style.display = 'block';
		showing[5] = 0
		showing[0] = 1
}

//ALLE FUNKTIONER TIL BUTTONS FASE 7
function fase7button1(){
        fase_7.style.display = 'none';
		fase_1.style.display = 'block';
		showing[0] = 0
		showing[1] = 1
}

function fase7button2(){
        fase_7.style.display = 'none';
		fase_2.style.display = 'block';
		showing[0] = 0
		showing[2] = 1
}
function fase7button3(){
        fase_7.style.display = 'none';
		fase_3.style.display = 'block';
		showing[0] = 0
		showing[3] = 1
}
function fase7button4(){
        fase_7.style.display = 'none';
		fase_4.style.display = 'block';
		showing[0] = 0
		showing[4] = 1
}
function fase7button5(){
        fase_7.style.display = 'none';
		fase_5.style.display = 'block';
		showing[0] = 0
		showing[5] = 1
}
function fase7button6(){
        fase_7.style.display = 'none';
		fase_6.style.display = 'block';
		showing[0] = 0
		showing[6] = 1
}

//JS KODE FOR POP-UP BESKED PÅ TILLYKKE SIDEN
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
