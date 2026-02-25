import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';
import PrintMessage from './PrintMessage';

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        < HelloWorld  />
        < PrintMessage message="Como te va?"  />
        < PrintMessage message="Soy un mensaje!!!"  />
    </React.StrictMode>
)
