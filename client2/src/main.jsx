import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux'; // ✅ import Redux Provider
import store from './redux/store';       // ✅ import Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>              {/* ✅ Wrap with Redux Provider */}
      <AuthProvider>                      {/* ✅ Keep your AuthProvider */}
        <App />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
