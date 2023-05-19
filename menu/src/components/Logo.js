import MenuItems from './MenuItems';
import { menuItems } from './data';

function Logo() {
    return (
        <nav>
        <ul className="menu">
            {menuItems.map((menu, index) => {
                return (
                     <MenuItems items={menu} key={index} />
                    
                )
            })
        }
            </ul>
            </nav>
    )
}

export default Logo;