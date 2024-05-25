const audioTds = document.querySelector("#audioTds");
// window.addEventListener('load', function () {
//     console.log("jasm")
//     audioTds.muted = true;
//     audioTds.play()
// })

document.addEventListener("click", function () {
    audioTds.play();
    document.removeEventListener("click", arguments.callee);
});


const valueA = document.querySelector("#valueA");
const valueB = document.querySelector("#valueB");
const valueC = document.querySelector("#valueC");
const valueD = document.querySelector("#valueD");
const valueE = document.querySelector("#valueE");
const valueF = document.querySelector("#valueF");
const valueG = document.querySelector("#valueG");
const valueH = document.querySelector("#valueH");


const validateMyForm = () => {

    let numberA = Number(valueA.value);
    let numberB = Number(valueB.value);
    let numberC = Number(valueC.value);
    let numberD = Number(valueD.value);
    if (!numberA && !numberB && !numberC && !numberD) {
        valueF.value = "NAN";
        valueE.value = "NAN";
        valueG.value = "NAN";
        valueH.value = "NAN";
    }
    else {
        valueE.value = (numberA + numberD) - (numberB + numberC)

        if (valueE.value > 0) {
            valueF.value = valueE.value * 0.3
            valueH.value = Number(valueF.value) - Number(valueG.value)
            console.log(valueH)
        } else {
            valueF.value = 0
        }
    }

}
valueC.addEventListener("submit", validateMyForm);
const english = document.querySelector("#English");
const hindi = document.querySelector("#hindi");
function translatePage() {
    var languageCode = document.getElementById("language-selector").value;
    if (languageCode === "en") {
        english.style.display = "block";
        hindi.style.display = "none";
    } else {
        english.style.display = "none";
        hindi.style.display = "block";
    }
}



