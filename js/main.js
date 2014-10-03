define([
  '../addons/lfa-backstage/js/main',
  '../addons/lfa-exercises/js/main',
  './rainbow'
], function (Backstage, Exercises) {
  window.Exercises = Exercises;
  window.firstTimeDoneMessages = [
    'Bravo!',
    'Felicitări!',
    'Excelent!',
    'Corect!',
    'Super!',
    'Impecabil!',
    'Grozav!'
  ];

  var greetings = ['Bun venit!', 'Salut!', 'Salutări!', 'Bună!', 'Ce faci?'];

  var hh = (new Date()).getHours();

  if (hh >= 2 && hh < 12) {
    greetings.push('Bună dimineața!');
  }
  else if (hh > 17 || hh < 2) {
    greetings.push('Bună seara!');
  } else {
    greetings.push('Bună ziua!');
  }

  var useCounter = window.App.storage.getItem('useCounter') || 0;
  useCounter = parseInt(useCounter) + 1;

  var message = greetings[Math.min(Math.floor(Math.random() *greetings.length*1.5), greetings.length-1)];


  if(useCounter < 2){
     message = 'Apasă pentru a afla cum se folosește acest manual!';
  }

  window.setTimeout(function () {
    window.App.trigger('avatar:mood', {
      mood: 'smile',
      message: message,
      interval: 5000,
      icon: 'fa-smile-o'
    });
  }, 4000);

  window.App.storage.setItem('useCounter', useCounter);

  App.storage.setItem('teacherMode', 'off');

  window.Exercises = Exercises;
  window.App.book.on('render', function() {
    $('#textbook a').attr('target', '_blank');
    $('#textbook .minitoc a').attr('target', '');
  });
});
