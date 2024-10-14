// utility type

type Users = {
  //    readonly name:string;    we can make thisas read only
   name: string;
  age: number;
};


// details are read on;y
const usDetails:Readonly<Users>={
    name:"sreeram",
    age:20
}


// varianles are optiosnal
const usDetails2: Partial<Users> = {
//   name: "sreeram",
//   age: 20,
};

// we need to pass all the vaels irrespective to optional
const usDetails3: Required<Users> = {
    name: "sreeram",
    age: 20,
};


// here we can t add name becouse it excpeig age only but that is mandotaory
const usDetails4: Pick<Users,"age"> = {
    // name: "sreeram",
    age: 20,
};
// here we can t add age becouse it excpeig name and age will omit only but that is mandotaory
const usDetails5: Omit<Users,"age"> = {
    name: "sreeram",
    // age: 20,
};