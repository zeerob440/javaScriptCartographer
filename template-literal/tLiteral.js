// a short program that demonstrates a Template Literal

document.getElementById("t_string").addEventListener("click", dale)

function dale() 
    {
    let bestCity = 'Miami';

/*Template literals are like Python f-strings, but f' is replaced by ``, and {} is replaced
by ${}*/
    let popup = `The best city on the planet is ${bestCity}, dale!`;
    console.log(popup); // outputs to console.
    alert(popup); // outputs via popup to user.
    }