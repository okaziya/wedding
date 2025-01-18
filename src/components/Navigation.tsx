import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const participants = [
    "Ira",
    "Nastya's family",
    "Janne & Ann-Katrin",
    "Marie's family",
    "Yongtao",
    "Alexander",
    "Marcin & Miroslav",
    "Dima & Ana",
    "Boris",
    "Carin & Jonny",
    "Fotografen Lena",
    "Liza & Mats",
  ];

  return (
    <div className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <NavigationMenu className="mx-auto max-w-screen-xl p-4">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <Link to="/" className="text-sm font-medium">
              Welcome
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/vision" className="text-sm font-medium">
              Vision and Mission
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/program" className="text-sm font-medium">
              Event Program
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm font-medium">
              Participants
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {participants.map((participant) => (
                  <Link
                    key={participant}
                    to={`/participants/${participant.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    {participant}
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/maps" className="text-sm font-medium">
              Maps
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/blog" className="text-sm font-medium">
              Blog
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};