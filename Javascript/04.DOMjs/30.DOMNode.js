const ul = document.querySelector(".list-group");
const courses = [
    {
        name: 'Javascript',
        price: 2.5,
    },
    {
        name: 'React ',
        price: 2.2
    },
    {
        name:'Angular ',
        price: 2.1
    },
    {
        name:'MERN full stack ',
        price:'3.5'
    }
];

function generate(){
    courses.forEach((course)=>{
        const li = document.createElement("li");
        li.classList.add("list-item");
        const name = document.createTextNode(course.name);
        li.appendChild(name);
        
        const span = document.createElement("span");
        span.classList.add("price");
        const price = document.createTextNode(course.price);
        span.appendChild(price);
        
        
        li.appendChild(span);
        ul.appendChild(li);
    });
        
}

generate();

const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=> {
    courses.sort((a,b)=> a.price - b.price );
    ul.innerHTML = "";
    generate();
})
