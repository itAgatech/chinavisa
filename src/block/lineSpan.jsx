export default function LineSpan(params) {
    function Dvig(params) {
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        let marqueeContent = document.querySelector("ul.marquee-content");
        
        root.style.setProperty("--marquee-elements", marqueeContent.children.length);
        for(let i=0; i<marqueeElementsDisplayed; i++) {
          marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
       }
        setTimeout(Dvig,2000)

    return(
        <div className="lineKlient marquee">
        <ul className=" marquee-content ">
          <li>
          Уважаемые заявители! Визовый Центр продолжает свою работу в удаленном режиме.
          </li>
          <li>
          Уважаемые заявители! Визовый Центр продолжает свою работу в удаленном режиме.
          </li>
          <li>
          Уважаемые заявители! Визовый Центр продолжает свою работу в удаленном режиме.
          </li>
          <li>
          Уважаемые заявители! Визовый Центр продолжает свою работу в удаленном режиме.
          </li>
        </ul>
      </div>
    )
}