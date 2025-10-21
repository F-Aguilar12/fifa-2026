import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Trophy, Ticket } from 'lucide-react';

interface HomePageProps {
  onNavigateToTickets: () => void;
}

export function HomePage({ onNavigateToTickets }: HomePageProps) {
  const matches = [
    {
      date: '11 Jun 2026',
      time: '20:00',
      teams: 'Inauguración',
      stadium: 'Estadio Azteca',
      city: 'Ciudad de México, MX',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzdGFkaXVtfGVufDF8fHx8MTc2MDM1MTUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      date: '15 Jun 2026',
      time: '18:00',
      teams: 'Grupo A',
      stadium: 'MetLife Stadium',
      city: 'Nueva York/Nueva Jersey, USA',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzdGFkaXVtfGVufDF8fHx8MTc2MDM1MTUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      date: '18 Jun 2026',
      time: '15:00',
      teams: 'Grupo B',
      stadium: 'BMO Field',
      city: 'Toronto, CAN',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzdGFkaXVtfGVufDF8fHx8MTc2MDM1MTUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const venues = [
    { city: 'Ciudad de México', country: 'México', stadium: 'Estadio Azteca', flag: '🇲🇽' },
    { city: 'Guadalajara', country: 'México', stadium: 'Estadio Akron', flag: '🇲🇽' },
    { city: 'Monterrey', country: 'México', stadium: 'Estadio BBVA', flag: '🇲🇽' },
    { city: 'Toronto', country: 'Canadá', stadium: 'BMO Field', flag: '🇨🇦' },
    { city: 'Vancouver', country: 'Canadá', stadium: 'BC Place', flag: '🇨🇦' },
    { city: 'Nueva York', country: 'Estados Unidos', stadium: 'MetLife Stadium', flag: '🇺🇸' },
    { city: 'Los Ángeles', country: 'Estados Unidos', stadium: 'SoFi Stadium', flag: '🇺🇸' },
    { city: 'Miami', country: 'Estados Unidos', stadium: 'Hard Rock Stadium', flag: '🇺🇸' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-[#32174d] via-[#4a2573] to-[#ff006b]">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1676498110753-f63974e089bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMGN1cCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MDMyODI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="World Cup"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <Badge className="mb-4 bg-[#00d9ff] text-[#1a1a2e] hover:bg-[#00d9ff]/90">
              11 Junio - 19 Julio 2026
            </Badge>
            <h1 className="text-6xl mb-6">FIFA World Cup 2026™</h1>
            <p className="text-2xl mb-8 text-gray-100">
              El torneo más grande de la historia. 48 equipos. 16 ciudades. 3 países.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-[#ff006b] hover:bg-[#d9005a]"
                onClick={onNavigateToTickets}
              >
                <Ticket className="mr-2 h-5 w-5" />
                Comprar Entradas
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Ver Calendario
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-12 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#32174d] to-[#ff006b] rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl mb-1">48</div>
              <div className="text-sm text-muted-foreground">Equipos</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#32174d] to-[#00d9ff] rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl mb-1">104</div>
              <div className="text-sm text-muted-foreground">Partidos</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff006b] to-[#00d9ff] rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl mb-1">16</div>
              <div className="text-sm text-muted-foreground">Ciudades</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00d9ff] to-[#32174d] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <div className="text-3xl mb-1">3</div>
              <div className="text-sm text-muted-foreground">Países Anfitriones</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Matches */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl mb-2">Partidos Destacados</h2>
            <p className="text-muted-foreground">No te pierdas los mejores encuentros del torneo</p>
          </div>
          <Button variant="outline">Ver Todos</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matches.map((match, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={match.image}
                  alt={match.stadium}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-[#32174d] text-white">
                    {match.date}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{match.time}</span>
                </div>
                <CardTitle>{match.teams}</CardTitle>
                <CardDescription>
                  <div className="flex items-start gap-2 mt-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <div>{match.stadium}</div>
                      <div className="text-xs">{match.city}</div>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-[#ff006b] hover:bg-[#d9005a]" onClick={onNavigateToTickets}>
                  Ver Entradas
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Venues Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-2">Sedes del Torneo</h2>
            <p className="text-muted-foreground">16 ciudades icónicas en 3 países</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {venues.map((venue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-3">{venue.flag}</div>
                  <CardTitle className="text-lg">{venue.city}</CardTitle>
                  <CardDescription>
                    <div>{venue.stadium}</div>
                    <div className="text-xs mt-1">{venue.country}</div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#32174d] to-[#ff006b]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1586200486113-6102191cb3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmYW5zfGVufDF8fHx8MTc2MDM5OTk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fans"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-4xl mb-4">Sé Parte de la Historia</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Asegura tu lugar en el evento deportivo más grande del mundo. Las entradas se están agotando rápido.
          </p>
          <Button size="lg" className="bg-white text-[#32174d] hover:bg-gray-100" onClick={onNavigateToTickets}>
            <Ticket className="mr-2 h-5 w-5" />
            Comprar Entradas Ahora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="mb-4">Torneo</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Calendario</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Grupos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Estadísticas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Entradas</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Comprar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Políticas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Información</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sedes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hoteles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transporte</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guía del Fan</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>© 2026 FIFA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
