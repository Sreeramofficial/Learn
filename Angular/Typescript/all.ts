type values={
    name:string,
    age:number,
    isMarried?:boolean
}


let student={
    name:"sreeram",
    age:20,
    isMarries:true
}
function getUserName(det:values,det2:values):string|number{
    return det.age;

}

const retuenvAL=getUserName(student,student);