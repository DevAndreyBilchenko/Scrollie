# Scrollie
jQuery plugin - Выполнение пользовательских скриптов, по скроллу до них
#
<b>TODO:</b> <br>
<ul>
  <li>
    Протестировать в различных браузерах и устройствах
    <ul>
      <li>IE</li>
      <li>Safari</li>
      <li>Opera</li>
      <li>Chrome</li>
      <li>Firefox</li>
      <li>..</li>
    </ul>
  </li>
  <li>Написать инструкцию</li>
  <li>Сделать страницу презентацию</li>
</ul>
<b>Инструкция:</b> <br>
<ul>
  <li>
    Инициализация
    <pre>
$('.container').Scrollie({
    action: function(Self) {
        // Code..
    }
});
    </pre>
  </li>
  <li>
    Настройки которые можно менять. Указанные параметры используются по умолчанию<br>
    mark_class: 'ab-scrollie', // Класс который добавится после инициализации <br>
    d_id: 'scrollie_id', // Имя data-атрибута <br>
    static: true, // Может ли позиция элемента измениться <br>
    oneoff: true, // Отработать один раз <br>
    action: function() {}, // Функция выполняющаяся если объект видно <br>
    pause: 250, // Задержка перед выполнением мс <br>
    offset_top: 15, // Сдвиг границы активации сверху <br>
    offset_bottom: 15 // Сдвиг границы активации снизу <br>
  </li>
</ul>
