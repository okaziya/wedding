import { Link } from "react-router-dom";

export const participants = [
  "Ira",
  "Nastya's family",
  "Janne & Ann-Katrin",
  "Marie's family",
  "Yongtao",
  "Alexander",
  "Marcin & Miroslav",
  "Dima & Ana",
  "Boris",
  "Carin & Jonny",
  "Fotografen Lena",
  "Liza & Mats",
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
            key={participant}
            to={`/participants/${participant.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            className="block py-1.5 text-sm"
            onClick={onNavigate}
          >
            {participant}
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