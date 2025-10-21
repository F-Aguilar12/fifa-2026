import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, MapPin, Users, CreditCard, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TicketsPageProps {
  onNavigateHome: () => void;
}

export function TicketsPage({ onNavigateHome }: TicketsPageProps) {
  const [selectedMatch, setSelectedMatch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  const matches = [
    {
      id: '1',
      date: '11 Jun 2026',
      time: '20:00',
      phase: 'Inauguración',
      stadium: 'Estadio Azteca',
      city: 'Ciudad de México, MX',
      available: true
    },
    {
      id: '2',
      date: '15 Jun 2026',
      time: '18:00',
      phase: 'Grupo A - Fecha 1',
      stadium: 'MetLife Stadium',
      city: 'Nueva York/Nueva Jersey, USA',
      available: true
    },
    {
      id: '3',
      date: '18 Jun 2026',
      time: '15:00',
      phase: 'Grupo B - Fecha 1',
      stadium: 'BMO Field',
      city: 'Toronto, CAN',
      available: true
    },
    {
      id: '4',
      date: '22 Jun 2026',
      time: '19:00',
      phase: 'Grupo C - Fecha 2',
      stadium: 'SoFi Stadium',
      city: 'Los Ángeles, USA',
      available: true
    },
    {
      id: '5',
      date: '30 Jun 2026',
      time: '16:00',
      phase: 'Octavos de Final',
      stadium: 'AT&T Stadium',
      city: 'Dallas, USA',
      available: true
    },
    {
      id: '6',
      date: '05 Jul 2026',
      time: '20:00',
      phase: 'Cuartos de Final',
      stadium: 'Arrowhead Stadium',
      city: 'Kansas City, USA',
      available: false
    }
  ];

  const categories = [
    {
      id: 'cat1',
      name: 'Categoría 1',
      price: 850,
      description: 'Mejores asientos del estadio',
      color: 'from-[#32174d] to-[#4a2573]'
    },
    {
      id: 'cat2',
      name: 'Categoría 2',
      price: 550,
      description: 'Excelente vista del campo',
      color: 'from-[#4a2573] to-[#ff006b]'
    },
    {
      id: 'cat3',
      name: 'Categoría 3',
      price: 350,
      description: 'Buena ubicación',
      color: 'from-[#ff006b] to-[#00d9ff]'
    },
    {
      id: 'cat4',
      name: 'Categoría 4',
      price: 150,
      description: 'Entrada general',
      color: 'from-[#00d9ff] to-[#32174d]'
    }
  ];

  const handlePurchase = () => {
    setShowCheckout(true);
  };

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);
  const totalPrice = selectedCategoryData ? selectedCategoryData.price * quantity : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden bg-gradient-to-br from-[#32174d] via-[#4a2573] to-[#ff006b]">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzdGFkaXVtfGVufDF8fHx8MTc2MDM1MTUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Stadium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white">
            <Badge className="mb-4 bg-[#00d9ff] text-[#1a1a2e] hover:bg-[#00d9ff]/90">
              Entradas Disponibles
            </Badge>
            <h1 className="text-5xl mb-4">Compra tus Entradas</h1>
            <p className="text-xl text-gray-100">
              Asegura tu lugar en la historia del fútbol
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {!showCheckout ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Selection Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Selecciona tu Entrada</CardTitle>
                  <CardDescription>Elige el partido y la categoría de asiento</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="matches" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="matches">Seleccionar Partido</TabsTrigger>
                      <TabsTrigger value="category" disabled={!selectedMatch}>
                        Categoría de Asiento
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="matches" className="space-y-4 mt-6">
                      {matches.map((match) => (
                        <Card
                          key={match.id}
                          className={`cursor-pointer transition-all ${
                            selectedMatch === match.id
                              ? 'border-[#32174d] ring-2 ring-[#32174d]'
                              : 'hover:border-gray-400'
                          } ${!match.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                          onClick={() => match.available && setSelectedMatch(match.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                  <Badge variant={match.available ? 'default' : 'secondary'} className={match.available ? 'bg-[#32174d]' : ''}>
                                    {match.date}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground">{match.time}</span>
                                  {!match.available && (
                                    <Badge variant="secondary">Agotado</Badge>
                                  )}
                                </div>
                                <h3 className="mb-2">{match.phase}</h3>
                                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div>{match.stadium}</div>
                                    <div className="text-xs">{match.city}</div>
                                  </div>
                                </div>
                              </div>
                              {selectedMatch === match.id && (
                                <div className="ml-4">
                                  <div className="w-6 h-6 bg-[#32174d] rounded-full flex items-center justify-center">
                                    <Check className="h-4 w-4 text-white" />
                                  </div>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>

                    <TabsContent value="category" className="space-y-4 mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {categories.map((category) => (
                          <Card
                            key={category.id}
                            className={`cursor-pointer transition-all ${
                              selectedCategory === category.id
                                ? 'border-[#32174d] ring-2 ring-[#32174d]'
                                : 'hover:border-gray-400'
                            }`}
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            <CardContent className="p-6">
                              <div className={`w-full h-3 bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h3 className="mb-1">{category.name}</h3>
                                  <p className="text-sm text-muted-foreground">{category.description}</p>
                                </div>
                                {selectedCategory === category.id && (
                                  <div className="w-6 h-6 bg-[#32174d] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="h-4 w-4 text-white" />
                                  </div>
                                )}
                              </div>
                              <div className="text-2xl">${category.price} USD</div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {selectedCategory && (
                        <div className="mt-6">
                          <Label htmlFor="quantity">Cantidad de Entradas</Label>
                          <Select
                            value={quantity.toString()}
                            onValueChange={(value) => setQuantity(parseInt(value))}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 entrada</SelectItem>
                              <SelectItem value="2">2 entradas</SelectItem>
                              <SelectItem value="3">3 entradas</SelectItem>
                              <SelectItem value="4">4 entradas</SelectItem>
                              <SelectItem value="5">5 entradas</SelectItem>
                              <SelectItem value="6">6 entradas</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Summary Card */}
            <div>
              <Card className="border-0 shadow-lg sticky top-24">
                <CardHeader>
                  <CardTitle>Resumen de Compra</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedMatch ? (
                    <>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Partido Seleccionado</div>
                        <div>{matches.find(m => m.id === selectedMatch)?.phase}</div>
                        <div className="text-sm text-muted-foreground">
                          {matches.find(m => m.id === selectedMatch)?.date} - {matches.find(m => m.id === selectedMatch)?.time}
                        </div>
                      </div>

                      {selectedCategory && (
                        <>
                          <div className="border-t pt-4">
                            <div className="text-sm text-muted-foreground mb-1">Categoría</div>
                            <div>{selectedCategoryData?.name}</div>
                          </div>

                          <div className="border-t pt-4">
                            <div className="text-sm text-muted-foreground mb-1">Cantidad</div>
                            <div>{quantity} {quantity === 1 ? 'entrada' : 'entradas'}</div>
                          </div>

                          <div className="border-t pt-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">Subtotal</span>
                              <span>${totalPrice} USD</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">Cargo por servicio</span>
                              <span>${(totalPrice * 0.1).toFixed(2)} USD</span>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t">
                              <span>Total</span>
                              <span className="text-2xl">${(totalPrice * 1.1).toFixed(2)} USD</span>
                            </div>
                          </div>

                          <Button
                            className="w-full bg-[#ff006b] hover:bg-[#d9005a]"
                            size="lg"
                            onClick={handlePurchase}
                          >
                            Continuar al Pago
                          </Button>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Selecciona un partido para comenzar</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" onClick={() => setShowCheckout(false)}>
              ← Volver a la selección
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Información de Pago</CardTitle>
                    <CardDescription>Completa tus datos para finalizar la compra</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Juan" className="bg-input-background" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Pérez" className="bg-input-background" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" placeholder="juan@email.com" className="bg-input-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="+1 234 567 8900" className="bg-input-background" />
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CreditCard className="h-5 w-5" />
                        <h3>Datos de la Tarjeta</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="bg-input-background" />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2 space-y-2">
                            <Label htmlFor="expiry">Fecha de Expiración</Label>
                            <Input id="expiry" placeholder="MM/AA" className="bg-input-background" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" className="bg-input-background" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-[#32174d] hover:bg-[#4a2573]" size="lg">
                      Confirmar Compra - ${(totalPrice * 1.1).toFixed(2)} USD
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Al confirmar tu compra, aceptas nuestros términos y condiciones. 
                      Tus entradas serán enviadas por correo electrónico.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary Sidebar */}
              <div>
                <Card className="border-0 shadow-lg sticky top-24">
                  <CardHeader>
                    <CardTitle>Resumen del Pedido</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Partido</div>
                      <div className="text-sm">{matches.find(m => m.id === selectedMatch)?.phase}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {matches.find(m => m.id === selectedMatch)?.date}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="text-sm text-muted-foreground mb-1">Ubicación</div>
                      <div className="text-sm">{matches.find(m => m.id === selectedMatch)?.stadium}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {matches.find(m => m.id === selectedMatch)?.city}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="text-sm text-muted-foreground mb-1">Entradas</div>
                      <div className="text-sm">
                        {quantity}x {selectedCategoryData?.name}
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${totalPrice} USD</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Cargo por servicio</span>
                        <span>${(totalPrice * 0.1).toFixed(2)} USD</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span>Total</span>
                        <span className="text-xl">${(totalPrice * 1.1).toFixed(2)} USD</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
