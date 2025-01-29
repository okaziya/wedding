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
  { name: "The Wedding Couple", id: "couple" },
  { name: "Wedding photographer Lena", id: "lena" },
];

interface MenuItemsProps {
  onNavigate?: () => void;
}

export const MenuItems = ({ onNavigate }: MenuItemsProps) => (
  <>
    <Link to="/" className="block py-2" onClick={onNavigate}>
      Welcome
    </Link>
    <Link to="/vision" className="block py-2" onClick={onNavigate}>
      Vision and Mission
    </Link>
    <Link to="/program" className="block py-2" onClick={onNavigate}>
      Event Program
    </Link>
    <div className="py-2">
      <div className="mb-2">Participants</div>
      <div className="pl-4">
        {participants.map((participant) => (
          <Link
            key={participant.name}
            to={`/participants/${participant.id}`}
            className="block py-1.5 text-sm"
            onClick={onNavigate}
          >
            {participant.name}
          </Link>
        ))}
      </div>
    </div>
    <Link to="/maps" className="block py-2" onClick={onNavigate}>
      Maps
    </Link>
    <Link to="/blog" className="block py-2" onClick={onNavigate}>
      Blog
    </Link>
  </>
);