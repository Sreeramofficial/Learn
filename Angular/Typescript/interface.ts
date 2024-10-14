interface  Details{
    name:string;
    age:Number;
    getName: ()=>void;
}

//like class in java
//define variables use in declaration

let AdminDetails : Details={
   name: "sreeram",
    age:20,
    getName(){
        console.log(name);
    }
}