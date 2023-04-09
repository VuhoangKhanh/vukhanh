let listUser = []
let listPassword = []




function signup (){
     let si_username = document.querySelector(".si_username").value
     let si_password = document.querySelector(".si_password").value

     listUser.push(si_username)
     listPassword.push(si_password)

     localStorage.setItem("username", JSON.stringify(si_username))
     localStorage.setItem("password", JSON.stringify(si_password))
    
 
     
    //  console.log(typeof JSON.pars (localStorage.getItem("listUser")));
    //  console.log(typeof JSON.pars (localStorage.getItem("ListPassword")));




}

function login(){
    let si_username = document.querySelector(".si_username").value
     let si_password = document.querySelector(".si_password").value

    let arrUser = JSON.parse(localStorage.getItem("ListUser"))
    let arrPassword = JSON.parse(localStorage.getItem("listPassword"))

    for(var i = 0; i<arrUser.length; i++){
        if( li_username === arrUser[i]){
            //kiem tra tiep password co trung k
            if(li_password === arrPassword[i]){
                //dang nhap
                alert("Login successfuly!")
                window.location.href

            }else{
                //bao sai mk
                alert("Login faill")
            }
        }else{
            alert("User not found!")
        }

    }
}