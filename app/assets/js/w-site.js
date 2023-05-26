function click_actions() {
    let btn_show_user_option = document.getElementById('btOff');

    btn_show_user_option.lastElementChild.classList.replace('d-no','d-fl') || btn_show_user_option.lastElementChild.classList.replace('d-fl','d-no');
}






function media_s_screen(size) {
    let btn_more = document.getElementById('btOff');
    let width_wapper = document.querySelectorAll('.js-width');

    if(size.matches) {
        for(jw of width_wapper) (jw.classList.replace('p-0-20','p-0-10')); // wrapper padding
        btn_more.previousElementSibling.classList.replace('d-fl','d-no'); // for show/hidden btn more of Header area
        btn_more.classList.replace('d-no','d-fl'); // for hidden/show btns login, register, and other relations btns of Header
    } else {
        for(jw of width_wapper) (jw.classList.replace('p-0-10', 'p-0-20'));
        btn_more.classList.replace('d-fl','d-no');
        btn_more.previousElementSibling.classList.replace('d-no', 'd-fl');
    }
}

function responsive() {
    let s_screen = window.matchMedia("(max-width: 480px)");
    media_s_screen(s_screen);
    s_screen.addEventListener('change',media_s_screen);
}