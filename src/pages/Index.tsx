import { Monitor, Smartphone, Code, Search, Users, Award, Mail, Phone, MapPin, ExternalLink, FileText, Book, Heart, Cloud, Edit, BarChart, CheckCircle, Server, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Particles from "@/components/Particles";
import GlassIcons from "@/components/GlassIcons";
import GooeyNav from "@/components/GooeyNav";
import ChatAssistant from "@/components/ChatAssistant";
import { motion } from "framer-motion";
import "../styles/futuristic.css";

const Index = () => {
  const services = [
    {
      icon: <Monitor className="w-6 h-6" />,
      color: "blue",
      label: "Web Design",
      title: "Web Design Cluj",
      description: "Servicii profesionale de web design în Cluj-Napoca cu design modern, responsive și optimizat SEO."
    },
    {
      icon: <Code className="w-6 h-6" />,
      color: "orange",
      label: "Creare Website",
      title: "Creare Website WordPress",
      description: "Dezvoltăm site-uri web pe WordPress cu design unic, performanță superioară și consultanță completă."
    },
    {
      icon: <Search className="w-6 h-6" />,
      color: "blue",
      label: "Optimizare SEO",
      title: "Optimizare SEO",
      description: "Optimizăm website-ul pentru motoarele de căutare să obții vizibilitate maximă în Cluj-Napoca."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      color: "orange",
      label: "Design Responsive",
      title: "Design Responsive",
      description: "Site-uri care arată perfect pe toate dispozitivele - desktop, tablet și mobile cu Bootstrap 5."
    },
    {
      icon: <Server className="w-6 h-6" />,
      color: "blue",
      label: "Găzduire Web",
      title: "Găzduire Web",
      description: "Servicii de găzduire web profesională cu cPanel, SSL gratuit și suport 24/7."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      color: "orange",
      label: "Magazine Online",
      title: "Magazine Online",
      description: "Dezvoltăm magazine online pe Cs-Cart cu integrări complete și design personalizat."
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
      title: "egorent.ro - Rent a Car",
      category: "Website Prezentare",
      description: "Site de prezentare modern pentru servicii rent a car cu design responsive și optimizare SEO completă"
    },
    {
      title: "marketbox.ro - Magazin Online",
      category: "eCommerce Website",
      description: "Magazin online dezvoltat pe Cs-Cart cu design personalizat și integrări avansate pentru vânzări online"
    },
    {
      title: "masrentacar.ro - Rent a Car",
      category: "Website Business",
      description: "Website profesional pentru companie rent a car cu design modern și funcționalități avansate"
    },
    {
      title: "paintballsambata.ro",
      category: "Website Prezentare",
      description: "Site de prezentare pentru activități paintball cu galerie foto și sistem de rezervări online"
    },
    {
      title: "aldar.ro - Servicii Juridice",
      category: "Website Profesional",
      description: "Website elegant pentru firma de avocatură cu design profesional și optimizare SEO"
    },
    {
      title: "mnalaw.ro - Cabinet Avocat",
      category: "Website Juridic",
      description: "Site profesional pentru cabinet de avocatură cu design premium și structură optimizată"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <GooeyNav items={navItems} enableScrollSync={true} />
      
      {/* Hero Section - Simplified and User-Friendly */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center text-center px-4 pt-32 pb-16"
      >
        {/* Simplified Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),rgba(255,255,255,0))]" />
        </div>

        {/* Reduced Floating Elements */}
        <motion.div
          className="absolute top-32 left-20 w-2 h-2 bg-blue-400 rounded-full blur-sm"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-3 h-3 bg-orange-400 rounded-full blur-sm"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Simplified Particles */}
        <Particles
          particleColors={['#3b82f6', '#f97316']}
          particleCount={80}
          particleSpread={8}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />

        {/* Main Content */}
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Title with Simple Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Web Design
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500 text-4xl md:text-5xl lg:text-6xl font-light mt-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Cluj-Napoca
              </motion.span>
            </motion.h1>

            {/* Simplified Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Agenție de <span className="text-blue-400 font-semibold">web design cu peste 16 ani experiență</span> 
              în crearea de site-uri web moderne, responsive și optimizate SEO în Cluj-Napoca.
            </motion.p>

            {/* Simplified CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-full shadow-xl">
                  Solicită Ofertă
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="px-8 py-3 border-2 border-orange-400/60 text-orange-400 hover:bg-orange-500/10 font-semibold text-lg rounded-full hover:border-orange-400"
                >
                  Vezi Portofoliul
                </Button>
              </motion.div>
            </motion.div>

            {/* Simplified Stats Section */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {[
                { label: 'Site-uri Create', value: '500+' },
                { label: 'Clienți Mulțumiți', value: '99%' },
                { label: 'Ani Experiență', value: '16+' },
                { label: 'Zile Timp Mediu', value: '5' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-orange-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Simple Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section - Enhanced with Detailed Information */}
      <motion.section 
        id="services" 
        className="py-32 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border border-blue-400/30 rotate-45"
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-16 h-16 border border-orange-400/30 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 mb-8"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Servicii Web Design Cluj
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              De la web design modern și optimizare SEO până la găzduire web și marketing digital - 
              <span className="text-blue-600 font-semibold"> totul pentru succesul online</span>
            </motion.p>
          </motion.div>
          
          {/* Enhanced Glass Icons */}
          <motion.div 
            className="max-w-5xl mx-auto mb-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <GlassIcons items={services} />
          </motion.div>

          {/* Web Design Packages Section - PRIMARY */}
          <motion.div
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Pachete <span className="text-blue-600">Web Design Cluj</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Servicii profesionale de web design în Cluj-Napoca cu design modern, responsive și optimizat SEO
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Site Prezentare",
                  price: "899€",
                  originalPrice: "1200€",
                  popular: false,
                  executionTime: "5 zile",
                  features: [
                    "Design modern și responsive",
                    "Optimizare SEO de bază",
                    "Platformă WordPress",
                    "Maximum 5 pagini",
                    "Galerie foto",
                    "Formulare de contact",
                    "Integrare Google Maps",
                    "SSL gratuit inclus",
                    "1 lună mentenanță"
                  ]
                },
                {
                  name: "Website Business",
                  price: "1499€",
                  originalPrice: "2000€",
                  popular: true,
                  executionTime: "10 zile",
                  features: [
                    "Design custom și responsive",
                    "Optimizare SEO avansată",
                    "Platformă WordPress",
                    "Maximum 10 pagini",
                    "Blog integrat",
                    "Formulare avansate",
                    "Chat WhatsApp",
                    "Integrări sociale",
                    "Optimizare viteza",
                    "2 luni mentenanță"
                  ]
                },
                {
                  name: "Website Premium",
                  price: "2299€",
                  originalPrice: "3000€",
                  popular: false,
                  executionTime: "15 zile",
                  features: [
                    "Design premium custom",
                    "Optimizare SEO expertă",
                    "Funcționalități avansate",
                    "Pagini nelimitate",
                    "Sistem de management",
                    "Integrări custom",
                    "Multilingv",
                    "Panou administrare",
                    "Training inclus",
                    "3 luni mentenanță"
                  ]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white' : 'bg-white border border-gray-200'} shadow-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Cel mai popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h4 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.name}
                    </h4>
                    
                    <div className="mb-2">
                      <span className={`text-sm ${plan.popular ? 'text-blue-200 line-through' : 'text-gray-500 line-through'}`}>
                        {plan.originalPrice}
                      </span>
                    </div>
                    
                    <div className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-blue-600'} mb-2`}>
                      {plan.price}
                    </div>
                    
                    <p className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                      Timp execuție: {plan.executionTime}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-start text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${plan.popular ? 'bg-orange-400' : 'bg-blue-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    Solicită Ofertă
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hosting Packages Section - SECONDARY */}
          <motion.div
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Pachete de <span className="text-blue-600">Găzduire Web</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluții optimizate pentru performanță maximă cu cPanel, SSL gratuit și suport 24/7
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Bronze SX",
                  price: "2.61€",
                  originalPrice: "3.49€",
                  popular: false,
                  features: [
                    "16GB SSD Storage",
                    "512MB RAM DDR4 ECC",
                    "100% vCPU",
                    "MAX 2 Domenii",
                    "SSL Let's Encrypt",
                    "Backup Zilnic",
                    "Anti-Malware Imunify360",
                    "cPanel Inclus"
                  ]
                },
                {
                  name: "Silver SX",
                  price: "5.99€",
                  originalPrice: "7.99€",
                  popular: true,
                  features: [
                    "64GB SSD Storage",
                    "2GB RAM DDR4 ECC",
                    "300% vCPU",
                    "MAX 10 Domenii",
                    "SSL Let's Encrypt",
                    "Backup Zilnic 2X",
                    "Anti-Malware Imunify360",
                    "Domeniu Gratuit Inclus"
                  ]
                },
                {
                  name: "Gold SX",
                  price: "9.48€",
                  originalPrice: "12.65€",
                  popular: false,
                  features: [
                    "128GB SSD Storage",
                    "3GB RAM DDR4 ECC",
                    "400% vCPU",
                    "Domenii Nelimitate",
                    "SSL Comodo",
                    "Backup Zilnic 2X",
                    "Anti-Malware Imunify360",
                    "Optimizat eCommerce"
                  ]
                },
                {
                  name: "Platinum SX",
                  price: "16.38€",
                  originalPrice: "21.85€",
                  popular: false,
                  features: [
                    "256GB SSD Storage",
                    "4GB RAM DDR4 ECC",
                    "600% vCPU",
                    "Domenii Nelimitate",
                    "IP Dedicat",
                    "SSL Comodo Premium",
                    "Backup Zilnic 2X",
                    "Suport Prioritar"
                  ]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative rounded-2xl p-6 ${plan.popular ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white' : 'bg-white border border-gray-200'} shadow-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Recomandat
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h4 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.name}
                    </h4>
                    <div className="mb-2">
                      <span className={`text-sm ${plan.popular ? 'text-blue-200 line-through' : 'text-gray-500 line-through'}`}>
                        {plan.originalPrice}
                      </span>
                    </div>
                    <div className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                      {plan.price}
                      <span className={`text-lg font-normal ${plan.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                        /lună
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        <div className={`w-2 h-2 rounded-full mr-3 ${plan.popular ? 'bg-orange-400' : 'bg-blue-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    Comandă Acum
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* eCommerce Hosting Section */}
          <motion.div
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Găzduire <span className="text-orange-600">eCommerce</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Optimizată special pentru magazine online cu stocare NVMe, Redis Cache și LiteSpeed
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "eBasic",
                  price: "7.20€",
                  originalPrice: "18.00€",
                  storage: "50GB NVMe",
                  ram: "4GB DDR4 ECC",
                  cpu: "400% vCPU",
                  stores: "1 magazin online",
                  features: ["Redis Cache + LiteSpeed", "IP Dedicat", "Terminal SSH", "Backup Zilnic"]
                },
                {
                  name: "eStandard",
                  price: "9.00€",
                  originalPrice: "30.00€",
                  storage: "100GB NVMe",
                  ram: "6GB DDR4 ECC",
                  cpu: "600% vCPU",
                  stores: "2 magazine online",
                  features: ["Redis Cache + LiteSpeed", "IP Dedicat", "Terminal SSH", "Backup Zilnic"],
                  popular: true
                },
                {
                  name: "ePremium",
                  price: "18.40€",
                  originalPrice: "46.00€",
                  storage: "200GB NVMe",
                  ram: "8GB DDR4 ECC",
                  cpu: "800% vCPU",
                  stores: "4 magazine online",
                  features: ["Redis Cache + LiteSpeed", "IP Dedicat", "Terminal SSH", "Backup Zilnic"]
                },
                {
                  name: "eUltimate",
                  price: "25.60€",
                  originalPrice: "64.00€",
                  storage: "400GB NVMe",
                  ram: "16GB DDR4 ECC",
                  cpu: "1600% vCPU",
                  stores: "8 magazine online",
                  features: ["Redis Cache + LiteSpeed", "IP Dedicat", "Terminal SSH", "Backup Zilnic"]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative rounded-2xl p-6 ${plan.popular ? 'bg-gradient-to-br from-orange-600 to-orange-700 text-white' : 'bg-white border border-gray-200'} shadow-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Plan Recomandat
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h4 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.name}
                    </h4>
                    <div className="mb-2">
                      <span className={`text-sm ${plan.popular ? 'text-orange-200 line-through' : 'text-gray-500 line-through'}`}>
                        {plan.originalPrice}
                      </span>
                    </div>
                    <div className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-orange-600'}`}>
                      {plan.price}
                      <span className={`text-lg font-normal ${plan.popular ? 'text-orange-200' : 'text-gray-600'}`}>
                        /lună
                      </span>
                    </div>
                  </div>

                  <div className={`space-y-2 mb-6 text-sm ${plan.popular ? 'text-orange-100' : 'text-gray-600'}`}>
                    <div className="flex justify-between">
                      <span>Stocare:</span>
                      <span className="font-semibold">{plan.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>RAM:</span>
                      <span className="font-semibold">{plan.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CPU:</span>
                      <span className="font-semibold">{plan.cpu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Magazine:</span>
                      <span className="font-semibold">{plan.stores}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center text-sm ${plan.popular ? 'text-orange-100' : 'text-gray-600'}`}>
                        <div className={`w-2 h-2 rounded-full mr-3 ${plan.popular ? 'bg-blue-400' : 'bg-orange-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-white text-orange-600 hover:bg-gray-100' : 'bg-orange-600 text-white hover:bg-orange-700'}`}
                  >
                    Comandă Acum
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Magazine Online Creation Packages */}
          <motion.div
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Creare <span className="text-blue-600">Magazine Online</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluții complete pe platforma Cs-Cart cu design personalizat și automatizări avansate
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Pachet Start UP",
                  price: "4349€",
                  originalPrice: "5340€",
                  discount: "-25.06%",
                  executionTime: "5 zile",
                  features: [
                    "Design prestabilit",
                    "Maxim 5000 produse",
                    "Nr. nelimitat utilizatori",
                    "Platformă Cs-Cart",
                    "Un curier la alegere",
                    "Plata cu cardul",
                    "Soft facturare",
                    "Feed import produse",
                    "Chat WhatsApp",
                    "1 lună mentenanță"
                  ]
                },
                {
                  name: "Pachet Business",
                  price: "7340€",
                  popular: true,
                  executionTime: "15 zile",
                  features: [
                    "Design custom",
                    "Nr. nelimitat produse",
                    "Nr. nelimitat utilizatori",
                    "Platformă Cs-Cart",
                    "Curieri la alegere",
                    "Metode plată multiple",
                    "Soft facturare la alegere",
                    "Chat WhatsApp/Facebook",
                    "Două integrări custom",
                    "Optimizare PageSpeed 90+",
                    "Tool-uri Marketing",
                    "2 luni mentenanță"
                  ]
                },
                {
                  name: "Pachet Enterprise",
                  price: "220€",
                  note: "Preț lunar pentru mentenanță",
                  executionTime: "25 zile",
                  features: [
                    "Design custom premium",
                    "Nr. nelimitat produse",
                    "Integrări custom nelimitate",
                    "Optimizare PageSpeed 90+",
                    "Migrare completă",
                    "Tool-uri Marketing Digital",
                    "eMag Marketplace",
                    "Limbi și Monede Multiple",
                    "Integrare ERP",
                    "3 luni mentenanță inclusă"
                  ]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white' : 'bg-white border border-gray-200'} shadow-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Cel mai popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h4 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.name}
                    </h4>
                    
                    {plan.discount && (
                      <div className="mb-2">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                          {plan.discount}
                        </span>
                      </div>
                    )}
                    
                    <div className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-blue-600'} mb-2`}>
                      {plan.price}
                    </div>
                    
                    {plan.note && (
                      <p className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                        {plan.note}
                      </p>
                    )}
                    
                    <p className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                      Timp execuție: {plan.executionTime}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-start text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${plan.popular ? 'bg-orange-400' : 'bg-blue-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    Contactează-ne
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Web Design Cluj Section */}
          <motion.div
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                De ce să alegi <span className="text-blue-600">Web Design Cluj</span>?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ce apreciază 99% din clienții noștri la serviciile de web design din Cluj-Napoca
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Utilizăm WordPress",
                  icon: "🎨",
                  description: "WordPress se distinge ca una dintre cele mai renumite platforme CMS pentru site-uri impresionante",
                  features: [
                    "Platforma cea mai populară",
                    "Ușor de administrat",
                    "Actualizări regulate",
                    "Securitate avansată",
                    "SEO optimizat",
                    "Flexibilitate maximă"
                  ]
                },
                {
                  name: "Design Unic",
                  icon: "💡",
                  description: "Folosim Bootstrap 5 pentru o experiență superioară și design responsiv perfect",
                  features: [
                    "Design 100% personalizat",
                    "Responsive pe toate dispozitivele",
                    "Interfață modernă",
                    "Experiență utilizator optimă",
                    "Compatibilitate maximă",
                    "Performanță superioară"
                  ]
                },
                {
                  name: "Consultanță Completă",
                  icon: "🤝",
                  description: "Îți oferim sprijin constant în procesul de implementare a proiectului web",
                  features: [
                    "Consultanță gratuită",
                    "Alegerea imaginilor corecte",
                    "Structurarea conținutului",
                    "Optimizarea textelor",
                    "Strategie de marketing",
                    "Suport post-lansare"
                  ]
                },
                {
                  name: "Optimizare SEO",
                  icon: "🚀",
                  description: "Site-urile noastre sunt optimizate pentru motoarele de căutare încă de la început",
                  features: [
                    "SEO tehnic complet",
                    "Optimizare pentru Cluj",
                    "Structură URL optimă",
                    "Meta tags personalizate",
                    "Schema markup",
                    "Monitorizare ranking"
                  ]
                },
                {
                  name: "Performanță Superioară",
                  icon: "⚡",
                  description: "Optimizăm viteza site-ului pentru o experiență de utilizator excepțională",
                  features: [
                    "Viteza de încărcare optimă",
                    "Optimizare imagini",
                    "Cache inteligent",
                    "CDN inclus",
                    "Compression avansată",
                    "PageSpeed 90+"
                  ]
                },
                {
                  name: "Suport de Încredere",
                  icon: "🛡️",
                  description: "Oferim asistență tehnică de înaltă calitate și răspundem prompt la toate problemele",
                  features: [
                    "Suport tehnic rapid",
                    "Backup zilnic",
                    "Monitorizare 24/7",
                    "Actualizări incluse",
                    "Securitate avansată",
                    "Mentenanță profesională"
                  ]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">
                      {service.name}
                    </h4>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Marketing Digital Services */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Servicii <span className="text-orange-600">Marketing Digital</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Campanii PPC, Google Ads, Facebook Ads și strategii complete pentru creșterea vânzărilor
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Google Ads",
                  icon: "🎯",
                  description: "Campanii Google Ads optimizate pentru conversii maxime",
                  features: [
                    "Keyword Research avansat",
                    "Analize CRO complete",
                    "Optimizare ROAS",
                    "Monitorizare zilnică",
                    "Rapoarte detaliate",
                    "Consultanță strategică"
                  ]
                },
                {
                  name: "Facebook & Instagram Ads",
                  icon: "📱",
                  description: "Promovare META cu targeting precis și creativități captivante",
                  features: [
                    "Segmentare audiență precisă",
                    "Feed produse optimizat",
                    "A/B testing continuu",
                    "Retargeting avansat",
                    "Analiza performanței",
                    "Optimizare creativități"
                  ]
                },
                {
                  name: "TikTok Marketing",
                  icon: "🎵",
                  description: "Strategii virale pe TikTok pentru audiența tânără",
                  features: [
                    "Conținut viral optimizat",
                    "Trend analysis",
                    "Influencer partnerships",
                    "Community building",
                    "Analytics avansate",
                    "Brand awareness"
                  ]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">
                      {service.name}
                    </h4>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">
                    Stabilește un Call
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section - Web Design Cluj */}
      <motion.section 
        className="py-32 relative overflow-hidden bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Întrebări frecvente despre <span className="text-blue-600">Web Design Cluj</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Răspunsuri la cele mai comune întrebări despre serviciile noastre de web design
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Cât timp durează realizarea unui website în Cluj-Napoca?",
                answer: "Durata de creare a unui website depinde de complexitate. Cu toate detaliile necesare (texte, imagini, informații), putem finaliza un site de prezentare în 5 zile lucrătoare. Pentru proiectele mai complexe, timpul poate fi de 10-15 zile."
              },
              {
                question: "Ce platformă utilizați pentru web design?",
                answer: "Utilizăm WordPress, cea mai populară platformă CMS din lume. WordPress oferă flexibilitate maximă, securitate avansată și ușurință în administrare pentru clientii noștri din Cluj-Napoca."
              },
              {
                question: "Oferiți servicii de branding și identitate vizuală?",
                answer: "Da, oferim servicii complete de branding incluzând logo design, caiet de branding, culori, fonturi și toate elementele necesare pentru o identitate vizuală coerentă și memorabilă."
              },
              {
                question: "Includeți optimizarea SEO pentru Cluj-Napoca?",
                answer: "Absolut! Toate site-urile noastre sunt optimizate SEO încă de la început, cu focus special pe cuvinte cheie relevante pentru Cluj-Napoca și zona Transilvania."
              },
              {
                question: "Cum vă diferențiați de alte agenții de web design din Cluj?",
                answer: "Avem peste 16 ani experiență, oferim consultanță completă, design 100% personalizat, optimizare SEO avansată și suport tehnic dedicat. Suntem specializați pe piața din Cluj-Napoca."
              },
              {
                question: "Site-ul va fi compatibil cu dispozitivele mobile?",
                answer: "Da, toate site-urile noastre sunt responsive și se adaptează perfect pe desktop, tablet și mobile folosind framework-ul Bootstrap 5 pentru o experiență optimă."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section - Futuristic Transformation */}
      <motion.section 
        id="about" 
        className="py-32 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated Tech Elements */}
        <motion.div
          className="absolute top-32 left-20 w-32 h-32 border border-blue-400/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-24 w-24 h-24 border border-orange-400/20"
          animate={{
            rotate: [0, -360],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 mb-8"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Web Design. Experiență. Inovație.
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-800 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Suntem <span className="text-blue-600 font-semibold">agenția de web design din Cluj-Napoca</span> cu peste 16 ani de experiență 
                în crearea de site-uri web excepționale. Transformăm viziunile tale în 
                <span className="text-orange-600 font-semibold"> realitate digitală</span>.
              </motion.p>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "16 Ani Experiență",
                    description: "Peste 500 de site-uri web create pentru branduri din toată România",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Consultanță Completă",
                    description: "Îți oferim sprijin constant în procesul de implementare a proiectului",
                    color: "from-orange-500 to-orange-600"
                  },
                  {
                    icon: <Monitor className="w-6 h-6" />,
                    title: "Design Responsiv",
                    description: "Folosim Bootstrap 5 pentru o experiență superioară pe toate dispozitivele",
                    color: "from-blue-600 to-blue-700"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-6 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="text-white">{item.icon}</div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Stats Side */}
            <motion.div
              className="lg:text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Glowing Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-600/10 to-orange-500/10 rounded-3xl blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <motion.h3 
                    className="text-3xl font-bold text-gray-800 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    De ce să ne alegi?
                  </motion.h3>
                  
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { value: '500+', label: 'Site-uri Create', color: 'from-blue-500 to-blue-600' },
                      { value: '99%', label: 'Clienți Mulțumiți', color: 'from-orange-500 to-orange-600' },
                      { value: '16+', label: 'Ani Experiență', color: 'from-blue-600 to-blue-700' },
                      { value: '5', label: 'Zile Timp Mediu', color: 'from-orange-600 to-orange-700' }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center group"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div 
                          className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                          animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{
                            backgroundSize: '200% 200%',
                          }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-gray-600 text-sm font-medium group-hover:text-gray-800 transition-colors">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Local Advantages Section */}
      <motion.section 
        className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Avantajele unui <span className="text-orange-400">Web Designer Local</span> în Cluj
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              De ce să alegi o agenție de web design din Cluj-Napoca pentru proiectul tău
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Întâlniri față în față",
                description: "Posibilitatea de a ne întâlni personal în Cluj-Napoca pentru a discuta proiectul în detaliu și a crea o relație de încredere."
              },
              {
                icon: "🗣️",
                title: "Comunicare în română",
                description: "Înțelegem perfect nevoile tale și cultura locală, oferind consultanță în limba română fără bariere de comunicare."
              },
              {
                icon: "🎯",
                title: "Cunoașterea pieței locale",
                description: "Știm specificul pieței din Cluj-Napoca și Transilvania, ajutându-te să te conectezi mai bine cu clientii din zonă."
              },
              {
                icon: "⚡",
                title: "Răspuns rapid",
                description: "Fiind în același fus orar, poți conta pe răspunsuri rapide și suport tehnic în timpul programului de lucru românesc."
              },
              {
                icon: "🤝",
                title: "Relații pe termen lung",
                description: "Construim parteneriate durabile cu clientii din Cluj, oferind suport continuu și dezvoltare în timp."
              },
              {
                icon: "📍",
                title: "Experiență în SEO local",
                description: "Optimizăm site-urile pentru căutări locale în Cluj-Napoca, ajutându-te să fii găsit de clienții din zona ta."
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section - Futuristic Transformation */}
      <motion.section 
        id="portfolio" 
        className="py-32 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Floating Tech Elements */}
        <motion.div
          className="absolute top-40 left-16 w-40 h-40 border border-blue-400/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700 mb-8"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Masterpiece Portfolio
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Fiecare proiect este o <span className="text-blue-600 font-semibold">operă de artă digitală</span>, 
              creată cu pasiune și tehnologie de vârf pentru a depăși toate așteptările.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "TechFlow Solutions", 
                category: "Platform SaaS",
                description: "Platformă inovatoare pentru automatizarea proceselor business cu dashboard complex și integrări API avansate"
              },
              { 
                title: "GreenLeaf Organic", 
                category: "E-commerce",
                description: "Magazin online pentru produse organice cu sistem de abonamente și plăți recurente integrate"
              },
              { 
                title: "UrbanSpace Architecture", 
                category: "Website Profesional",
                description: "Website interactiv cu galerie 3D pentru proiecte arhitecturale și vizualizări immersive"
              },
              { 
                title: "CloudSync Analytics", 
                category: "Dashboard B2B",
                description: "Dashboard complex pentru analiza datelor și raportare cu vizualizări interactive avansate"
              },
              { 
                title: "WellnessPro Clinic", 
                category: "Healthcare System",
                description: "Sistem integrat pentru programări și managementul pacienților cu funcții medicale avansate"
              },
              { 
                title: "EduStream Academy", 
                category: "Platform E-learning",
                description: "Platformă e-learning cu streaming live și certificate digitale pentru cursuri online complete"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5
                }}
                className="group relative"
              >
                <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl h-full">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-orange-500/0 to-blue-600/0 group-hover:from-blue-500/20 group-hover:via-orange-500/20 group-hover:to-blue-600/20 transition-all duration-500"
                    initial={false}
                  />
                  
                  {/* Glowing Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['200% 0%', '-200% 0%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                     <div className="aspect-video relative overflow-hidden">
                       <img 
                         src={`https://images.unsplash.com/photo-${
                           index === 0 ? '1460925895917-afdab827c52f' :
                           index === 1 ? '1472396961693-142e6e269027' :
                           index === 2 ? '1488972685288-c3fd157d7c7a' :
                           index === 3 ? '1551038247-3d9af20df552' :
                           index === 4 ? '1581091226825-a6a2a5aee158' :
                           '1461749280684-dccba630e2f6'
                         }?w=400&h=300&fit=crop`}
                         alt={item.title}
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                       
                       {/* Tech Grid Overlay */}
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     </div>
                  
                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className="text-sm font-bold text-blue-600 mb-3 tracking-wider uppercase"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {item.category}
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-orange-600 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>
                    
                    <motion.div
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto text-blue-600 hover:text-orange-600 font-semibold transition-colors group-hover:text-gray-800"
                      >
                        Explorează
                      </Button>
                      
                      <motion.div
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-semibold text-lg rounded-full shadow-2xl shadow-blue-500/25">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-full"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Vezi Tot Portofoliul</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section - Futuristic Transformation */}
      <motion.section 
        id="contact" 
        className="py-32 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated Tech Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-blue-400/30 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-orange-400/30"
          animate={{
            rotate: [0, -360],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700 mb-8"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Să Construim Viitorul
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Transformă-ți viziunea în <span className="text-blue-600 font-semibold">realitate digitală</span>. 
              Contactează-ne pentru o ofertă personalizată de web design și să începem 
              <span className="text-orange-600 font-semibold"> crearea site-ului tău perfect</span>.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl font-bold text-gray-800 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Conectează-te cu Noi
              </motion.h3>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Telefon Direct",
                    info: "+40 264 33 44 55",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: "Email Suport",
                    info: "office@namebox.ro",
                    color: "from-orange-500 to-orange-600"
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Locația Noastră",
                    info: "Heltai Gáspár 17, Cluj-Napoca",
                    color: "from-blue-600 to-blue-700"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-6 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="text-white">{item.icon}</div>
                    </motion.div>
                    <div>
                      <div className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-gray-600 group-hover:text-gray-800 transition-colors">
                        {item.info}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Program Elite</h4>
                <div className="space-y-3">
                  {[
                    { day: "Luni - Vineri", time: "09:00 - 18:00" },
                    { day: "Sâmbătă", time: "10:00 - 14:00" },
                    { day: "Duminică", time: "Consultații VIP" }
                  ].map((schedule, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg backdrop-blur-sm border border-gray-200 hover:bg-gray-100 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="text-gray-800 font-semibold">{schedule.time}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Glowing Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-orange-500/10 to-blue-600/10 rounded-3xl blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <motion.h3 
                    className="text-3xl font-bold text-gray-800 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Începe Transformarea
                  </motion.h3>
                  
                  <form className="space-y-6">
                    {[
                      { type: "text", placeholder: "Numele tău complet", delay: 0.3 },
                      { type: "email", placeholder: "Email-ul tău profesional", delay: 0.4 },
                      { type: "tel", placeholder: "Numărul de telefon", delay: 0.5 }
                    ].map((field, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: field.delay }}
                        viewport={{ once: true }}
                      >
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl placeholder-gray-500 text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-300"
                        />
                      </motion.div>
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <textarea
                        placeholder="Descrie-ne viziunea ta digitală..."
                        rows={4}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl placeholder-gray-500 text-gray-800 resize-none focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-300"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full py-4 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-semibold text-lg rounded-xl shadow-2xl shadow-blue-500/25 relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10">Lansează Proiectul</span>
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer - Futuristic Transformation */}
      <motion.footer 
        className="relative py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-20 w-3 h-3 bg-blue-400 rounded-full blur-sm"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-32 w-2 h-2 bg-orange-400 rounded-full blur-sm"
          animate={{
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-500 to-blue-600 mb-4"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
               PixelCraft Studios
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Arhitecți ai experienței digitale | Inovatori ai viitorului web | 
              <span className="text-blue-400 font-semibold"> Cluj-Napoca</span>
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="border-t border-white/10 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.p 
                className="text-gray-400 text-center md:text-left"
                whileHover={{ color: '#ffffff' }}
              >
                © 2025 PixelCraft Studios. Toate drepturile rezervate.
              </motion.p>
              
              <motion.div 
                className="flex items-center gap-2 mt-4 md:mt-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="text-gray-400">Crafted with</span>
                <motion.div
                  className="text-red-400"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-5 h-5 fill-current" />
                </motion.div>
                <span className="text-gray-400">în România</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.footer>
      
      {/* Chat Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default Index;