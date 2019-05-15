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
        let str = e.target.value;
        let symbol = str.substr(dataLength - 1);
        if (dataLength == 1) {
            if (symbol.charCodeAt(0) < 49 || symbol.charCodeAt(0) > 57) {
                data.value= str.substr(0, dataLength - 1);
            }
        }
        else {
            if (symbol.charCodeAt(0) < 48 || symbol.charCodeAt(0) > 57) {
                data.value= str.substr(0, dataLength - 1);
            }
        }
        if (data.value > 1000) {
            data.value = data.value.substr(0, dataLength - 1);
        }
    }

    // -------------------------------------------------------------------

    //get price information
    const priceBtn = document.getElementById('get-price');
    priceBtn.addEventListener('click', ()=> {
        const squarChecked = isChecked(square);
        const cubeChecked = isChecked(cube);
        const cylinderChecked = isChecked(cylinder);

        const lengthSize = document.getElementById('length-size');
        const widthSize = document.getElementById('width-size');
        const trosSize = document.getElementById('calc-tros');
        const heightSize = document.getElementById('height-size');
        const diameterSize = document.getElementById('diameter-size');
        const lStepSize = document.getElementById('step-l');
        const wStepSize = document.getElementById('step-w');
        
        confirm('Не готово ещё!!')

    })

    function isChecked(figure) {
        return figure.classList.contains('type-checked');
    }

    // ----------------------------------------------------------

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
                    if (fields[j].value=='') {
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
            console.log(fields[j].value);
            if (fields[j].value=='') {
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

})

// const luvLength = document.getElementById('calc-luv-l');
// const luvWidth = document.getElementById('calc-luv-w')


