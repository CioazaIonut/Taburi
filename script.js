const primulTab = document.querySelector(".primul-tab");
const alDoileaTab = document.querySelector(".al-doilea-tab");
const alTreileaTab = document.querySelector(".al-treilea-tab");
const primulPraragraf = document.querySelector(".primul-paragraf");
const alDoileaParagraf = document.querySelector(".al-doilea-paragraf");
const alTreileaParagraf = document.querySelector(".al-treilea-paragraf");


//primul tab
const deschidePrimulTab = () => {
    alDoileaParagraf.style.display = "none"
    alTreileaParagraf.style.display = "none"
    primulPraragraf.style.display = "block"
    //alert("test")
}

primulTab.addEventListener("click", deschidePrimulTab);


//al dolea tab
const deschidealDoileaTab = () => {
    primulPraragraf.style.display = "none"
    alTreileaParagraf.style.display = "none"
    alDoileaParagraf.style.display = "block"
}

alDoileaTab.addEventListener("click", deschidealDoileaTab);


//al treilea Tab
const deschidealTreileaTab = () => {
    primulPraragraf.style.display = "none"
    alDoileaParagraf.style.display = "none"
    alTreileaParagraf.style.display = "block"
}

alTreileaTab.addEventListener("click", deschidealTreileaTab);

/*
structura generala a unui addEventListener:
1: scriem numele variabileiin care ne-am selectat butonul
2: scriem .addEventListener
3: punem () si in interiorul lor punem 2 lucruri: 
       - numele evenimentului scris intre "" (daca vrem sa setam ca un buton sa faca ceva pe Click atunci o sa scriem intre "" click)
       - numele functiei care sa se executeatunci cand evenimentul se intampla cand se da clikul
*/

/* 
cand in consola vedem eroarea "ceva is not defined" inseamna ca noi nu avem nici o contanta / variabila cu numele ceva
*/