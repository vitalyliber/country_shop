import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>Торговый дом &ldquo;ИП Моргунова&ldquo;</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta name="title" content="Автозапчасти в поселке Туртас" />
      <meta name="description" content="Большой выбор автозапчастей для отечественных и зарубежных автомобилей в продаже и под заказ в поселке Туртас Уватского района" />
    </Head>

    <div className="page-content">
      {props.children}
    </div>
    <div className="footer pl-4 pr-4">
        <div className="text-center">
            <span className="text-muted">
              {(new Date()).getFullYear()} Торговый дом &ldquo;ИП Моргунова&ldquo;.
            </span>
        </div>
    </div>
  </div>
)

export default Layout
