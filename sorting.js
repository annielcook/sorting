
//while (swapBoolean is true because that means there are swaps happening)
	//swapBoolean = false
	//for loop through all of the elements in the array
		//compare i with i+1
		//swap if arr[i] > arr [i+1]
			//increment swap counter
			//swapBoolean = true

var bubbleSort = function(arr){
	var swapBoolean = true;
	while(swapBoolean){
		swapBoolean = false;
		for(var i = 0; i < arr.length - 1; i ++){
			if(arr[i]>arr[i+1]){
				swap(arr, i, i+1);
				swapBoolean = true;
			}
		}
	}


	return arr;
};

function swap (arr, i , j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}


// Merge Function : takes 2 sorted arrays => create a new arr of length sum of 2
// for loop through the shortest => compares each i element => puts smallest element, and adds the rest
// newArr[i] = shift of the smallest compared


//compare first elts
//add lesser elt to new array
//shift off of old arr
//do while there are elts in arrays
function merge (arr1, arr2) {
	var newArr = [];

//IN CLASS SOLUTION	
	// var l = 0, r = 0;
	// for(var i = 0; i < arr1.length + arr2.length; i++){
	// 	var fromLeft;
	// 	if(arr1 === undefined){
	// 		fromLeft = true;
	// 	} else if (left[l] === undefined){
	// 		fromLeft = false;
	// 	} else {
	// 		if(arr1[l] > arr2[r]){
	// 			fromLeft = false;
	// 		} else{
	// 			fromLeft = true;
	// 		}
	// 	}
	// 	newArr.push(fromLeft ? arr1[l++] : arr2[r++]);
	// }


	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) {
			newArr.push(arr1.shift());
		}
		else {
			newArr.push(arr2.shift());
		}
	}
	// if(arr1.length > 0) newArr = newArr.concat(arr1);
	// if(arr2.length > 0) newArr = newArr.concat(arr2);

	return newArr.concat(arr1).concat(arr2);
}

function split(arr){
	var ret_arr = [];
	var middle = arr.length/2;
	ret_arr[0] = arr.slice(0, middle);
	ret_arr[1] = arr.slice(middle);


	return ret_arr;
}


function mergeSort (arr) {
// recursively call split until ret_arr[0].length = 1
	//ultimately we want an array of arrays of length 1

	if(arr.length <= 1){
		return arr;
	}

	var splitted = split(arr);
	var sorted1 = mergeSort(splitted[0]);
	var sorted2 = mergeSort(splitted[1]);

	return merge(sorted1, sorted2);





// once splited, call merge on 
}










