var operande1 = '0';
var operator = '+';
var test = false;
function calculer(g, v){
	//console.log(g, v);
	var ecran = document.querySelector('#ecran');
	switch(g){
		case 'ch' :
		if (test) {
			ecran.value = "";
			test = false;
		}
		if (ecran.value == '0') ecran.value = '';
			ecran.value += v;
		break;

		case 'dec' :
			if (ecran.value.indexOf('.') == -1)
			ecran.value += '.';
		break;

		case 'op' :
			calculer('eg');
			operande1 = ecran.value; 
			operator = v;
			test = true;
		break;

		case 'eg' :
			switch(operator){
				case '+' : 
					ecran.value = ecran.value*1 + parseFloat(operande1);
				break;

				case '-' : 
					ecran.value = operande1 - ecran.value;
				break;

				case '/' : 
					ecran.value = operande1 / ecran.value;
				break;

				case 'x' : 
					ecran.value = operande1 * ecran.value;
				break;
			}
		break;

		case 'sp' :

		break;
	}
}
function reset(){
	var ecran = document.querySelector('#ecran');
	ecran.value = "0";
}