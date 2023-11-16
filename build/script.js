

  function handleFadeIn() {
  const elements = document.querySelectorAll('.fade-in-text');
  
  elements.forEach((element) => {
      const rect = element.getBoundingClientRect();


      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.classList.add('fade-in');
      }
  });
}


handleFadeIn();

window.addEventListener('scroll', handleFadeIn);



function handleFadeOut() {
  const elements = document.querySelectorAll('.fade-in-texts');

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    
    const threshold = window.innerHeight * 0.45; 

    if (rect.top <= threshold && rect.bottom >= -threshold) {
      element.classList.add('fade-in');
    }
  });
}

handleFadeOut();

window.addEventListener('scroll', handleFadeOut);

document.getElementById('video-bg').addEventListener('click', function(e) {
  e.preventDefault();
});
