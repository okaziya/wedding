
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
  const participantsByCategory = {
    family: participants.filter(p => p.category === "family"),
    friends: participants.filter(p => p.category === "friends"),
    couple: participants.filter(p => p.category === "couple"),
  };

  return (
    <div className="hidden md:block">
      <NavigationMenu className="font-[Merriweather] text-[#B14B57] font-bold text-[14px] uppercase">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <Link to="/" className="hover:opacity-80">
              Welcome
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/vision" className="hover:opacity-80">
              Vision & Mission
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/program" className="hover:opacity-80">
              Schedule
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:opacity-80">Participants</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[800px] p-6 bg-[#FAF7F1]">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="font-bold mb-2">FAMILY</div>
                    <div className="text-center mb-1">•••</div>
                    {participantsByCategory.family.map((participant) => (
                      <Link
                        key={participant.name}
                        to={`/participants/${participant.id}`}
                        className="block py-1.5 hover:opacity-80"
                      >
                        {participant.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <div className="font-bold mb-2">FRIENDS</div>
                    <div className="text-center mb-1">•••</div>
                    {participantsByCategory.friends.map((participant) => (
                      <Link
                        key={participant.name}
                        to={`/participants/${participant.id}`}
                        className="block py-1.5 hover:opacity-80"
                      >
                        {participant.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <div className="font-bold mb-2">COUPLE</div>
                    <div className="text-center mb-1">•••</div>
                    {participantsByCategory.couple.map((participant) => (
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
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/maps" className="hover:opacity-80">
              Map
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
