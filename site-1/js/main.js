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

let items = document.querySelectorAll(".block-four__content__item__one");
for (let i = 0; i < items.length; i++)
{
    items[i].addEventListener("mouseover", function()
    {
        items[i].style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
        items[i].style.transform = "translateY(-10px)";
    });
    items[i].addEventListener("mouseout", function()
    {
        items[i].style.boxShadow = "";
        items[i].style.transform = "";
    });
}