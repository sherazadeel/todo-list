let form = document.getElementById("form");
let input = document.getElementById("input");
let secbox = document.getElementById("secondbox");
let span = document.getElementById("span")
let arr = [];

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let user_value = e.target.input.value;
    if(!user_value){
        alert("missing data")
    }
    else {
        arr.push(user_value)
        renderhtml()
    }
    // console.log(arr);
    form.reset();
})
let renderhtml = ()=>{
    secbox.innerHTML = "";
    arr.map((value,index)=>{
        let a = secbox.innerHTML += `<div id="innerdata">
        <span id="span">${value}</span>
        <div id="side">
        <button id="edite"  onclick="edite(${index})"}>Edite</button>
        <button id="delete"  onclick="delet(${index})">Delete</button>
        </div>
        </div>`
    })
   
}
let edite = (id)=>{
    let store = arr[id];
    let retur = prompt("reenter your data",store)
    arr.splice(id,1,retur)
    renderhtml()
}
// console.log(edite());

    
let delet = (id)=>{
    arr.splice(id,1);
    renderhtml();
}