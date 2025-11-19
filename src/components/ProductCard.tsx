import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
}

const ProductCard = ({ id, name, image, price, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{description}</p>
        <p className="text-primary font-bold text-xl">
          A partir de <span className="text-2xl">{price}</span>
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/produto/${id}`} className="w-full">
          <Button className="w-full" variant="outline">
            Ver Detalhes
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
