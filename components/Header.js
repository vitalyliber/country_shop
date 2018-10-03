import Link from 'next/link'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container justify-content-center">
            <Link href="/">
                <a className="navbar-brand" href="#">ИП Моргунова</a>
            </Link>
        </div>
    </nav>
)

export default Header