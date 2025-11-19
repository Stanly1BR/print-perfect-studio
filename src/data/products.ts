export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  category: string;
  details: {
    material: string;
    sizes: string[];
    finishing: string[];
    customization: string;
  };
  images: string[];
}

export const products: Product[] = [
  {
    id: "cartao-visita-premium",
    name: "Cartão de Visita Premium",
    image: "/placeholder.svg",
    price: "R$ 89,90",
    description: "Cartões de visita em papel couché de alta qualidade com acabamento sofisticado.",
    category: "Cartões",
    details: {
      material: "Papel Couché 300g",
      sizes: ["9x5cm (Padrão)", "8,5x5,5cm"],
      finishing: ["Laminação Fosca", "Laminação Brilho", "Verniz Localizado", "Hot Stamping"],
      customization: "Design personalizado incluído com até 2 revisões",
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "flyer-a5",
    name: "Flyer A5",
    image: "/placeholder.svg",
    price: "R$ 149,90",
    description: "Flyers em formato A5 com impressão colorida de alta resolução em ambos os lados.",
    category: "Flyers",
    details: {
      material: "Papel Couché 170g ou 210g",
      sizes: ["A5 (14,8x21cm)", "A6 (10,5x14,8cm)"],
      finishing: ["Sem acabamento", "Laminação", "Verniz UV"],
      customization: "Layout personalizado disponível",
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "banner-lona",
    name: "Banner em Lona",
    image: "/placeholder.svg",
    price: "R$ 45,00/m²",
    description: "Banners em lona resistente para uso interno e externo, com acabamento em ilhós.",
    category: "Banners",
    details: {
      material: "Lona Brilho 440g",
      sizes: ["Tamanhos personalizados", "Largura até 3,20m"],
      finishing: ["Ilhós nas bordas", "Bastão de madeira", "Cordão"],
      customization: "Arte desenvolvida gratuitamente para pedidos acima de 5m²",
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "adesivo-vinil",
    name: "Adesivo em Vinil",
    image: "/placeholder.svg",
    price: "R$ 35,00/m²",
    description: "Adesivos em vinil de alta qualidade para aplicação em diversas superfícies.",
    category: "Adesivos",
    details: {
      material: "Vinil Adesivo Premium",
      sizes: ["Tamanhos personalizados", "Largura até 1,40m"],
      finishing: ["Recorte eletrônico", "Aplicação", "Laminação"],
      customization: "Corte personalizado incluído",
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "pasta-catalogo",
    name: "Pasta Catálogo",
    image: "/placeholder.svg",
    price: "R$ 299,90",
    description: "Pasta catálogo com impressão personalizada, ideal para apresentações profissionais.",
    category: "Materiais Corporativos",
    details: {
      material: "Papel Triplex 350g",
      sizes: ["22x31cm (A4)", "23x32cm"],
      finishing: ["Laminação Brilho", "Laminação Fosca", "Verniz"],
      customization: "Design exclusivo com identidade visual da empresa",
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "cartaz-a3",
    name: "Cartaz A3",
    image: "/placeholder.svg",
    price: "R$ 199,90",
    description: "Cartazes em formato A3 com impressão de alta qualidade para divulgação e eventos.",
    category: "Cartazes",
    details: {
      material: "Papel Couché 170g ou 210g",
      sizes: ["A3 (29,7x42cm)", "A2 (42x59,4cm)"],
      finishing: ["Sem acabamento", "Laminação"],
      customization: "Layout profissional incluído",
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
];
