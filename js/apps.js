window.onload = () => {
    let dateElement = document.getElementById(`timeOutput`);
    let yearElement = document.getElementById(`yearOutput`);
    let eyesElement = document.querySelector('.move-area');
    eyesElement.addEventListener('mousemove', (e) => {
      var eye = $(".righteye");
      var x = (eye.offset().left) + (eye.width() / 2);
      var y = (eye.offset().top) + (eye.height() / 2);
      var rad = Math.atan2(e.pageX - x, e.pageY - y);
      var rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });

      var lefteye = $(".lefteye");
      var x = (lefteye.offset().left) + (lefteye.width() / 2);
      var y = (lefteye.offset().top) + (lefteye.height() / 2);
      var rad = Math.atan2(e.pageX - x, e.pageY - y);
      var rot = (rad * (180 / Math.PI) * -1) + 180;
      lefteye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    let date;
    let now = new Date();

    date = `${now}<br>`;
    year = `<b>Copyright: </b> ${now.getFullYear()}<br>`;

    dateElement.innerHTML = date;
    yearElement.innerHTML = year
};