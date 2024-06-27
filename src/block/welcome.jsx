import LineContakt from "./lineContact";
import LineSpan from "./lineSpan";
import TabSlider from "./tabSlider";

export default function Welcome({setSli,setFos, setType}) {
    return (
        <section className="welcome">
           <LineSpan/>
            <div className="container">
                <h1 title="Китайский визовый центр в москве">
                    Китайский визовый центр в москве
                </h1>
                <div className="welcome_content">
                    <p className="welcome_hellow h2">
                        Визы{" "}
                        <span className="red">в китай</span>{" "}
                        <br />
                        <b className="ps">
                        с 2010 года
                        </b>
                        <span className="-imgHellow">
                        <img  src={process.env.PUBLIC_URL +"/img/welcome/1fon.jpg"} alt="Доспромечательности китая" />

                        </span>
                    </p>
                    <div className="welcome_udal">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/img/welcome/2fon.jpg"
                            }
                            alt="МоскваСити"
                        />
                        {/* <p>
                            Уважаемые заявители! Китайский{" "}
                            <br />
                            Визовый Центр продолжает свою
                            работу{" "}
                            <b>в удаленном режиме.</b>
                        </p> */}
                    </div>
                </div>
                <div className="welcome_ps_box flex_center">
                    <p className="welcome_ps_text ">
                        КВЦ оказывает помощь в подготовке
                        документов для дальнейшей подачи их
                        в Консульство КНР. <br />
                        <b>
                            Мы готовы сделать все
                            необходимое, чтобы клиент
                            получил официальное разрешение
                            на поездку в Китай.
                        </b>
                    </p>
                </div>

            </div>

            <TabSlider setSli={setSli}/>
            <LineContakt button={
                <button onClick={()=>{setFos(true); setType("заявка на Консультацию")}} className="linecontakt_fos flex_center buttons btn-1">
                <div className="spin"></div> <svg>
                                <rect
                                    x="0"
                                    y="0"
                                    fill="none"
                                    width="100%"
                                    height="100%"
                                />
                            </svg>
            <span>Консультация</span>
        </button>
           }/>
        </section>
    );
}
