const submitBtn = document.getElementById("submit-pass")

submitBtn.addEventListener('click', () => {
    var num1 = document.getElementById("first-num").value
    var num2 = document.getElementById("second-num").value
    var num3 = document.getElementById("third-num").value

    document.querySelector('#result-text').style.fontWeight = "bold"
    document.querySelector('#result-text').style.color = "white"

    if (num1 == "9" && num2 == "1" && num3 == "1") {
        document.getElementById("result-text").innerText = "password 1 correcto"
        document.querySelector('.card-login').style.height = "180px"
    } else if (num1 == "7" && num2 == "1" && num3 == "4") {
        document.getElementById("result-text").innerText = "password 2 correcto"
        document.querySelector('.card-login').style.height = "180px"
    }
    else {
        document.getElementById("result-text").innerText = "password incorrecto"
        document.querySelector('.card-login').style.height = "180px"
    }
})
