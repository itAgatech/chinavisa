import { useEffect, useState } from "react";
import katalogInfo from "../data/slider.json";

export default function PopapType({
    popupType,
    setPopupType,
    type,
}) {
    const [chi, setchi] = useState(1);
    useEffect(() => {
        if (popupType) {
            document
                .querySelector("body")
                .classList.add("bodyBloc");
        } else {
            document
                .querySelector("body")
                .classList.remove("bodyBloc");
        }
    }, [popupType]);

    return (
        <section
            className={
                popupType ? "popapType active" : "popapType"
            }
        >
            <div className="container">
                <div
                    data-logo={katalogInfo[type].logo}
                    className="popapType_title flex_center"
                >
                    <h2>
                        ПОРЯДОК ОФОРМЛЕНИЯ
                        <br />
                        {katalogInfo[type].button}
                    </h2>
                    <p className="popapType_ps">
                        пошаговая инструкция
                    </p>
                    <div className="popapType_cheked">
                        <span
                            onClick={() => setchi(1)}
                            className={
                                chi === 1 ? "active" : ""
                            }
                        >
                            1
                        </span>
                        <span
                            onClick={() => setchi(2)}
                            className={
                                chi === 2 ? "active" : ""
                            }
                        >
                            2
                        </span>
                        <span
                            onClick={() => setchi(3)}
                            className={
                                chi === 3 ? "active" : ""
                            }
                        >
                            3
                        </span>
                    </div>
                </div>
                <div className="popapType_content">
                    <div
                        className={
                            chi === 1
                                ? "popapType_content_van active"
                                : "popapType_content_van"
                        }
                    >
                        <p className="popapType_content_van_mail">
                            На почту <br />
                            <a title="Наша почта для связи" href="mailto:visa@raspp.ru ">
                                visa@raspp.ru{" "}
                            </a>{" "}
                            <br />
                            прислать:
                        </p>
                        <ul className="popapType_content_ul">
                            <li>
                                Заполненный опросный лист
                                для <br /> оформления визы{" "}
                                <br />
                                <a
                                    download="Опросник по Китаю.docx"
                                    title="Опросник по Китаю"
                                    className="popapType_content_a"
                                    href={
                                        process.env
                                            .PUBLIC_URL +
                                        "documents/Опросник по Китаю.docx"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Скачать опросный лист
                                </a>
                                <a
                                    download="Пример опросника по Китаю.docx"
                                    title="Пример опросника по Китаю"
                                    className="popapType_content_a"
                                    href={
                                        process.env
                                            .PUBLIC_URL +
                                        "documents/Пример опросника по Китаю.docx"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Скачать пример опросного листа
                                </a>
                            </li>
                            <li>
                                Скан внутреннего российского
                                паспорта{" "}
                                <div className="-dop flex_center">
                                    &#63;
                                </div>
                                <span>
                                    1 стр (лицевая), 4-5,
                                    6-7 (даже если чистые),
                                    18-19 стр
                                </span>
                            </li>
                            <li>
                                Фото в электронном виде{" "}
                                <br />
                                <a
                                    download="Требования к фото.pdf"
                                    title="Требования к фото"
                                    className="popapType_content_a"
                                    href={
                                        process.env
                                            .PUBLIC_URL +
                                        "documents/требование_к_фото.pdf"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Требования к фото
                                </a>
                            </li>
                            {katalogInfo[type].treb &&
                                katalogInfo[
                                    type
                                ].treb.map((e, i) => (
                                    <li
                                        key={i}
                                        dangerouslySetInnerHTML={{
                                            __html: e,
                                        }}
                                    ></li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className={
                            chi === 2
                                ? "popapType_content_tu active"
                                : "popapType_content_tu"
                        }
                    >
                        <p>
                            Дождаться ответного письма с
                            уведомлением <br />
                            <b>
                                об одобрении и принятии
                                документов консулом
                            </b>
                        </p>
                    </div>
                    <div
                        className={
                            chi === 3
                                ? "popapType_content_tru active"
                                : "popapType_content_tru"
                        }
                    >
                        <p className="popapType_content_van_mail">
                            Подать оригиналы <br />{" "}
                            документов
                        </p>
                        <ul className="popapType_content_ul">
                            <li>
                                Заграничный паспорт
                                <div className="-dop flex_center">
                                    &#63;
                                </div>
                                <span>
                                    Срок действия не менее 6
                                    мес. на момент подачи
                                    документов в
                                    Консульство, и
                                    имеющийминимум две
                                    чистые страницы. В
                                    случае, если получен
                                    новый, то старый также
                                    предъявляется.
                                    Оригинал+копия.
                                </span>
                            </li>
                            {/* <li>
                                Фото в бумажном виде цветные
                                2 штуки
                                <div className="-dop flex_center">
                                    &#63;
                                </div>
                                <span>
                                    Фото, цветное на белом
                                    фоне, без уголков и
                                    овала, размером 3.3 х
                                    4.8 см.или 3,5 х 4,5 см,
                                    снимок должен быть
                                    четким, лицо
                                    располагается по центру
                                </span>
                                <a
                                    download="Требования к фото.pdf"
                                    title="Требования к фото"
                                    className="popapType_content_a"
                                    href={
                                        process.env
                                            .PUBLIC_URL +
                                        "documents/требование_к_фото.pdf"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Требования к фото
                                </a>
                            </li> */}
                            <li>
                                Для детей копия
                                свидетельства о рождении{" "}
                                <div className="-dop flex_center">
                                    &#63;
                                </div>
                                <span>
                                    + копия согласия на
                                    выезд (если требуется) +
                                    копии внутренних
                                    паспортов (РФ) обоих
                                    родителей
                                </span>
                                <br />
                            </li>
                            <li>
                                Оплата наличными / переводом{" "}
                                <div className="-dop flex_center">
                                    &#63;
                                </div>
                                <span>
                                    Также доступна оплата по
                                    реквизитам юридического
                                    лица
                                </span>
                            </li>
                            {/* <li>
                                Справка с места работы с указанием дохода или выписка из банка об остатке средств на счету{" "}
                                <div className="-dop flex_center">
                                    &#63;
                                </div>
                                <span>
                                    На момент получения выписки на счету должно быть не менее 300.000 рублей
                                </span>
                                <br />
                                <a
                                    download="Образец. Справка с работы.docx"
                                    title="Справка с работы"
                                    className="popapType_content_a"
                                    href={
                                        process.env
                                            .PUBLIC_URL +
                                        "documents/Образец. Справка с работы.docx"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Образец Справки с работы
                                </a>
                            </li> */}
                            
                            {katalogInfo[type].trebDocs &&
                                katalogInfo[
                                    type
                                ].trebDocs.map((e, i) => (
                                    <li
                                        key={i}
                                        dangerouslySetInnerHTML={{
                                            __html: e,
                                        }}
                                    ></li>
                                ))}
                        </ul>
                        <div className="popapType_worning">
                            <h3>Внимание!</h3>
                            <p>
                                Консульство имеет право
                                потребовать дополнительные
                                документы для оформления
                                данных типов виз, поэтому
                                при оформлении рекомендуем
                                оставаться на связи с
                                работником Китайского
                                Визового Центра.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={() => setPopupType(!popupType)}
                className="popapType_close"
            ></div>
        </section>
    );
}
