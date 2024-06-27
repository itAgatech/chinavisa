import { useEffect, useState } from "react";

export default function Kontakts(params) {
    const [load, setload] = useState(false);
    const first = [54.29221, 48.277682];
    const mapState = {
        center: [54.29221, 48.277682],
        zoom: 17,
    };

    useEffect(() => {
        const onPageLoad = () => {
            setload(true);
        };

        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener(
                "load",
                onPageLoad,
                false
            );
            return () =>
                window.removeEventListener(
                    "load",
                    onPageLoad
                );
        }
    }, []);

    return (
        <section id="kontakts" className="kontakts">
            <div className="container">
                <div className="kontakts_content">
                    <h2 className="h2">контакты</h2>
                    <div className="kontakts_content_content">
                        <div
                            itemscope
                            itemtype="https://schema.org/LocalBusiness"
                            className="kontakts_content_text"
                        >
                            <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress" className="kontakts_content_minBox">
                                <img
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/loc.png"
                                    }
                                    alt="Адрес"
                                />
                                <div
                                    
                                >
                                    <a
                                        target="_blank"
                                        href="https://yandex.ru/map-widget/v1/?um=constructor%3A21bd332d67592c50e318d31fc319b36d02fe82113f0a63432fd86034554f8b62&amp;source=constructor"
                                        className="t20"
                                        title="Наш офис"
                                    >
                                        <b className="red">
                                            Адрес
                                        </b>{" "}
                                        главного офиса в{" "}
                                        <span itemprop="addressLocality">
                                            г. Москва
                                        </span>{" "}
                                        для подачи
                                        оригиналов
                                        документов:
                                    </a>
                                    <p className="t14">
                                        <span itemprop="streetAddress">
                                            Пресненская наб.
                                            8с1, <br />
                                            МФК “Город
                                            Столиц”, Башня
                                            Москва,
                                        </span>
                                        <br />
                                        (м. Деловой Центр,
                                        Выставочная,
                                        выход2).
                                        <br />
                                    </p>
                                    <p className="t14">
                                        Парковка в здании ТЦ
                                        Афимолл. Удобнее
                                        всего будет сектор С
                                        и левый от шлагбаума
                                        лифт
                                    </p>
                                </div>
                            </div>
                            <div className="kontakts_content_minBox">
                                <img
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/time.png"
                                    }
                                    alt="Время работы"
                                />
                                <div>
                                    <p className="t20">
                                        <b className="red">
                                            Время
                                        </b>{" "}
                                        работы{" "}
                                        <span itemprop="name" defaultValue={"Китайский визовый центер"}>
                                            Китайского
                                            Визового Центра
                                        </span>
                                        :
                                    </p>
                                    <p className="t14">
                                        <span
                                            itemprop="openingHours"
                                            content="Mo-Fr 09:00-18:00"
                                        >
                                            С понедельника
                                            по пятницу:
                                            <br /> с 9.00 до
                                            18.00
                                        </span>{" "}
                                        <br />
                                        (без перерыва на
                                        обед)
                                        <br />
                                        Суббота и
                                        воскресенье:
                                        выходные дни
                                        <br />
                                    </p>
                                </div>
                            </div>
                            <div className="kontakts_content_minBox">
                                <a
                                    title="Связаться с нами по телефону"
                                    href="tel:+79671588837"
                                >
                                    <img
                                        src={
                                            process.env
                                                .PUBLIC_URL +
                                            "/img/tel.png"
                                        }
                                        alt="+79671588837"
                                    />
                                </a>
                                <div>
                                    <a
                                        title="Связаться с нами по телефону"
                                        className="t14"
                                        href="tel:+79671588837"
                                    >
                                        <span
                                            itemprop="telephone"
                                            content="+79671588837"
                                        >
                                            +7 967-158-88-37
                                        </span>
                                    </a>
                                </div>
                            </div>
                           
                            <div className="kontakts_content_minBox">
                                <img
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/mail.png"
                                    }
                                    alt="Адрес"
                                />
                                <div>
                                    <a
                                        title="Связаться с нами по почте"
                                        className="t14"
                                        href="mailto:visa@raspp.ru"
                                        itemprop="email"
                                    >
                                        visa@raspp.ru
                                    </a>{" "}
                                    <br />
                                    <p className="t14 -min">
                                        для отправки
                                        документов
                                    </p>
                                </div>
                            </div>
                           
                        </div>
                        {load && (
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab36e064321421d3d04dc9c3316c8e23d058a0d8e927dd6624fc08d5edaf7ffa3&amp;source=constructor"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
