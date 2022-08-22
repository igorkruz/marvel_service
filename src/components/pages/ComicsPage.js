import { Helmet } from "react-helmet"

import ComicsList from "../comicsList/ComicsList"
import AppBanner from "../appBanner/AppBanner"


const ComicsPages = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel comics  "
                />
                <title>Marvel comics </title>
            </Helmet>
            <AppBanner />
            <ComicsList />
        </>
    )
}

export default ComicsPages