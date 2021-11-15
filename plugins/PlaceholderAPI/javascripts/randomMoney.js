function runPlaceholder(){
	//Variables que se pueden cambiar
	var max=20000;
	var min=8000;
	return parseInt(Math.random() * (max - min) + min).toFixed();
}
runPlaceholder();