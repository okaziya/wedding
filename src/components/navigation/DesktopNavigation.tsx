
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
            <Link to="/" className="hover:opacity-80 uppercase">
              Welcome
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/vision" className="hover:opacity-80 uppercase">
              Vision & Mission
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/program" className="hover:opacity-80 uppercase">
              Schedule
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:opacity-80 uppercase">Participants</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[800px] p-6 bg-[#FAF7F1]">
                <div className="grid grid-cols-3 gap-8">
                  {participants.map((participant) => (
                    <Link
                      key={participant.name}
                      to={`/participants/${participant.id}`}
                      className="block py-1.5 hover:opacity-80"
                    >
                      {participant.name}
                    </Link>
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/maps" className="hover:opacity-80 uppercase">
              Map
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/blog" className="hover:opacity-80 uppercase">
              Blog
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
