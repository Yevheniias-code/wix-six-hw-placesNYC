import { useState } from "react";
import { slides } from "./slides";

export default function Welcome() {
    const [nycPhoto, setNYCPhoto] = useState(0)
    const {id, image, text} = slides[nycPhoto]

    const prevClick = () => {
        setNYCPhoto(nycPhoto => {
        nycPhoto --;
        if(nycPhoto < 0) {
            nycPhoto = slides.length -1;
        }
        return(nycPhoto)
        })
    }

    const nextClick = () => {
        setNYCPhoto(nycPhoto => {
        nycPhoto ++;
        if(nycPhoto > slides.length - 1) {
            nycPhoto = 0;
        }
        return(nycPhoto)
        })
    }

    return(
        <div>
            <div className="container">
                <h1>Welcome to NYC</h1>
            </div>

            <div className="container" >
                <button className="btn" onClick={prevClick}>Prev</button>
                <button className="btn" onClick={nextClick}>Next</button>
            </div>

            <div className="container">
                <img src={image} width='500px' alt='NYC' />
            </div>

            <div className="container">
                <h3>Some of Interesting Facts About New York City</h3>
            </div>

            <div className="container">
                <p>{id} - {text}</p>
            </div>
        </div>
    )
}