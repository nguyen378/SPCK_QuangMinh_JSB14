
// icon xem password
function unlock(icon)
{
    const lock = document.getElementById("password");

    icon.classList.toggle("fa-lock");
    icon.classList.toggle("fa-unlock");

    if (lock.type === "password") {lock.type = "text";}
    else {lock.type = "password";}
}