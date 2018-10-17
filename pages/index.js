import Layout from '../components/Layout.js'
import "../styles.scss"

const Index = () => (
  <Layout>
    <div className="card top-card text-white">
        <img
            className="card-img-top"
            src="/static/background-img.jpg"
            alt="Card image cap"
        />
        <div className="card-img-overlay pt-5">
            <div className="container text-center h-100 d-flex flex-column">
                <div style={{ fontSize: '24px'}}>ИП Моргунова</div>
                <div className="d-flex align-items-center justify-content-center flex-column" style={{ flexGrow: 1 }}>
                    <h1 className="font-weight" style={{ fontSize: '74px'}}>АВТОМАГАЗИН</h1>
                    <h2 className="mt-2">в поселке Туртас Уватского района</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="pt-3" />
    <div className="container mt-5 mb-5 text-center">
      <p className="card-text text-center pt-5">
        Большой выбор автозапчастей для отечественных и зарубежных автомобилей в продаже и под заказ.
      </p>
      <p className="card-text pt-2">
        Список марок автомобилей, запчасти на которые вы можете приобрести -
        ВАЗ, УАЗ, КАМАЗ и др.
      </p>
      <p className="card-text pt-5">
        Предзаказ или вопросы по телефону:
      </p>
      <a href="tel:+73456125897" className="font-weight-bold">+7 (34561) 25-8-97</a>
    </div>
    <div className="pt-5" />
    <div className="pt-3" />

    <div className="row contacts mb-5" style={{ backgroundColor: '#3F4145'}}>
      <div className="col-12 col-md-6">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d77a3bcac829880e23a1c6cffe92d2012db5a3ae4f126a03046a894c6719093&amp;source=constructor"
          width="100%"
          height="100%"
          style={{ border: 'none', marginBottom: '0', minHeight: '400px' }}
        />
      </div>
      <div className="col-12 col-md-6">
          <div className="contacts d-flex flex-column justify-content-center align-items-center h-100 text-white">
            <div className="mb-5 text-28">
              <img src="/static/map_white.png" width={20}/>
              <span className="ml-3">п. Туртас, ул. Школьная, д. 3А</span>
            </div>
            <div>
              <div className="mb-3">
                <img src="/static/clock_white.png" width={20}/>
                <span className="ml-3">Ежедневно с 9.00 до 20.00</span>
              </div>
              <div className="mb-3">
                <img src="/static/email_white.png" width={20}/>
                <span className="ml-3">VOAturtas@yandex.ru</span>
              </div>
              <div className="mb-3">
                <img src="/static/phone_white_2.png" width={20}/>
                <span className="ml-3">Тел/факс: +7(34561)25-8-97</span>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="pt-3" />
    <div className="container">
      <div className="row pt-5 pb-5">
        <div className="col-12 col-md-4 text-center mb-3">
          <div className="card pt-5 pb-5 border-0 p-4 h-100 d-flex flex-column justify-content-between">
            <div>
              <div className="mb-5 font-weight-bold text-22">Женская одежда</div>
              <div className="mb-5">Женская одежда всех размеров только от отечественных производителей</div>
            </div>
            <div className="d-flex align-items-center justify-content-center text-18">
              <img src="/static/clock_black.png" width={20}/>
              <span className="ml-3">Ежедневно с 9.00 до 19.00</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center mb-3">
          <div className="card pt-5 pb-5 border-0 p-4 h-100 d-flex flex-column justify-content-between">
            <div>
              <div className="mb-5 font-weight-bold text-22">Фото на документы</div>
              <div className="mb-5">Фотографии на документы, распечатка и ксерокопии</div>
            </div>
            <div className="d-flex align-items-center justify-content-center text-18">
              <img src="/static/clock_black.png" width={20}/>
              <span className="ml-3">Ежедневно с 9.00 до 19.00</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center mb-3">
          <div className="card pt-5 pb-5 border-0 p-4 h-100 d-flex flex-column justify-content-between">
            <div>
              <div className="mb-5 font-weight-bold text-22">Спецодежда</div>
              <div className="mb-5">Рабочая одежда и обувь, а так же рыболовные принадлежности</div>
            </div>
            <div className="d-flex align-items-center justify-content-center text-18">
              <img src="/static/clock_black.png" width={20}/>
              <span className="ml-3">Ежедневно с 9.00 до 19.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-3" />
  </Layout>
)

export default Index
