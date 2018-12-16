import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamNew from './Streams/StreamNew';
import StreamEdit from './Streams/StreamEdit';
import StreamShow from './Streams/StreamShow';
import StreamList from './Streams/StreamList';
import StreamDelete from './Streams/StreamDelete';
import Header from './Header';

const App = () => {
    return(
        <div className='ui container'>
            <BrowserRouter>
            <div>
                <Header/>
                <Route path='/' exact component={StreamList}/>
                <Route path='/streams/show' exact component={StreamShow}/>
                <Route path='/streams/edit' exact component={StreamEdit}/>
                <Route path='/streams/delete' exact component={StreamDelete}/>
                <Route path='/streams/new' exact component={StreamNew}/>
            </div>
            </BrowserRouter>
        </div>
    );
}

export default App;