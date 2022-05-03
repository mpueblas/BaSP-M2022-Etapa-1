window.onload = function(){
    var inputs = document.querySelectorAll('#em-form input');
    var letras =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s", "t", "u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   

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
            //document.getElementById('em-name-div').classList.remove('em-form-group-ok');
            document.querySelector('#em-name-div .em-error-text').classList.add('em-error-text-active');
            return false    
        }else{
            //document.getElementById('em-name-div').classList.remove('em-form-group-wrong');
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
        if (inputs[document].value.length >= 7 && num >= 7 && char == 0 && symbols == 0){
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
    
    function isFullAge(date) {  
        var inputDate = new Date(date);
        var thisMoment = new Date(Date.now());
      
        return new Date(thisMoment - inputDate).getFullYear() - 1970 >= 18;
      }
    function dateValidation(){
        var bdValidation = isFullAge(inputs[3].value);
        if(bdValidation === true){
            document.getElementById('em-birth-date-div').classList.remove('em-form-group-wrong');
            document.getElementById('em-birth-date-div').classList.add('em-form-group-ok');
            return true;
        } else{
            document.getElementById('em-birth-date-div').classList.add('em-form-group-wrong');
            document.getElementById('em-birth-date-div').classList.remove('em-form-group-ok');
            return false;
        }
    }
    function bdResetForm(e){
        document.getElementById('em-birth-date-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-birth-date-div').classList.remove('em-form-group-ok');
    }
    inputs[3].addEventListener('blur', dateValidation);
    inputs[3].addEventListener('focus', bdResetForm)
    function inputsBd(){
        var date = inputs[3].value
        var year = date.substring(0, 4);
        var months = date.substring(5, 7);
        var day = date.substring(8, 10);
        var inputsThree = day + '/' + months + '/' + year;
        console.log(inputsThree)
    }
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
    

    ////////DIRECCION/////
    function addressValidation(addRess){
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
        for(var i = 0; i < inputs[addRess].value.length; i ++){
            if(numbers.includes(inputs[addRess].value[i])){    
                num++;
            }else if (characters.includes(inputs[addRess].value[i])){
                char++;
            }else if (space.includes(inputs[addRess].value[i])){
                spaceCount++;
            } else {
                symbols++
            }
        }
        if (inputs[addRess].value.length >= 5 && num >= 1 && char >= 1 && spaceCount >= 1 && symbols == 0){
            console.log('true')
            console.log(inputs[addRess]);
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
    }
    inputs[5].addEventListener('blur', directionValidation);
    inputs[5].addEventListener('focus', addressResetForm);
    
////////////city////
    function cityValidation(city){
        var characters = ["a","b","c","d","e","f","g","h","i","j","k",
        "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","U","V","W","X","Y","Z"]; 
        var numbers = ['0','1','2','3','4','5','6','7','8','9'];
        var num = 0;
        var char = 0;
        var symbols = 0;
        for(var i = 0; i < inputs[city].value.length; i ++){
            if(numbers.includes(inputs[city].value[i])){
                num++;
            }else if (characters.includes(inputs[city].value[i])){
                char++;
            } else {
                symbols++
            }
        }
        if (inputs[city].value.length >= 3 && num == 0 && char >= 1 && symbols == 0){
            console.log('true')
            return true;
        }else {
            console.log('false')
            return false;
        }
    }

    function cityVal(){
        var valid = cityValidation(6);
        if(valid === true){
            document.getElementById('em-city-div').classList.remove('em-form-group-wrong');
            document.getElementById('em-city-div').classList.add('em-form-group-ok');
            document.querySelector('#em-city-div .em-error-text').classList.remove('em-error-text-active');
            console.log('true1');
            return true;
        } else{
            document.getElementById('em-city-div').classList.add('em-form-group-wrong');
            document.getElementById('em-city-div').classList.remove('em-form-group-ok');
            document.querySelector('#em-city-div .em-error-text').classList.add('em-error-text-active');
            console.log('false1');
            return false;
        }
    }
    function cityResetForm(){
         document.getElementById('em-city-div').classList.remove('em-form-group-wrong');
         document.getElementById('em-city-div').classList.remove('em-form-group-ok');
         document.querySelector('#em-city-div .em-error-text').classList.remove('em-error-text-active');
    }
    inputs[6].addEventListener('blur', cityVal);
    inputs[6].addEventListener('focus', cityResetForm);
    
  
    
//////////POSTCODE//////
    function pcodeValidation(pnumber){
        var characters = ["a","b","c","d","e","f","g","h","i","j","k",
        "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","U","V","W","X","Y","Z"]; 
        var numbers = ['0','1','2','3','4','5','6','7','8','9'];
        var num = 0;
        var char = 0;
        var symbols = 0;
        for(var i = 0; i < inputs[pnumber].value.length; i ++){
            if(numbers.includes(inputs[pnumber].value[i])){
                num++;
            }else if (characters.includes(inputs[pnumber].value[i])){
                char++;
            } else {
                symbols++
            }
        }
        if (inputs[pnumber].value.length == 4 || inputs[pnumber].value.length == 5 && num == 4 ||num == 5 && char == 0 && symbols == 0){
            console.log('true')
            return true;
        }else {
            console.log('false')
            return false;
        }
    }
    function pValidation(){
        var valid = pcodeValidation(7);
        if(valid === true){
            document.getElementById('em-postal-code-div').classList.remove('em-form-group-wrong');
            document.getElementById('em-postal-code-div').classList.add('em-form-group-ok');
            document.querySelector('#em-postal-code-div .em-error-text').classList.remove('em-error-text-active');
            console.log('true1');
            return true;
        } else{
            document.getElementById('em-postal-code-div').classList.add('em-form-group-wrong');
            document.getElementById('em-postal-code-div').classList.remove('em-form-group-ok');
            document.querySelector('#em-postal-code-div .em-error-text').classList.add('em-error-text-active');
            console.log('false1');
            return false;
        }
    }

    function pResetForm(){
        document.getElementById('em-postal-code-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-postal-code-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-postal-code-div .em-error-text').classList.remove('em-error-text-active');
    }
    inputs[7].addEventListener('blur', pValidation);
    inputs[7].addEventListener('focus', pResetForm);

/////EMAIL///////
    var regexMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    function mailValidation() {
        if(regexMail.test(inputs[8].value)){
            document.getElementById('email-div').classList.remove('em-form-group-wrong');
            document.getElementById('email-div').classList.add('em-form-group-ok');
            document.querySelector('#email-div .em-error-text').classList.remove('em-error-text-active');
            console.log('true1');
            return true;
        } else{
            document.getElementById('email-div').classList.add('em-form-group-wrong');
            document.getElementById('email-div').classList.remove('em-form-group-ok');
            document.querySelector('#email-div .em-error-text').classList.add('em-error-text-active');
            console.log('false1');
            return false;
        }
    };
    
    function mailResetForm(e){
        document.getElementById('email-div').classList.remove('em-form-group-wrong');
        document.getElementById('email-div').classList.remove('em-form-group-ok');
        document.querySelector('#email-div .em-error-text').classList.remove('em-form-input-error-active');
    }

    inputs[8].addEventListener('blur', mailValidation);
    inputs[8].addEventListener('focus', mailResetForm);
   
    ////////PASSWORD//////
    function passwordValidation(){
        var numbers = ['0','1','2','3','4','5','6','7','8','9'];
        var letters = ["a","b","c","d","e","f","g","h","i","j","k",
        "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","U","V","W","X","Y","Z"];
        var num = 0;
        var char = 0;
        var symbols = 0;
        for(var i = 0; i < inputs[9].value.length; i ++){
            if(numbers.includes(inputs[9].value[i])){
                num++;   
            }else if (letters.includes(inputs[9].value[i])){
                char++;
            } else {
                symbols++
            }
        }
        if (inputs[9].value.length >= 8 && num >= 1 && char >= 1 && symbols == 0){
            return true;
        }else {
            return false;
        }
    }

    function passValidation(){
        if(passwordValidation() == true){
            document.getElementById('password-div').classList.remove('em-form-group-wrong');
            document.getElementById('password-div').classList.add('em-form-group-ok');
            document.querySelector('#password-div .em-error-text').classList.remove('em-error-text-active');
            console.log('true1');
            return true;
        } else{
            document.getElementById('password-div').classList.add('em-form-group-wrong');
            document.getElementById('password-div').classList.remove('em-form-group-ok');
            document.querySelector('#password-div .em-error-text').classList.add('em-error-text-active');
            console.log('false1');
            return false;
        }
    }

    function passResetForm(){
        document.getElementById('password-div').classList.remove('em-form-group-wrong');
        document.getElementById('password-div').classList.remove('em-form-group-ok');
        document.querySelector('#password-div .em-error-text').classList.remove('em-form-input-error-active');
    }

    inputs[9].addEventListener('blur', passValidation);
    inputs[9].addEventListener('focus', passResetForm);
///////CONFIRM PASSWORD//////

    function passConfirm(){
        if(inputs[9].value.length == inputs[10].value.length){
        return true;
        } else {
            return false;
        }
    }
    function passConfirmation(){
        if(passConfirm() == true){
            document.getElementById('repeat-password-div').classList.remove('em-form-group-wrong');
            document.getElementById('repeat-password-div').classList.add('em-form-group-ok');
            document.querySelector('#repeat-password-div .em-error-text').classList.remove('em-error-text-active');
            console.log('true1');
            return true;
        } else{
            document.getElementById('repeat-password-div').classList.add('em-form-group-wrong');
            document.getElementById('repeat-password-div').classList.remove('em-form-group-ok');
            document.querySelector('#repeat-password-div .em-error-text').classList.add('em-error-text-active');
            console.log('false1');
            return false;
        }
    }

    function passConResetForm(){
        document.getElementById('repeat-password-div').classList.remove('em-form-group-wrong');
        document.getElementById('repeat-password-div').classList.remove('em-form-group-ok');
        document.querySelector('#repeat-password-div .em-error-text').classList.remove('em-form-input-error-active');
    }

    inputs[10].addEventListener('blur', passConfirmation);
    inputs[10].addEventListener('focus', passConResetForm);
  

    function totalValidation(e){
        e.preventDefault();
        if(formValidation() && surNameValidation() && dateValidation() && documentValidation() && 
        phoneValidation() && directionValidation() && cityVal() && pValidation() &&
         mailValidation() && passValidation() && passConfirmation()){
            console.log("piola");
            var date = inputs[3].value
            var year = date.substring(0, 4);
            var months = date.substring(5, 7);
            var day = date.substring(8, 10);
            var inputsThree = months + '/' + day + '/' + year
            var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup";
            var keyList = ['name', 'lastName', 'dni', 'dob', 'phone', 'address', 'city', 'zip', 'email', 'password'];
            var valueList = [inputs[0].value, inputs[1].value, inputs[2].value, inputsThree, inputs[4].value, inputs[5].value, inputs[6].value, inputs[7].value, inputs[8].value, inputs[9].value];
            console.log(url);
            alert("mensaje");
            fetchSignUp(url, keyList, valueList);
        } else{
            console.log("nopiola")
            alert("nomensajs")
        }
    }




    function fetchSignUp(url, keyList, valueList){
        var myArray = [];
        for(var i = 0; i < keyList.length; i ++){
            myArray.push(keyList[i].concat("=", valueList[i]))
        } 
        var queryParams = myArray.join("&");
        var fetchUrl = url.concat("?", queryParams)
        fetch (fetchUrl)
            .then(function (response){
                console.log(response);
                return response.json();
            })
            .then(function(jsonResponse){
                if (jsonResponse.success){
                    alert(jsonResponse.msg + "Sign-up successful");
                    console.log(jsonResponse.data.id);
                    localStorage.setItem("id", jsonResponse.data.id);
                    localStorage.setItem("name", jsonResponse.data.name);
                    localStorage.setItem("lastName", jsonResponse.data.lastName);
                    localStorage.setItem("dni", jsonResponse.data.dni);
                    localStorage.setItem("dob", jsonResponse.data.dob);
                    localStorage.setItem("phone", jsonResponse.data.phone);
                    localStorage.setItem("address", jsonResponse.data.address);
                    localStorage.setItem("city", jsonResponse.data.city);
                    localStorage.setItem("zip", jsonResponse.data.zip);
                    localStorage.setItem("email", jsonResponse.data.email);
                    localStorage.setItem("password", jsonResponse.data.password);
                } else {
                    alert("Error" + jsonResponse.msg)
                }
        })
    }
     
    var confirmButton = document.getElementsByClassName('em-form-botton')[0];
    confirmButton.addEventListener('click', totalValidation);    
}        

