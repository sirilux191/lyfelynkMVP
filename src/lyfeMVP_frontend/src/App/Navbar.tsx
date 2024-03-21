import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { ModeToggle } from '@/components/mode-toggle';

const Navbar = () => {
  // State for menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-muted">
      <div className="flex justify-between items-center py-4 px-8">
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <button className='p-2 border rounded-lg' onClick={handleMenuClick}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <img
            alt="Logo"
            className="h-6 w-6"
            src="/assets/LyfeLynk.png"
          />
          <p className="hidden md:block text-2xl font-semibold text-primary">
            LyfeLynk
          </p>
        </div>
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-background border-b shadow-sm
            ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <Link to="/App/Home" className="text-foreground my-2">
              Dashboard
            </Link>
            <Link to="/App/MyHealth" className="text-foreground my-2">
              My Health
            </Link>
            <Link to="/App/Marketplace" className="text-foreground my-2">
              Marketplace
            </Link>
            <Link to="/App/Profile" className="text-foreground my-2">
              Profile
            </Link>
          </div>
        </div>
        
        <div className="hidden md:block space-x-8">
          <Link to="/App/Home" className="text-foreground hover:text-primary my-2">
            Dashboard
          </Link>
          <Link to="/App/MyHealth" className="text-foreground hover:text-primary my-2">
            My Health
          </Link>
          <Link to="/App/Marketplace" className="text-foreground hover:text-primary my-2">
            Marketplace
          </Link>
          <Link to="/App/Profile" className="text-foreground hover:text-primary my-2">
            Profile
          </Link>
        </div>

        <div className="flex items-center">
          <ModeToggle/>
          <Avatar className="ml-4">
            <AvatarImage alt="John Lenon" src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <Button className="ml-4">
            Connect
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
