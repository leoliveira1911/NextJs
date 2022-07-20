import MenuItem from './MenuItem'
import { HomeIcon , SettingsIcon, BellIcon, LogoutIcon } from '../Icons'
import Logo from './Logo'

interface NavBarProps {

}

export default function NavBar(props:NavBarProps) {
    return (
        <aside className={`
        flex flex-col
      bg-gray-200 dark:text-gray-900
        dark:bg-gray-900 
        `}>
            <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 to-purple-500
            h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className='flex-grow'>
                <MenuItem url='/' text='Início' icon={HomeIcon}/>
                <MenuItem url='/settings' text='Settings' icon={SettingsIcon}/>
                <MenuItem url='/news' text='News' icon={BellIcon}/>
            </ul>
            <ul className=''>
                <MenuItem onClick={()=> console.log('logout')} text='Sair' icon={LogoutIcon}
                className={`
                text-red-600 dark:text-red-400
                hover:bg-red-400 hover:text-white dark:hover:text-white
                `}
                />                
            </ul>
        </aside>
    )
}