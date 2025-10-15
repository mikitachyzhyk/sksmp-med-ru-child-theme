document.addEventListener('DOMContentLoaded', () => {
  /**
   * Input mask
   *
   * https://imask.js.org/
   */

  const telInputs = document.querySelectorAll('[type="tel"]')

  var maskOptions = {
    mask: '+{7} 000 000-00-00',
  }

  telInputs.forEach((input) => {
    const imask = IMask(input, maskOptions)

    // https://github.com/uNmAnNeR/imaskjs/issues/152#issuecomment-462054778
    input.addEventListener(
      'focus',
      function () {
        imask.updateOptions({ lazy: false })
      },
      true
    )
    input.addEventListener(
      'blur',
      function () {
        imask.updateOptions({ lazy: true })
      },
      true
    )
  })

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

  /**
   * Contact Form 7 float notification
   */

  const cf7notifications = document.querySelectorAll(
    '.cf7-float-notifications .wpcf7-response-output'
  )

  cf7notifications.forEach((notification) => {
    notification.addEventListener('click', () => {
      const cf7form = notification.closest('.wpcf7-form')
      if (!cf7form) return

      notification.classList.add('cf7-notification-hidden')
      cf7form.addEventListener('submit', () => {
        notification.classList.remove('cf7-notification-hidden')
      })
    })
  })
})
