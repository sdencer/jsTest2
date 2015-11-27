function isEvenIndex(element, index){
	return (index%2 == 1);
}
function isRepeat(element, index, arr){
	return arr.indexOf(element) == arr.lastIndexOf(element);
}
function single_element(arr) {
	return arr.filter(isEvenIndex).filter(isRepeat);
}

