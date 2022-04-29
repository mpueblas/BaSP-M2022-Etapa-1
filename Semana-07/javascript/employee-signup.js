window.onload = function(){
    var inputs = document.querySelectorAll('#em-form input');
    var form = document.getElementById('em-form');
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


    //////NAME VALIDATION////////
    var nameInput = document.getElementById('name');

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




    ///////SURNAME VALIDATION ///////////
    function charValidation(x){
        var characters = ["a","b","c","d","e","f","g","h","i","j","k",
        "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","U","V","W","X","Y","Z"]; 
        var numbers = ['0','1','2','3','4','5','6','7','8','9'];
        var num = 0;
        var char = 0;
        var symbols = 0;
        for(var i = 0; i < inputs[x].value.length; i ++){
            if(numbers.includes(inputs[x].value[i])){
                num++;
            }else if (characters.includes(inputs[x].value[i])){
                char++;
            } else {
                symbols++
            }
        }
        if (inputs[x].value.length >= 3 && num == 0 && char >= 1 && symbols == 0){
            console.log('true')
            return true;
        }else {
            console.log('false')
            return false;
        }
    }

    function surNameValidation(){
        var valid = charValidation(1);
        if(valid === true){
            document.getElementById('em-surname-div').classList.remove('em-form-group-wrong');
            document.getElementById('em-surname-div').classList.add('em-form-group-ok');
            document.querySelector('#em-surname-div .em-error-text').classList.remove('em-error-text-active');
            console.log('true1');
            return true;
        } else{
            document.getElementById('em-surname-div').classList.add('em-form-group-wrong');
            document.getElementById('em-surname-div').classList.remove('em-form-group-ok');
            document.querySelector('#em-surname-div .em-error-text').classList.add('em-error-text-active');
            console.log('false1');
            return false;
        }
    }
    
    function surnameResetForm(){
        document.getElementById('em-surname-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-surname-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-surname-div .em-error-text').classList.remove('em-error-text-active');
    }
    inputs[1].addEventListener('blur', surNameValidation);
    inputs[1].addEventListener('focus', surnameResetForm);

    //////DNI/////
    function dniValidation(document){
        var characters = ["a","b","c","d","e","f","g","h","i","j","k",
        "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","U","V","W","X","Y","Z"]; 
        var numbers = ['0','1','2','3','4','5','6','7','8','9'];
        var num = 0;
        var char = 0;
        var symbols = 0;
        for(var i = 0; i < inputs[document].value.length; i ++){
            if(numbers.includes(inputs[document].value[i])){
                num++;
            }else if (characters.includes(inputs[document].value[i])){
                char++;
            } else {
                symbols++
            }
        }
        if (inputs[document].value.length >= 8 && num >= 8 && char == 0 && symbols == 0){
            console.log('true')
            return true;
        }else {
            console.log('false')
            return false;
        }
    }
    function documentValidation(){
        var valid = dniValidation(2);
        if(valid === true){
            document.getElementById('em-id-div').classList.remove('em-form-group-wrong');
            document.getElementById('em-id-div').classList.add('em-form-group-ok');
            document.querySelector('#em-id-div .em-error-text').classList.remove('em-error-text-active');
            console.log('true1');
            return true;
        } else{
            document.getElementById('em-id-div').classList.add('em-form-group-wrong');
            document.getElementById('em-id-div').classList.remove('em-form-group-ok');
            document.querySelector('#em-id-div .em-error-text').classList.add('em-error-text-active');
            console.log('false1');
            return false;
        }
    }
    
    function dniResetForm(){
        document.getElementById('em-id-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-id-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-id-div .em-error-text').classList.remove('em-error-text-active');
    }
    inputs[2].addEventListener('blur', documentValidation);
    inputs[2].addEventListener('focus', dniResetForm);

/////BIRTHDATE//////




/////////////
////PHONENUMBER//////
    function numberValidation(number){
        var characters = ["a","b","c","d","e","f","g","h","i","j","k",
        "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","U","V","W","X","Y","Z"]; 
        var numbers = ['0','1','2','3','4','5','6','7','8','9'];
        var num = 0;
        var char = 0;
        var symbols = 0;
        for(var i = 0; i < inputs[number].value.length; i ++){
            if(numbers.includes(inputs[number].value[i])){
                num++;
            }else if (characters.includes(inputs[number].value[i])){
                char++;
            } else {
                symbols++
            }
        }
        if (inputs[number].value.length == 10 && num == 10 && char == 0 && symbols == 0){
            console.log('true')
            return true;
        }else {
            console.log('false')
            return false;
        }
    }
    function phoneValidation(){
        var valid = numberValidation(4);
        if(valid === true){
            document.getElementById('em-phone-div').classList.remove('em-form-group-wrong');
            document.getElementById('em-phone-div').classList.add('em-form-group-ok');
            document.querySelector('#em-phone-div .em-error-text').classList.remove('em-error-text-active');
            console.log('true1');
            return true;
        } else{
            document.getElementById('em-phone-div').classList.add('em-form-group-wrong');
            document.getElementById('em-phone-div').classList.remove('em-form-group-ok');
            document.querySelector('#em-phone-div .em-error-text').classList.add('em-error-text-active');
            console.log('false1');
            return false;
        }
    }

    function numberResetForm(){
        document.getElementById('em-phone-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-phone-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-phone-div .em-error-text').classList.remove('em-error-text-active');
    }
    inputs[4].addEventListener('blur', phoneValidation);
    inputs[4].addEventListener('focus', numberResetForm);
    }

    ////////DIRECCION/////
    function addressValidation(address){
        var characters = ["a","b","c","d","e","f","g","h","i","j","k",
        "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","U","V","W","X","Y","Z"]; 
        var numbers = ['0','1','2','3','4','5','6','7','8','9'];
        var num = 0;
        var char = 0;
        var symbols = 0;
        var space = " ";
        var spaceCount = 0;
        for(var i = 0; i < inputs[address].value.length; i ++){
            if(numbers.includes(inputs[address].value[i])){
                num++;
            }else if (characters.includes(inputs[address].value[i])){
                char++;
            }else if (space.includes(inputs[address].value[i])){
                spaceCount++;
            } else {
                symbols++
            }
        }
        if (inputs[address].value.length >= 5 && num >= 1 && char >= 1 && spaceCount >= 1 && symbols == 0){
            console.log('true')
            return true;
        }else {
            console.log('false')
            return false;
        }
    }
    function directionValidation(){
        var valid = addressValidation(5);
        if(valid === true){
            document.getElementById('em-address-div').classList.remove('em-form-group-wrong');
            document.getElementById('em-address-div').classList.add('em-form-group-ok');
            document.querySelector('#em-address-div .em-error-text').classList.remove('em-error-text-active');
            console.log('true1');
            return true;
        } else{
            document.getElementById('em-address-div').classList.add('em-form-group-wrong');
            document.getElementById('em-address-div').classList.remove('em-form-group-ok');
            document.querySelector('#em-address-div .em-error-text').classList.add('em-error-text-active');
            console.log('false1');
            return false;
        }
    }

    function addressResetForm(){
        document.getElementById('em-address-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-address-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-address-div .em-error-text').classList.remove('em-error-text-active');
    
    inputs[5].addEventListener('blur', directionValidation);
    inputs[5].addEventListener('focus', addressResetForm);

    
}