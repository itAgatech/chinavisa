export default function LineContakt({button}) {
    return (
        <div className="linecontakt ">
           <div className="container">
           <a  
                title="Связаться с нами по почте"
                className="linecontakt_mail flex_center"
                href="mailto:visa@raspp.ru"
            >
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/img/mail.png"
                    }
                    alt="Почта"
                />
                <span>visa@raspp.ru</span>
            </a>
            {button}
            <a
                title="Связаться с нами по телефону"
                className="header_contact_tel flex_center"
                href="tel:+79671588837"
            >
                <img
                    
                    src={
                        process.env.PUBLIC_URL +
                        "/img/tel.png"
                    }
                    alt="Телефон"
                />
                <span>
                +7(967)158-88-37
                </span>
               
            </a>
           </div>
        </div>
    );
}
