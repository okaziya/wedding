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
    return `hover:opacity-80 uppercase text-center ${isActive ? 'text-[#571E25]' : ''}`;
  };

  return (
    <div className="hidden md:block">
      <NavigationMenu className="font-[Merriweather] text-[#B14B57] font-bold text-[14px] w-full">
        <NavigationMenuList className="gap-6 justify-center w-full">
          <NavigationMenuItem className="text-center">
            <Link to="/" className={linkClasses("/")}>
              Welcome
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-center">
            <Link to="/vision" className={linkClasses("/vision")}>
              Vision & Mission
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-center">
            <Link to="/program" className={linkClasses("/program")}>
              Schedule
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-center">
            <NavigationMenuTrigger className={`hover:opacity-80 uppercase ${location.pathname.includes('/participants') ? 'text-[#571E25]' : ''}`}>
              Participants
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="fixed left-0 right-0 bg-[#FAF7F1]">
                <div className="p-6 flex justify-center">
                  <div className="flex justify-center gap-6">
                    <div className="w-[280px] text-center">
                      {participants.slice(0, Math.ceil(participants.length / 3)).map((participant) => {
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
                    <div className="w-[280px] text-center">
                      {participants.slice(Math.ceil(participants.length / 3), Math.ceil(2 * participants.length / 3)).map((participant) => {
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
                    <div className="w-[280px] text-center">
                      {participants.slice(Math.ceil(2 * participants.length / 3)).map((participant) => {
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
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-center">
            <Link to="/maps" className={linkClasses("/maps")}>
              Map
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-center">
            <Link to="/blog" className={linkClasses("/blog")}>
              Blog
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
