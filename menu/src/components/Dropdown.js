function Dropdown({ submenus }) {
    return (
        <ul className="dropdown">
            {submenus.map((submenu, index) =>
                <li className='menu-items' key={index}>
                    <a href={submenu.url}>{submenu.title}</a>
                </li>

            )}
        </ul>
    )
}

export default Dropdown;