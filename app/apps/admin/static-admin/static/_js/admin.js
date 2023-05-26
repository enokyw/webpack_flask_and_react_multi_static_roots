function media_m_screen (size) {
    const l_sidebar = document.getElementById("lnavRoot");
    const header = document.getElementById("headRoot");
    
    let lsb_class = ["d-no","fxd-0","pstn-a", "X-cls"];
    if(size.matches) {
        for (i of lsb_class) l_sidebar.classList.add(i);
        header.classList.add("zm85");
    } else {
        for (i of lsb_class) l_sidebar.classList.remove(i);
        header.classList.remove("zm85");
    }
}

(() => { /**** max 680px ****/
    const m_screen = window.matchMedia("(max-width: 620px)");
    media_m_screen(m_screen);
    m_screen.addEventListener('change',media_m_screen);
})();