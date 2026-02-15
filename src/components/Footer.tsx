import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 bg-secondary text-center border-t border-border">
    <div className="flex items-center justify-center gap-2 text-muted-foreground">
      <span>Feito com</span>
      <Heart className="w-4 h-4 text-primary fill-primary" />
      <span>para Maria & Murilo</span>
    </div>
    <p className="text-sm text-muted-foreground/60 mt-2">© 2026</p>
  </footer>
);

export default Footer;
