//Q3 a)
var arr=["1", "2", "3", "4", "5", "6", "7"];
var idx=arr.indexOf("6");
arr.splice(idx,1);
console.log(arr.length);

//Q3 b)
var arr=["1", "2", "3", "4", "5", "6", "7"];
for(var a in arr){
    var v=Number(arr[a]);
    console.log(v +" "+ typeof v);
}

//Q3 c)
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

// Q3 d)
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

//Q3 e)
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

//Q3 f)
var arr=["1", "2", "3", "4", "5", "6", "7"];
for(var i in arr){
    if(arr[i]=="3" || arr[i]=="6" || arr[i]=="7"){
     console.log(arr[i]);
    }
}

// Q3 g)
var arr=["1", "2", "3", "4", "5", "6", "7"];
var brr=[1, 2, "3", 4, 5, 6, "7"]
for(var i=0;i<arr.length;i++){
   for(var j=0;j<brr.length;j++){
       if(arr[i] === brr[j] && typeof arr[i] == typeof brr[i]){
           console.log(arr[i]);
       }
   }
}

//Q3 h)
var arr=[0,2,3,7,5,6,8];
for(var i in arr){
    var mul=i*arr[i];
    if(mul>40){
        console.log("Digit: "+arr[i]+"  |  "+"value: "+mul);
    }
}

//Q3 i)
var a1=[0,1,2,3,4];
var a2=[5,6,7,8,9];
var mergedArr=a1.concat(a2);
for(var i in mergedArr){
console.log(mergedArr[i]);
}
