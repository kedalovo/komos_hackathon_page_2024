console.log(window.Telegram.WebApp.version)
myButton = document.getElementById("myButton")
myButton.addEventListener("click", test)

function test()
{
    console.log(document.getElementById("name_field").value)
    console.log("IT WORKS!")
}