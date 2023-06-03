document.querySelector('#contact-button').addEventListener('click', e => {
   
   document.querySelector(".modal").classList.add('modal-show')
  }) 
  document.querySelector('.modal-close').addEventListener('click', e => {
   
    document.querySelector(".modal").classList.remove('modal-show')
   })
  