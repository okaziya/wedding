import { Link, useLocation } from "react-router-dom";

interface ParticipantMapping {
  name: string;
  id: string;
}

export const participants: ParticipantMapping[] = [
  { name: "Liza's mother Ira", id: "ira" },
  { name: "Mats' mother Carin", id: "carin" },
  { name: "Mats' father Janne", id: "janne" },
  { name: "Mats' sister Marie", id: "marie" },
  { name: "Liza's sister Nastya", id: "nastya" },
  { name: "Liza's friend Dima", id: "dima" },
  { name: "Liza's friend Alexander", id: "alexander" },
  { name: "Liza's friend Boris", id: "boris" },
  { name: "Liza's friend Marcin", id: "marcin" },
  { name: "Mats' friend Yongtao", id: "yongtao" },
  { name: "Mats' friend Jennie", id: "jennie" },
  { name: "Wedding Couple, Liza+Mats", id: "couple" },
  { name: "Photographer Lena", id: "lena" },
];

interface MenuItemsProps {
  onNavigate?: () => void;
  variant?: "mobile" | "desktop";
}

export const MenuItems = ({ onNavigate, variant = "desktop" }: MenuItemsProps) => {
  const location = useLocation();
  const linkClasses = (path: string) => {
    const isActive = location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
    return `block py-2 hover:opacity-80 ${isActive ? "text-[#571E25]" : ""}`;
  };

  if (variant === "mobile") {
    return (
      <>
        <Link to="/" className={linkClasses("/")} onClick={onNavigate}>
          WELCOME
        </Link>
        <Link to="/vision" className={linkClasses("/vision")} onClick={onNavigate}>
          VISION & MISSION
        </Link>
        <Link to="/program" className={linkClasses("/program")} onClick={onNavigate}>
          SCHEDULE
        </Link>
        <div className="py-2">
          <div className="mb-2 uppercase">Participants</div>
          <div className="pl-4">
            {participants.map((participant) => {
              const participantPath = `/participants/${participant.id}`;
              return (
                <Link
                  key={participant.name}
                  to={participantPath}
                  className={`block py-1.5 hover:opacity-80 ${
                    location.pathname === participantPath ? "text-[#571E25]" : "text-[#B14B57]"
                  }`}
                  onClick={onNavigate}
                >
                  {participant.name}
                </Link>
              );
            })}
          </div>
        </div>
        <Link to="/map" className={linkClasses("/map")} onClick={onNavigate}>
          MAP
        </Link>
        <Link to="/blog" className={linkClasses("/blog")} onClick={onNavigate}>
          BLOG
        </Link>
      </>
    );
  }

  return (
    <>
      <Link to="/" className={linkClasses("/")} onClick={onNavigate}>
        WELCOME
      </Link>
      <Link to="/vision" className={linkClasses("/vision")} onClick={onNavigate}>
        VISION & MISSION
      </Link>
      <Link to="/program" className={linkClasses("/program")} onClick={onNavigate}>
        SCHEDULE
      </Link>
      <Link to="/map" className={linkClasses("/map")} onClick={onNavigate}>
        MAP
      </Link>
      <Link to="/blog" className={linkClasses("/blog")} onClick={onNavigate}>
        BLOG
      </Link>
    </>
  );
};
