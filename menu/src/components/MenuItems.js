import Dropdown from './Dropdown';

function MenuItems ({items}) {
    return(
        <li className='menu-items'>
            {items.submenu ? (
                <>
                  <button type="button">
                    {items.title}
                  </button>
                  <Dropdown submenus={items.submenu} />

                </>
            ) : (
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    )

}

export default MenuItems;