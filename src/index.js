import React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './App';

render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
