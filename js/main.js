var arrLang = {
    'en': {
      'home': 'Home',
      'about': 'About me',
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'contact': 'Contacts',
      'denis': 'Denis<br/>Novik',
      'occupation': 'UX | UI designer<br/>24 years old, Minsk',
      'description': 'Hi, I&apos;m Denis – UX/UI designer from Minsk.<br>I&apos;m interested in design and everything connected with it.<br><br><br>I&apos;m studying at courses "Web and mobile design interfaces" in IT-Academy.<br><br><br>Ready to implement excellent projects<br>with wonderful people.',
      'progs': 'I work in such programs as',
      'fashion-store': 'Online fashion store - Homepage',
      'reebok-store': 'Reebok Store - Concept',
      'braun-landing': 'Braun Landing Page - Concept',
      'contact-text': 'Want to know more or just chat?<br/>You are welcome!',
      'send': 'Send Message',
      'bottom-text': 'Like me on<br/>LinkedIn, Instagram, Behance, Dribbble',
    },
    'ru': {
      'home': 'Главная',
      'about': 'Обо мне',
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'contact': 'Контакты',
      'denis': 'Денис<br/>Новик',
      'occupation': 'UX | UI дизайнер<br/>24 года, Минск',
      'description': 'Привет, я Денис – UX/UI дизайнер из Минска.<br>Интересуюсь дизайном и всем, что с ним связано.<br><br><br>Учусь на курсе "Дизайн мобильных и веб-интерфейсов" в Академии АйТи.<br><br><br>Готов реализовывать отличные проекты<br/>с замечательными людьми.',
      'progs': 'Я работаю в таких программах как:',
      'fashion-store': 'Интернет-магазин одежды - Главная страница',
      'reebok-store': 'Магазин Reebok - Концепт',
      'braun-landing': 'Лэндинг Braun - Концепт',
      'contact-text': 'Хочешь узнать больше или просто поболтать?<br/>Пожалуйста!',
      'send': 'Отправить сообщение',
      'bottom-text': 'Лайкайте меня на<br/>LinkedIn, Instagram, Behance, Dribbble',
    }
  }
  
  $(function() {
    $('input[type=radio][name=language]').change(function() {
      var lang = $(this).attr('id');

      $('.language').each(function(index, item) {
        $(this).html(arrLang[lang][$(this).attr('key')]);
      });
    });
  });

  