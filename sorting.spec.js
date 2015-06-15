describe('Bubble Sort', function(){


	it('handles an empty array', function(){
		expect(bubbleSort([])).toEqual([]);
	});



	it('handles a 1 elt array', function(){
		expect(bubbleSort([1])).toEqual([1]);
	});



	it('returns the correct number of swaps', function(){
		spyOn(window, 'swap').andCallThrough();; //find the window, find swap and replace with spy
		//default for spyOn replaces method with something empty
		//use andCallThrough which says replace with something that does the same as before

		//CONCEPTUALLY THIS IS WHAT SPYON IS
		//function spyOn(obj, methodName){

		//	WITHOUT CALL THROUGH - when only care about how many times it gets called
		// 	var spy = function(){
		// 		spy.callCount++
		// 	};
		// 	obj[methodName] = spy;

		// WITH CALL THROUGH - calls the function
		// 	var oldFn = obj[methodName];
		// 	var spy = function(){
		// 		spy.callCount++;
		// 		oldFn();
		// 	}
		// 	obj[methodName] = spy;
		// }


		bubbleSort([2,4,1]);
		expect(swap.callCount).toEqual(2)
	});

	it('returns the correct order', function(){
		expect(bubbleSort([2,4,1])).toEqual([1,2,4]);
	});
});


describe('Merge', function(){
    it('is able to merge two sorted arrays', function(){
        // test the merging algorithm
        expect(merge([1,4], [2,3,7])).toEqual([1,2,3,4,7]);
    });
});

describe('Split Array', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4,5,6])).toEqual([[1,2,3], [4,5,6]]); 
  });
});

describe('Merge Sort', function(){
	it('Given an unsorted array, it returns the sorted array', function(){
		expect(mergeSort([2,6,4,1])).toEqual([1,2,4,6]);
	})
})