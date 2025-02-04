// Q3)["1", "2", "3", "4", "5", "6", "7"]

//Q3 a)Remove the number "6" from the array and console the length of the array.

var arr=["1", "2", "3", "4", "5", "6", "7"];
var idx=arr.indexOf("6");
arr.splice(idx,1);
console.log(arr.length);

//Q3 b) Convert all the items of the array to data type number and console each item's data type, using any of the array iteration methods provided by JS for iteration.
var arr=["1", "2", "3", "4", "5", "6", "7"];
for(var a in arr){
    var v=Number(arr[a]);
    console.log(v +" "+ typeof v);
}

//Q3 c) Remove the last three items of the array, use JS provided array method, console the array and then add "one" and "two" (strings) to the beginning of the array and console the array. 
var arr=["1", "2", "3", "4", "5", "6", "7"];
arr.splice(-3);
console.log("Removed last 3 values");
for(var a in arr){
    console.log(arr[a]);
}
var arr=["1", "2", "3", "4", "5", "6", "7"];
console.log("Added 2 string in front");
arr.unshift("one","two");
for(var a in arr){
    console.log(arr[a]);
}

// Q3 d)Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)
var arr=["1", "2", "3", "4", "5", "6", "7"];
var comb="";
console.log("concatination of string");
for( var c in arr){
    comb+=arr[c];
}
console.log(comb);
console.log("Addition of all value");
var sum=0;
for( var n in arr){
    sum+=Number(arr[n]);
}
console.log(sum);

//Q3 e)Filter out item "3" from the array and console the array (use array method)
var arr=["1", "2", "3", "4", "5", "6", "7"];
var filArr=arr.filter(function(val){
    if(val!="3"){
        return true;
    }
    else false;
});
for(var i in filArr){
console.log(filArr[i]);
}

//Q3 f)Iterate the array and console the item, when the item is either "3", "6" or "7"
var arr=["1", "2", "3", "4", "5", "6", "7"];
for(var i in arr){
    if(arr[i]=="3" || arr[i]=="6" || arr[i]=="7"){
     console.log(arr[i]);
    }
}

// Q3 g)[1, 2, "3", 4, 5, 6, "7"]  Compare this array with the above given array and console only if both items of the array have the same data type. (Compare each item of this array with each item of the other array)
var arr=["1", "2", "3", "4", "5", "6", "7"];
var brr=[1, 2, "3", 4, 5, 6, "7"]
for(var i=0;i<arr.length;i++){
   for(var j=0;j<brr.length;j++){
       if(arr[i] === brr[j] && typeof arr[i] == typeof brr[i]){
           console.log(arr[i]);
       }
   }
}

//Q3 h) [0,2,3,7,5,6,8] iterate the array, multiply each item by its index value, and console the result only if the result is greater than 40.
var arr=[0,2,3,7,5,6,8];
for(var i in arr){
    var mul=i*arr[i];
    if(mul>40){
        console.log("Digit: "+arr[i]+"  |  "+"value: "+mul);
    }
}

//Q3 i) Create two arrays with five items each, merge them into a single array, and then console them.
var a1=[0,1,2,3,4];
var a2=[5,6,7,8,9];
var mergedArr=a1.concat(a2);
for(var i in mergedArr){
console.log(mergedArr[i]);
}
