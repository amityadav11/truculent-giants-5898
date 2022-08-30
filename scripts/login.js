function signIn(){
    let flag = true;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let  arr = JSON.parse(localStorage.getItem("Details"))
    arr.forEach(el => {
        
        if(el.email == email && el.password == password){
                flag = false;
                return;
            }
    });
        if(flag == false){
            alert("login successful")
            window.location.href = "index.html"
        }else{
                alert("Password unmatched")
            }
 }

 function gosignup(){
     window.location.href = "signup.html"
 }
 