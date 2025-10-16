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

  document.addEventListener('click', () => {
    cf7notifications.forEach((notification) => {
      notification.classList.add('cf7-notification-hidden')
    })
  })

  cf7notifications.forEach((notification) => {
    const cf7form = notification.closest('.wpcf7-form')
    if (!cf7form) return

    cf7form.addEventListener('submit', () => {
      notification.classList.remove('cf7-notification-hidden')

      setTimeout(() => {
        notification.classList.add('cf7-notification-hidden')
      }, 5000)
    })
  })

  /**
   * Hide scrollbars
   */

  // function getScrollbarWidth() {
  //   let div = document.createElement('div')

  //   div.style.overflowY = 'scroll'
  //   div.style.width = '50px'
  //   div.style.height = '50px'

  //   document.body.append(div)
  //   let scrollbarWidth = div.offsetWidth - div.clientWidth

  //   div.remove()

  //   return scrollbarWidth
  // }

  // function isScrollbar() {
  //   const bodyWidth = parseInt(getComputedStyle(document.body).width)
  //   const windowWidth = window.innerWidth

  //   return bodyWidth !== windowWidth
  // }

  // function changeBodyOverflowY(value = '', timeout = null) {
  //   const scrollbarWidth = isScrollbar() ? getScrollbarWidth() + 'px' : ''

  //   if (!timeout) change()
  //   else setTimeout(change, timeout)

  //   function change() {
  //     document.body.style.overflowY = value
  //     document.documentElement.style.overflowY = value

  //     document.body.style.paddingRight = value ? scrollbarWidth : ''

  //     // for fixed elements
  //     // document.querySelector('.lch-header') &&
  //     //   (document.querySelector('.lch-header').style.paddingRight = value
  //     //     ? scrollbarWidth
  //     //     : '')
  //     // document.querySelector('.bazz-widget') &&
  //     //   (document.querySelector('.bazz-widget').style.paddingRight = value
  //     //     ? scrollbarWidth
  //     //     : '')
  //     // document.querySelector('#wpadminbar') &&
  //     //   (document.querySelector('#wpadminbar').style.paddingRight = value
  //     //     ? scrollbarWidth
  //     //     : '')
  //   }
  // }

  /**
   * Popups
   */

  const popupClass = 'popup'

  const isValidIdSelector = (selector) => {
    if (selector && selector.charAt(0).match(/[a-z]/i)) return true
    return false
  }

  const popupOpeners = document.querySelectorAll('[data-popup]')
  let currentPopupOpener = null

  const openPopup = (id, opener = null) => {
    if (!id) return
    id = id.replace(/#/g, '')
    if (!isValidIdSelector(id)) return
    const popup = document.querySelector(`#${id}`)
    if (!popup || !popup.classList.contains(popupClass)) return

    popup.classList.add('active')
    popup.tabIndex = -1
    popup.focus()
    // changeBodyOverflowY('hidden')

    if (opener) currentPopupOpener = opener
  }

  const closePopup = () => {
    const popups = document.querySelectorAll('.' + popupClass)
    popups.forEach((popup) => {
      popup.classList.remove('active')
    })

    // changeBodyOverflowY('', 200)

    if (currentPopupOpener) {
      currentPopupOpener.focus()
      currentPopupOpener = null
    }
  }

  popupOpeners.forEach((opener) => {
    opener.addEventListener('click', (e) => {
      e.preventDefault()

      const popupName = opener.dataset.popup
      openPopup(popupName, opener)
    })
  })

  const popupClosers = document.querySelectorAll(
    `.${popupClass}__close, .${popupClass}__close-overlay, [data-popup-close]`
  )

  popupClosers.forEach((closer) => {
    closer.addEventListener('click', (e) => {
      e.preventDefault()

      closePopup()
    })
  })

  // Esc key

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePopup()
    }
  })

  // Encapsulates focus inside popups

  document.addEventListener('keydown', (e) => {
    const popup = e.target.closest(`.${popupClass}`)
    if (!popup) return

    let focusableElems = popup.querySelectorAll(
      'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (Element.prototype.checkVisibility) {
      focusableElems = Array.prototype.filter.call(focusableElems, (elem) => {
        return elem.checkVisibility()
      })
    }

    const firstFocusableElem = focusableElems[0]
    const lastFocusableElem = focusableElems[focusableElems.length - 1]

    if (e.target === firstFocusableElem && e.key == 'Tab' && e.shiftKey) {
      lastFocusableElem.focus()
      e.preventDefault()
    }

    if (e.target === lastFocusableElem && e.key == 'Tab' && !e.shiftKey) {
      firstFocusableElem.focus()
      e.preventDefault()
    }
  })

  /**
   * CF7 Hidden fields
   */

  const hiddenFieldsBtns = document.querySelectorAll('[data-with-hidden-field]')

  hiddenFieldsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('[data-hidden-field-parent]')
      if (!parent) return
      const field = parent.querySelector('[data-hidden-field]')
      if (!field) return
      const fieldName = field.dataset.hiddenField
      const popup = document.querySelector(btn.dataset.popup)
      if (!popup) return
      const hiddenField = popup.querySelector(`[name="${fieldName}"]`)
      if (!hiddenField) return
      hiddenField.value = field.textContent.trim()
    })
  })
})
