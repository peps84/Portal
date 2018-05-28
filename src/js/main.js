/**
 * 
 * @authors ${author} (${email})
 * @date    2018-05-26
 * @version $Id$
 */

(function(){

	var scrollPoint = 40;
  var myHeader = document.querySelector('header');

  var headerSquish = function (e){
    console.log(window.pageYOffset);

    if(window.pageYOffset > scrollPoint){
      window.requestAnimationFrame(function() {
        myHeader.classList.add('squish');
      });
    }else if(window.pageYOffset <= scrollPoint){
      window.requestAnimationFrame(function() {
        myHeader.classList.remove('squish');
      });
    }
  };

  window.addEventListener('scroll', headerSquish);
})();