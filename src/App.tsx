import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { TicketsPage } from './components/TicketsPage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'tickets'>('home');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const handleNavigate = (page: 'home' | 'tickets') => {
    setCurrentPage(page);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />
      {currentPage === 'home' ? (
        <HomePage onNavigateToTickets={() => handleNavigate('tickets')} />
      ) : (
        <TicketsPage onNavigateHome={() => handleNavigate('home')} />
      )}
    </div>
  );
}
