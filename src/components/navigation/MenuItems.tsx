
import { Link } from "react-router-dom";

interface ParticipantMapping {
  name: string;
  id: string;
  category: "family" | "friends" | "couple";
}

export const participants: ParticipantMapping[] = [
  { name: "LIZA'S MOTHER IRA", id: "ira", category: "family" },
  { name: "MATS' MOTHER CARIN", id: "carin", category: "family" },
  { name: "MATS' FATHER JANNE", id: "janne", category: "family" },
  { name: "MATS' SISTER MARIE", id: "marie", category: "family" },
  { name: "LIZA'S SISTER NASTYA", id: "nastya", category: "family" },
  { name: "LIZA'S FRIEND DIMA", id: "dima", category: "friends" },
  { name: "LIZA'S FRIEND ALEXANDER", id: "alexander", category: "friends" },
  { name: "LIZA'S FRIEND BORIS", id: "boris", category: "friends" },
  { name: "LIZA'S FRIEND MARCIN", id: "marcin", category: "friends" },
  { name: "MATS' FRIEND YONGTAO", id: "yongtao", category: "friends" },
  { name: "MATS' FRIEND JENNIE", id: "jennie", category: "friends" },
  { name: "WEDDING COUPLE, LIZA+MATS", id: "couple", category: "couple" },
  { name: "PHOTOGRAPHER LENA", id: "lena", category: "couple" },
];

interface MenuItemsProps {
  onNavigate?: () => void;
  variant?: "mobile" | "desktop";
}

export const MenuItems = ({ onNavigate, variant = "desktop" }: MenuItemsProps) => {
  const linkClasses = "block py-2 hover:opacity-80";
  const participantsByCategory = {
    family: participants.filter(p => p.category === "family"),
    friends: participants.filter(p => p.category === "friends"),
    couple: participants.filter(p => p.category === "couple"),
  };
  
  if (variant === "mobile") {
    return (
      <>
        <Link to="/" className={linkClasses} onClick={onNavigate}>
          WELCOME
        </Link>
        <Link to="/vision" className={linkClasses} onClick={onNavigate}>
          VISION & MISSION
        </Link>
        <Link to="/program" className={linkClasses} onClick={onNavigate}>
          SCHEDULE
        </Link>
        
        <div className="py-2">
          <div className="mb-2">PARTICIPANTS – FAMILY</div>
          <div className="text-center mb-1">•••</div>
          <div className="pl-4">
            {participantsByCategory.family.map((participant) => (
              <Link
                key={participant.name}
                to={`/participants/${participant.id}`}
                className="block py-1.5 hover:opacity-80"
                onClick={onNavigate}
              >
                {participant.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="py-2">
          <div className="mb-2">PARTICIPANTS – FRIENDS</div>
          <div className="text-center mb-1">•••</div>
          <div className="pl-4">
            {participantsByCategory.friends.map((participant) => (
              <Link
                key={participant.name}
                to={`/participants/${participant.id}`}
                className="block py-1.5 hover:opacity-80"
                onClick={onNavigate}
              >
                {participant.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="py-2">
          <div className="mb-2">PARTICIPANTS – COUPLE</div>
          <div className="text-center mb-1">•••</div>
          <div className="pl-4">
            {participantsByCategory.couple.map((participant) => (
              <Link
                key={participant.name}
                to={`/participants/${participant.id}`}
                className="block py-1.5 hover:opacity-80"
                onClick={onNavigate}
              >
                {participant.name}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/maps" className={linkClasses} onClick={onNavigate}>
          MAP
        </Link>
        <Link to="/blog" className={linkClasses} onClick={onNavigate}>
          BLOG
        </Link>
      </>
    );
  }

  return (
    <>
      <Link to="/" className={linkClasses} onClick={onNavigate}>
        WELCOME
      </Link>
      <Link to="/vision" className={linkClasses} onClick={onNavigate}>
        VISION & MISSION
      </Link>
      <Link to="/program" className={linkClasses} onClick={onNavigate}>
        SCHEDULE
      </Link>
      <div className="py-2">
        <div className="mb-2">PARTICIPANTS</div>
      </div>
      <Link to="/maps" className={linkClasses} onClick={onNavigate}>
        MAP
      </Link>
      <Link to="/blog" className={linkClasses} onClick={onNavigate}>
        BLOG
      </Link>
    </>
  );
};
