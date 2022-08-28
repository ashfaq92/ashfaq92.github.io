const setCookie = (name,value,days) => {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
const getCookie = (name) => {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(';');
    for(let i=0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
const eraseCookie = (name) => {  
     setCookie(name, "", -1) 
}