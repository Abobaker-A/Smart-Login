$(document).ready(function(){
    let btnSignUp = $('.btnSignUp');
    let signIn = $('#signIn');
    let LoginBtn = $('#LoginBtn');
    let signInInput = $('#signIn input');
    let signInAlerts = $('#signIn p');
    let currentindx = '';
////////////////////////////////SignUp Page
    let signUp = $('#signUp');
    let signUpInput = $('#signUp input');
    let signUpAlerts = $('#signUp p');
    let signUpBtn = $('#signUpBtn');
    let signInLink = $('#signInLink');
    let allAccounts = [];
    if( localStorage.getItem( "allAccounts") != null ){
        allAccounts = JSON.parse(localStorage.getItem( "allAccounts") )
    }
////////////////////////////////signin&signup Links
    btnSignUp.click( function(){
        signIn.addClass( 'd-none');
        signUp.removeClass('d-none');
        displayAllAlert ()
    } )
    signInLink.click( function(){
        signUp.addClass( 'd-none');
        signIn.removeClass('d-none');
        displayAllAlert ()
    } )
//////////////////////////////// SignUp Functions
    signUpBtn.click( function(){
    let emailIsEx = false ;
        if (signUpInput.eq(0).val()==""||signUpInput.eq(1).val()==""||signUpInput.eq(2).val()==""){
            displayAllAlert ()
            signUpAlerts.eq(1).removeClass('d-none');
        }
        else {
            for (let i=0;i<allAccounts.length ; i++){
                if( signUpInput.eq(1).val().trim().toLowerCase() == allAccounts[i].email ){
                    emailIsEx = true ;
                    break;
                }                 
                }
            if(emailIsEx==true){
                displayAllAlert ()
            signUpAlerts.eq(0).removeClass('d-none');
            }
            else if (emailIsEx==false){
                if(validtionName()==true && validtionEmail()==true && validtionPass()==true){
                    let Account ={
                        name :  signUpInput.eq(0).val().trim() ,
                        email : signUpInput.eq(1).val().trim().toLowerCase() ,
                        pass :  signUpInput.eq(2).val() 
                    }
                allAccounts.push(Account);
                clearSignup ();
                localStorage.setItem( "allAccounts" , JSON.stringify(allAccounts) )  
                displayAllAlert()    
            signUpAlerts.eq(2).removeClass('d-none');
            }
                else {
                    displayAllAlert()
                    signUpAlerts.eq(3).removeClass('d-none');
                }                      
            }
        }  
    })
//////////////////////////////
function clearSignup (){
    signUpInput.eq(0).val('')
    signUpInput.eq(1).val('')
    signUpInput.eq(2).val('')    
}
//////////////////////////////
function validtionName(){
    let regex = /^\w{3,}$/i
    return regex.test(signUpInput.eq(0).val().trim())
    }
function validtionEmail(){
        let regex = /^.+@.+\.com$/i
        return regex.test(signUpInput.eq(1).val().trim())
        }
function validtionPass(){
            let regex = /^.{6,}$/i
            return regex.test(signUpInput.eq(2).val())
            }

function displayAllAlert (){
    for (let i = 0; i < signInAlerts.length; i++) {
         signInAlerts.addClass('d-none')        
    }
    for (let i = 0; i < signUpAlerts.length; i++) {
        signUpAlerts.addClass('d-none')        
    }
}
//////////////////////////////SignIn Functions
LoginBtn.click( function(){
    let emailIsCo = false ;
    for (let i=0;i<allAccounts.length ; i++){
    if( signInInput.eq(0).val().trim().toLowerCase() == allAccounts[i].email && signInInput.eq(1).val() == allAccounts[i].pass ){
        emailIsCo = true ;
        currentindx=i;   
        break;
    }  
    }
    if  (emailIsCo == true){
        location.href= "homepage.html";
        sessionStorage.setItem('loginAcc',JSON.stringify(allAccounts[currentindx]))
    }
    else if (emailIsCo ==false)  {
        if(signInInput.eq(0).val()=='' || signInInput.eq(1).val()==''){
            displayAllAlert ()
        signInAlerts.eq(0).removeClass('d-none')
        } 
        else {
            displayAllAlert ()
            signInAlerts.eq(1).removeClass('d-none')
        }       
    }
    clearSignIn ()
  
})
function clearSignIn (){
    signInInput.eq(0).val('');
    signInInput.eq(1).val('');
}


















})