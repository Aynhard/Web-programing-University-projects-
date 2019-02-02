/* Function for Drop - Drag */
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


/* 1 */
function readDropZone(id){
	id.innerHTML = "Бяло, Зелено, Червено";
}

/* 3 */
function wrongAnswer(id){
	id.innerHTML = "ОПИТАЙ ПАК!";
}
function right(id){
	id.innerHTML = "ПРАВИЛНО!";
	document.getElementById("aboutDiamond").innerHTML = "Най-често използваната фигура в българската шевица е ромбът. Той е символ на плодовитостта и благоденствието на рода. ";
}

/* 4 */
function answerNumbar(id) {
    var txt = "";
    if (document.getElementById("id1").value=="22") {
        document.getElementById("demo").style.color='green'; 
       txt = "Правилен отговор!";
    } else {
	document.getElementById("demo").style.color='red';
        txt = "Грешен отговор!";
    }
    document.getElementById("demo").innerHTML = txt;
}

/* 5 */
function rightAnswer(id){
	x=document.getElementById("colorcorrect");
	x.style.color="green";
	document.getElementById("right").innerHTML = " - правилен отговор!";
}

/* 6 */
function crossTick(id){
	document.getElementById("demo1").innerHTML = "✓";
	document.getElementById("demo2").innerHTML = "✓";
	document.getElementById("demo3").innerHTML = "✓";
	document.getElementById("demo4").innerHTML = "Х";
	document.getElementById("demo5").innerHTML = "Х";
	document.getElementById("demo6").innerHTML = "Х";
	document.getElementById("demo7").innerHTML = "✓";
}
