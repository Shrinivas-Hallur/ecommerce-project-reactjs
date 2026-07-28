import { Header } from '../Components/Header';

import './NotFoundPage.css';

export function NotFoundPage(){
    return(
        <>
            <title>404 page not Found</title>
            <link rel="icon" href="home-favicon.png" type="image/svg+xml" />
            <Header />
            <div className="not-found-message">
                Page not found
            </div>
        </>
    );
}