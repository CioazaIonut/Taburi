const primulTab = document.querySelector(".primul-tab");
const alDoileaTab = document.querySelector(".al-doilea-tab");
const alTreileaTab = document.querySelector(".al-treilea-tab");

const primulPraragraf = document.querySelector(".primul-paragraf");
const alDoileaParagraf = document.querySelector(".al-doilea-paragraf");
const alTreileaParagraf = document.querySelector(".al-treilea-paragraf");

const resetButton = document.querySelector('.reset-button');

const seeMoreUnu = document.querySelector(".content-more-unu");
const spanMoreUnu = document.querySelector(".lorem-content-unu");
const seeLessUnu = document.querySelector(".less-content-more-unu");

const seeMoreDoi = document.querySelector(".content-more-doi");
const spanMoreDoi = document.querySelector(".lorem-content-doi");
const seeLessDoi = document.querySelector(".less-content-more-doi");

const seeMoreTrei = document.querySelector(".content-more-trei");
const spanMoreTrei = document.querySelector(".lorem-content-trei");
const seeLessTrei = document.querySelector(".less-content-more-trei");


//primul tab
const deschidePrimulTab = () => {
    primulPraragraf.style.display = "block"
    alDoileaParagraf.style.display = "none"
    alTreileaParagraf.style.display = "none"

    primulTab.classList.add("active-tab");
    alDoileaTab.classList.remove("active-tab");
    alTreileaTab.classList.remove("active-tab");
    //alert("test")
}

primulTab.addEventListener("click", deschidePrimulTab);


//al dolea tab
const deschidealDoileaTab = () => {
    primulPraragraf.style.display = "none"
    alDoileaParagraf.style.display = "block"
    alTreileaParagraf.style.display = "none"

    primulTab.classList.remove("active-tab");
    alDoileaTab.classList.add("active-tab");
    alTreileaTab.classList.remove("active-tab");
}

alDoileaTab.addEventListener("click", deschidealDoileaTab);


//al treilea Tab
const deschidealTreileaTab = () => {
    primulPraragraf.style.display = "none"
    alDoileaParagraf.style.display = "none"
    alTreileaParagraf.style.display = "block"

    primulTab.classList.remove("active-tab");
    alDoileaTab.classList.remove("active-tab");
    alTreileaTab.classList.add("active-tab");
}

alTreileaTab.addEventListener("click", deschidealTreileaTab);


// buton reset

const reset = () => {
    primulPraragraf.style.display = "block"
    alDoileaParagraf.style.display = "none"
    alTreileaParagraf.style.display = "none"

    primulTab.classList.add("active-tab");
    alDoileaTab.classList.remove("active-tab");
    alTreileaTab.classList.remove("active-tab");

    seeMoreUnu.style.display = "none"
    seeMoreDoi.style.display = "none"
    seeMoreTrei.style.display = "none"
};

resetButton.addEventListener('click', reset);

//see more Button 1

const seeMoreFunction = () =>{
    seeMoreUnu.style.display = "none"
    seeLessUnu.style.display = "block"
    spanMoreUnu.classList.remove("lorem-content-unu");

}

seeMoreUnu.addEventListener("click", seeMoreFunction);

const seeLessFunction = () => {
    spanMoreUnu.classList.add("lorem-content-unu");
    seeLessUnu.style.display = "none"
    seeMoreUnu.style.display = "block"

}
seeLessUnu.addEventListener("click",seeLessFunction);

//see more Button 2

const seeMoreFunctionDoi = () =>{
    seeMoreDoi.style.display = "none"
    seeMoreDoi.style.display = "block"
    spanMoreDoi.classList.remove("lorem-content-doi");

}

seeMoreDoi.addEventListener("click", seeMoreFunctionDoi);

const seeLessFunctionDoi = () => {
    spanMoreDoi.classList.add("lorem-content-doi");
    seeLessDoi.style.display = "none"
    seeMoreDoi.style.display = "block"

}
seeLessDoi.addEventListener("click",seeLessFunctionDoi);

//see more Button 3

const seeMoreFunctionTrei = () =>{
    seeMoreTrei.style.display = "none"
    seeMoreTrei.style.display = "block"
    spanMoreTrei.classList.remove("lorem-content-trei");

}

seeMoreTrei.addEventListener("click", seeMoreFunctionTrei);

const seeLessFunctionTeri = () => {
    spanMoreTrei.classList.add("lorem-content-trei");
    seeLessTrei.style.display = "none"
    seeMoreTrei.style.display = "block"

}
seeLessTrei.addEventListener("click",seeLessFunctionTeri);


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

/*
TEMA !!!!!!!!!!!!!!!!!
1 cand apas pe reset sa dispara see more
2 de facut pt restul taburilor
3 de facut un buton de See Less
*/

/*pasi sa se intample ceva cand apasam pe buton
1 selectam butonul (document.querySelector)
2 adaugam eventListener (calculateButton.addEventListener("click",showResoult))
3 creaza functia care sa se execute pe click
*/