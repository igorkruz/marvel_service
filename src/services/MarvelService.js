

class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=9bfacbf854690c5cb28b5d0406dcce6d'
    _baseOffset = 210;

     getResource = async (url) =>{
        let resource = await fetch(url);

        if (!resource.ok) {
            throw new Error (`Could not fetch ${url}, status: ${resource.status}`)
        }
        return await resource.json()
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`); 
        return res.data.results.map(this._transformCharacter)
    }

    
    getCharacter = async (id) => {
        
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`); 
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
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
}

export default MarvelService