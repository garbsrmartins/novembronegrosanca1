import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    rootElement
  );
}

