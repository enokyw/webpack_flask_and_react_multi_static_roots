/* form_input for input style */
function labelState() {
    let inputs = document.querySelectorAll('.form__input');

    inputs.forEach(input => {
        input.onfocus = () => {
            input.nextElementSibling.classList.add('on-action');
        };
        input.onblur = () => {
            input.value = input.value.trim();
            if(input.value.trim().length == 0) (input.nextElementSibling.classList.remove('on-action'));
        };
    });
}
function nit_validation(id) {
    let nit = document.querySelector(`#${id}`);
    nit_label = nit.nextElementSibling;
    nit.addEventListener('keyup', e => {
        e.preventDefault();
        is_num = Number.isInteger(Number(nit.value))
        if (is_num &&(nit.value.trim().length === 8 || nit.value.trim().length === 11)) {
            nit_label.classList.remove('warning');
            nit.classList.remove('bor_warn');
        } else {
            nit_label.classList.add('warning');
            nit.classList.add('bor_warn');
        }
    })
    
}

labelState();
/* end input */
/* set input type change for show password */
function setImpType(){
    let shBtn = document.querySelectorAll('input[jsClick="CheckUAct"]');
    
    shBtn.forEach(ckBox => {
        let input = document.querySelectorAll('.'+ckBox.dataset.for_elem);
        ckBox.onclick = ()=> {
            if (ckBox.checked) {
                for (i of input) (i.type='text');
            } else {
                for (i of input) (i.type='password')
            };
        };
    });
}
setImpType()
/* end show password */