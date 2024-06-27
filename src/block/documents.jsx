export default function Documents(params) {
    return (
        <section id="document" className="documents">
            <div className="container">
                <h2 className="h2">документы</h2>
                <p className="documents_title">
                    для подачи на
                    оформление визы:
                </p>
                <ul>
                    <li>
                        Анкета Form2024 для заполнения.{" "}
                        <br />
                        
                        <a
                            download="Анкета2024.docx"
                            title="Анкета2024"
                            href={
                                process.env.PUBLIC_URL +
                                "documents/Опросник по Китаю.docx"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Бланк анкеты
                        </a>
                    </li>
                    <li>
                        Заграничный паспорт (оригинал){" "}
                        <div className="-dop flex_center">
                        &#63;
                        </div>
                        <br />

                        <span>
                            Срок действия не менее 6 мес. на
                            момент подачи документов в
                            Консульство, и имеющийминимум
                            две чистые страницы. В случае,
                            если получен новый, то старый
                            также предъявляется.
                            Оригинал+копия.
                        </span>
                    </li>
                    <li>
                    Фото в электронном виде цветные 2 штуки
                        <div className="-dop flex_center">
                        &#63;
                        </div>
                        <span>
                        Фото, цветное на белом фоне, без уголков и овала, размером 3.3 х 4.8 см.или 3,5 х 4,5 см, снимок должен быть четким, лицо располагается по центру
                        </span>{" "}
                        <br />
                        <a
                            download="Требования к фото.pdf"
                            title="Требования к фото"
                            href={
                                process.env.PUBLIC_URL +
                                "documents/требование_к_фото.pdf"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Требования к фото
                        </a>
                    </li>
                    <li>
                    	Для деловой визы - приглашение <br />
                        <a
                            download="Образец приглашение.docx"
                            title="Образец приглашения для визы М1 и М2"
                            href={
                                process.env.PUBLIC_URL +
                                "documents/Образец приглашение.docx"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Образец приглашения для визы М1 и М2
                        </a>
                        <br />
                        <a
                            download="Образец приглашение мульти.docx"
                            title="Образец приглашения для визы М"
                            href={
                                process.env.PUBLIC_URL +
                                "documents/Образец приглашение.docx"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Образец приглашения для визы М
                        </a>
                    </li>
                    <li>
                        Для деловой визы — копия лицензии
                        приглашающей организации <br />
                        <a
                            download="Образец лицензии.pdf"
                            title="Образец лицензии"
                            href={
                                process.env.PUBLIC_URL +
                                "documents/Образец лицензии.pdf"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           Образец лицензии
                        </a>
                    </li>
                    <li>
                    Для деловой визы -  справка с работы с указанием дохода 
                        <br />
                        <a download="Образец. Справка с работы.docx" title="Образец справки с работы" href={process.env.PUBLIC_URL +"documents/Образец. Справка с работы.docx" } target="_blank" rel="noopener noreferrer">
                        Образец справки с работы
                        </a>
                        <br />
                        <br />
                    Для туристической визы – справка с работы с указанием дохода или выписка из банка об остатке средств на счету (на момент получения выписки на счету должно быть не менее 300.000 рублей) 
                    
                    </li>
                    <li>
                        Копия заграничного паспорта
                        (разворот с фото) <br />
                    </li>
                    <li>
                        Копии выданных ранее виз в КНР (в
                        том числе из действующего паспорта){" "}
                        <br />
                    </li>
                    <li>
                        Копия гражданского паспорта (1 стр
                        (лицевая), 4-5, 6-7 (даже если
                        чистые), 18-19 стр) <br />
                    </li>
                    <li>
                        Для детей копия свидетельства о
                        рождении 
                        <div className="-dop flex_center">
                        &#63;
                        </div>
                        <br />
                        <span>
                            + копия согласия на выезд (если
                            требуется) + копии внутренних
                            паспортов (РФ) обоих родителей
                        </span>
                    </li>
                    
                </ul>
                <div className="documents_warning">
                        <h3>Внимание!</h3>
                        <p>
                            Консульство имеет право
                            потребовать дополнительные
                            документы для оформления
                            данных типов виз, поэтому при
                            оформлении рекомендуем
                            оставаться на связи с работником
                            Китайского Визового Центра.
                        </p>
                    </div>
            </div>
        </section>
    );
}
