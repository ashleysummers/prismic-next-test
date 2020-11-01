import styles from './layout.module.css'
import GlobalMenu from './GlobalMenu'

export default function Layout({ children }) {
    return (
        <div className="container">
            <GlobalMenu />
            {children}
        </div>
    )
}