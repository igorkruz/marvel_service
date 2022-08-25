import {Link} from 'react-router-dom'

import './error404.scss'

const Error404 = () => {

    return (
        
        <div className='block'>
            <h1>This page <span>NOT</span> exist</h1>
            <div className='navigation'>

            <div className="randomchar__btns">
                <Link to={'/'} className="button button__main">
                    <div className="inner">Back to characters</div>
                </Link>
                <Link to={'/comics'} className="button button__secondary">
                    <div className="inner">Back to comics</div>
                </Link>
            </div>
            </div>

        </div>

        
    )

}

export default Error404