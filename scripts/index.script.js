function validatelogin () {
    const email= document.getElementById("username").value;
    const password= document.getElementById("password").value;

    
    if (email === "Administrador" && password === "adm123") {
        window.location.href="page_1.html";
    } 
    else if (email === "Donatario01" && password === "dona123") {
        window.location.href="page_5.html";
    }
    else {
        window.alert ("email ou senha incorretos!");
    }
    
    
    
}