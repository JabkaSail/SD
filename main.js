// Определяем наборы изображений
var images = {
    'Набовр 1' : [
        'cafe-3537801_1920.jpg',
        'louvre-102840_1280.jpg',
        'hungarian-parliament-77610_1920.jpg'
    ]
};

$(document).ready(function(){ // Когда документ готов
    $('#gallery').gallery();
});

var image1 = new Image();
var image2 = new Image();
var image3 = new Image();



$.fn.gallery = function() {
    var self = this;
    var setimgs;

    this.each(function() {
        var g = this;

        g.load_sets = function(el) { // Функция - загружаем набор изображений
            $.each(images, function(key, value) { 
                $(el).append('<li><a id="'+key+'" href="#" title="'+key+'">'+key+'</a></li>');
            });

            var sets = $(el).find('li a');
            $(sets).click(function() { // Функция - привязываем событие click к набору
                var set = $(this).attr('id');
                g.setimgs = images[set];
                $(g).find('#thumbs').html('');
                g.load_thumbs($(g).find('#thumbs')[0], 0);
            });

            sets[0].click();
        }

        g.load_thumbs = function(el, index) { // Функция - загрузка миниатюр
            $(el).append('<li><img id="' + g.setimgs[index] + '" src="images/thumb_' + g.setimgs[index] + '" /></li>');

            var tn = new Image();
            $(tn).load(function() {
                var a = $($(el).find('li')[index]).find('img')[0];
                $(a).append(this);
           var interval =  setInterval(showSlides, 4000);
           var op = 0;
      function showSlides() {
          console.log(op)
          if (op == 0){
      
         var i = "cafe-3537801_1920.jpg";
              image1.addEventListener('load', function() {
                    $(g).find('#photo').css('background-image', 'url(imgs/'+i+')');
              

                    return false;
           
           });
              image1.src = "imgs/cafe-3537801_1920.jpg";
              op=1;
    }
        else if  (op == 1){
         var i = "louvre-102840_1280.jpg";
               image2.addEventListener('load', function() {
                
                    $(g).find('#photo').css('background-image', 'url(imgs/'+i+')');
             
              
                    return false;
           
           });
            image2.src = "imgs/louvre-102840_1280.jpg";
             op=2;
    }
        else if (op == 2){
        var i = "hungarian-parliament-77610_1920.jpg";
              image3.addEventListener('load', function() {
                
                    $(g).find('#photo').css('background-image', 'url(imgs/'+i+')');
             
              
                    return false;
           
           });
          image3.src = "imgs/hungarian-parliament-77610_1920.jpg";
             op = 0;
            }
                };
                if ((index + 1) < g.setimgs.length) {
                    g.load_thumbs(el, (index + 1));
                    $(g).find('#loading strong').html(index + 2);
                } else {
                    $($(g).find('#thumbs li img')[0]).click();
                }
            });
            tn.src = 'imgs/' + g.setimgs[index];
        }

        // Инициализация - загружаем набры для галаереи 
        g.load_sets($(g).find('#sets')[0]);
    });
};