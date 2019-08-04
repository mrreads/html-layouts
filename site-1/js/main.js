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