import { Link } from "react-router-dom";

interface ParticipantMapping {
  name: string;
  id: string;
}

export const participants: ParticipantMapping[] = [
  { name: "Ira", id: "ira" },
  { name: "Nastya's family", id: "nastya" },
  { name: "Janne & Ann-Katrin", id: "janne" },
  { name: "Marie's family", id: "marie" },
  { name: "Yongtao", id: "yongtao" },
  { name: "Alexander", id: "alexander" },
  { name: "Marcin & Miroslav", id: "marcin" },
  { name: "Dima & Ana", id: "dima" },
  { name: "Boris", id: "boris" },
  { name: "Carin & Jonny", id: "carin" },
  { name: "Fotografen Lena", id: "lena" },
  { name: "Liza & Mats", id: "couple" },
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