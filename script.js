window.onscroll = function(){ displayTotopButton(),displayAbout(), displayCallToAction(), displayDealOfTheDay()}
function displayMenu(){
    let myMenu = document.getElementById('navigation');
    if(myMenu.style.display === "block"){
        myMenu.style.display = "none";
        
    }
    else{
        myMenu.style.display = "block";
        
    }
}

function displayHelp(){
    setTimeout(function(){
      let help = document.getElementById('help');
      help.style.display = 'block';
    }, 15000);
}

//display about on scroll
function displayAbout(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.querySelector('#whoWeAre').style.display = 'block';
    }
    else{
        document.querySelector('#whoWeAre').style.display = 'none';
    }
}

//display call to action on scroll
function displayCallToAction(){
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.querySelector('#callToAction').style.display = "block";
    }
    else{
        document.querySelector('#callToAction').style.display = "none";
    }
}

//display to top button after few seconds
function displayTotopButton(){
    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        document.querySelector('.toTop').style.display = 'block';
    }
    else{
        document.querySelector('.toTop').style.display = 'none';
    }
}

//display deal of the day on scroll
function displayDealOfTheDay(){
    if(document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800){
        document.querySelector('.the_deal').style.display = "block";
    }
    else{
        document.querySelector('.the_deal').style.display = "none";
    }
}

