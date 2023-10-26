import { createRoot } from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';


const container = createRoot(document.getElementById('root'));

// const container = document.getElementById('root');
// createRoot(container).render(<App />);

container.render(
<StrictMode>
    <App />
</StrictMode>
);
