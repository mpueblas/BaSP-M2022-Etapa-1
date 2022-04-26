window.onload = function(){

    var form = document.getElementById('form-login');
    var inputs = document.getElementsByClassName('form-inpt');
    var regexMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    
    

    function formValidation() {
        if(regexMail.test(inputs[0].value)){
            document.getElementById('div-email').classList.remove('form-grp-wrng');
            document.getElementById('div-email').classList.add('form-grp-ok');
            document.querySelector('#div-email .error-text').classList.remove('error-text-active');
        } else{
            document.getElementById('div-email').classList.add('form-grp-wrng');
            document.getElementById('div-email').classList.remove('form-grp-ok');
            document.querySelector('#div-email .error-text').classList.add('error-text-active');
        }
    };
    
    function resetForm(e){
       /* document.getElementById('div-email').classList.remove('form-grp-wrng');
        document.querySelector('#div-email .error-text').classList.remove('error-text-active');*/
    }

    inputs[0].addEventListener('blur', formValidation);
    inputs[0].addEventListener('focus', resetForm);    

    form.addEventListener('submit', function(e){
        e.preventDefault();
    });


    console.log(inputs);
//
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
        console.log(inputs[1].value.length >= 8);
        console.log(num >= 1);
        console.log(char >= 1);
        if (inputs[1].value.length >= 8 && num >= 1 && char >= 1){
            return true;
        }else {
            return false;
        }
    }
    console.log(passValidation(), "hola")
    console.log(inputs[1].value);
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
}