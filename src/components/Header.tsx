import { Button } from './ui/button';

interface HeaderProps {
  currentPage: 'home' | 'tickets';
  onNavigate: (page: 'home' | 'tickets') => void;
  onLogout: () => void;
}

export function Header({ currentPage, onNavigate, onLogout }: HeaderProps) {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-[#32174d] to-[#ff006b] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <div>
              <div className="text-[#32174d]">FIFA World Cup</div>
              <div className="text-xs text-muted-foreground">2026</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home'
                  ? 'text-[#32174d]'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => onNavigate('tickets')}
              className={`transition-colors ${
                currentPage === 'tickets'
                  ? 'text-[#32174d]'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Entradas
            </button>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Equipos
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Calendario
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Sedes
            </a>
          </nav>

          {/* User actions */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={onLogout}>
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
