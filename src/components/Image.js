import React from "react";
import './Image.css';

const Image = (props) => {

    const {largeImageURL, likes, tags, comments, user } = props.image;
    
    return(
        <div>
            <div className="image">
                <div className="image__user">
                    <i className="fas fa-user fa-2x" /><p>{user}</p>
                </div>
                <img src={largeImageURL} alt={tags} />
                <div className="image__stats">
                    <div className="interactions">
                        <div>
                            <i className="fas fa-heart fa-2x" /> {likes}
                        </div>
                        <div>
                            <i className="far fa-comment fa-2x" /> {comments}
                        </div>
                    </div>
                    <a href={largeImageURL} target="_blank" className="image__link">See complete Image</a>
                </div>
            </div>
        </div>
    )
}

export default Image;