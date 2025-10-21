import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <Card className="w-full max-w-md border-0 shadow-none">
          <CardHeader className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2">
                
                <div className="w-12 h-12 bg-gradient-to-br from-[#32174d] to-[#ff006b] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>

              </div>
            </div>
            <CardTitle className="text-center">FIFA World Cup 2026</CardTitle>
            <CardDescription className="text-center">
              Inicia sesión para acceder a las entradas del evento más grande del fútbol
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-input-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-input-background"
                />
              </div>
              <Button type="submit" className="w-full bg-[#32174d] hover:bg-[#4a2573]">
                Iniciar Sesión
              </Button>
              <div className="text-center">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-2 text-muted-foreground">o continúa con</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" type="button">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  ¿No tienes cuenta?{' '}
                  <a href="#" className="text-[#32174d] hover:underline">
                    Regístrate
                  </a>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Right side - Image and branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#32174d] via-[#4a2573] to-[#ff006b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzdGFkaXVtfGVufDF8fHx8MTc2MDM1MTUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Stadium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
          <h1 className="text-5xl mb-6 text-center">FIFA World Cup 2026</h1>
          <p className="text-xl text-center mb-8 max-w-md">
            Únete a la mayor celebración del fútbol. Canadá, México y Estados Unidos te esperan.
          </p>
          <div className="flex gap-8 items-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🇨🇦</div>
              <p className="text-sm">Canadá</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇲🇽</div>
              <p className="text-sm">México</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇺🇸</div>
              <p className="text-sm">Estados Unidos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
