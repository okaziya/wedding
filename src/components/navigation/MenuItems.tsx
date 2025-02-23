
import { Link } from "react-router-dom";

interface ParticipantMapping {
  name: string;
  id: string;
}

export const participants: ParticipantMapping[] = [
  { name: "Liza's mother Ira", id: "ira" },
  { name: "Liza's sister Nastya", id: "nastya" },
  { name: "Mats' father Janne", id: "janne" },
  { name: "Mats' mother Carin", id: "carin" },
  { name: "Mats' sister Marie", id: "marie" },
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
  const linkClasses = "block py-2 hover:opacity-80";
  
  if (variant === "mobile") {
    return (
      <>
        <Link to="/" className={linkClasses} onClick={onNavigate}>
          Welcome
        </Link>
        <Link to="/vision" className={linkClasses} onClick={onNavigate}>
          Vision and Mission
        </Link>
        <Link to="/program" className={linkClasses} onClick={onNavigate}>
          Event Program
        </Link>
        {participants.map((participant) => (
          <Link
            key={participant.name}
            to={`/participants/${participant.id}`}
            className="block py-1.5 hover:opacity-80"
            onClick={onNavigate}
          >
            {participant.name}
          </Link>
        ))}
        <Link to="/maps" className={linkClasses} onClick={onNavigate}>
          Maps
        </Link>
        <Link to="/blog" className={linkClasses} onClick={onNavigate}>
          Blog
        </Link>
      </>
    );
  }

  return (
    <>
      <Link to="/" className={linkClasses} onClick={onNavigate}>
        Welcome
      </Link>
      <Link to="/vision" className={linkClasses} onClick={onNavigate}>
        Vision and Mission
      </Link>
      <Link to="/program" className={linkClasses} onClick={onNavigate}>
        Event Program
      </Link>
      <div className="py-2">
        <div className="mb-2">Participants ...</div>
        <div className="pl-4">
          {participants.map((participant) => (
            <Link
              key={participant.name}
              to={`/participants/${participant.id}`}
              className="block py-1.5 text-sm hover:opacity-80"
              onClick={onNavigate}
            >
              {participant.name}
            </Link>
          ))}
        </div>
      </div>
      <Link to="/maps" className={linkClasses} onClick={onNavigate}>
        Maps
      </Link>
      <Link to="/blog" className={linkClasses} onClick={onNavigate}>
        Blog
      </Link>
    </>
  );
};
