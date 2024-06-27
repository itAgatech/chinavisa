export default function Footer({ setFos, setType }) {
    return (
        <footer className="footer">
            <div className="container">
                <a title="Китайский визовый центр" className="footer_logo" href="/">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/logo.png"
                        }
                        alt="Логотип"
                    />
                </a>

                <button
                    onClick={() => {
                        setFos(true);
                        setType("заявка на Консультацию");
                    }}
                    className="linecontakt_fos flex_center buttons btn-1"
                >
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
                <a title="AGATECH" href="https://agatech.ru/">@ Сделано в AGATECH</a>
            </div>
        </footer>
    );
}
