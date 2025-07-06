import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const SimpleChatButton: React.FC = () => {
  return (
    <div
      className="fixed bottom-6 right-6 z-[99999]"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99999,
        width: '64px',
        height: '64px'
      }}
    >
      <Button
        onClick={() => alert('Chat button clicked!')}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
        size="lg"
        style={{
          position: 'relative',
          zIndex: 99999,
          width: '64px',
          height: '64px'
        }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
};

export default SimpleChatButton;
