import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComicsPages } from '../pages';
import AppHeader from "../appHeader/AppHeader";

const App = () => {




    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path='/marvel_service' element={<MainPage />} />
                        
                        <Route path='/comics' element={<ComicsPages/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}


export default App;