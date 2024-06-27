import axios from "axios";
import { useState } from "react";
import ReactInputMask from "react-input-mask";

export default function FosContakt({ fos, setFos, type }) {
    const [usoeh, setusoeh] = useState(false);
    const [otprav, setotprav] = useState(false);
    function MailGo(e) {
        e.preventDefault();
        setotprav(true);
        const element = {
            name: e.target[0].value,
            tel: e.target[1].value,
            mail: e.target[2].value,
            type: e.target[3].value,
        };
        if (e.target[1].value.includes("_")) {
            document
                .querySelector("#error_tel")
                .classList.add("error");
            e.target[1].focus();
            console.log("net");
            setotprav(false);
        } else {
            axios({
                method: "POST",
                url: "/mail/mail.php",
                // url: '../mail/mail.php',
                headers: {
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(element),
            })
                .then((response) => {
                    setusoeh(true);

                    setTimeout(() => {
                        setFos(false);
                        setusoeh(false);
                        setotprav(false);
                    }, 2000);
                })
                .catch((error) => {
                    // console.log(error);
                });
        }
    }

    return (
        <div
            onClick={() => setFos(false)}
            className={
                fos
                    ? "fosContact flex_center active"
                    : "fosContact flex_center"
            }
        >
            {usoeh ? (
                <div className="fosContact_form">
                    <h3>Отправка прошла успешно</h3>
                </div>
            ) : (
                <form
                    onSubmit={MailGo}
                    onClick={(e) => e.stopPropagation()}
                    className="fosContact_form"
                    action=""
                >
                    <h3>{type}</h3>

                    <input
                        className="fosContact_inputBox"
                        type="text"
                        name="name"
                        placeholder="Ваше ФИО"
                        required
                        minLength={2}
                    />
                    <div id="error_tel" className="">
                        <ReactInputMask
                            className="fosContact_inputBox "
                            name="tel"
                            placeholder="+7 000 000 00 00"
                            mask="+7 (999) 999 99 99"
                            type="text"
                            required
                        />
                    </div>
                    <input
                        className="fosContact_inputBox"
                        type="text"
                        name="mail"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="hidden"
                        name="type"
                        defaultValue={type}
                    />
                    <button className="fosContact_button btn-1">
                        {!otprav ? (
                            <>
                                {"Подать заявку"}{" "}
                                <svg>
                                    <rect
                                        x="0"
                                        y="0"
                                        fill="none"
                                        width="100%"
                                        height="100%"
                                    />
                                </svg>
                            </>
                        ) : (
                            <div className="loading"></div>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}
