// generics
function getName<T>(age :T):T{
    return age;
}
getName(6);
//we  can say like type
// then
getName<string>("sre");

// getName<string>(21);