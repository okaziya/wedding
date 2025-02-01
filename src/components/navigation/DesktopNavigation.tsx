import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { participants } from "./MenuItems";

export const DesktopNavigation = () => {
  return (
    <div className="hidden md:block">
      <NavigationMenu>
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
            <NavigationMenuTrigger className="text-sm font-medium">Participants</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {participants.map((participant) => (
                  <Link
                    key={participant.name}
                    to={`/participants/${participant.id}`}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    {participant.name}
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
