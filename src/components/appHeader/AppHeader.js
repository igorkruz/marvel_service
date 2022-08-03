import { Link, NavLink } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link  to='/marvel_service'>
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink
                        end
                        style={({ isActive }) => ({ color: isActive? '#9F0013': null})}
                        to='/marvel_service'>Characters</NavLink></li>
                    /
                    <li><NavLink
                        end
                        style={({ isActive }) => ({ color: isActive ? '#9F0013' : null })}
                        to='/comics'>Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;