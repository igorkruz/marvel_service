import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import Spiner from '../spinner/Spinner';


import './comicsList.scss';


const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [newComicsLoading, setNewComicsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);
    
    const { loading, error, getAllComics } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    }, []);
    
    
    const onRequest = (offset, initial) => {
        initial ? setNewComicsLoading(false) : setNewComicsLoading(true);

        getAllComics(offset)
            .then(onComicsListLoaded);
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;

        if (newComicsList.length < 8) {
            ended = true;    
        }

        setComicsList([...comicsList, ...newComicsList]);
        setNewComicsLoading(false);
        setOffset(offset + 8);
        setComicsEnded(ended)
    }

    const renderComics = (arr) => {
        
        const items = arr.map((items, i) => {
            return (
                <li className="comics__item"
                    key={i}>
                    <Link to={`/comics/${items.id}`}>
                        <img src={items.thumbnail} alt={items.title} className="comics__item-img"/>
                        <div className="comics__item-name">{items.title }</div>
                        <div className="comics__item-price">{items.price}</div>
                    </Link>
                </li>
            )
        })
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }


    const comics = renderComics(comicsList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newComicsLoading ? <Spiner /> : null; 
    
    
    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {comics}

            <button
                className="button button__main button__long"
                disabled={newComicsLoading}
                style={{'display' : comicsEnded ? 'none' : 'block'}}
                onClick={()=> onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;