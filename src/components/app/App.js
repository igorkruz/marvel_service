import {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spiner from '../spinner/Spinner';
import SinglePage from '../pages/SinglePage';
import SingleCharacterLayout from '../pages/singleCharacterLayout/SingleCharacterLayout';
import SingleComicLayout from '../pages/sinlgeComicLayout/SingleComicLayout';

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPages = lazy(() => import('../pages/ComicsPage'));
// const SingleComicPage= lazy(() => import('../pages/SingleComicPage'));

const App = () => {




    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spiner/>}>
                        <Routes>
                            <Route path='/' element={<MainPage />} />

                            <Route path='/comics' element={<ComicsPages />} />
                            <Route path='/comics/:id' element={<SinglePage Component={SingleComicLayout} dataType='comics' />} />
                            <Route path='/characters/:id' element={<SinglePage Component={SingleCharacterLayout} dataType='character' />} />
                            
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}


export default App;