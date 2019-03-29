

fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDpK4O9cq9OkCwfKf0iR2GUskl06NShyjg')
  .then(function(response) {
    return response.json();
  })
  .then(function(results) {
    let fontList = results.items;

    fontList.forEach(function(font){
      let fontDisplay = font.family;
      let fontValue = fontDisplay.replace(' ', '+');

      $('.fonts').append(`<option value="${fontValue}">${fontDisplay}</option>`)
    })
    
  });

  $('.font-submit').on('click touch', function(){
    
    let headingFont = $('.heading-fonts').val();
    let bodyFont = $('.body-fonts').val();
    let selectedFonts = `${headingFont}|${bodyFont}`;
    $('link[rel="stylesheet googleFonts"]').prop('href', `https://fonts.googleapis.com/css?family=${selectedFonts}`);

    $('h1, h2, h3, h4, h5, h6').css('font-family', `"${headingFont.replace('+', ' ')}"`);
    $('body').css('font-family', `"${bodyFont.replace('+', ' ')}"`)
  });

  $('.font-picker-open').on('click touch', function(){
      $('.font-picker .inputs').slideToggle('fast');

  })