import React, { useState, useEffect} from "react";
import Result from "./Result";
import './Searcher.css';

const Searcher = () => {
    const [picture, setPicture] = useState("");
    const [data, setData] = useState([]);
    const [info, setInfo] = useState("");
    const [page, setPage] = useState(1);

    let component = true; 

    useEffect(() => {
        const fetchImage = async () => {
            const response = await fetch(`https://pixabay.com/api/?key=24424447-f5b9eae750f6415ea31741ebc&q=${picture}&per_page=20&page=${page}`);
            if(component) setData(await response.json());
            return () => component = false;
        }
        fetchImage();
    }, [picture, page])

    let placeholder = "";

    if (typeof data.hits != "undefined") {
        placeholder = "please write to search an image"
    } else {
        return (<div>Loading...</div>)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPicture(info);
    }

    const scroll = () => {
        const element = document.querySelector('.container');
        element.scrollIntoView('smooth', 'start');
    }

    const previousPage = () =>{
        let pagina = page;
        if(pagina === 1) return null;
        pagina -= 1;
        setPage(pagina);
        scroll();
        
    }

    const nextPage = () => {
        let pagina = page;
        pagina += 1;
        setPage(pagina)
        scroll();
    }

    return(
        <div className="container">
            <h1>Search for your image!</h1>
            <div className="formulary">
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder={placeholder} className="form__input" name="search"  value={info} onChange={(e) => setInfo(e.target.value)} required />
                    <button type="submit" className="form__button">
                        <i className="fas fa-search" />
                    </button>
                </form>
            </div>

            <div className="result">
                <Result pic={data.hits} previousPage={previousPage} nextPage={nextPage} />
            </div>
        </div>
    )
}

export default Searcher;