const { default: axios } = require("axios")

console.log("Hello World")

const button = document.querySelector("button")

function buttonClicked() {
    console.log("Button Clicked")
}

const getResidents = () => {
    axios.get("https://swapi.dev/api/planets/2")
    .then(res => {
        for(let i=0; i<res.data.residents.length; i++){
            console.log(res.data.residents)
            axios.get(res.data.residents[i])
            .then(res => {
                console.log(res.data)
                let element = document.createElement("h2")
                element.textContent = res.data.name
                document.querySelector("#dis").append(element)
            })
        }
})
}

button.addEventListener("click", getResidents)
