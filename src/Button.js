import React from "react";

// const students = ["mercy", "Njeri", "SomeoneElse"]
// const lessons = ["react", "ruby", "rails"]

// {tmName, "Kelvin"}

// function Button({hobby, ...props}){
//     return(
//         <>
//             <button>{props?.name || "How" } likes {hobby} </button>
//         </>
//     )
// }
function Button({ name = 'Obara', hobby}){
    return(
        <>
            <button >{name} likes {hobby} </button>
        </>
    )
}


export default Button
