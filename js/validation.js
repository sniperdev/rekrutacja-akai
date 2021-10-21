/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/


const name = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')

const button = document.querySelector('button');

const frontendCheckbox = document.querySelector('#frontend-checkbox')
const backendCheckbox = document.querySelector('#backend-checkbox')
const mobileCheckbox = document.querySelector('#mobile-checkbox')
const graphicsCheckbox = document.querySelector('#graphics-checkbox')
const checkboxReq=document.querySelector('#checkbox-req')

button.addEventListener('click', function(){
    if(name.value.length===0){
        name.placeholder="Proszę, wpisz swoje imie";
        name.classList.add("empty-field");
    }
    if(lastName.value.length===0){
        lastName.placeholder="Proszę, wpisz swoje nazwisko";
        lastName.classList.add("empty-field");
    }
    if(email.value.length===0){
        email.placeholder="Proszę, wpisz swojego maila";
        email.classList.add("empty-field");
    }
    if(!frontendCheckbox.checked && !backendCheckbox.checked && !mobileCheckbox.checked && !graphicsCheckbox.checked){
        checkboxReq.innerHTML="Proszę zaznaczyć wybraną sekcję";
    }
})