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
        document.getElementById('div-email').classList.remove('form-grp-ok')
        document.querySelector('#div-email .error-text').classList.remove('error-text-active');
    }

    inputs[0].addEventListener('blur', formValidation);
    inputs[0].addEventListener('focus', resetForm);    


    function passValidation(){
        var numbers = ['0','1','2','3','4','5','6','7','8','9'];
        var letters = ["a","b","c","d","e","f","g","h","i","j","k",
        "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","U","V","W","X","Y","Z"];
        var num = 0;
        var char = 0;
        var symbols = 0;
        for(var i = 0; i < inputs[1].value.length; i ++){
            if(numbers.includes(inputs[1].value[i])){
                num++;   
            }else if (letters.includes(inputs[1].value[i])){
                char++;
            } else {
                symbols++
            }
        }
        if (inputs[1].value.length >= 8 && num >= 1 && char >= 1 && symbols == 0){
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

    function resetPassForm(e){
        document.getElementById('div-password').classList.remove('form-grp-wrng');
        document.getElementById('div-password').classList.remove('form-grp-ok')
        document.querySelector('#div-password .error-text').classList.remove('error-text-active');
    }

    inputs[1].addEventListener('blur', passwordValidation);
    inputs[1].addEventListener('focus', resetPassForm);

    var button = document.getElementsByClassName('button-2');
    
    form.onsubmit = function validation(e){
        e.preventDefault();
        if(formValidation() == true && passValidation() == true){
            boxGood.classList.remove('hide');
            boxGood.innerHTML = 'mail: ' + mailValue.value + '/ password: ' + passValue.value;
            wrongValidation.classList.add('hide');
            fetch ("https://basp-m2022-api-rest-server.herokuapp.com/login?email=" + inputs[0].value + "&password=" + inputs[1].value)
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function(jsonResponse){
                if (jsonResponse.success){
                    alert(jsonResponse.msg + "Login successful");
                } else {
                    alert("Error" + jsonResponse.msg)
                }
            })
            .catch(function (error){
                alert("Error: ", error.msg);
            })
        }else {
            wrongValidation.classList.remove('hide');
        }
    }

    document.getElementById
}
