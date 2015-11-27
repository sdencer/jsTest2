function isEvenIndex(element, index){
	return (index%2 == 1);
}

function getMedian(arr){
	if(arr.length%2 == 0){
		return (arr[arr.length/2-1] + arr[arr.length/2])/2;
	} else {
		return arr[(arr.length-1)/2];
	}
}

function calculate_median(arr) {
	return getMedian(arr.filter(isEvenIndex));
}
