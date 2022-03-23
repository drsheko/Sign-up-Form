
document.querySelector('.accountBtn').addEventListener('click',function(){

document.querySelector('#my-form').className='submitted' ;})


function checkPassword(){
    if (document.querySelector('.password').value != document.querySelector('.confirmPassword').value){
        document.querySelector('.message').textContent='Your password not matching';
        return false;
    }
    else{document.querySelector('.message').textContent=''
        return true;
    }
}