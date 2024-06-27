export default function TabSlider({ setSli }) {
    return (
        <div className="container">
            <div className="tabSlider flex_center">
                <TabCeked
                    setSli={setSli}
                    slad={0}
                    simvol={"L"}
                    text={"туристические визы"}
                />
                <TabCeked
                    setSli={setSli}
                    slad={1}
                    simvol={"M"}
                    text={"деловые визы"}
                />
                <TabCeked
                    setSli={setSli}
                    slad={2}
                    simvol={"X"}
                    text={"учебные визы"}
                />
                <TabCeked
                    setSli={setSli}
                    slad={3}
                    simvol={"Q"}
                    text={"визы для личных целей"}
                />
            </div>
        </div>
    );
}

function TabCeked({ simvol, text, setSli, slad }) {
    return (
        <a
        title={text}
            href="#slider"
            data-simvol={simvol}
            className="tabCeked "
            onClick={()=>setSli(slad)}
        >
            <span className="tabCeked_text">{text}</span>
        </a>
    );
}
