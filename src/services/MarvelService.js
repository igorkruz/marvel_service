import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {

    const { loading, error, clearError, request } = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=9bfacbf854690c5cb28b5d0406dcce6d'
    const _baseOffset = 210;

     
    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`); 
        return res.data.results.map(_transformCharacter)
    }

    const getAllComics = async (offset = 0) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=$${offset}&${_apiKey}`); 
        return res.data.results.map(_transformComics)
    }
    

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`); 
        return _transformCharacter(res.data.results[0]);
    }

    const getComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`); 
        return _transformCharacter(res.data.results[0]);
    }


    const _transformCharacter = (char) => {
        if (char.description === '') {
            char.description = 'this personage dont have description'
        }

        let slicedChar = char.description.slice(0, 210);
        if (slicedChar.length >= 210) {
            slicedChar += '...'
        }

        
        return {
            id: char.id,
            name: char.name,
            description: slicedChar,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,           /* 'thumbnail = картинка/привю' */
            hompage: char.urls[0].url,
            wiki: char.urls[1].url,  
            comics: char.comics.items
        }
    }

    const _transformComics = (comics) => {
        
        return {
            id: comics.id,
            title: comics.title ,
            description: comics.description || 'this comics dont have description',
            pageCount: comics.pageCount,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,           /* 'thumbnail = картинка/привю' */
            language: comics.textObjects.language,
            price: comics.prices.price ? `${comics.prices.price}`: 'Not Avaliable'
           
        }
    }

    return {loading, error, clearError, getCharacter,getAllCharacters, getComics, getAllComics}
}

export default useMarvelService