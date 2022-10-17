import React from "react"
import preLoader from "../../axios/Images/preLoader.gif";


const PreLoader = () => {
    return (
        <div style={{position: "absolute"}}>
            <img src={preLoader} alt={''}/>
        </div>
    )}
export default PreLoader