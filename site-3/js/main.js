function navbarSlide() 
{
    if (document.querySelector(".nav-menu_menu").style.display === "flex")
    {
        document.querySelector(".nav-menu_menu").style.display = "none";
    }
    else
    {
        document.querySelector(".nav-menu_menu").style.display = "flex";
    }
}

function clearProperties()
{
    if (document.body.clientWidth > 599)
    {
        document.querySelector(".nav-menu_menu").style.display = "";
    }  
}