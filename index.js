function scrollToContact(){
    $(".direct").on("click", "#contact", function (e){
        e.preventDefault();
    
    $("HTML, BODY").scrollTop($('.contact-page').offset().top)
    })
}
function scrollToProjects(){
        $(".direct").on("click", "#projects", function (e){
            e.preventDefault();
        
        $("HTML, BODY").scrollTop($('.projects-page').offset().top)
    })
}  

function scrollToHome(){
        $(".direct").on("click", "#home", function (e){
            e.preventDefault();
        
        $("HTML, BODY").scrollTop($('.bio').offset().top)
    })
}  

const main = () => {
    scrollToContact();
    scrollToProjects();
    scrollToHome();
}

$(main)