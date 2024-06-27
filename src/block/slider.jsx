import { useEffect, useState } from "react";
import katalogInfo from "../data/slider.json";
import PopapType from "./popupCat";

export default function Slider({sli,setSli}) {
    const [popupType, setPopupType] = useState(false)
    const [step, setstep] = useState(0);
    const [pre, setpre] = useState(step + 1);
    const [qw, setqw] = useState(katalogInfo.length - 1);

    const [progress, setprogress] = useState(false);
    const [perehod, setperehod] = useState(katalogInfo[qw]);
    useEffect(() => {
        console.log(sli);
        ChekKlic(sli);
    }, [sli]);
    
    function Gou(params) {
        if (params < 0) {
            setperehod(katalogInfo[qw]);
        }

        if (params > 0) {
            setperehod(katalogInfo[pre]);
        }
        setprogress(true);
        setTimeout(() => {
            if (step + params < 0) {
                setstep(katalogInfo.length - 1);
            } else if (
                step + params >
                katalogInfo.length - 1
            ) {
                setstep(0);
            } else {
                setstep(step + params);
            }

            if (pre + params < 0) {
                setpre(katalogInfo.length - 1);
            } else if (
                pre + params >
                katalogInfo.length - 1
            ) {
                setpre(0);
            } else {
                setpre(pre + params);
            }

            if (qw + params < 0) {
                setqw(katalogInfo.length - 1);
            } else if (
                qw + params >
                katalogInfo.length - 1
            ) {
                setqw(0);
            } else {
                setqw(qw + params);
            }
            setprogress(false);
        }, 700);
    }
    function ChekKlic(params) {
        setprogress(true);
        setperehod(katalogInfo[params]);

        setTimeout(() => {
            switch (params) {
                case 0:
                    setstep(0);
                    setpre(1);
                    setqw(katalogInfo.length - 1);
                    break;
                case 1:
                    setstep(1);
                    setpre(2);
                    setqw(0);
                    break;
                case 2:
                    setstep(2);
                    setpre(3);
                    setqw(1);
                    break;
                case 3:
                    setstep(3);
                    setpre(0);
                    setqw(2);
                    break;
    
                default:
                    break;
            }
            setprogress(false);

        }, 700);
        
    }
    return (
        <>
        <section id="slider" className="slider">
            <div className="container">
                <div className="slider_content">
                    <div className="slider_cheked">
                        <div
                            onClick={() => ChekKlic(0)}
                            className={
                                step === 0
                                    ? "slider_cheked_items flex_center active"
                                    : "slider_cheked_items flex_center "
                            }
                        >
                            <span>L</span>
                            <p>туристические визы</p>
                        </div>
                        <div
                            onClick={() => ChekKlic(1)}

                            className={
                                step === 1
                                    ? "slider_cheked_items flex_center active"
                                    : "slider_cheked_items flex_center "
                            }
                        >
                            <span>M</span>
                            <p>деловые визы</p>
                        </div>
                        <div
                            onClick={() => ChekKlic(2)}

                            className={
                                step === 2
                                    ? "slider_cheked_items flex_center active"
                                    : "slider_cheked_items flex_center "
                            }
                        >
                            <span>X</span>
                            <p>учебные визы</p>
                        </div>
                        <div
                            onClick={() => ChekKlic(3)}

                            className={
                                step === 3
                                    ? "slider_cheked_items flex_center active"
                                    : "slider_cheked_items flex_center "
                            }
                        >
                            <span>Q</span>
                            <p>виза для личных целей</p>
                        </div>
                    </div>
                    <div className="slider_titleBox">
                        <div
                            onClick={() => Gou(-1)}
                            className="slider_titleBox_tab"
                        >
                            <div className="slider_titleBox_tab_box">
                                <span
                                     className={
                                        progress ? "active":''
                                    }
                                >
                                    {katalogInfo[qw].logo}
                                </span>
                                <img
                                loading="lazy"
                                     className={
                                        progress ? "active":''
                                    }
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/slider/left.png"
                                    }
                                    alt="В лево"
                                />
                                <p
                                     className={
                                        progress ? "active":''
                                    }
                                >
                                    {katalogInfo[qw].name}
                                </p>
                            </div>
                        </div>
                        <div
                            data-type={
                                katalogInfo[step].logo
                            }
                            className={
                                progress
                                    ? "slider_titleBox-text flex_center active"
                                    : "slider_titleBox-text flex_center "
                            }
                        >
                            <h3
                                className={
                                    progress ? "active":''
                                }
                            >
                                {katalogInfo[step].name}
                            </h3>
                        </div>
                        <div
                            onClick={() => Gou(1)}
                            className="slider_titleBox_tab right"
                        >
                            <div className="slider_titleBox_tab_box ">
                                <span
                                    className={
                                        progress ? "active":''
                                    }
                                >
                                    {katalogInfo[pre].logo}
                                </span>
                                <img 
                                loading="lazy"
                                     className={
                                        progress ? "active":''
                                    }
                                    
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/slider/right.png"
                                    }
                                    alt="В право"
                                />
                                <p
                                     className={
                                        progress ? "active":''
                                    }
                                >
                                    {katalogInfo[pre].name}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            progress
                                ? "slider_infoBox active"
                                : "slider_infoBox"
                        }
                    >
                        {katalogInfo[step].type.map(
                            (e, i) => (
                                <div
                                    key={i}
                                    className="slider_infoBox_item"
                                >
                                    <h4 className="slider_infoBox_item_name">
                                        {e.logo}
                                    </h4>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: e.name,
                                        }}
                                        className="slider_infoBox_item_opis"
                                    >
                                        {}
                                    </p>
                                    <p className="slider_infoBox_item_srok">
                                        {e.srok}
                                        <br />
                                        {e.koridor}
                                        {e.vezd && (
                                            <>
                                                <br />
                                                {
                                                    e.vezd
                                                }{" "}
                                            </>
                                        )}
                                    </p>
                                    {e.rascenka.map(
                                        (el, id) => (
                                            <p
                                                key={id}
                                                className="slider_infoBox_item_cen"
                                            >
                                                {el.srok}{" "}
                                                <br />
                                                <span>
                                                    {el.cen}
                                                </span>
                                            </p>
                                        )
                                    )}
                                </div>
                            )
                        )}
                    </div>
                    
                    <button onClick={()=>setPopupType(!popupType)} className="slider_fosButton buttons btn-1">
                    <div className="spin"></div>
            <span>Порядок оформления </span> <svg>
                                <rect
                                    x="0"
                                    y="0"
                                    fill="none"
                                    width="100%"
                                    height="100%"
                                />
                            </svg>
                        
                    </button>
                </div>
                <div className="slider_img">
                    <div title="Знаковое место Китая"
                        style={{
                            background: `url(${katalogInfo[step].img})`,
                        }}
                        className="slider_img_img"
                    ></div>
                    <div title="Знаковое место Китая"
                        style={{
                            background: `url(${perehod.img})`,
                        }}
                        className={
                            progress
                                ? " slider_img_img pre active"
                                : " slider_img_img pre "
                        }
                    ></div>
                </div>
            </div>
        </section>
        <PopapType popupType={popupType} type={step} setPopupType={setPopupType} />
        </>
    );
}
