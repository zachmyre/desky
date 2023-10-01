import { Link, useLocation } from 'react-router-dom';
import '../App.css';

interface LinkObj {
  className?: string;
  icon: Icon;
  name: string;
  description?: string;
  href: string;
}

interface Icon{
  iconClass: string;
  iconName: string;
}

const materialIconClass: string = "material-icons icon-margin";

export const links: LinkObj[] = [
  { name: "Dashboard", href: "/", icon: {iconClass: materialIconClass, iconName: "dashboard"} },
  { name: "JSON Formatter", description: "Format JSON Data" , href: "/json/formatter", icon: {iconClass: materialIconClass, iconName: "code"} },
  { name: "HTML Editor", description: "Spin up quick HTML/CSS demo" , href: "/html/editor", icon: {iconClass: materialIconClass, iconName: "widgets"} } // Corrected href
];


const Sidebar: React.FC = () => {  
  const location = useLocation();
  return (
    <ul className="Sidebar">
      <h4 className="Sidebar-title">Tools</h4>
      {links?.map((link, index) => (
        
        <LinkElement
          className={location.pathname === link.href ? 'Sidebar-link Sidebar-link-active' : 'Sidebar-link'}
          icon={{iconClass: link.icon.iconClass, iconName: link.icon.iconName}}
          key={index}
          name={link.name}
          href={link.href}
        />
      ))}
    </ul>
  );
}

const LinkElement: React.FC<LinkObj> = ({ className, name, href, icon }) => {
  return (
    <Link className={className} to={href}>
        <p className={icon.iconClass}>{icon.iconName}</p>
        <p>{name}</p>
    </Link>
  )
}

export default Sidebar;
