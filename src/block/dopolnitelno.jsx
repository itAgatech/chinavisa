import { useState } from "react";

export default function Dopolnitelno({ setFos, setType }) {
    const [tab, settab] = useState(1);
    const [tab2, settab2] = useState(1);
    const [slid, setslid] = useState(1);
    return (
        <section id="dopolnitelno" className="dopolnitelno">
            <div className="container">
                <h2 className="h2">дополнительно</h2>
                <div className="dopolnitelno_container">
                    <div
                        className={
                            slid === 1
                                ? "dopolnitelno_listSlid active"
                                : "dopolnitelno_listSlid "
                        }
                    >
                        <div
                            onClick={() => setslid(1)}
                            className="dopolnitelno_listSlid_head"
                        >
                            <div className="dopolnitelno_listSlid_head_name">
                                <h3>Денежные переводы в КНР</h3>
                            </div>
                            <div className="dopolnitelno_listSlid_head_img">
                                <img
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/dopoln/7.svg"
                                    }
                                    alt="АПОСТИЛЬ"
                                />
                            </div>
                        </div>
                        <div className="dopolnitelno_listSlid_content ">
                            <div className="dopolnitelno_listSlid-bloc">
                                <div>
                                    <p className="dopolnitelno_content_item_content_text t14">
                                        <strong>Денежные переводы в КНР физическим и юридическим лицам</strong><br />
                                        Поможем провести платежи с Вашими контрагентами в КНР
                                    </p>
                                </div>
                                <div>
                                    <div className="dopolnitelno_content_item_content_text t14">
                                        <strong>Порядок оказания услуги:</strong><br /><br />
                                        <strong>Этап 1.</strong> Проверка Вашей компании комплаенсом банка-партнера (АО «Кредит Европа Банк РФ»), получение одобрения на совершение перевода.<br /><br />
                                        Необходимо предоставить следующие данные:<br />
                                        - ИНН<br />
                                        - коды ТНВЭД/услуги<br />
                                        - суммы платежей<br /><br />
                                        <strong>Этап 2.</strong> Заключение агентского договора и оплата услуг. <br /><br />
                                        Между Вами и финансовым агентом в Турции (компания ЛОРЕ ГЕМИДЖИЛИК ЛОДЖИСТИК ИЧВЕ ДЫШ ТИДЖАРЕТ АНОНИМ ШИРКЕТИ) подписывается агентский договор. 
                                        При необходимости составляется дополнительное соглашение к контракту с китайским контрагентом. <br /><br />
                                        Оплата проводится в рублях на счет финансового агента в АО "Кредит Европа Банк (Россия)". <br />
                                        Комиссия финансового агента за перевод денежных средств - 4%. <br />
                                        Конвертация валют по курсу финансового портала https://www.investing.com/. <br /><br />
                                        <strong>Этап 3.</strong>  Проведение платежа контрагенту клиента.<br />
                                        По факту совершения перевода клиенту предоставляется платежное поручение. <br />
                                        Срок: 1 сутки.<br /><br />
                                        Контакт для получения консультации по финансовой логистике: +7-903-570-53-42
                                    </div>
                                </div>
                            </div>
                            <button style={{width:"45%"}}
                                onClick={() => {
                                    setFos(true);
                                    setType(
                                        "Подать заявку на денежный перевод в КНР"
                                    );
                                }}
                                className="dopolnitelno_content_item_button flex_center btn-1"
                            >
                                <svg>
                                    <rect
                                        x="0"
                                        y="0"
                                        fill="none"
                                        width="100%"
                                        height="100%"
                                    />
                                </svg>
                                Подать заявку на денежный перевод в КНР
                            </button>
                        </div>
                    </div>
                    <div
                        className={
                            slid === 2
                                ? "dopolnitelno_listSlid active"
                                : "dopolnitelno_listSlid "
                        }
                    >
                        <div
                            onClick={() => setslid(2)}
                            className="dopolnitelno_listSlid_head"
                        >
                            <div className="dopolnitelno_listSlid_head_name">
                                <h3>АПОСТИЛЬ</h3>
                            </div>
                            <div className="dopolnitelno_listSlid_head_img">
                                <img
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/dopoln/1.png"
                                    }
                                    alt="АПОСТИЛЬ"
                                />
                            </div>
                        </div>
                        <div className="dopolnitelno_listSlid_content ">
                            <div className="dopolnitelno_listSlid-bloc">
                                <div>
                                    <span className="dopolnitelno_content_item_content-warning">
                                        Внимание!
                                    </span>
                                    <p className="dopolnitelno_content_item_content_text t14">
                                        С 7 ноября 2023 года
                                        в Китае (КНР)
                                        официально начал
                                        действовать
                                        Апостиль, как
                                        упрощённая форма
                                        легализации
                                        документов, так как
                                        КНР присоединилась к
                                        Гаагской конвенции
                                        об апостиле 1965 г.
                                    </p>
                                </div>

                                <div className="dopolnitelno_content_item_content_kub">
                                    <div>
                                        <p className="dopolnitelno_content_item_content_text-ap">
                                            8-10 дней
                                        </p>
                                        <p className="dopolnitelno_content_item_content_text-big">
                                            5 500 ₽
                                        </p>
                                    </div>
                                    <div>
                                        <p className="dopolnitelno_content_item_content_text-ap">
                                            4-5 дней
                                        </p>
                                        <p className="dopolnitelno_content_item_content_text-big">
                                            14 300 ₽
                                        </p>
                                    </div>
                                    <div>
                                        <p className="dopolnitelno_content_item_content_text-ap">
                                            Удостоверение
                                            копии у
                                            нотариуса
                                        </p>
                                        <p className="dopolnitelno_content_item_content_text-big">
                                            200 ₽
                                        </p>
                                    </div>
                                    <div>
                                        <p className="dopolnitelno_content_item_content_text-ap">
                                            Апостиль на
                                            оригинал диплома
                                            об образовании
                                            (Диплом +
                                            приложение)
                                            45-75 раб. дней
                                        </p>
                                        <p className="dopolnitelno_content_item_content_text-big">
                                            6 900 ₽
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="dopolnitelno_content_item_content_text t14">
                                        Необходимые
                                        документы: <br />
                                        <ul>
                                            <li>
                                                оригиналы
                                                образовательных
                                                документов
                                            </li>
                                            <li>
                                                нотариальная
                                                доверенность
                                                на нашего
                                                сотрудника
                                            </li>
                                            <li>
                                                нотариально
                                                удостоверенная
                                                копия
                                                паспорта
                                                владельца
                                                документов
                                            </li>
                                            <li>
                                                расписка
                                            </li>
                                            <li>
                                                *в случае
                                                смены
                                                фамилии-подтверждающий
                                                документ
                                                (например,
                                                свидетельство
                                                о заключении
                                                брака)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setFos(true);
                                    setType(
                                        "Подать заявку на апостиль"
                                    );
                                }}
                                className="dopolnitelno_content_item_button flex_center btn-1"
                            >
                                <svg>
                                    <rect
                                        x="0"
                                        y="0"
                                        fill="none"
                                        width="100%"
                                        height="100%"
                                    />
                                </svg>
                                Подать заявку на апостиль
                            </button>
                        </div>
                    </div>
                    <div
                        className={
                            slid === 3
                                ? "dopolnitelno_listSlid active"
                                : "dopolnitelno_listSlid"
                        }
                    >
                        <div
                            onClick={() => setslid(3)}
                            className="dopolnitelno_listSlid_head"
                        >
                            <div className="dopolnitelno_listSlid_head_name">
                                <h3>
                                    НОТАРИАЛЬНЫЙ <br />
                                    ПЕРЕВОД
                                </h3>
                            </div>
                            <div className="dopolnitelno_listSlid_head_img">
                                <img
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/dopoln/2.png"
                                    }
                                    alt="НОТАРИАЛЬНЫЙ
                                    ПЕРЕВОД"
                                />
                            </div>
                        </div>
                        <div className="dopolnitelno_listSlid_content ">
                            <div className="dopolnitelno_listSlid-bloc">
                                <div>
                                    <p className="dopolnitelno_content_item_content_text t14">
                                        Если вам нужен
                                        перевод с русского
                                        языка на китайский,
                                        Китайский Визовый
                                        Центр готов
                                        предоставить вам
                                        данные услуги. В
                                        нашем штате работают
                                        специалисты с
                                        высокими
                                        знаниями,которые
                                        смогут осуществить
                                        перевод текстов
                                        любой сложности и
                                        количества.
                                    </p>
                                    <p className="dopolnitelno_content_item_content_text t14">
                                        Наши сотрудники
                                        готовы оперативно
                                        ответить на все Ваши
                                        вопросы и оформить
                                        необходимые
                                        документы в
                                        кратчайшие сроки!
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setFos(true);
                                    setType(
                                        "Узнать стоимость перевода"
                                    );
                                }}
                                className="dopolnitelno_content_item_button flex_center btn-1"
                            >
                                <svg>
                                    <rect
                                        x="0"
                                        y="0"
                                        fill="none"
                                        width="100%"
                                        height="100%"
                                    />
                                </svg>
                                Узнать стоимость перевода
                            </button>
                        </div>
                    </div>
                    <div
                        className={
                            slid === 4
                                ? "dopolnitelno_listSlid active"
                                : "dopolnitelno_listSlid"
                        }
                    >
                        <div
                            onClick={() => setslid(4)}
                            className="dopolnitelno_listSlid_head"
                        >
                            <div className="dopolnitelno_listSlid_head_name">
                                <h3>
                                    СПРАВКА О НАЛИЧИИ/{" "}
                                    <br />
                                    ОТСУТСТВИИ СУДИМОСТИ
                                </h3>
                            </div>
                            <div className="dopolnitelno_listSlid_head_img">
                                <img
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/dopoln/3.png"
                                    }
                                    alt="СПРАВКа О НАЛИЧИИ/ОТСУТСТВИИ СУДИМОСТИ"
                                />
                            </div>
                        </div>
                        <div className="dopolnitelno_listSlid_content ">
                            <div className="dopolnitelno_listSlid-bloc">
                                <div>
                                    <p className="dopolnitelno_content_item_content_text t14">
                                        Власти КНР требуют
                                        от иностранных
                                        граждан предоставить
                                        справку об
                                        отсутствии/наличии
                                        судимости при подаче
                                        документов по самым
                                        различным поводам,
                                        чаще всего справка
                                        требуется при
                                        поступлении в
                                        китайский ВУЗ и при
                                        оформлении
                                        документов на
                                        рабочую визу.
                                    </p>
                                    <p className="dopolnitelno_content_item_content_text t14">
                                        Китайский визовый
                                        центр поможет Вам в
                                        оформлении справки!
                                    </p>
                                </div>
                                <div className="dopolnitelno_content_item_content_kub">
                                    <div>
                                        <p className="dopolnitelno_content_item_content_text-ap">
                                            3 рабочих дня
                                        </p>
                                        <p className="dopolnitelno_content_item_content_text-big">
                                            30 000 ₽
                                        </p>
                                    </div>
                                    <div>
                                        <p className="dopolnitelno_content_item_content_text-ap">
                                            5 рабочих дней
                                        </p>
                                        <p className="dopolnitelno_content_item_content_text-big">
                                            28 000 ₽
                                        </p>
                                    </div>
                                    <div>
                                        <p className="dopolnitelno_content_item_content_text-ap">
                                            7 рабочих дней
                                        </p>
                                        <p className="dopolnitelno_content_item_content_text-big">
                                            26 000 ₽
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setFos(true);
                                    setType(
                                        "СПРАВКа О НАЛИЧИИ/ОТСУТСТВИИ СУДИМОСТИ"
                                    );
                                }}
                                className="dopolnitelno_content_item_button flex_center btn-1"
                            >
                                {" "}
                                <svg>
                                    <rect
                                        x="0"
                                        y="0"
                                        fill="none"
                                        width="100%"
                                        height="100%"
                                    />
                                </svg>
                                Заказать справку
                            </button>
                        </div>
                    </div>
                    <div
                        className={
                            slid === 5
                                ? "dopolnitelno_listSlid active"
                                : "dopolnitelno_listSlid"
                        }
                    >
                        <div
                            onClick={() => setslid(5)}
                            className="dopolnitelno_listSlid_head"
                        >
                            <div className="dopolnitelno_listSlid_head_name">
                                <h3>услуги доставки</h3>
                            </div>
                            <div className="dopolnitelno_listSlid_head_img">
                                <img
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/dopoln/4.png"
                                    }
                                    alt="СПРАВКа О НАЛИЧИИ/ОТСУТСТВИИ СУДИМОСТИ"
                                />
                            </div>
                        </div>
                        <div className="dopolnitelno_listSlid_content ">
                            <div className="dopolnitelno_listSlid-bloc">
                                <p className="dopolnitelno_content_item_content_text t14">
                                    Уважаемые заявители! При
                                    оформлении заявки на
                                    визу в нашем Китайском
                                    Визовом Центре, Вы
                                    можете оперативно подать
                                    документы и оформить
                                    доставку, не приезжая к
                                    нам в офис.
                                </p>
                                <div>
                                    <div className="dopolnitelno_content_item_content_tab">
                                        <div
                                            onClick={() =>
                                                settab(1)
                                            }
                                            className={
                                                tab === 1
                                                    ? "dopolnitelno_content_item_content_tab_item active"
                                                    : "dopolnitelno_content_item_content_tab_item"
                                            }
                                        >
                                            Доставка по г.
                                            Москва <br /> (в
                                            пределах МКАДа)
                                        </div>
                                        <div
                                            onClick={() =>
                                                settab(2)
                                            }
                                            className={
                                                tab === 2
                                                    ? "dopolnitelno_content_item_content_tab_item active"
                                                    : "dopolnitelno_content_item_content_tab_item"
                                            }
                                        >
                                            Доставка <br />
                                            по России
                                        </div>
                                    </div>
                                    <div className="dopolnitelno_content_item_content_tab_elBOx">
                                        <div
                                            className={
                                                tab === 1
                                                    ? "dopolnitelno_content_item_content_tab_el  active"
                                                    : "dopolnitelno_content_item_content_tab_el  "
                                            }
                                        >
                                            <p className="dopolnitelno_content_item_content_text -l t14">
                                                Осуществляется
                                                день в день
                                                (с
                                                интервалом в
                                                4 часа), то
                                                есть как
                                                только Ваш
                                                паспорт
                                                готов после
                                                изготовления
                                                визы в
                                                Консульстве,
                                                мы можем
                                                отправить
                                                его курьером
                                                по
                                                указанному
                                                Вами адресу.
                                            </p>
                                            <br />
                                            <div className="dopolnitelno_content_item_content_kub -l">
                                                <div>
                                                    <p className="dopolnitelno_content_item_content_text-ap">
                                                        В
                                                        пределах
                                                        Третьего
                                                        Транспортного
                                                        Кольца
                                                    </p>
                                                    <p className="dopolnitelno_content_item_content_text-big">
                                                        450-550
                                                        ₽
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="dopolnitelno_content_item_content_text-ap">
                                                        В
                                                        пределах
                                                        МКАДа
                                                    </p>
                                                    <p className="dopolnitelno_content_item_content_text-big">
                                                        550-750
                                                        ₽
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="dopolnitelno_content_item_content_text-ap">
                                                        Менее
                                                        10
                                                        км
                                                        от
                                                        МКАД
                                                    </p>
                                                    <p className="dopolnitelno_content_item_content_text-big">
                                                        850-990
                                                        ₽
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="dopolnitelno_content_item_content_text-ap">
                                                        Более
                                                        10
                                                        км
                                                        от
                                                        МКАД
                                                    </p>
                                                    <p className="dopolnitelno_content_item_content_text-big">
                                                        Индивидуальный
                                                        расчет
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                tab === 2
                                                    ? "dopolnitelno_content_item_content_tab_el active"
                                                    : "dopolnitelno_content_item_content_tab_el"
                                            }
                                        >
                                            <p className="dopolnitelno_content_item_content_text t14">
                                                Сообщаем,
                                                что
                                                Китайский
                                                Визовый
                                                Центр
                                                осуществляет
                                                доставку
                                                документов
                                                по России.
                                            </p>
                                            <br />
                                            <p className="dopolnitelno_content_item_content_text t14">
                                                Для
                                                оформления
                                                визы из
                                                другого
                                                города,
                                                помимо
                                                Москвы, при
                                                подаче
                                                документов
                                                Вам
                                                необходимо
                                                сообщить:
                                                город
                                                местонахождения
                                                и желаемые
                                                сроки
                                                доставки.
                                            </p>
                                            <br />

                                            <p className="dopolnitelno_content_item_content_text t14">
                                                Наши
                                                сотрудники
                                                персонально
                                                для Вас
                                                рассчитают
                                                стоимость
                                                доставки с
                                                учетом Ваших
                                                условий и
                                                пожеланий!
                                                Для
                                                получения
                                                консультации
                                                и расчета
                                                стоимости
                                                доставки
                                                обращайтесь
                                                на почту{" "}
                                                <a
                                                title="Почта для связи и вопросов"
                                                    className="red"
                                                    href="mailto:visa@raspp.ru"
                                                >
                                                    visa@raspp.ru.{" "}
                                                </a>
                                            </p>
                                            <br />

                                            <p className="dopolnitelno_content_item_content_text t14">
                                                Наши
                                                сотрудники
                                                готовы
                                                оперативно
                                                ответить на
                                                все Ваши
                                                вопросы и
                                                оформить
                                                необходимые
                                                документы в
                                                кратчайшие
                                                сроки!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setFos(true);
                                    setType(
                                        "услуги доставки"
                                    );
                                }}
                                className="dopolnitelno_content_item_button flex_center btn-1"
                            >
                                {" "}
                                <svg>
                                    <rect
                                        x="0"
                                        y="0"
                                        fill="none"
                                        width="100%"
                                        height="100%"
                                    />
                                </svg>
                                Заказать доставку
                            </button>
                        </div>
                    </div>
                    <div
                        className={
                            slid === 6
                                ? "dopolnitelno_listSlid active"
                                : "dopolnitelno_listSlid"
                        }
                    >
                        <div
                            onClick={() => setslid(6)}
                            className="dopolnitelno_listSlid_head"
                        >
                            <div className="dopolnitelno_listSlid_head_name">
                                <h3>
                                    Нотариальное заверение{" "}
                                    <br /> подписи
                                    переводчика
                                </h3>
                            </div>
                            <div className="dopolnitelno_listSlid_head_img">
                                <img
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/dopoln/5.png"
                                    }
                                    alt="Нотариальное заверение подписи переводчика"
                                />
                            </div>
                        </div>
                        <div className="dopolnitelno_listSlid_content ">
                            <div className="dopolnitelno_listSlid-bloc">
                                <div>
                                    <p className="dopolnitelno_content_item_content_text-ap">
                                        1-2 рабочих дня
                                    </p>
                                    <p className="dopolnitelno_content_item_content_text-big">
                                        1100 рублей/1
                                        документ
                                    </p>
                                </div>
                                <div>
                                    <div className="dopolnitelno_content_item_content_text t14">
                                        Необходимые
                                        документы: <br />
                                        <ul>
                                            <li>
                                                то к чему
                                                будет подшит
                                                перевод
                                                (оригинал,
                                                нотариальная
                                                копия,
                                                скан-копия)
                                            </li>
                                            <li>
                                                готовый
                                                перевод
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setFos(true);
                                    setType(
                                        "НОТАРИАЛЬНОЕ ЗАВЕРЕНИЕ ПОДПИСИ ПЕРЕВОДЧИКА"
                                    );
                                }}
                                className="dopolnitelno_content_item_button flex_center btn-1"
                            >
                                {" "}
                                <svg>
                                    <rect
                                        x="0"
                                        y="0"
                                        fill="none"
                                        width="100%"
                                        height="100%"
                                    />
                                </svg>
                                Заказать
                            </button>
                        </div>
                    </div>
                    <div
                        className={
                            slid === 7
                                ? "dopolnitelno_listSlid active"
                                : "dopolnitelno_listSlid"
                        }
                    >
                        <div
                            onClick={() => setslid(7)}
                            className="dopolnitelno_listSlid_head"
                        >
                            <div className="dopolnitelno_listSlid_head_name">
                                <h3>
                                    Перевод личных
                                    документов
                                </h3>
                            </div>
                            <div className="dopolnitelno_listSlid_head_img">
                                <img
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/dopoln/6.png"
                                    }
                                    alt="Перевод личных документов"
                                />
                            </div>
                        </div>
                        <div className="dopolnitelno_listSlid_content ">
                            <div className="dopolnitelno_listSlid-bloc">
                                <div>
                                    <div className="dopolnitelno_content_item_content_tab">
                                        <div
                                            onClick={() =>
                                                settab2(1)
                                            }
                                            className={
                                                tab2 === 1
                                                    ? "dopolnitelno_content_item_content_tab_item active"
                                                    : "dopolnitelno_content_item_content_tab_item"
                                            }
                                        >
                                            Перевод с
                                            китайского на
                                            русский
                                        </div>
                                        <div
                                            onClick={() =>
                                                settab2(2)
                                            }
                                            className={
                                                tab2 === 2
                                                    ? "dopolnitelno_content_item_content_tab_item active"
                                                    : "dopolnitelno_content_item_content_tab_item"
                                            }
                                        >
                                            Перевод с
                                            русского на
                                            китайский
                                        </div>
                                    </div>
                                    <div className="dopolnitelno_content_item_content_tab_elBOx">
                                        <div
                                            className={
                                                tab2 === 1
                                                    ? "dopolnitelno_content_item_content_tab_el  active"
                                                    : "dopolnitelno_content_item_content_tab_el  "
                                            }
                                        >
                                            <div className="dopolnitelno_content_item_content_kub">
                                                <div>
                                                    <p className="dopolnitelno_content_item_content_text-ap">
                                                    Паспорт
                                                    </p>
                                                    <p className="dopolnitelno_content_item_content_text-big">
                                                    550 
                                                        ₽
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="dopolnitelno_content_item_content_text-ap">
                                                    Маленькие личные документы (меньше 1 страницы)
                                                    </p>
                                                    <p className="dopolnitelno_content_item_content_text-big">
                                                    1000 
                                                        ₽
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="dopolnitelno_content_item_content_text-ap">
                                                    Остальное 
                                                    </p>
                                                    <p className="dopolnitelno_content_item_content_text-big">
                                                    1200 
                                                        ₽
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                tab2 === 2
                                                    ? "dopolnitelno_content_item_content_tab_el active"
                                                    : "dopolnitelno_content_item_content_tab_el"
                                            }
                                        >
                                            <div className="-l">
                                                <p className="dopolnitelno_content_item_content_text -l t14">
                                                    Паспорт
                                                    (1
                                                    разворот
                                                    +
                                                    регистрация)/
                                                    Пенсионное
                                                    удостоверение/Диплом
                                                    без
                                                    приложения/Водительское
                                                    удостоверение/Аттестат
                                                    о
                                                    среднем
                                                    образовании
                                                    без
                                                    приложения:
                                                </p>
                                                <p className="dopolnitelno_content_item_content_text-big -l">
                                                    1100 ₽
                                                </p>
                                            </div>
                                            <br />
                                            <div className="-l">
                                                <p className="dopolnitelno_content_item_content_text -l t14">
                                                    Остальное:
                                                </p>
                                                <p className="dopolnitelno_content_item_content_text-big -l">
                                                    1300
                                                    ₽/1800
                                                    знаков
                                                </p>
                                            </div>
                                            <br />
                                            <div className="-l">
                                                <p className="dopolnitelno_content_item_content_text -l t14">
                                                    Сроки
                                                    исполнения
                                                    перевода
                                                    — 1
                                                    рабочий
                                                    день за
                                                    1
                                                    документ.
                                                </p>
                                            </div>
                                            <br />
                                            <div className="-l">
                                                <p className="dopolnitelno_content_item_content_text -l t14">
                                                    *Кроме
                                                    самого
                                                    документа
                                                    необходимо
                                                    сообщить
                                                    о
                                                    написании
                                                    имён
                                                    собственных
                                                    в
                                                    документе
                                                    (из
                                                    ранее
                                                    переведённых
                                                    документов,
                                                    визы,
                                                    миграционной
                                                    карты и
                                                    пр.). В
                                                    ином
                                                    случае
                                                    ФИО
                                                    пишется
                                                    на
                                                    усмотрение
                                                    переводчика.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setFos(true);
                                    setType(
                                        "НОТАРИАЛЬНОЕ ЗАВЕРЕНИЕ ПОДПИСИ ПЕРЕВОДЧИКА"
                                    );
                                }}
                                className="dopolnitelno_content_item_button flex_center btn-1"
                            >
                                {" "}
                                <svg>
                                    <rect
                                        x="0"
                                        y="0"
                                        fill="none"
                                        width="100%"
                                        height="100%"
                                    />
                                </svg>
                                Заказать
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}
