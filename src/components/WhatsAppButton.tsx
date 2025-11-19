import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  productName?: string;
  className?: string;
}

const WhatsAppButton = ({ productName, className }: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const message = productName
      ? `Olá! Tenho interesse no produto: ${productName}`
      : "Olá! Gostaria de mais informações sobre seus produtos.";
    
    const phoneNumber = "5511999999999"; // Replace with actual phone number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all ${className}`}
      size="lg"
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Solicitar Orçamento via WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
