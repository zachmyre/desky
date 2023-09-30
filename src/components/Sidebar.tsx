import '../App.css';

interface Link{
    className?: string;
    icon: string;
    name: string;
    href: string;
}

const links: Link[]= [
    {name: "Dashboard", href: "/", icon: "🏠"},
    {name: "JSON Formatter", href: "/json/formatter", icon: "💽"},
    {name: "HTML Editor", href: "html/editor", icon: "🎨"}
]

const Sidebar: React.FC = () => {
  return (
    <ul className="Sidebar">
      {links?.map((link, index) => (
        <LinkElement className="Sidebar-link" icon={link.icon} key={index} name={link.name} href={link.href} />
      ))}
    </ul>
  );
}

const LinkElement: React.FC<Link> = ({className, name, href, icon}) => {
    return (
        <li className={className}><a href={href}><p>{icon}</p> <p>{name}</p></a></li>
    )
}

export default Sidebar;
