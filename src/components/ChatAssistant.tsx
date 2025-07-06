import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, X, Send, User, Bot, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatOption {
  id: string;
  label: string;
  value: string;
}

interface ChatState {
  step: string;
  context: Record<string, any>;
  awaitingResponse: boolean;
}

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatState, setChatState] = useState<ChatState>({
    step: 'greeting',
    context: {},
    awaitingResponse: false
  });

  const addMessage = (content: string, isBot: boolean = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const startChat = () => {
    if (messages.length === 0) {
      addMessage("Salut! Sunt Artizan, ghidul tău digital de la Web Design Cluj. Sunt aici să te ajut să găsești soluția perfectă pentru prezența ta online. Să începem?", true);
      setChatState({
        step: 'initial_question',
        context: {},
        awaitingResponse: true
      });
    }
  };

  const handleOptionClick = (option: ChatOption) => {
    // Add user's choice to messages
    addMessage(option.label, false);
    
    // Process the choice based on current step
    processUserChoice(option.value);
  };

  const processUserChoice = (choice: string) => {
    switch (chatState.step) {
      case 'initial_question':
        handleInitialQuestion(choice);
        break;
      case 'website_goal':
        handleWebsiteGoal(choice);
        break;
      case 'ecommerce_products':
        handleEcommerceProducts(choice);
        break;
      case 'existing_website':
        handleExistingWebsite(choice);
        break;
      case 'hosting_needs':
        handleHostingNeeds(choice);
        break;
      case 'marketing_goals':
        handleMarketingGoals(choice);
        break;
      default:
        break;
    }
  };

  const handleInitialQuestion = (choice: string) => {
    switch (choice) {
      case 'new_website':
        addMessage("Excelent! Un site web nou este un pas important. Care este scopul principal al noului tău site web?", true);
        setChatState({
          step: 'website_goal',
          context: { projectType: 'new_website' },
          awaitingResponse: true
        });
        break;
      case 'ecommerce':
        addMessage("Un magazin online este o modalitate fantastică de a-ți dezvolta afacerea! Câte produse plănuiești să vinzi?", true);
        setChatState({
          step: 'ecommerce_products',
          context: { projectType: 'ecommerce' },
          awaitingResponse: true
        });
        break;
      case 'existing_website':
        addMessage("Sigur te putem ajuta cu asta! Cu ce ai nevoie de ajutor?", true);
        setChatState({
          step: 'existing_website',
          context: { projectType: 'existing_website' },
          awaitingResponse: true
        });
        break;
    }
  };

  const handleWebsiteGoal = (choice: string) => {
    let recommendation = '';
    let packageName = '';
    
    switch (choice) {
      case 'simple_presence':
        packageName = 'Site Prezentare';
        recommendation = `Pe baza nevoilor tale, îți recomand pachetul nostru **${packageName}**. Este perfect pentru afacerile care doresc o prezență online profesională și include funcții precum design modern responsive, optimizare SEO de bază și până la 5 pagini.`;
        break;
      case 'comprehensive_business':
        packageName = 'Website Business';
        recommendation = `Pentru nevoile tale, îți sugerez pachetul nostru **${packageName}**. Este conceput pentru afacerile în creștere și oferă design custom responsive, optimizare SEO avansată și blog integrat.`;
        break;
      case 'premium_custom':
        packageName = 'Website Premium';
        recommendation = `Pentru proiectul tău, recomand pachetul nostru **${packageName}**. Este ideal pentru afacerile care au nevoie de funcționalități avansate și include design premium custom, optimizare SEO expertă și funcționalități personalizate.`;
        break;
    }
    
    addMessage(recommendation, true);
    setTimeout(() => {
      addMessage("Îți place această recomandare? Ai alte întrebări sau ai dori să programezi o consultație gratuită cu unul dintre experții noștri? Putem discuta proiectul tău în detaliu și să îți oferim o ofertă personalizată.", true);
    }, 1500);
    
    setChatState({
      step: 'final_recommendation',
      context: { ...chatState.context, recommendation: packageName },
      awaitingResponse: false
    });
  };

  const handleEcommerceProducts = (choice: string) => {
    let recommendation = '';
    let packageName = '';
    
    switch (choice) {
      case 'small_store':
        packageName = 'Pachet Start UP';
        recommendation = `Pentru magazinul tău online, îți sugerez **${packageName}**. Este conceput pentru afacerile care încep și oferă design prestabilit, suport pentru maximum 5000 produse și platformă Cs-Cart.`;
        break;
      case 'large_store':
        packageName = 'Pachet Business';
        recommendation = `Pentru magazinul tău online, recomand **${packageName}**. Este perfect pentru afacerile în dezvoltare și include design custom, produse nelimitate și două integrări personalizate.`;
        break;
      case 'enterprise':
        packageName = 'Pachet Enterprise';
        recommendation = `Pentru operațiunea ta de anvergură, îți sugerez **${packageName}**. Oferă design custom premium, integrări personalizate nelimitate și integrare ERP.`;
        break;
    }
    
    addMessage(recommendation, true);
    setTimeout(() => {
      addMessage("Această recomandare se potrivește cu așteptările tale? Ai dori să discutăm mai detaliat despre funcționalitățile incluse?", true);
    }, 1500);
    
    setChatState({
      step: 'final_recommendation',
      context: { ...chatState.context, recommendation: packageName },
      awaitingResponse: false
    });
  };

  const handleExistingWebsite = (choice: string) => {
    switch (choice) {
      case 'hosting':
        addMessage("Ce fel de trafic și resurse are nevoie site-ul tău?", true);
        setChatState({
          step: 'hosting_needs',
          context: { ...chatState.context, serviceType: 'hosting' },
          awaitingResponse: true
        });
        break;
      case 'marketing':
        addMessage("Care sunt principalele tale obiective de marketing?", true);
        setChatState({
          step: 'marketing_goals',
          context: { ...chatState.context, serviceType: 'marketing' },
          awaitingResponse: true
        });
        break;
    }
  };

  const handleHostingNeeds = (choice: string) => {
    let recommendation = '';
    
    switch (choice) {
      case 'low_traffic':
        recommendation = 'Pentru nevoile tale, recomand pachetele **Bronze SX** sau **Silver SX**. Sunt perfecte pentru site-uri mici și medii cu trafic moderat.';
        break;
      case 'moderate_traffic':
        recommendation = 'Pentru traficul tău, îți sugerez pachetele **Gold SX** sau **Platinum SX**. Oferă resurse suficiente pentru site-uri în creștere.';
        break;
      case 'high_traffic':
        recommendation = 'Pentru cerințele tale mari, recomand pachetul **Platinum SX** sau pachetele noastre de găzduire eCommerce specializate.';
        break;
      case 'ecommerce_hosting':
        recommendation = 'Pentru magazinul tău online, îți sugerez pachetele noastre de **găzduire eCommerce** cu stocare NVMe și Redis Cache pentru performanță maximă.';
        break;
    }
    
    addMessage(recommendation, true);
    setTimeout(() => {
      addMessage("Această soluție îți pare potrivită? Ai dori să discutăm detaliile tehnice cu unul dintre specialiștii noștri?", true);
    }, 1500);
    
    setChatState({
      step: 'final_recommendation',
      context: { ...chatState.context, recommendation },
      awaitingResponse: false
    });
  };

  const handleMarketingGoals = (choice: string) => {
    let recommendation = '';
    
    switch (choice) {
      case 'google_search':
        recommendation = 'Pentru obiectivul tău, recomand serviciile noastre de **Google Ads**. Includem keyword research avansat, optimizare ROAS și monitorizare zilnică.';
        break;
      case 'social_media':
        recommendation = 'Pentru social media, îți sugerez serviciile noastre de **Facebook & Instagram Ads**. Oferim segmentare precisă a audienței și retargeting avansat.';
        break;
      case 'tiktok':
        recommendation = 'Pentru audiența tânără, recomand serviciile noastre de **TikTok Marketing**. Includem crearea de conținut viral și analysis de trending.';
        break;
    }
    
    addMessage(recommendation, true);
    setTimeout(() => {
      addMessage("Te-ar interesa să discutăm o strategie personalizată de marketing digital pentru afacerea ta?", true);
    }, 1500);
    
    setChatState({
      step: 'final_recommendation',
      context: { ...chatState.context, recommendation },
      awaitingResponse: false
    });
  };

  const getCurrentOptions = (): ChatOption[] => {
    switch (chatState.step) {
      case 'initial_question':
        return [
          { id: '1', label: 'Un site web nou pentru afacerea/marca mea', value: 'new_website' },
          { id: '2', label: 'Un magazin online (eCommerce)', value: 'ecommerce' },
          { id: '3', label: 'Am deja un site web și am nevoie de ajutor cu hosting sau marketing', value: 'existing_website' }
        ];
      case 'website_goal':
        return [
          { id: '1', label: 'O prezență online simplă și profesională', value: 'simple_presence' },
          { id: '2', label: 'Un site web complet pentru afacere cu blog și funcții avansate', value: 'comprehensive_business' },
          { id: '3', label: 'Un site web premium, foarte personalizat cu funcționalități unice', value: 'premium_custom' }
        ];
      case 'ecommerce_products':
        return [
          { id: '1', label: 'Mai puțin de 5.000 de produse', value: 'small_store' },
          { id: '2', label: 'Un număr mare de produse, cu nevoi de funcții avansate', value: 'large_store' },
          { id: '3', label: 'Am o operațiune mare și am nevoie de o soluție enterprise complet personalizată', value: 'enterprise' }
        ];
      case 'existing_website':
        return [
          { id: '1', label: 'Găzduire Website', value: 'hosting' },
          { id: '2', label: 'Marketing Digital (Google Ads sau social media)', value: 'marketing' }
        ];
      case 'hosting_needs':
        return [
          { id: '1', label: 'Trafic mic spre moderat, pentru un site personal sau afacere mică', value: 'low_traffic' },
          { id: '2', label: 'Trafic moderat spre mare, pentru o afacere în creștere', value: 'moderate_traffic' },
          { id: '3', label: 'Trafic mare și resurse intensive, pentru un site mare', value: 'high_traffic' },
          { id: '4', label: 'Am un magazin online și am nevoie de găzduire specializată', value: 'ecommerce_hosting' }
        ];
      case 'marketing_goals':
        return [
          { id: '1', label: 'Vreau să apar în rezultatele Google când oamenii caută serviciile mele', value: 'google_search' },
          { id: '2', label: 'Vreau să ajung la clienți potențiali pe Facebook și Instagram', value: 'social_media' },
          { id: '3', label: 'Vreau să angajez o audiență tânără pe TikTok', value: 'tiktok' }
        ];
      default:
        return [];
    }
  };

  React.useEffect(() => {
    if (isOpen && messages.length === 0) {
      startChat();
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat Toggle Button - Always Visible */}
      <div
        className="fixed bottom-6 right-6 z-[99999]"
        style={{ 
          zIndex: 99999,
          position: 'fixed',
          bottom: '24px',
          right: '24px'
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
            size="lg"
            style={{
              position: 'relative',
              zIndex: 99999
            }}
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
          </Button>
        </motion.div>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-[99998]"
            style={{ 
              zIndex: 99998,
              position: 'fixed',
              bottom: '96px',
              right: '24px'
            }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-orange-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Artizan</h3>
                      <p className="text-white/80 text-sm">Ghidul tău digital</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isBot ? 'bg-blue-100' : 'bg-orange-100'}`}>
                          {message.isBot ? <Bot className="w-4 h-4 text-blue-600" /> : <User className="w-4 h-4 text-orange-600" />}
                        </div>
                        <div className={`p-3 rounded-lg ${message.isBot ? 'bg-gray-100 text-gray-800' : 'bg-blue-600 text-white'}`}>
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Options */}
                {chatState.awaitingResponse && (
                  <div className="p-4 border-t bg-gray-50">
                    <div className="space-y-2">
                      {getCurrentOptions().map((option) => (
                        <Button
                          key={option.id}
                          variant="outline"
                          className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-blue-50 hover:border-blue-200"
                          onClick={() => handleOptionClick(option)}
                        >
                          <span className="text-sm">{option.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Contact CTA */}
                {chatState.step === 'final_recommendation' && (
                  <div className="p-4 border-t bg-blue-50">
                    <div className="text-center space-y-3">
                      <p className="text-sm text-gray-600">
                        Mulțumesc că ai vorbit cu mine! Suntem entuziasmați de posibilitatea de a lucra cu tine.
                      </p>
                      <div className="flex flex-col space-y-2">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Phone className="w-4 h-4 mr-2" />
                          Sună acum: +40 264 33 44 55
                        </Button>
                        <Button variant="outline" className="border-orange-200 hover:bg-orange-50">
                          <Mail className="w-4 h-4 mr-2" />
                          Scrie-ne: office@namebox.ro
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;
