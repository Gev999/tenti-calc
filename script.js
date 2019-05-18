window.addEventListener('load', ()=> {

    const closePopup = document.getElementById('popup-close');
    // const calc =document.getElementById('calc');
    const popupParent = document.getElementById('parent-popup');
    // const popup = document.getElementById('popup');
    const calcopen = document.getElementById('calcopen');

    closePopup.addEventListener('click', ()=> {
        popupParent.style.visibility = 'hidden';
        popupParent.style.opacity = 0;

    });

    calcopen.onmouseover =  ()=> {
        document.getElementById('calc-img').setAttribute('src', 'img/calc2.png');
    };

    calcopen.onmouseleave = ()=> {
        document.getElementById('calc-img').setAttribute('src', 'img/calc1.png');
    }

    calcopen.addEventListener('click', ()=> {
        popupParent.style.visibility = 'visible';
        popupParent.style.opacity = 1;
        if (!popupParent.classList.contains('trans-property')) {
            popupParent.classList.add('trans-property')
        }
        //popupParent.style.display = 'flex';
    });

    for (let i = 0; i < 3; i++) {
        let itemType = document.getElementsByClassName('img-ico-block')[i];
        itemType.addEventListener('click', ()=> {
            if (!itemType.classList.contains('type-checked')) {
                itemType.classList.add('type-checked');
                for (let j = 0; j < 3; j++) {
                    if (j!=i) {
                        let itemType2 = document.getElementsByClassName('img-ico-block')[j];
                        if (itemType2.classList.contains('type-checked')) {
                            itemType2.classList.remove('type-checked');
                        }
                    }
                } 
            }
        });
    }

    //Create select functionality

    const selLength = document.getElementsByClassName('options-field').length;
    const openSelect = [];


    for (let i = 0; i < selLength; i++) {

        openSelect.push(true);
        let selItem = document.getElementsByClassName('select-field')[i];
        selItem.addEventListener('click', ()=> {
            let optItem = document.getElementsByClassName('options-field')[i];
            if (openSelect[i]) {
                for (let n = 0; n < selLength; n++) {
                    openSelect[i] = true;
                    document.getElementsByClassName('options-field')[n].style.display = 'none';
                }
                optItem.style.display = 'block';
                openSelect[i] = false;
            }
            else {
                optItem.style.display = 'none';
                openSelect[i] = true;
            }
        })

        document.addEventListener('click', (e)=>{
            const targetClassList = e.target.classList;
            let isClassItem = false;
            for (let m = 0; m < targetClassList.length; m++) {
                if (targetClassList[m] == 'select-field') {
                    isClassItem = true;
                    break;
                }
            }
            if (!isClassItem) {
                openSelect[i] = true;
                document.getElementsByClassName('options-field')[i].style.display = 'none';
            }
            
        })

        let optLentgh = document.getElementsByClassName('select-' + (i + 1) + '-data').length;
        for (let j = 0; j < optLentgh; j++) {
            let item = document.getElementsByClassName('select-' + (i + 1) + '-data')[j];
            item.addEventListener('click', ()=> {
                document.getElementsByClassName('select-field')[i].innerHTML = item.innerHTML;
                document.getElementsByClassName('options-field')[i].style.display = 'none';
                openSelect[i] = true;
                if (!item.classList.contains('option-checked')) {
                    for (let k = 0; k < optLentgh; k++) {
                        let item2 = document.getElementsByClassName('select-' + (i + 1) + '-data')[k];
                        if (item2.classList.contains('option-checked')) {
                            item2.classList.remove('option-checked');
                        }
                    }
                    item.classList.add('option-checked');
                }   
            })
        }
    }

    //---------------------------------------------------------------

    //select luv type
    const luvL = document.getElementsByClassName('luv-opt-l');
    const luvW = document.getElementsByClassName('luv-opt-w');

    selectStep(luvL, 0, 1);
    selectStep(luvW, 1, 0);

    function selectStep(luv, idx, idx2) {
        for (let i = 0; i < luv.length; i++) {
            let item = luv[i];
            item.addEventListener('click', ()=> {
                if (i!=0) {
                    if (document.getElementsByClassName('step-parameters')[idx2].style.display != 'flex') {
                        setTimeout(()=>{ 
                            document.getElementsByClassName('step-parameters')[idx].style.display = 'flex'; 
                        }, 700);
                    }
                    else {
                        document.getElementsByClassName('step-parameters')[idx].style.display = 'flex'; 
                    }
                    document.getElementById('tabs-calc').style.width = '720px';
                    for (let j = 0; j < document.getElementsByClassName('right-column').length; j++ ) {
                        document.getElementsByClassName('right-column')[j].style.justifyContent = "flex-start";
                    }
                }
                else {
                    document.getElementsByClassName('step-parameters')[idx].style.display = 'none'; 
                    if (document.getElementsByClassName('step-parameters')[idx2].style.display != 'flex') {
                        document.getElementById('tabs-calc').style.width = '560px';
                        for (let j = 0; j < document.getElementsByClassName('right-column').length; j++ ) {
                            document.getElementsByClassName('right-column')[j].style.justifyContent = "space-between";
                        }
                    }
                }
            })
        }
    }

    //-------------------------------------------------------------

    //select figure type

    const square = document.getElementById('square-type');
    const cube = document.getElementById('cube-type');
    const cylinder = document.getElementById('cylinder-type');

    square.addEventListener('click', ()=> {
        document.getElementById('height-row').style.display = 'none';
        document.getElementById('diameter-row').style.display = 'none';
        document.getElementById('width-row').style.display = 'flex';
        document.getElementById('length-row').style.display = 'flex';
        showSteps();
    })

    cube.addEventListener('click', ()=>{
        document.getElementById('height-row').style.display = 'flex';
        document.getElementById('diameter-row').style.display = 'none';
        document.getElementById('width-row').style.display = 'flex';
        document.getElementById('length-row').style.display = 'flex';
        hideSteps();
    });

    cylinder.addEventListener('click', ()=> {
        document.getElementById('height-row').style.display = 'flex';
        document.getElementById('diameter-row').style.display = 'flex';
        document.getElementById('width-row').style.display = 'none';
        document.getElementById('length-row').style.display = 'none';
        hideSteps();
    })

    function hideSteps() {
        const elems = document.getElementsByClassName('step-row');
        const elems2 = document.getElementsByClassName('step-parameters');
        for (let i = 0; i < elems.length; i++ ) {
            elems[i].style.display = 'none';
        }
        for (let i = 0; i < elems2.length; i++ ) {
            elems2[i].style.display = 'none';
        }
        document.getElementById('tabs-calc').style.width = '560px';
    }

    function showSteps() {
        const elems = document.getElementsByClassName('step-row');
        const elems2 = document.getElementsByClassName('step-parameters');
        for (let i = 0; i < elems.length; i++ ) {
            elems[i].style.display = 'flex';
        }
        if (document.getElementById('calc-luv-l').innerHTML!='без люверсов по длине') {
            setTimeout(()=> {
                elems2[0].style.display = 'flex';
            }, 700);
            document.getElementById('tabs-calc').style.width = '720px';
        }
        if (document.getElementById('calc-luv-w').innerHTML!='без люверсов по ширине') {
            setTimeout(()=> {
                elems2[1].style.display = 'flex';
            }, 700);
            document.getElementById('tabs-calc').style.width = '720px';
        }
    }

    //------------------------------------------

    // data validation
    const inputElems = document.getElementsByClassName('data-field');

    for (let i = 0; i < inputElems.length; i++) {
        let data = inputElems[i];
        data.addEventListener('keyup', (e)=>{
            checkData(data, e);       
        });
        data.addEventListener('keydown', (e)=>{
            checkData(data, e);       
        })
    }


    function checkData(data, e) {
        let dataLength = e.target.value.length;
        // let str = e.target.value;
        if (isNaN(data.value) || data.value > 1000) {
            data.value = data.value.substr(0, dataLength - 1);
        }
        // let symbol = str.substr(dataLength - 1);
        // if (dataLength == 1) {
        //     if (symbol.charCodeAt(0) < 49 || symbol.charCodeAt(0) > 57) {
        //         data.value= str.substr(0, dataLength - 1);
        //     }
        // }
        // else {
        //     if (symbol.charCodeAt(0) < 48 || symbol.charCodeAt(0) > 57) {
        //         data.value= str.substr(0, dataLength - 1);
        //     }
        // }
        // if (data.value > 1000) {
        //     data.value = data.value.substr(0, dataLength - 1);
        // }
        
    }

    // -------------------------------------------------------------------

    //show hidden fields
    if (document.getElementsByClassName('img-ico-block')[0].classList.contains('type-checked')) {
        checkFields(document.getElementsByClassName('count-show'));
    }

    document.getElementsByClassName('img-ico-block')[0].addEventListener('click', ()=> {
        addShowClass(document.getElementById('length-size'), document.getElementById('width-size'));
        removeShowClass(document.getElementById('diameter-size'), document.getElementById('height-size'));
        checkFields(document.getElementsByClassName('count-show'));
        checkEmpties(document.getElementsByClassName('count-show'))
    });

    document.getElementsByClassName('img-ico-block')[1].addEventListener('click', ()=> {
        addShowClass(document.getElementById('length-size'), document.getElementById('width-size'), document.getElementById('height-size'));
        removeShowClass(document.getElementById('diameter-size'));
        checkFields(document.getElementsByClassName('count-show'));
        checkEmpties(document.getElementsByClassName('count-show'))
    });

    document.getElementsByClassName('img-ico-block')[2].addEventListener('click', ()=> {
        addShowClass(document.getElementById('diameter-size'), document.getElementById('height-size'));
        removeShowClass(document.getElementById('length-size'), document.getElementById('width-size'));
        checkFields(document.getElementsByClassName('count-show'));
        checkEmpties(document.getElementsByClassName('count-show'))
    });

    function addShowClass(...items) {
        for (let i = 0; i < items.length; i++) {
            if (!items[i].classList.contains('count-show')) {
                items[i].classList.add('count-show');
            }
        }
    }

    function removeShowClass(...items) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains('count-show')) {
                items[i].classList.remove('count-show');
            }
        }
    }
    
    function checkFields(fields) {
        for (let i = 0; i < fields.length; i++) {
            fields[i].addEventListener('keyup', ()=> {
                let allOk = true;
                for (let j = 0; j < fields.length; j++) {
                    if (fields[j].value=='' || fields[j].value==0) {
                        allOk = false;
                        break;
                    }
                }
                if (allOk) {
                    setTimeout(()=> {
                        document.getElementsByClassName('hidden-fields')[0].style.display = 'flex';
                        document.getElementsByClassName('hidden-fields')[1].style.display = 'flex';
                    }, 600)
                    document.getElementById('tabs-calc').style.height = '600px';
                }
            });
        }
    }

    function checkEmpties(fields) {
        let allOk = true;
        for (let j = 0; j < fields.length; j++) {
            if (fields[j].value=='' || fields[j].value==0) {
                allOk = false;
                break;
            }
        }
        if (allOk) {
            setTimeout(()=> {
                document.getElementsByClassName('hidden-fields')[0].style.display = 'flex';
                document.getElementsByClassName('hidden-fields')[1].style.display = 'flex';
            }, 600)
            document.getElementById('tabs-calc').style.height = '600px';
        }
        else {
            document.getElementsByClassName('hidden-fields')[0].style.display = 'none';
            document.getElementsByClassName('hidden-fields')[1].style.display = 'none';
            document.getElementById('tabs-calc').style.height = '420px';
        }
    }

    //----------------------------------------------------------------------

     //get price information
     let dataMsg = '';
     const priceBtn = document.getElementById('get-price');
     priceBtn.addEventListener('click', ()=> {
         const sizeElems = document.getElementsByClassName('count-show');
         let isOk = true;
         for (let i = 0; i < sizeElems.length; i++) {
             if (sizeElems[i].value=='' || sizeElems[i].value==0) {
                 isOk = false;
                 break;
             }
         }
         if (!isOk) {
            confirm('Пожалуйста укажите размеры');
         }
         else if (document.getElementById('count-size').value=='') {
             confirm('Пожалуйста укажите количество');
         }
         else {
             dataMsg = createMsg();
             document.getElementById('tenti-data').innerHTML = dataMsg;
             console.log(dataMsg);
             document.getElementById('form-cont').style.display = 'flex';
             document.getElementById('popup-close').style.display = 'none';
         }
 
     })
 
     function createMsg() {
        let msg = 'Тип: ';
        const elems = [document.getElementsByClassName('img-ico-block')[0], document.getElementsByClassName('img-ico-block')[1], document.getElementsByClassName('img-ico-block')[2]];
        if (elems[0].classList.contains('type-checked')) {
            msg += 'квадрат';
        }
        else if (elems[1].classList.contains('type-checked')) {
            msg += 'куб';
        }
        else {
            msg += 'цилиндр';
        }
        msg += '\nМатериал: ' + document.getElementById('calc-mat').innerHTML;
        if (elems[0].classList.contains('type-checked') || elems[1].classList.contains('type-checked')) {
            msg += '\nДлина: ' + document.getElementById('length-size').value + 'м.';
            msg += '\nШирина: ' + document.getElementById('width-size').value + 'м.';
        }

        if (elems[0].classList.contains('type-checked')) {
            msg += '\n' + document.getElementById('calc-luv-l').innerHTML;
            if (document.getElementById('calc-luv-l').innerHTML != 'без люверсов по длине') {
                if (document.getElementById('step-l').value!='') {
                    msg += '\tшаг: ' + document.getElementById('step-l').value + document.getElementById('calc-step-l').innerHTML;
                }
            }
            msg += ',\t' + document.getElementById('calc-luv-w').innerHTML;
            if (document.getElementById('calc-luv-w').innerHTML != 'без люверсов по ширине') {
                if (document.getElementById('step-w').value!='') {
                    msg += '\tшаг: ' + document.getElementById('step-w').value + document.getElementById('calc-step-w').innerHTML;
                }
            }
        }

        if (elems[1].classList.contains('type-checked') || elems[2].classList.contains('type-checked')) {
            msg += '\nВысота: ' + document.getElementById('height-size').value + 'м.';
        }

        if (elems[2].classList.contains('type-checked')) {
            msg += '\nДиаметр: ' + document.getElementById('diameter-size').value + 'м.';
        }

        if (document.getElementById('calc-tros').value!='') {
            msg += '\nСтальной трос: ' + document.getElementById('calc-tros').value + 'м.';
        }
        msg += '\nКоличество: ' + document.getElementById('count-size').value + 'шт.';
        if (document.getElementById('note-field').value.trim()!='') {
            msg+= '\n\nПримечание: ' + document.getElementById('note-field').value.trim();
        }
        return msg;
     }

     //--------------------------------------------------------------------------------------------

     //form buttons logic

     document.getElementById('form-close').addEventListener('click', (e)=> {
        document.getElementById('form-cont').style.display = 'none';
        document.getElementById('popup-close').style.display = 'block';
        resetValues();
     });

     function resetValues() {
        document.getElementById('user-name').value = '';
        document.getElementById('user-mail').value = '';
        document.getElementById('user-tel').value = '';
        document.getElementById('user-comment').value = '';
        for (let i = 0; i < 3; i++) {
            document.getElementsByClassName('err-msg')[i].style.display = 'none';
            if (document.getElementsByClassName('contact-input')[i].classList.contains('error-field')) {
                document.getElementsByClassName('contact-input')[i].classList.remove('error-field')
            }
        }
     }

     document.getElementById('form-send').addEventListener('click', (e)=>{

        const nameErr = validateName(document.getElementById('user-name').value.trim());
        const mailErr = validateMail(document.getElementById('user-mail').value.trim());
        const phoneErr = validatePhone(document.getElementById('user-tel').value.trim())

        validate(nameErr, 'user-name', 0);
        validate(mailErr, 'user-mail', 1);
        validate(phoneErr, 'user-tel', 2);

        if (nameErr!='' || mailErr!=''|| phoneErr!='') {
            e.preventDefault();
        }
        
     })

     function validate(err, id, idx) {
        if (err=='') {
            if (document.getElementById(id).classList.contains('error-field')) {
                document.getElementById(id).classList.remove('error-field');
            }
            document.getElementsByClassName('err-msg')[idx].style.display = 'none';
        }
        else {
            if (!document.getElementById(id).classList.contains('error-field')) {
                document.getElementById(id).classList.add('error-field');
            }
            document.getElementsByClassName('err-msg')[idx].style.display = 'block';
            document.getElementsByClassName('err-msg')[idx].innerHTML  = err;
        }
       
     }

     function validateName(name) {
         console.log(name.length);
         if (name=='') {
             return 'Заполните поле "Имя"';
         }
         else if (name.length > 10) {
             return 'Длина строки не должно быть больше 10';
         }
         else {
             return '';
         }
     }

     function validateMail(mail) {
         const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if (mail=='') {
             return 'Заполните поле "Email"';
         }
         else if (!mail.match(mailformat)) {
             return 'Вы ввели неверный адрес электронной почты';
         }
         else {
             return '';
         }
     }

     function validatePhone(phone) {
        const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

        if (phone=='') {
            return 'Заполните поле "Номер телефона"'
        }

        if (!regex.test(phone)) {
            return 'Вы ввели неверный номер телефона<br />Формат: +"номер телефона"'
        } 
        else {
            return '';
        }
     }

     //--------------------------------------------------------------------------------------------

})


