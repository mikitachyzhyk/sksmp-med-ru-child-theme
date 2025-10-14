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

  // sticky header
  const header = document.querySelector('.lch-header')

  function stickyHeader() {
    if (window.scrollY > 0) {
      header.classList.add('sticky')
    } else {
      header.classList.remove('sticky')
    }
  }

  window.addEventListener('scroll', () => {
    stickyHeader()
  })

  stickyHeader()

  // Mobile menu
  const menuItems = document.querySelectorAll(
    '.lch-header__nav > li.menu-item-has-children'
  )

  menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      // e.preventDefault()
      item.classList.toggle('active')
    })
  })

  // Search toggle
  const searchToggle = document.querySelector('.lch-header__search-toggle')
  const searchForm = document.querySelector('.lch-header__search-form')
  const searchInput = document.querySelector(
    '.lch-header__search-form .search-form input[type="search"]'
  )

  if (searchToggle && searchForm) {
    searchToggle.addEventListener('click', () => {
      searchForm.classList.toggle('active')
      searchInput.focus()
    })
  }

  document.addEventListener('click', (e) => {
    if (
      e.target.closest('.lch-header__search-form') &&
      !e.target.closest(
        '.lch-header__search-form .search-form input[type="search"]'
      )
    ) {
      searchForm.classList.remove('active')
    }
  })

  // close on esc
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      searchForm.classList.remove('active')
    }
  })
})
