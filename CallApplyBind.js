let Name = {
    firstName: "Pranit",
    lastName: "Yadav",
}

let printFullName = function(homeTown, state){
    console.log(this.firstName +" "+ this.lastName +" from "+ homeTown +" , "+ state);
}
printFullName.call(Name, "Mumbai","Maharashtra")

/*1) Use of call method
        This is also known as function borrowing.  
        With the help of call we can do function borrowing. We can borrow the fucntion from other object and use it with data of other object.
*/

let Name2 = {
    firstName: "Soul",
    lastName: "Mavi",
    
}
printFullName.call(Name2, "Pune", "Maharashtra")

/* 2) Use of Apply Method 
        The only difference between call and apply method is the way of passing the second arguments.
        In call method we are passing it individually and in appy method we are passing it through array list. 
*/

printFullName.apply(Name2, ["Pune", "Maharashtra"])

/* 3) Use of Bind Method
        It will gives the copy of function which can be invoke directly later
*/

let printMyName = printFullName.bind(Name, "Mumbai", "Maharashtra")
console.log(printMyName);
printMyName()
