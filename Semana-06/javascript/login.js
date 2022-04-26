window.onload = function(){

    var form = document.getElementById('form-login');
    var inputs = document.getElementsByClassName('form-inpt');
    var regexMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var boxGood = document.getElementById('form-good');
    var mailValue = document.getElementById('email');
    var passValue = document.getElementById('password');
    var wrongValidation = document.getElementById('form-mssg');
    
    

    function formValidation() {
        if(regexMail.test(inputs[0].value)){
            document.getElementById('div-email').classList.remove('form-grp-wrng');
            document.getElementById('div-email').classList.add('form-grp-ok');
            document.querySelector('#div-email .error-text').classList.remove('error-text-active');
            return true
        } else{
            document.getElementById('div-email').classList.add('form-grp-wrng');
            document.getElementById('div-email').classList.remove('form-grp-ok');
            document.querySelector('#div-email .error-text').classList.add('error-text-active');
            return false
        }
    };
    
    function resetForm(e){
        document.getElementById('div-email').classList.remove('form-grp-wrng');
        document.querySelector('#div-email .error-text').classList.remove('error-text-active');
    }

    inputs[0].addEventListener('blur', formValidation);
    inputs[0].addEventListener('focus', resetForm);    


    function passValidation(){
        var numbers = ['0','1','2','3','4','5','6','7','8','9'];
        var num = 0;
        var char = 0;
        for(var i = 0; i < inputs[1].value.length; i ++){
            if(numbers.includes(inputs[1].value[i])){
                num++;   
            }else {
                char++;
            }
        }
        if (inputs[1].value.length >= 8 && num >= 1 && char >= 1){
            return true;
        }else {
            return false;
        }
    }

    function passwordValidation() {
        if(passValidation() == true){
            document.getElementById('div-password').classList.remove('form-grp-wrng');
            document.getElementById('div-password').classList.add('form-grp-ok');
            document.querySelector('#div-password .error-text').classList.remove('error-text-active');
        } else{
            document.getElementById('div-password').classList.add('form-grp-wrng');
            document.getElementById('div-password').classList.remove('form-grp-ok');
            document.querySelector('#div-password .error-text').classList.add('error-text-active');
        }
    };
    inputs[1].addEventListener('blur', passwordValidation);
    inputs[1].addEventListener('focus', resetForm);

    var button = document.getElementsByClassName('button-2');
    
    form.onsubmit = function (e){
        e.preventDefault();
        if(formValidation() == true && passValidation() == true){
            boxGood.classList.remove('hide');
            boxGood.innerHTML = 'mail: ' + mailValue.value + '/ password: ' + passValue.value;
        }else {
            wrongValidation.classList.remove('hide');
        }
    }
    console.log(mailValue.value, passValue.value);
    
    
    
    /*    
    function validationBotton(){
        if(formValidation() == true && passValidation() ==true){    
            console.log(daleee)
            return true;
        }
    }
    button.addEventListener('submit', validationBotton);*/
}
