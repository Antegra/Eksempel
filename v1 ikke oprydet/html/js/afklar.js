

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



var showing = [1, 0, 0, 0, 0];
var faserArray = ['fase_1', 'fase_2', 'fase_3', 'fase_4', 'fase_5'];
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




