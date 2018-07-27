window.onload = () => {
  principalPageSplash();
}

function principalPageSplash() {
  setTimeout(function(){ 
    principalPage.style.display = 'none';
    mapPage.style.display = 'block'; 
  }, 3000);
}
