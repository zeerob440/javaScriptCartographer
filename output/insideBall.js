//A simple innerHtml program.
document.getElementById("insideBallBTN").addEventListener("click",youreOutside);

function youreOutside()
        {document.getElementById("ifYoureNotInside").innerHTML = // multiple line strings must be between ``
        //once innerHTML is invoked, output is written in HTML
        `<p>
            The point is, ladies and gentlemen,<br>
            greed -for lack of a better word- is good.
        </p>
        <p>
            Wall Street, 1987
        <p>
        `;
    }
