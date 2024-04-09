import React, { useState } from "react";
function Country() {
    const [country, setcountry] = useState("INDIA");
    return (
        <> <h1>MY COUNTRY IS {country} </h1>
            <button type="button"
                onClick={() => setcountry("America")}>America</button>
                <button type="button" onClick={() => setcountry("INDIA")}>INDIA</button>
                <button type="button" onClick={() => setcountry("Afganisthan")}>Afganisthan</button>
                <button type="button" onClick={() => setcountry("Pakisthan")}>Pakisthan</button>
                <button type="button" onClick={() => setcountry("Germany")}>Germany</button>
                 </>
            );
       
}
export default Country;