import React from 'react';
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";


const handlerRouter = () => {
    const location = window
        .location
        .pathname
            .split('/')
            .filter(name => name !== '');
    
    const values = {
        resource: location[0] || 'index',
        action: location[1] || 'index',
        identify: location[2] || null,
        extra: location[3] || null,
        meta: location[4] || null,
    };

    return values;
};


function Router () {
    const page = handlerRouter();
    const isDigit = (str: string) => /[0-9]+/.test(str);

    if (page.resource === 'index') {
        return <Home />;
    }
    else if (page.resource === 'posts' && isDigit(page.action)) {
        return <Posts id={ page.action } />
    }

    return (
        <NotFound />
    );
}

export default Router;