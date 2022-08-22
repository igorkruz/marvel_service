import {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spiner from '../spinner/Spinner';
import SingleCharacterLayout from '../pages/singleCharacterLayout/SingleCharacterLayout';
import SingleComicLayout from '../pages/sinlgeComicLayout/SingleComicLayout';
import Error404 from '../pages/error404/Error404';

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPages = lazy(() => import('../pages/ComicsPage'));
const SinglePage= lazy(() => import('../pages/SinglePage'));

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
                            <Route path='*' element={<Error404/> } />
                            
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}


export default App;