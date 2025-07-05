import { Monitor, Smartphone, Code, Search, Users, Award, Mail, Phone, MapPin, ExternalLink, FileText, Book, Heart, Cloud, Edit, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Particles from "@/components/Particles";
import GlassIcons from "@/components/GlassIcons";
import GooeyNav from "@/components/GooeyNav";

const Index = () => {
  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      color: "blue",
      label: "Web Design",
      title: "Web Design",
      description: "Creăm site-uri web moderne și responsive care impresionează vizitatorii și generează conversii."
    },
    {
      icon: <Code className="w-6 h-6" />,
      color: "purple",
      label: "Dezvoltare Web",
      title: "Dezvoltare Web",
      description: "Dezvoltăm aplicații web personalizate folosind cele mai noi tehnologii și standarde de industrie."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      color: "red",
      label: "Design Responsive",
      title: "Design Responsive",
      description: "Site-urile noastre arată perfect pe toate dispozitivele - desktop, tablet și mobil."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      color: "indigo",
      label: "Optimizare SEO",
      title: "Optimizare SEO",
      description: "Optimizăm site-ul pentru motoarele de căutare pentru a atrage mai mulți clienți potențiali."
    },
    {
      icon: <Edit className="w-6 h-6" />,
      color: "orange",
      label: "Consultanță IT",
      title: "Consultanță IT",
      description: "Oferim consultanță tehnică pentru alegerea celor mai bune soluții pentru afacerea ta."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      color: "green",
      label: "Analiză Web",
      title: "Analiză Web",
      description: "Monitorizăm și analizăm performanța site-ului pentru rezultate optime."
    }
  ];

  const navItems = [
    { label: "Acasă", href: "#home" },
    { label: "Servicii", href: "#services" },
    { label: "Despre", href: "#about" },
    { label: "Portofoliu", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Fashion",
      category: "Magazin Online",
      description: "Platformă e-commerce modernă pentru branduri de fashion din Cluj-Napoca"
    },
    {
      title: "Restaurant Website",
      category: "Site Prezentare",
      description: "Site elegant pentru un restaurant premium din centrul Clujului"
    },
    {
      title: "Aplicație Corporativă",
      category: "Aplicație Web",
      description: "Sistem de management pentru o companie IT din Cluj-Napoca"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <GooeyNav items={navItems} />
      
      {/* Hero Section */}
      <section id="home" className="bg-gradient-hero min-h-screen flex items-center justify-center text-center px-4 relative">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Web Design & Development
            <span className="block text-accent mt-2">Cluj-Napoca</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Creăm site-uri web extraordinare care transformă vizitatorii în clienți. 
            Servicii complete de web design și dezvoltare în Cluj-Napoca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Solicită Ofertă Gratuită
            </Button>
            <Button variant="outline" className="btn-outline text-white border-white hover:bg-white hover:text-primary">
              Vezi Portofoliul
            </Button>
          </div>
          <div className="mt-12 text-white/80">
            <p className="text-sm uppercase tracking-wider">Parteneri de încredere pentru</p>
            <div className="flex items-center justify-center gap-8 mt-4 text-2xl font-semibold">
              <span>Startup-uri</span>
              <span>•</span>
              <span>IMM-uri</span>
              <span>•</span>
              <span>Corporații</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Serviciile Noastre
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferim soluții complete de web design și dezvoltare pentru afaceri din Cluj-Napoca și România
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GlassIcons items={services} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                De Ce Să Ne Alegi?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Suntem o echipă de profesioniști pasionați de web design și dezvoltare, 
                cu experiență în crearea de soluții digitale pentru afaceri din Cluj-Napoca.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Experiență de 5+ ani</h3>
                    <p className="text-muted-foreground">Peste 100 de proiecte finalizate cu succes pentru clienți din Cluj și România</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Suport Complet</h3>
                    <p className="text-muted-foreground">Te îndrumăm în fiecare etapă, de la concept la lansare și mentenanță</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tehnologii Moderne</h3>
                    <p className="text-muted-foreground">Folosim cele mai noi tehnologii pentru rezultate optimale</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:text-center">
              <div className="bg-gradient-primary p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Statisticile Noastre</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-sm opacity-90">Proiecte Finalizate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">98%</div>
                    <div className="text-sm opacity-90">Clienți Mulțumiți</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">5+</div>
                    <div className="text-sm opacity-90">Ani Experiență</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Suport Tehnic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portofoliul Nostru
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Câteva dintre proiectele de succes realizate pentru clienții noștri din Cluj-Napoca
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="card-elegant overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                  <Monitor className="w-16 h-16 text-primary opacity-50" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{item.category}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-dark">
                    Vezi Proiectul <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-primary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hai să Discutăm Proiectul Tău
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ești gata să îți transformi ideea într-un site web de succes? 
              Contactează-ne pentru o consultație gratuită.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Informații de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <div className="opacity-90">+40 123 456 789</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">contact@webdesigncluj.ro</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Locație</div>
                    <div className="opacity-90">Cluj-Napoca, România</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Program de Lucru</h4>
                <div className="space-y-2 opacity-90">
                  <div className="flex justify-between">
                    <span>Luni - Vineri</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sâmbătă</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duminică</span>
                    <span>Închis</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Solicită o Ofertă</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Numele tău"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Adresa de email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Numărul de telefon"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Descrie-ne proiectul tău..."
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 resize-none focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <Button className="w-full bg-white text-primary hover:bg-white/90 py-3 font-semibold">
                    Trimite Mesajul
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              WebDesign Cluj
            </h3>
            <p className="text-muted-foreground mt-2">
              Servicii profesionale de web design și dezvoltare în Cluj-Napoca
            </p>
          </div>
          
          <div className="border-t pt-8">
            <p className="text-muted-foreground">
              © 2024 WebDesign Cluj. Toate drepturile rezervate. | 
              Realizat cu pasiune în Cluj-Napoca, România
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;