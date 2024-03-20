let inputLink = document.getElementById('input-link')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let img = document.querySelector('#img')

let genreat = () => {
    let data = inputLink.value;

    if (!data) {
        alert("Please Enter Your Link And Text")
        return ;
    }

    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x 150&data=${data}`
}
btn1.addEventListener("click", genreat);

let download = ()=>{
    let name = inputLink.value;
    if (!name) {
       alert("Please Enter Your Link And Text");
       return;
        
    }
    
        const img = document.getElementById("img")
    const anchorElement = document.createElement("a")
    anchorElement.href= img.src
    anchorElement.download = `${name}.png`
    document.body.appendChild(anchorElement)
    anchorElement.click();
    document.body.remove(anchorElement)
    return;
    
}
btn2.addEventListener("click",download)

