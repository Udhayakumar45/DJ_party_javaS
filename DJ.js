const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,1)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_qWtLlV1qZDEGNOoBU1RLvsOxUimxhhr8Q&usqp=CAU=')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("u1").innerHTML = "Whenever, wherever!!!"
    }, 200)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 29, 29, 0.3), rgba(231, 80, 236, 0.479)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTE3n8hJdUqPdWIhDuSu78cd-wHzN_FiOcSQ&usqp=CAU')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("u1").innerHTML = "Were meant to be together"
    }, 400)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(bluer(2, 230, 190, 0.2), rgba(255, 23, 23)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTE3n8hJdUqPdWIhDuSu78cd-wHzN_FiOcSQ&usqp=CAU')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("u1").innerHTML = "I'll be there, and you'll be near!!!"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 0, 0, 0.3), rgb(3, 25, 45)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGr7oU7TRdE-7a1wet9q-eWlMI-uqQY26Xg&usqp=CAU')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("u1").innerHTML = "And that's the deal, my dear"
    }, 800)
}

setInterval(changeText, 900)
