const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const headerContainer = document.querySelector("#root")
    console.log({headerContainer})
    const header = document.createElement ("h1")
    header.textContent = "FREELANCERS"
    headerContainer.append(header)
    console.log({headerContainer})

// couldnt figure out how to make it loop

     const userContainer = document.getElementById("root")
     const ul = document.createElement("ul")
     users.forEach(element =>{
         const li = document.createElement("li")
         li.textContent = element
         ul.append(li)
     })
/
     userContainer.append(ul)
     console.log({userContainer})

     // was able to make it display a list from an array

     const freelanceInfo = ["More freedom", "Self-management", "Location flexibility", "Flexible hours"]
     
     const freelanceContariner = document.getElementById("root")
     const ul2 = document.createElement('ul')
     freelanceInfo.forEach(facts =>{
        const li2 = document.createElement("li")
        li2.textContent = facts
        ul2.append(li2)
     })
freelanceContariner.append(ul2)
console.log({freelanceContariner})



}


main(); 