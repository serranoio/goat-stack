import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import Game from './pages/Game/Game';
import Leaderboard from './pages/Leaderboard/Leaderboard';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <QueryClientProvider client={client}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        <Routes>
          <Route path="/game" element={<Game />} />
        </Routes>
        <Routes>
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </QueryClientProvider>
);

