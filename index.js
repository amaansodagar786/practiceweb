const images = document.querySelectorAll(".image-container img");
let i = 0;
let j = images.length;

function next() {
    document.getElementById("content" + (i + 1)).style.display = "none"

    i = (j + i + 1) % j;




    document.getElementById("content" + (i + 1)).style.display = "block"




}

function prev() {
    document.getElementById("content" + (i + 1)).style.display = "none"
    i = (j + i - 1) % j;

    document.getElementById("content" + (i + 1)).style.display = "block"

}

function validateform() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message').value;


    // NAME VALIDATE 
    if (name == "") {
        document.getElementById('namee').innerHTML = "Plesase Enter Your Name";
        return false;
    }
    // EMAIL VALIDATE 
    if (email == "") {
        document.getElementById('emaile').innerHTML = "Plesase Enter Your Email";
        return false;
    }

    // PASSWORD VALIDATE 
    if (password == "") {
        document.getElementById('passworde').innerHTML = "Plesase Enter Your Password";
        return false;
    }

    if (password.length < 8) {
        document.getElementById('passworde').innerHTML = "Password Must be 8 Char ";
        return false;


        // MESSAGE VALIDATE 
    }
    if (message == "") {
        document.getElementById('messagee').innerHTML = "Message is Required";
        return false;
    }


}
// LOGIN TOGGLE 

function openmenu() {

    if (document.getElementById('hlo').style.display !== "block") {
        document.getElementById('hlo').style.display = "block"
    }
    else {
        document.getElementById('hlo').style.display = "none"

    }
}


function validatelogin() {

    var uname = document.getElementById('uname').value;
    var upassword = document.getElementById('upassword').value;

    if (uname == "") {
        // document.getElementById('namee').innerHTML = "Plesase Enter Your Name";
        alert("enter username");
        return false;
    }

    if (upassword == "") {
        // document.getElementById('passworde').innerHTML = "Plesase Enter Your Password";
        alert("Enter Password");
        return false;
    }

    if (upassword.length < 8) {
        // document.getElementById('passworde').innerHTML = "Password Must be 8 Char ";
        alert("pass Must be 8 char");
        return false;

    }
}
// NAV HOME 

function homefunc() {
    if (document.getElementById('homemenu').style.display !== "block") {
        document.getElementById('homemenu').style.display = "block"
        document.getElementById('aboutmenu').style.display = "none"
        document.getElementById('sevicemenu').style.display = "none"
        document.getElementById('gallerymenu').style.display = "none"
        document.getElementById('contactmenu').style.display = "none"
    }
    else {
        document.getElementById('homemenu').style.display = "none"


    }
}

function aboutfunc() {
    if (document.getElementById('aboutmenu').style.display !== "block") {
        document.getElementById('aboutmenu').style.display = "block"
        document.getElementById('homemenu').style.display = "none"
        document.getElementById('sevicemenu').style.display = "none"
        document.getElementById('gallerymenu').style.display = "none"
        document.getElementById('contactmenu').style.display = "none"

    }
    else {
        document.getElementById('aboutmenu').style.display = "none"
    }
}

function servicefunc() {
    if (document.getElementById('servicemenu').style.display !== "block") {
        document.getElementById('servicemenu').style.display = "block"
        document.getElementById('homemenu').style.display = "none"
        document.getElementById('aboutmenu').style.display = "none"
        document.getElementById('gallerymenu').style.display = "none"
        document.getElementById('contactmenu').style.display = "none"
    }
    else {
        document.getElementById('servicemenu').style.display = "none"
    }
}

function galleryfunc() {
    if (document.getElementById('gallerymenu').style.display !== "block") {
        document.getElementById('gallerymenu').style.display = "block"
        document.getElementById('servicemenu').style.display = "none"
        document.getElementById('homemenu').style.display = "none"
        document.getElementById('aboutmenu').style.display = "none"
        document.getElementById('contactmenu').style.display = "none"
    }
    else {
        document.getElementById('gallerymenu').style.display = "none"
    }
}

function contactfunc() {
    if (document.getElementById('contactmenu').style.display !== "block") {
        document.getElementById('contactmenu').style.display = "block"
        document.getElementById('servicemenu').style.display = "none"
        document.getElementById('homemenu').style.display = "none"
        document.getElementById('aboutmenu').style.display = "none"
        document.getElementById('gallerymenu').style.display = "none"
    }
    else {
        document.getElementById('contactmenu').style.display = "none"
    }
}

// IMAGE CHANGE BUTTONS 
// COFFEE 
function coffeefunc() {
    if (document.getElementById('coffee').style.display !== "block") {
        document.getElementById('coffee').style.display = "flex"
        document.getElementById('colddrink').style.display = "none"
        document.getElementById('fastfood').style.display = "none"
        document.getElementById('tea').style.display = "none"
        document.getElementById('all').style.display = "none"
    }

}

// COLDDRINK

function colddrinkfunc() {
    if (document.getElementById('colddrink').style.display !== "block") {
        document.getElementById('colddrink').style.display = "flex"
        document.getElementById('coffee').style.display = "none"
        document.getElementById('fastfood').style.display = "none"
        document.getElementById('tea').style.display = "none"
        document.getElementById('all').style.display = "none"
    }
    else {
        document.getElementById('colddrink').style.display = "none"
    }
}

// FASTFOOD 
function fastfoodfunc() {
    if (document.getElementById('fastfood').style.display !== "block") {
        document.getElementById('fastfood').style.display = "flex"
        document.getElementById('colddrink').style.display = "none"
        document.getElementById('coffee').style.display = "none"
        document.getElementById('tea').style.display = "none"
        document.getElementById('all').style.display = "none"
    }

}

// TEA  
function teafunc() {
    if (document.getElementById('tea').style.display !== "block") {
        document.getElementById('tea').style.display = "flex"
        document.getElementById('colddrink').style.display = "none"
        document.getElementById('fastfood').style.display = "none"
        document.getElementById('coffee').style.display = "none"
        document.getElementById('all').style.display = "none"
    }
   
}
