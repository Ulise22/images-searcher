import React from "react";
import Image from "./Image";
import Pagination from "./Pagination";

const Result = (props) => {
     

     const showImages = () => {
        const images = props.pic;

        console.log(images)

        return (
            <div>
                <div>
                    {images.map(image => (
                        <Image key={image.id} image={image} />
                    ))}
                </div>

                <Pagination previousPage={props.previousPage} nextPage={props.nextPage} />
            </div>
        )
     }

    return(
        <div>
            { showImages() }
        </div>
    )
}

export default Result;