import { useState } from "react"
import { City, CityOptions } from "./Style"
import { Link } from "react-router-dom"

export default function CitySquare({cityName}) {

    const [options, setOptions] = useState(false)

    return (
        <>
            <City onClick={() => setOptions(!options)} options={options} >
                {cityName}
            </City>
            <CityOptions onClick={() => setOptions(!options)} options={options}>
                <Link to={"/about"}>
                    <button>Sobre</button>
                </Link>

                <Link to={"/tickets"}>
                    <button>Passagens</button>
                </Link>

                <Link to={"/hotels"}>
                    <button>Hóteis</button>
                </Link>

            </CityOptions>
        </>
    )
}