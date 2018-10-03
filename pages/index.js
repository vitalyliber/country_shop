import Layout from '../components/Layout.js'
import "../styles.scss"

const Index = () => (
    <Layout>
        <div className="card bg-dark text-white">
            <img
                className="card-img-top"
                src="/static/car.jpeg"
                alt="Card image cap"
            />
            <div className="card-img-overlay d-flex align-items-center">
                <div className="container text-center">
                    <h5 className="card-title">
                        Автомагазин в поселке Туртас
                        <br/>
                        Уватского района
                    </h5>
                    <p className="card-text d-none d-lg-block">
                        Большой выбор автозапчастей для отечественных и зарубежных автомобилей в продаже и под заказ.
                        <br/>
                        Список марок автомобилей, запчасти на которые вы можете приобрести -
                        ВАЗ, УАЗ, КАМАЗ и др.
                        <br/>
                        Предзаказ или вопросы по телефону: +7(34561)25-8-97
                    </p>
                    <p className="card-text">
                        <small>
                            Режим работы: с 9:00 до 20:00
                        </small>
                    </p>
                </div>

            </div>
        </div>
        <br/>
        <div className="card-deck">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Женская одежда</h5>
                    <p className="card-text">
                        Женская одежда всех размеров только от отечественных производителей.
                    </p>
                    <p className="card-text">
                        <small className="text-muted">
                            Режим работы: с 9:00 до 19:00
                        </small>
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Фото на документы</h5>
                    <p className="card-text">
                        Фотографии на документы, распечатка и ксерокопии
                    </p>
                    <p className="card-text">
                        <small className="text-muted">
                            График работы: с 9:00 до 19:00
                        </small>
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Спецодежда</h5>
                    <p className="card-text">
                        Рабочая одежда и обувь, а так же рыболовные принадлежности.
                    </p>
                    <p className="card-text">
                        <small className="text-muted">
                            График работы: с 9:00 до 19:00
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index