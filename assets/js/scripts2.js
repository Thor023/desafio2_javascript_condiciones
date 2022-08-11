const checkBtns = document.querySelector('.verify-button')

checkBtns.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('verify-button')){
        let num1 = document.getElementById("quantity00").value
        let num2 = document.getElementById("quantity01").value
        let num3 = document.getElementById("quantity02").value

        result = parseInt(num1) + parseInt(num2) + parseInt(num3)

        if (result <= 10) {
            document.getElementById('stickers-result').innerText = "Llevas: " + result + " stickers."
        } else {
            document.getElementById('stickers-result').innerText = "Llevas demasiados stickers (" + result + ")."
        }
    }
    if(e.target.classList.contains('clear-button')){
        let clearBtn = document.getElementById("verify")
        document.getElementById("quantity00").value = 0
        document.getElementById("quantity01").value = 0
        document.getElementById("quantity02").value = 0
        document.getElementById('stickers-result').innerText = "Llevas: 0 stickers."
    }
})
