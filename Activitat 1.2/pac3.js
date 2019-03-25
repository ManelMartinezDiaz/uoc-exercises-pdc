function check(form) { 
if (form.id.value=="user") { 
if (form.pass.value=="pass") { 
setCookie('auth', true, 365); 
location="video1.html" ; 
} else { 
setCookie('auth', false, 365); 
alert("Invalid Password"); 
}
} else { 
alert("Invalid UserID"); 
}
}
//Set the cookie 
function setCookie(c_name, value, expire) { 
var exdate=new Date(); 
exdate.setDate(exdate.getDate()+expire); 
document.cookie = c_name+ "=" +escape(value) + ((expire==null) ? "" : 
";expires="+exdate.toGMTString()); 
}
//Get the cookie content 
function getCookie(c_name) { 
if (document.cookie.length > 0 ) { 
c_start=document.cookie.indexOf(c_name + "="); 
if (c_start != -1){ 
c_start=c_start + c_name.length+1; 
c_end=document.cookie.indexOf(";",c_start); 
if (c_end == -1) { 
c_end=document.cookie.length; 
}
return unescape(document.cookie.substring(c_start,c_end)); 
}
}
return ''; 
}

//delete the cookie 
function delCookie(c_name) 
{
document.cookie = c_name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'; 
}

function checkAuth(){ 
if (getCookie("auth") == "true"){ 
return true; 
}else{ 
return false; 
}
}

function logout(){ delCookie("auth"); delCookie("loc"); location="index.html" ; }
function checkLoc(){ if (getCookie("loc") == "ES"){ return true; }else{ return false; } }