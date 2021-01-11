const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e'); //Tc = o(1) ==> added at the end, computers knows where to add 

//pop
strings.pop();//TC = o(1) ==> delete at the end
strings.pop();

//unshift
strings.unshift('x') // Tc = o(n) ==> Its added element at the start index
// const string = ['x', a', 'b', 'c', 'd'];
                 //     1    2    3    4
                 //shift through loop  that is the reason its o(n).


//splice
strings.splice(2, 0, 'alien');// TC = o(n/2) => o(n) by rule 
//const string = ['x', a', 'b', 'c', 'd'];
                // 1   2    3     4    5
                //we need to at element at index 2  with no emement is remove 0
                // ['x', a','alien','b', 'c', 'd'];now index become
                //   1   2           3    4     5
                // we have to perfore half operation that is the reason TC is o(n/2) == o(n). 
                //rule iterating through half collection still o(n)

console.log(strings)