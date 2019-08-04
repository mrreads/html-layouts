function navbarSlide() 
{
    if (document.querySelector(".block-one__nav__menu").style.display === "flex")
    {
        document.querySelector(".block-one__nav__menu").style.display = "none";
    }
    else
    {
        document.querySelector(".block-one__nav__menu").style.display = "flex";
    }
}

function clearProperties()
{
    if (document.body.clientWidth > 768)
    {
        document.querySelector(".block-one__nav__menu").style.display = "";
    }  
}
