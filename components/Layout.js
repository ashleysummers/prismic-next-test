import styles from './layout.module.css'
import GlobalMenu from './GlobalMenu'
import Footer from './Footer'

export default function Layout({ children }) {
    return (        
        <div className="container">
            <GlobalMenu />
            {children}
            <Footer />
        </div>
    )
}