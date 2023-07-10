import React, {useState} from "react";


const PersonCard = (props) => {
    const {firstName, lastName, hair_color} = props

    const [age, setAge] = useState(props.age)

    const birthday = () => {
        setAge(age + 1);
    }

    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hair_color}</p>
            <button onClick={birthday}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard