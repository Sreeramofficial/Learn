// key of values of


// this is object
const Status={
    FAIL:"fail",
    PASS:"pass"
}

// so we need to convert to type format
// then we are taking it as key
function getStatus(id :string,status: keyof typeof Status){
    console.log(Status[status]);
}



// this will generate

// type status={
//     fail:string;
//     pass:string;
// }


// interface Person {
//   name: string;
//   age: number;
// }
