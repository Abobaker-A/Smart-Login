let logPage = $('#logPage');
let logOutbtn = $('#logOutbtn');
let content = $('#content');
loginAcc = JSON.parse(sessionStorage.getItem( "loginAcc") );
(function (){
    logPage.removeClass("d-none")
    content.html(` <div class="w-50 bg-dark bg-opacity-75  mx-auto text-center">
    <h1 class="fw-bold p-5 shadow-lg text-white">Welcome ${loginAcc.name}</h1>
</div>`)
})()

logOutbtn.click( function(){
    logOutbtn.attr('href','index.html');
    sessionStorage.removeItem('loginAcc')

} )