# Scrollie
jQuery plugin - Выполнение пользовательских скриптов, по скроллу до них
#
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
    Параметры (используются по умолчанию)<br>
    <ul>
      <li>mark_class: 'ab-scrollie', <i>// Класс который добавится после инициализации</i> <br></li>
      <li>d_id: 'scrollie_id', <i>// Имя data-атрибута</i> <br></li>
      <li>static: true, <i>// Может ли позиция элемента измениться</i> <br></li>
      <li>oneoff: true, <i>// Отработать один раз</i> <br></li>
      <li>action: function() {}, <i>// Функция выполняющаяся если объект видно</i> <br></li>
      <li>pause: 250, <i>// Задержка перед выполнением мс</i> <br></li>
      <li>offset_top: 15, <i>// Сдвиг границы активации сверху</i> <br></li>
      <li>offset_bottom: 15 <i>// Сдвиг границы активации снизу</i> <br></li>
    </ul>
  </li>
  <li>
    Cобытия (Всплывают на целевой элемент)
    <ul>
      <li>abOnItemVisible, <i>// Целевой элемент стал видимым</i> <br></li>
      <li>abOnItemActionStart, <i>// Пользовательский скрипт начал выполнение</i> <br></li>
      <li>abOnItemDisabled, <i>// Целевой элемент стал отключенным</i> <br></li>
      <li>abOnItemDestruct <i>// Целевой элемент Отключен</i> <br></li>
    </ul>
  </li>
  <li>
    Методы
    <ul>
      <li>
        <code>$('.container').Scrollie('unScrollie');</code> 
        <i>// Отключение плагина (с уничтожением всех предустановленных элементов)</i> <br>
      </li>
      <li>
        <code>$('.container').Scrollie('disable');</code> 
        <i>// (В разработке) Отключение плагина (без уничтожения всех предустановленных элементов)</i> <br>
      </li>
      <li>
        <code>$('.container').Scrollie('enable');</code> 
        <i>// (В разработке) Отключение плагина (без уничтожения всех предустановленных элементов)</i> <br>
      </li>
    </ul>
  </li>
</ul>
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
