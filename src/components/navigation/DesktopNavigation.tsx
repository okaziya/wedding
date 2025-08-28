import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
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
    const isActive = location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
    return `hover:opacity-80 uppercase text-center ${isActive ? "text-[#571E25]" : ""}`;
  };

  return (
    <div className="hidden md:block w-full">
      <div className="flex justify-center items-center w-full">
        <NavigationMenu className="font-[Merriweather] text-[#B14B57] font-bold text-[14px] w-full">
          <NavigationMenuList className="gap-8 justify-center w-full">
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
              <Link to="/schedule" className={linkClasses("/schedule")}>
                Schedule
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`hover:opacity-80 uppercase bg-transparent font-bold ${location.pathname.includes("/participants") ? "text-[#571E25]" : ""}`}
              >
                Participants
                <ChevronDown
                  className={`w-5 h-5 ml-1  ${location.pathname.includes("/participants") ? "text-[#571E25]" : "text - [#B14B57]"}`}
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="fixed left-0 right-0 bg-[#FAF7F1] shadow-lg">
                  <div className="p-6 w-full">
                    <div className="flex justify-center gap-4 lg:gap-6">
                      <div className="flex-1 max-w-[280px] min-w-0 text-center">
                        {participants.slice(0, 5).map((participant) => {
                          if (participant.id === "couple") {
                            return (
                              <Link
                                key={participant.name}
                                to={`/participants/${participant.id}`}
                                className={`block w-full h-12 leading-[48px] text-base truncate hover:opacity-80 ${
                                  location.pathname === `/participants/${participant.id}`
                                    ? "text-[#571E25]"
                                    : "text-[#B14B57]"
                                }`}
                              >
                                {participant.name}
                              </Link>
                            );
                          }
                          return (
                            <div
                              key={participant.name}
                              className="block w-full h-12 leading-[48px] text-base truncate text-gray-400 cursor-not-allowed"
                            >
                              {participant.name}
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex-1 max-w-[280px] min-w-0 text-center">
                        {participants.slice(5, 9).map((participant) => {
                          if (participant.id === "couple") {
                            return (
                              <Link
                                key={participant.name}
                                to={`/participants/${participant.id}`}
                                className={`block w-full h-12 leading-[48px] text-base truncate hover:opacity-80 ${
                                  location.pathname === `/participants/${participant.id}`
                                    ? "text-[#571E25]"
                                    : "text-[#B14B57]"
                                }`}
                              >
                                {participant.name}
                              </Link>
                            );
                          }
                          return (
                            <div
                              key={participant.name}
                              className="block w-full h-12 leading-[48px] text-base truncate text-gray-400 cursor-not-allowed"
                            >
                              {participant.name}
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex-1 max-w-[280px] min-w-0 text-center">
                        {participants.slice(9).map((participant) => {
                          if (participant.id === "couple") {
                            return (
                              <Link
                                key={participant.name}
                                to={`/participants/${participant.id}`}
                                className={`block w-full h-12 leading-[48px] text-base truncate hover:opacity-80 ${
                                  location.pathname === `/participants/${participant.id}`
                                    ? "text-[#571E25]"
                                    : "text-[#B14B57]"
                                }`}
                              >
                                {participant.name}
                              </Link>
                            );
                          }
                          return (
                            <div
                              key={participant.name}
                              className="block w-full h-12 leading-[48px] text-base truncate text-gray-400 cursor-not-allowed"
                            >
                              {participant.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="text-center">
              <Link to="/map" className={linkClasses("/map")}>
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
    </div>
  );
};
