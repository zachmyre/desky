import { Link } from 'react-router-dom';
import '../App.css';

interface LinkObj {
  className?: string;
  icon: string;
  name: string;
  href: string;
  onClick?: React.MouseEventHandler
}

const links: LinkObj[] = [
  { name: "Dashboard", href: "/", icon: "🏠" },
  { name: "JSON Formatter", href: "/json/formatter", icon: "💽" },
  { name: "HTML Editor", href: "/html/editor", icon: "🎨" } // Corrected href
];

const Sidebar: React.FC = () => {
  return (
    <ul className="Sidebar">
      {links?.map((link, index) => (
        <LinkElement
          className="Sidebar-link"
          icon={link.icon}
          key={index}
          name={link.name}
          href={link.href}
        />
      ))}
    </ul>
  );
}

const LinkElement: React.FC<LinkObj> = ({ className, name, href, icon, onClick }) => {
  return (
    <li className={className}>
      <Link to={href}>
        <p>{icon}</p>
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default Sidebar;
