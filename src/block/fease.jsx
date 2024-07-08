import LineContakt from "./lineContact";


export default function Fease({setFos, setType}) {
    
    return(
        <section title="Панорамный вид на Гуанчжоу" className="fease">
            <div className="container flex_center fease_box">
                <p className="h2">
                        {/* Визы{" "}
                        в китай{" "}
                        <br />
                        <span className="-cen"> <span className="-min">от</span> 19 900 ₽</span> */}
                        ВИЗА В КИТАЙ<br /> В ОДИН КЛИК!

                </p>
                <p className="fease_ps">
                за самые минимальные сроки   
                </p>
            </div>
            <LineContakt button={
                <button onClick={()=>{setFos(true); setType("заявка на визу")}} className="linecontakt_fos flex_center buttons btn-1">
                    <div className="spin"></div><svg>
                                <rect
                                    x="0"
                                    y="0"
                                    fill="none"
                                    width="100%"
                                    height="100%"
                                />
                            </svg>
                <span>Заказать визу</span>
            </button>
            }/>
        </section>
    )
}