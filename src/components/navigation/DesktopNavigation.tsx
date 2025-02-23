
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { participants } from "./MenuItems";

export const DesktopNavigation = () => {
  const location = useLocation();
  const linkClasses = (path: string) => {
    const isActive = location.pathname === path || 
                    (path !== '/' && location.pathname.startsWith(path));
    return `hover:opacity-80 uppercase ${isActive ? 'text-[#571E25]' : ''}`;
  };

  return (
    <div className="hidden md:block">
      <NavigationMenu className="font-[Merriweather] text-[#B14B57] font-bold text-[14px] relative w-full">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <Link to="/" className={linkClasses("/")}>
              Welcome
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/vision" className={linkClasses("/vision")}>
              Vision & Mission
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/program" className={linkClasses("/program")}>
              Schedule
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className={`hover:opacity-80 uppercase ${location.pathname.includes('/participants') ? 'text-[#571E25]' : ''}`}>
              Participants
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-screen left-0">
              <div className="p-6 bg-[#FAF7F1] w-full">
                <div className="grid grid-cols-3 gap-8 max-w-screen-xl mx-auto">
                  {participants.map((participant) => {
                    const participantPath = `/participants/${participant.id}`;
                    return (
                      <Link
                        key={participant.name}
                        to={participantPath}
                        className={`block py-1.5 hover:opacity-80 ${
                          location.pathname === participantPath ? 'text-[#571E25]' : 'text-[#B14B57]'
                        }`}
                      >
                        {participant.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/maps" className={linkClasses("/maps")}>
              Map
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/blog" className={linkClasses("/blog")}>
              Blog
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
