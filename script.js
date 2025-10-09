document.addEventListener('DOMContentLoaded', () => {
  /**
   * Header
   */

  const headerBurger = document.querySelector('.js-header-burger')
  const headerMenu = document.querySelector('.js-header-nav')
  const headerClose = document.querySelector('.js-header-close')

  function openHeaderMenu() {
    headerMenu.classList.add('active')
  }

  function closeHeaderMenu() {
    headerMenu.classList.remove('active')
  }

  if (headerBurger && headerMenu) {
    headerBurger.addEventListener('click', (e) => {
      if (!headerMenu.classList.contains('active')) e.preventDefault()
      openHeaderMenu()
    })
  }

  if (headerClose && headerMenu) {
    headerClose.addEventListener('click', () => {
      closeHeaderMenu()
    })
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.js-header-nav')) return
    if (e.target.closest('.js-header-burger') && e.defaultPrevented) return
    closeHeaderMenu()
  })
})
