import { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './App';
import './main.css'

const rootElement = document.getElementById('root');
render(
	<StrictMode>
		<App />
	</StrictMode>,
	rootElement
);
