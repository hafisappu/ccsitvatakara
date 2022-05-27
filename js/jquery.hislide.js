window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        000 
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

// $(document).ready(function(){
//     setTimeout(function(){
//        PopUp();
//     },5000); // 5000 to load it after 5 seconds from page load
//  });