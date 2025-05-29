const elemLoggin = document.getElementById('loggin');
if(window.location.pathname !== '/') {
    console.log(`path is -> ${window.location.pathname}`);
    elemLoggin.setAttribute('class', 'active');
}
