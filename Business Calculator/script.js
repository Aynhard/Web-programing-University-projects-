$(document).ready(function(){

/* --- ФУНКЦИЯ ЗА ДОБАВЯНЕ НА ПОЛЕТА--- */
	$("#newForm").click(function(){
		$("ul").append('<li><p>Приход:</p><input type="text" name="prihod" maxlength="7" onkeypress="validate(event)"> \
		                    <p>Разход:</p><input type="text" name="razhod" maxlength="7" onkeypress="validate(event)"></li>');
	});
/* --- КРАЙ --- */
		
/* --- ФУНКЦИЯ ЗА ИЗЧИСЛЯВАНЕ НА ДАНЪКА --- */
    $("#calcDanuk").click(function(){
	 var prihodi = document.getElementsByName("prihod");
	 var razhodi = document.getElementsByName("razhod");
	 var sum = [];
	 var result = 0;
				
		for (i = 0; i < prihodi.length; i++) { 
					
		   sum[i] = (20 / 100) * (prihodi[i].value - razhodi[i].value) ; 
				
		   }
				 
			for (i = 0; i < sum.length; i++) { 
					
			   result += sum[i];
				 
			}
				 
			  $('input[name="rezultat"]').val(result);
				 	 
	});
/* --- КРАЙ --- */
/* --- ФУНКЦИЯ ЗА ИЗЧИСЛЯВАНЕ НА ПЕЧАЛБАТА --- */

	$("#calcPechalba").click(function(){
	 var prihodi = document.getElementsByName("prihod");
	 var razhodi = document.getElementsByName("razhod");
	 var rezultata = document.getElementsByName("rezultat");
	 var sum = [];
	 var result = 0;
			
       
		for (i = 0; i < prihodi.length; i++) { 

		sum[i] = (prihodi[i].value - razhodi[i].value); 

		}		 
			for (i = 0; i < sum.length; i++) { 
					
			   result += sum[i];
				 
			}
				 result -= rezultata[0].value; 
			  $('input[name="pechalba"]').val(result);
				 	 
	});
/* --- КРАЙ --- */		    

});

/* ПОЗВОЛЯВА В ПОЛЕТАТА ДА СЕ ВЪВЕЖДАТ САМО ЧИСЛА */
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
/* КРАЙ */
/* БУТОН 1 за нови полета */
status==1;
function clickLimitStyle()
{
  x = document.getElementById("newForm");
	x.style.color = "#000000"
	x.style.border = "1px solid #000";
	x.style.background = "-webkit-linear-gradient( #096BAC, #ffffff)";
	
	if(status<9)
	{
	 	x.disabled = false;
    	status++;
	}
	else
	{
	 x.disabled = true;
	}
}
/* КРАЙ */
/* БУТОН 2 за данък */
function addBorderDanuk(){
	x=document.getElementById("calcDanuk");

	x.style.color = "#000000"
	x.style.border = "1px solid #000";
	x.style.background = "-webkit-linear-gradient( #096BAC, #ffffff)";

}
/* КРАЙ */
/* БУТОН 3 за печалба */
function addBorderPechalba(){
	y=document.getElementById("calcPechalba");

	y.style.color = "#000000"
	y.style.border = "1px solid #000";
	y.style.background = "-webkit-linear-gradient( #096BAC, #ffffff)";

}
/* КРАЙ */