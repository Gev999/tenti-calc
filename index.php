<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css" />
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <title>Tenti</title>
</head>

<body>
    <div id="calcopen">
        <div>
            <img src="img/calc1.png" id="calc-img"/>
            <p id="calc">Калькулятор</p>
        </div>
    </div>

    <div id="parent-popup">
        <div class="popup-cont" id="popup">
            <div id="popup-close"></div>
            <div id="popup-inner">
                <p id="calc-title">Рассчитать стоимость тента</p>

                <div id="tabs-calc">

                    <div class="item-row">
                        <div class="left-column"></div>
                        <div class="right-column figure-types">
                            <div class="img-ico-block type-checked" id="square-type">
                                <img src="img/ico-square.png" />
                            </div>
                            <div class="img-ico-block" id="cube-type">
                                <img src="img/ico-cube.png" />
                            </div>
                            <div class="img-ico-block" id="cylinder-type">
                                <img src="img/ico-cylinder.png" />
                            </div>
                        </div>
                    </div>

                    <div class="item-row">
                        <div class="left-column"><p>Материал:</p></div>
                        <div class="right-column">
                            <div class="select-cont" id="calc-mat-cont">
                                <div class="select-field" id="calc-mat">OXFORD 1000 ПУ трехслойный (синтепон)</div>
                                <div class="options-field">
                                    <p class="select-1-data option-checked">OXFORD 1000 ПУ трехслойный (синтепон)</p>
                                    <p class="select-1-data">OXFORD 2000 ПУ трехслойный (синтепон)</p>
                                    <p class="select-1-data">OXFORD PLUS (усиленный стропой) однослойный</p>
                                    <p class="select-1-data">OXFORD однослойный</p>
                                    <p class="select-1-data">OXFORD толстый 420d</p>
                                    <p class="select-1-data">OXFORD толстый 420d трехслойный (изолон 5мм.)</p>
                                    <p class="select-1-data">OXFORD толстый 420d трехслойный (синтепон)</p>
                                    <p class="select-1-data">Брезент ВО</p>
                                    <p class="select-1-data">Брезент ОП</p>
                                    <p class="select-1-data">Брезент утепленный ВО (изолон 10мм.)</p>
                                    <p class="select-1-data">Брезент утепленный ВО (изолон 5мм.)</p>
                                    <p class="select-1-data">Брезент утепленный ВО(синтепон)</p>
                                    <p class="select-1-data">Брезент утепленный ОП (изолон 10мм.)</p>
                                    <p class="select-1-data">Брезент утепленный ОП (изолон 5мм.)</p>
                                    <p class="select-1-data">Брезент утепленный ОП(синтепон)</p>
                                    <p class="select-1-data">ПВХ 450 односторонний</p>
                                    <p class="select-1-data">ПВХ 450 трехслойный (изолон 10мм.)</p>
                                    <p class="select-1-data">ПВХ 450 трехслойный (изолон 5мм.)</p>
                                    <p class="select-1-data">ПВХ 630гр/м. трехслойный (изолон 10мм.)</p>
                                    <p class="select-1-data">ПВХ 630гр/м. трехслойный (изолон 5мм.)</p>
                                    <p class="select-1-data">ПВХ 650 двухсторонний</p>
                                    <p class="select-1-data">ПВХ 900 г/м2</p>
                                    <p class="select-1-data">ПВХ прозрачный</p>
                                    <p class="select-1-data">Тарпаулин 120 г/м2 (зеленый)</p>
                                    <p class="select-1-data">Тарпаулин 120 г/м2 утепленный</p>
                                    <p class="select-1-data">Тарпаулин 180 г/м2 (синий)</p>
                                    <p class="select-1-data">Тарпаулин 180 г/м2 утепленный</p>
                                    <p class="select-1-data">Теза 850 гр/м</p>
                                    <p class="select-1-data">Трос металлический</p>
                                    <p class="select-1-data">Утепленый полог из 2ст. ткани ПВХ 900 гр. м2  (ткань-изолон(10мм.)-ткань))</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item-row" id="length-row">
                        <div class="left-column">Длина(высота):</p></div>
                        <div class="right-column">
                            <div class="size-parameters">
                                <input type="text" class="data-field count-show" id="length-size" />
                                <span class="math-type">м.</span>
                            </div>
                            <div class="select-cont" id="calc-luv-cont-l">
                                <div class="select-field step-row" id="calc-luv-l">без люверсов по длине</div>
                                <div class="options-field">
                                    <p class="select-2-data option-checked luv-opt-l">без люверсов по длине</p>
                                    <p class="select-2-data luv-opt-l">люверсы по длине с одной стороны</p>
                                    <p class="select-2-data luv-opt-l">люверсы по длине с двух сторон</p>
                                </div>
                            </div>

                            <div class="size-parameters step-parameters">
                                <span class="step-title">шаг</span>
                                <input type="text" class="data-field" id="step-l" />
                                <div class="select-cont calc-step-cont">
                                    <div class="select-field" id="calc-step-l">см.</div>
                                    <div class="options-field">
                                        <p class="select-3-data option-checked">см.</p>
                                        <p class="select-3-data">м.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="item-row" id="width-row">
                        <div class="left-column">Ширина:</p></div>
                        <div class="right-column">
                            <div class="size-parameters">
                                <input type="text" class="data-field count-show" id="width-size" />
                                <span class="math-type">м.</span>
                            </div>
                            <div class="select-cont" id="calc-luv-cont-w">
                                <div class="select-field step-row" id="calc-luv-w">без люверсов по ширине</div>
                                <div class="options-field">
                                    <p class="select-4-data option-checked luv-opt-w">без люверсов по ширине</p>
                                    <p class="select-4-data luv-opt-w">люверсы по ширине с одной стороны</p>
                                    <p class="select-4-data luv-opt-w">люверсы по ширине с двух сторон</p>
                                </div>
                            </div>

                            <div class="size-parameters step-parameters">
                                <span class="step-title">шаг</span>
                                <input type="text" class="data-field" id="step-w" />
                                <div class="select-cont calc-step-cont">
                                    <div class="select-field" id="calc-step-w">см.</div>
                                    <div class="options-field">
                                        <p class="select-5-data option-checked">см.</p>
                                        <p class="select-5-data">м.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="item-row" id="height-row">
                        <div class="left-column">Высота:</div>
                        <div class="right-column">
                            <div class="size-parameters">
                                <input type="text" class="data-field" id="height-size" />
                                <span class="math-type">м.</span>
                            </div>
                        </div>
                    </div>

                    <div class="item-row" id="diameter-row">
                        <div class="left-column">Диаметр:</div>
                        <div class="right-column">
                            <div class="size-parameters">
                                <input type="text" class="data-field" id="diameter-size" />
                                <span class="math-type">м.</span>
                            </div>
                        </div>
                    </div>

                    <div class="item-row">
                        <div class="left-column">Стальной трос:</p></div>
                        <div class="right-column">
                            <div class="size-parameters">
                                <input type="text" class="data-field" id="calc-tros" />
                                <span class="math-type">м.</span>
                            </div>
                        </div>
                    </div>

                    <div class="item-row hidden-fields">
                        <div class="left-column">Количество:</p></div>
                        <div class="right-column">
                            <div class="size-parameters">
                                <input type="text" class="data-field" id="count-size" value="1"/>
                                <span class="math-type">шт.</span>
                            </div>
                        </div>
                    </div>

                    <div class="item-row hidden-fields">
                        <div class="left-column">Примечание:</p></div>
                        <div class="right-column">
                            <div class="size-parameters note-cont">
                                <textarea id="note-field"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="btn-block">
                        <button class="btn-item" id="get-price">Узнать цену</button>
                    </div>

                </div>

            </div>
            <div id="form-cont">
                <div id="form-popup">
                    <form id="contact-from" method="POST" action="sendmail.php" autocomplete="off">
                        <input type="text" name="user_name" id="user-name" class="contact-input" placeholder="Имя" />
                        <p class="err-msg"></p>
                        <br />
                        <input type="email" name="user_mail" id="user-mail" class="contact-input" placeholder="Email"/>
                        <p class="err-msg"></p>
                        <br />
                        <input type="tel" name="user_tel" id="user-tel" class="contact-input" placeholder="Номер телефона" />
                        <p class="err-msg"></p>
                        <br />
                        <textarea name="user_comment" id="user-comment" class="contact-input" placeholder="Комментарий"></textarea>
                        <textarea name="tenti_data" id="tenti-data"></textarea>
                        <div id="form-btn-group">
                            <div id="form-close" class="form-btn">Отмена</div>
                            <input id="form-send" name="form_send" type="submit" class="form-btn" value="Отправить">
                        </form>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- <div id="form-parent-popup">
        <div id="form-popup">
            <div id="form-close"></div>
            <div id="form-popup-inner">

            </div>
        </div>
    </div> -->

    <script src="script.js"></script>
</body>

</html>