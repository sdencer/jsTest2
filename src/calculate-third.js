
function isEvenIndex(element, index){
	return (index%2 == 1);
}

function isEvenElement(element, index){
	return element%2 ==0;
}

function groupByDigitLength(prev, curv, index, arr){
	var count = 1;
	var digitLength = curv.toString().length;

	if(prev[digitLength-1] == undefined){
		prev[digitLength-1] = [curv, count];
	} else {
		prev[digitLength-1] = [prev[digitLength-1][0] + curv, prev[digitLength-1][1]+1];
	}

	return prev;

}

function calculateAverage(prev, curv, index, arr){
	return (curv[0]/curv[1]);
}

function even_group_calculate_average(arr) {
	var newArr =arr.filter(isEvenIndex).filter(isEvenElement).reduce(groupByDigitLength,[]).filter(function(element){
		return element != undefined;
	});

	if(newArr.length==0){
		return [0];
	}
	for(var i=0;i<newArr.length;i++){

		newArr[i] = newArr[i][0]/newArr[i][1];

	}
	return newArr;

}
