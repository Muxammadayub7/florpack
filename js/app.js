const hamburger = document.querySelector('.hambuger__menu')
    const modal = document.querySelector('.side__modal')
    const overlay = document.querySelector('.overlay')
    const closeBtn = document.querySelector('.modal__close')

    hamburger.addEventListener('click', () => {
      modal.classList.add('active')
      overlay.classList.add('active')
    })

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active')
      overlay.classList.remove('active')
    })

    overlay.addEventListener('click', () => {
      modal.classList.remove('active')
      overlay.classList.remove('active')
    });