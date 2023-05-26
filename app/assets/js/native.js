function dropdown_v() {
    let active = document.querySelectorAll('span[jsclick="opn"]');

    active.forEach(up_down => {
        up_down.onclick = () => {
            up_down.nextElementSibling.classList.toggle('show');
            let down = up_down.classList.contains('_dwn');
            down ? up_down.classList.replace('_dwn', '_up') : up_down.classList.replace('_up', '_dwn');
        }
    });
}

function menu_and_modal() {
    let act_btn = document.querySelectorAll('span[jsclick="on-off"]');
    let verify = null

    act_btn.forEach(btn => {
        btn.addEventListener('click', (ev) => {
            if (verify !== ev.currentTarget) (all_close());
            verify = ev.currentTarget;
            node = document.getElementById(btn.dataset.elem);
            bool = node.classList.toggle('d-no');
            if(node.classList.contains('x-closs')){
                node.onclick = (e) => (e.target.classList.contains('x-closs') ? node.classList.add('d-no'): null);
                hidde_from_options();
            }
        });
    });
}

function hidde_from_options() {
    document.querySelectorAll('.x').forEach(x => x.onclick = () => {
        all_close();
    });
}
function all_close() {
    document.querySelectorAll('.x-closs').forEach(closs => {
        (closs.classList.contains('d-no') !== true) ? closs.classList.add('d-no') : null;
    });
}
menu_and_modal();


function media_screen(size) { //media sreen
    let lef_menu = document.getElementById('sd-left-vav');
    menu_h = document.getElementById('m_h-box');
    i_brand = document.getElementById('i-brand');

    _class = ['d-no','w-x100','fxd-t48_000','pstn-a','x-closs'];
    if (size.matches) {
        for(i of _class) (lef_menu.classList.add(i));
        menu_h.classList.replace('p-0-15','p-0-5');
        i_brand.classList.add('zoom-08');
    } else{
        for(i of _class) (lef_menu.classList.remove(i));
        menu_h.classList.replace('p-0-5','p-0-15');
        i_brand.classList.remove('zoom-08');
    }
}

function media_s_screen(size) {
    let lef_menu = document.getElementById('sd-left-vav').firstElementChild;
    let main_wrapper = document.getElementById('mWppr'); // main container of class main_wrapper
    if(size.matches) {
        lef_menu.classList.add('mxw-x100');
        main_wrapper.classList.replace('p-0-20', 'p-0-10');
    } else {
        lef_menu.classList.remove('mxw-x100');
        main_wrapper.classList.replace('p-0-10', 'p-0-20');
    }
}

function media_sx_screen(size) {
    let asistence_top = document.getElementById('top_help');
    if(size.matches) {
        asistence_top.style.display = "none";
        asistence_top.parentElement.classList.replace('gap-10','gap-5');
    } else {
        asistence_top.style.display = "";
        asistence_top.parentElement.classList.replace('gap-5','gap-10')
    }
}

function responsive() {
    let screen = window.matchMedia("(max-width: 640px)");
    let s_screen = window.matchMedia("(max-width: 480px)");
    let sx_screen = window.matchMedia("(max-width: 359px)");
    media_screen(screen);
    media_s_screen(s_screen);
    media_sx_screen(sx_screen);
    screen.addEventListener('change',media_screen);
    s_screen.addEventListener('change',media_s_screen);
    sx_screen.addEventListener('change',media_sx_screen);
}

dropdown_v();