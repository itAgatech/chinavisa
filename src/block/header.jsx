import { useEffect, useState } from "react";

export default function Header(params) {
    const [headStat, setheadStat] = useState(false);
    const [menu, setmenu] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 20) {
                document
                    .querySelector(".header")
                    .classList.add("active");
            }
            if (window.scrollY < 20) {
                document
                    .querySelector(".header")
                    .classList.remove("active");
            }
        };
    }, [window.scrollY]);

    useEffect(() => {
        if (menu) {
            document
                .querySelector("body")
                .classList.add("fixed");
        } else {
            document
                .querySelector("body")
                .classList.remove("fixed");
        }
    }, [menu]);
    window.onwheel = (e) => {
        if (e.deltaY < 0) {
            setheadStat(false);
            setTimeout(() => {
                if (window.scrollY > 20) {
                    setheadStat(true);
                }
            }, 2500);
        } else {
            setheadStat(true);
        }
    };
    document.addEventListener(
        "touchstart",
        handleTouchStart,
        false
    );
    document.addEventListener(
        "touchmove",
        handleTouchMove,
        false
    );

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return (
            evt.touches || // browser API
            evt.originalEvent.touches
        ); // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (!(Math.abs(xDiff) > Math.abs(yDiff))) {
            /*most significant*/
            if (yDiff > 0) {
                setheadStat(true);
            } else {
                setheadStat(false);
                setTimeout(() => {
                    if (window.scrollY > 20) {
                        setheadStat(true);
                    }
                }, 2500);
            }
        }
        xDown = null;
        yDown = null;
    }
    return (
        <header
            className={headStat ? "header burg" : "header"}
        >
            <div className="container">
                <a title="Китайский визовый центр" className="header_logo" href="/">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/logo.png"
                        }
                        alt="Логотип"
                    />
                </a>
                <div
                    className={
                        menu
                            ? "header_navigation active"
                            : "header_navigation "
                    }
                >
                    <nav className="header_menu">
                        <a
                            onClick={() => setmenu(false)}
                            className="header_menu_link"
                            title="Визы"
                            href="#slider"
                        >
                            Визы
                        </a>
                        <a
                            onClick={() => setmenu(false)}
                            className="header_menu_link"
                            title="Документы"
                            href="#document"
                        >
                            Документы
                        </a>
                        <a
                            onClick={() => setmenu(false)}
                            className="header_menu_link"
                            title="Дополнительно"
                            href="#dopolnitelno"
                        >
                            Дополнительно
                        </a>
                        <a
                            onClick={() => setmenu(false)}
                            className="header_menu_link"
                            title="Контакты"
                            href="#kontakts"
                        >
                            Контакты
                        </a>
                    </nav>
                    <nav className="header_contact">
                        {/* <div className="header_contact_soc">
                            <a
                                className="flex_center"
                                href=""
                            >
                                <img
                                    className=" "
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/vk.png"
                                    }
                                    alt="Группа в Вконтакте"
                                />
                            </a>
                            <a
                                className="flex_center"
                                href=""
                            >
                                <img
                                    className=" "
                                    src={
                                        process.env
                                            .PUBLIC_URL +
                                        "/img/oki.png"
                                    }
                                    alt="Мы в однакластниках"
                                />
                            </a>
                        </div> */}

                        <a
                        title="Связаться с нами по телефону"
                            className="header_contact_tel flex_center"
                            href="tel:+79671588837"
                        >
                            <img
                                className=" "
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/tel.png"
                                }
                                alt="+79671588837"
                            />
                            +7(967)158-88-37
                        </a>
                    </nav>
                </div>
                <div
                    onClick={() => setmenu(!menu)}
                    className={
                        menu
                            ? "menu btn1 open"
                            : "menu btn1 "
                    }
                    data-menu="1"
                >
                    <div className="icon-left"></div>
                    <div className="icon-right"></div>
                </div>
            </div>
        </header>
    );
}
