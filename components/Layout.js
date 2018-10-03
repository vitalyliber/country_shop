import Header from './Header'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>Торговый дом "ИП Моргунова"</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                  crossOrigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                    crossOrigin="anonymous"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                    crossOrigin="anonymous"/>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                    crossOrigin="anonymous"/>
        </Head>
        <Header />
        <div className="container">
            <br/>
            {props.children}
        </div>
        <br/>
        <div className="footer">
            <div className="text-center">
                <span className="text-muted">
                    Торговый дом "ИП Моргунова".
                </span>
            </div>
        </div>
    </div>
)

export default Layout