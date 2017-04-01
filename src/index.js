import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB1QFIv7Dd01lgHUsSK5XFos4yML_LfY6s';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));