import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import { Printer, Package, Zap, ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Gráfica <span className="text-primary">Express</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Impressão de alta qualidade para todos os seus projetos profissionais
          </p>
          <WhatsAppButton />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Printer className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Alta Qualidade</h3>
              <p className="text-sm text-muted-foreground">Impressão profissional em diversos materiais</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-sm text-muted-foreground">Prazos ágeis sem comprometer a qualidade</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Produtos Variados</h3>
              <p className="text-sm text-muted-foreground">Cartões, flyers, banners e muito mais</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Garantia</h3>
              <p className="text-sm text-muted-foreground">Satisfação garantida ou seu dinheiro de volta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Nossos Produtos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha entre uma ampla variedade de produtos gráficos de alta qualidade
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento personalizado em minutos
          </p>
          <WhatsAppButton />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-primary">Gráfica</span> <span className="text-accent">Express</span>
            </h3>
            <p className="text-muted-foreground">Qualidade e agilidade em cada impressão</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Gráfica Express. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
