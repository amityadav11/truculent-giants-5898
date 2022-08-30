function createAccount(){
    let flag =true;
    let first_name = document.getElementById('firstname').value;
    let last_name = document.getElementById("lastname").value;
    let email = document.getElementById('email').value;
    let password = document.getElementById("password").value;
    
    if(first_name ==  "" || last_name== "" || email==  "" || password ==  "" ){
        alert("please fill all the details");
        return;
    }

    let signup_details = {
        "first_name" :first_name,
        "last_name" : last_name,
        "email":email,
        "password":password,
    }
     
    
     let arr= localStorage.getItem("Details");
 

     if(arr == null){
         arr = []
     
     }else{
        arr = JSON.parse(localStorage.getItem("Details"))
       arr.forEach(el => {
        if(el.email == signup_details.email ){
                alert("User already exist")
                flag = false;
                return;
            }
       });
        if(flag == false){
            return;
        }
        
     }
     
     arr.push(signup_details)
     localStorage.setItem("Details" , JSON.stringify(arr));
     alert("Account Created")
     window.location.href = "login.html"
}

function gologin(){
    window.location.href = "login.html"
}

