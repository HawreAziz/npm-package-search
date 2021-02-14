import React from 'react';
import ReactDOM from 'react-dom';
import SearchPackage from './SearchPackage';
import { Provider } from 'react-redux';
import { store } from './store';


export const App: React.FC = () => {
        return <div>Search npm packages:
              <SearchPackage />
            </div>
}


ReactDOM.render(<Provider store={store }>
                  <App/>
                </Provider>, document.getElementById('root'));


