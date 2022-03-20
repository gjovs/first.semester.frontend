

const el = document.querySelector("#button-text")
const video = document.querySelector(".bg-video")
const button = document.querySelector(".button")
let count = 0


const close = () =>{
    window.location.reload()
}

const modifyLocal = () => {    
    if(count%2 == 0){
    document.querySelector('.container').style.background ='#000'
    
    
    video.style.display = "block"
    button.style.zIndex  = "100"

    el.innerHTML = `Fechar o Trailer &#x2715 `
    button.style.position= "absolute"
    button.style.marginLeft= "700px"
    button.style.top= "175%"
    count++
    return
    }
    close()    
    return
    
}

console.log(el)
el.addEventListener("click", modifyLocal,true)


