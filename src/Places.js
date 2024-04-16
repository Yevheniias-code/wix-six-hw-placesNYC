import { useState } from "react"
import { data } from './data'

export default function Places() {
    const [places, setPlaces] = useState(data)
    console.log(data)

    const removeItem = (id) => {
        let newPlaces = places.filter(place => place.id !== id);
        setPlaces(newPlaces)
    }


    return(
    <div className="places">
    <div className="container">
        <h2 className="placeName">List of {places.length} beautiful places in NYC were i was</h2>
    </div>
        <div className="placesContainer">
        {places.map((item) => {
            const{id, image, name} = item;
            return(
                <div className="placeCont" key={id}>
                    <div className="container">
                        <h3 className="placeName">{id} - {name}</h3>
                    </div>

                    <div className="container">
                        <img src={image} width='300px' alt='place' />
                    </div>

                    <div className="container">
                        <button className="removeButton" onClick={() => removeItem(id)}>Remove</button>
                    </div>
                </div>
            )
        })}
        </div>
        <div className="container">
            <button className="deleteButton" onClick={() => setPlaces([])}>Delette all</button>
        </div>
        
    </div>)
}