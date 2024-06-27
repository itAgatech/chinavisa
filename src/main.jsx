import { useEffect, useState } from "react";
import Slider from "./block/slider";
import Welcome from "./block/welcome";
import Documents from "./block/documents";
import Dopolnitelno from "./block/dopolnitelno";
import Kontakts from "./block/kontakts";
import Fease from "./block/fease";
import FosContakt from "./block/fosKontact";
import Footer from "./block/footer";

export default function Main() {
    const [sli, setSli] = useState(0);
    const [fos, setFos] = useState(false);
    const [type, setType] = useState("");

    useEffect(() => {
        console.log(window.location);
        if (document.querySelectorAll(".tabCeked")) {
            let chekedsTab =
                document.querySelectorAll(".tabCeked");
            switch (window.location.search.split("=")[1]) {
                case "turisticheskaya":
                    chekedsTab[0].click();
                    break;
                case "delovay":
                    chekedsTab[1].click();

                    break;
                case "uchebnay":
                    chekedsTab[2].click();

                    break;
                case "lichniyceli":
                    chekedsTab[3].click();

                    break;
                default:
                    break;
            }
        }
    }, [window.location]);

    useEffect(() => {
        if (fos) {
            document
                .querySelector("body")
                .classList.add("fixed");
        } else {
            document
                .querySelector("body")
                .classList.remove("fixed");
        }
    }, [fos]);
    return (
        <>
            <main>
                <Fease setFos={setFos} setType={setType} />
                <Welcome
                    setFos={setFos}
                    setType={setType}
                    setSli={setSli}
                />
                <Slider sli={sli} setSli={setSli} />
                <Documents />
                <Dopolnitelno
                    setFos={setFos}
                    setType={setType}
                />
                <Kontakts />
                <FosContakt
                    fos={fos}
                    setFos={setFos}
                    type={type}
                />
            </main>
            <Footer setFos={setFos} setType={setType} />
        </>
    );
}
