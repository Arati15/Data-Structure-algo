//Given 2 arrays, create a function that let;s user know (true/false) 
//whether these two arrays contain any common items.

//For example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//shoud return false.
//---------
//const array1 = ['a', 'b', 'c', 'x']; if I had this exaample it shoud reture this....
//const array2 = ['z', 'y', 'x'];
//shoud return true.

//fun has 2 param  -no size limit
//return true or false

//brute force o(n^2) if array size is same but id different then o (m * n)
//space complexity - o (1)
function containCommonItem (arr1, arr2) {
    for(let i = 0; i < arr1.length; i++)
    {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1 [i] === arr2 [j])
            {
                return true;
            }
        }
    }
    return false;
}

containCommonItem(array1, array2);

//use hashtable

const array1 = ['a', 'b', 'c', 'x']; //converted into object
const array2 = ['z', 'y', 'a'];
//array 1 ==> obj {
    //a: true
    //b: true
    //c: true
    //x: true
//}
//array2[index] === obj.properties

//Time complexity o (m + n)
//space complexity o(n)
functions containCommonItem2(arr1, arr2) {
    //loop through first array and create object wher properties -- itemin the array
    //can we assume always assume always 2 params? if its only onw eg (array1, null), (array1 ,0) throw error

    let map = {};
    for (let i = 0; i < array1.length; i++) {
        if(!map[array1[i]]) {
            const item = array1[1];
            map[item] =  true;
        }
    }
    //loop through second array and check if item in second array exists on created object.
    // two seprate 2 for loops used here
    for (let j = 0; j < arr2.length; j++) {
        if(map[array2[j]]) {
            return false;
        }
    }


}


// function with some built in javaScript method
//there is actully another solution using some of building method of javaScrip. itsmore readable 
function containCommonItem3(array1, array2){
    return arr1.some(item => arr2.includes(item))
}

containCommonItem3(array1, array2)



