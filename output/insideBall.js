//A simple innerHtml program.
document.getElementById("insideBallBTN").addEventListener("click",youreOutside);

function youreOutside()
    {document.getElementById("ifYoureNotInside").innerHTML =
        `<p>
            The point is, ladies and gentlemen,<br>
            Greed -for lack of a better word- is good.
        </p>
        <p>
            Wall Street, 1987
        <p>
        `;
    }
