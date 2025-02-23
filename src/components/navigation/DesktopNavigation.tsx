
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
      <NavigationMenu className="font-[Merriweather] text-[#B14B57] font-bold text-[14px]">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <Link to="/" className="hover:opacity-80">
              Welcome
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/vision" className="hover:opacity-80">
              Vision and Mission
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/program" className="hover:opacity-80">
              Event Program
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:opacity-80">Participants ...</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-[#FAF7F1]">
                {participants.map((participant) => (
                  <Link
                    key={participant.name}
                    to={`/participants/${participant.id}`}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:opacity-80"
                  >
                    {participant.name}
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/maps" className="hover:opacity-80">
              Maps
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/blog" className="hover:opacity-80">
              Blog
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
