import { Component } from 'react'

import MarvelService from '../../services/MarvelService';
import Spiner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


import './charList.scss';

class CharList extends Component {
    
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210

    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest()
    }

    onRequest = (offset) => {
        this.onCharListLoading()

        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        this.setState(({offset,charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
        offset:offset+9}))
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    itemsRef = [];
    setRef = (ref) => {
        this.itemsRef.push(ref)
    }

    onActiveItemFocus = (id) => {
        this.itemsRef.forEach(item => { item.classList.remove('char__item_selected') });
        this.itemsRef[id].classList.add('char__item_selected');
        this.itemsRef[id].focus();
        console.log(this.itemsRef[id])
    }

    renderItems (arr) {
        
        const items = arr.map((item,i) => {
            let imgStyle = { 'objectFit': 'cover' };
                if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                    imgStyle = {'objectFit':'fill'}
                }

            return (
            
                <li className="char__item"
                    tabIndex={0}
                    key={item.id}
                    onClick={() => {
                        this.props.onSelectedChar(item.id);
                        this.onActiveItemFocus(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            this.props.onSelectedChar(item.id);
                            this.onActiveItemFocus(i);
                            
                        }
                    }}
                    ref={this.setRef}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{ item.name}</div>
                 </li>
            )
        });
        return (
            <ul className="char__grid">
                {items}
            </ul>)
       
    }

    render() {
        const{charList, loading, error, newItemLoading, offset} = this.state

        const items = this.renderItems(charList)

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spiner /> : null;
        const content = !(loading || error) ? items: null
        
        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}

                <button
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    onClick={()=>this.onRequest(offset)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;