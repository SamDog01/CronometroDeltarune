window.onload = () => {
    const javaTest = document.getElementById("Elemento_Teste");
    javaTest.classList.add("Test_Text");

    
    const ButColor = document.querySelector(".ClickTro");
    ButColor.addEventListener("click",()=>{
        ButColor.style.backgroundColor = "red";
    });
    ButColor.addEventListener("mouseenter", function() {
        ButColor.style.backgroundColor = ""; 
    });
    

};
