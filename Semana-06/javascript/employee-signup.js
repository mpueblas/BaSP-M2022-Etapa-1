window.onload = function(){

    var nameInput = document.getElementById('name');
    var surnameInput = document.getElementById('surname');
    var letras =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","U","V","W","X","Y","Z"];


    function nameValidation(myString){
        for(var i = 0; i < myString.length; i ++){
            if(!letras.includes(myString[i])){
                return false
            }
        } return true
    }
    function nameLength(myString){
        if(myString.length <= 3){
            return false
        } else {
            return true
        }
    }

    function formValidation() {
        if(nameValidation(nameInput.value) == false || nameLength(nameInput.value) == false){
            document.getElementById('em-name-div').classList.add('em-form-group-wrong');
            document.getElementById('em-name-div').classList.remove('em-form-group-ok');
            document.querySelector('#em-name-div .em-error-text').classList.add('em-error-text-active');
            return false    
        }else{
            document.getElementById('em-name-div').classList.remove('em-form-group-wrong');
            document.getElementById('em-name-div').classList.add('em-form-group-ok');
            document.querySelector('#em-name-div .em-error-text').classList.remove('em-error-text-active');
            
            return true
        }
    };
    function resetForm(){
        document.getElementById('em-name-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-name-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-name-div .em-error-text').classList.remove('em-error-text-active');
    }
    
    nameInput.addEventListener('blur', formValidation);
    nameInput.addEventListener('focus', resetForm);

/*
var surnameInput = document.getElementById('surname');
console.log(surnameInput.value);
function formValidation() {
    if(nameValidation(surnameInput.value) == false || nameLength(surnameInput.value) == false){
        document.getElementById('em-surname-div').classList.add('em-form-group-wrong');
        document.getElementById('em-surname-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-surname-div .em-error-text').classList.add('em-error-text-active');
        console.log(false);
        return false    
    }else{
        document.getElementById('em-surname-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-surname-div').classList.add('em-form-group-ok');
        document.querySelector('#em-surname-div .em-error-text').classList.remove('em-error-text-active');
        console.log(true);
        return true
    }
};
function resetForm(){
    document.getElementById('em-surname-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-surname-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-surname-div .em-error-text').classList.remove('em-error-text-active');
}

nameInput.addEventListener('blur', formValidation);
nameInput.addEventListener('focus', resetForm);


*/


}