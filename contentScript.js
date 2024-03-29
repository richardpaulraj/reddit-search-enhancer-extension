// 'use strict'

const observe = () => {
  const mainInputBox = document.querySelector('.RNNXgb') //Player
  if (!mainInputBox) {
    return
  }

  const svgns = 'http://www.w3.org/2000/svg'
  const voiceBtn = document.querySelector('.XDyW0e') //Setting

  //Advanced Playback btn

  if (voiceBtn && !document.querySelector('.redditIcon')) {
    const redditIcon = voiceBtn.cloneNode(true)

    // Remove tooltip-related attributes and content
    redditIcon.removeAttribute('data-tooltip')
    redditIcon.removeAttribute('title')
    redditIcon.removeAttribute('jsname')
    redditIcon.removeAttribute('jscontroller')
    redditIcon.removeAttribute('jsaction')

    redditIcon.setAttribute('aria-label', 'Reddit Search')

    // Clear innerHTML if tooltip content is included in it
    redditIcon.innerHTML = ''

    redditIcon.classList.replace('XDyW0e', 'redditIcon')

    const svg = document.createElementNS(svgns, 'svg')
    svg.setAttribute('height', '100%')
    svg.setAttribute('width', '100%')
    svg.setAttribute('viewBox', '0 0 32 32')
    svg.setAttribute('fill', 'none')
    svg.classList.add('svgElem')
    // Create image element
    svg.innerHTML = `
        <path d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z" fill="#FC471E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0193 8.90951C20.0066 8.98984 20 9.07226 20 9.15626C20 10.0043 20.6716 10.6918 21.5 10.6918C22.3284 10.6918 23 10.0043 23 9.15626C23 8.30819 22.3284 7.6207 21.5 7.6207C21.1309 7.6207 20.7929 7.7572 20.5315 7.98359L16.6362 7L15.2283 12.7651C13.3554 12.8913 11.671 13.4719 10.4003 14.3485C10.0395 13.9863 9.54524 13.7629 9 13.7629C7.89543 13.7629 7 14.6796 7 15.8103C7 16.5973 7.43366 17.2805 8.06967 17.6232C8.02372 17.8674 8 18.1166 8 18.3696C8 21.4792 11.5817 24 16 24C20.4183 24 24 21.4792 24 18.3696C24 18.1166 23.9763 17.8674 23.9303 17.6232C24.5663 17.2805 25 16.5973 25 15.8103C25 14.6796 24.1046 13.7629 23 13.7629C22.4548 13.7629 21.9605 13.9863 21.5997 14.3485C20.2153 13.3935 18.3399 12.7897 16.2647 12.7423L17.3638 8.24143L20.0193 8.90951ZM12.5 18.8815C13.3284 18.8815 14 18.194 14 17.3459C14 16.4978 13.3284 15.8103 12.5 15.8103C11.6716 15.8103 11 16.4978 11 17.3459C11 18.194 11.6716 18.8815 12.5 18.8815ZM19.5 18.8815C20.3284 18.8815 21 18.194 21 17.3459C21 16.4978 20.3284 15.8103 19.5 15.8103C18.6716 15.8103 18 16.4978 18 17.3459C18 18.194 18.6716 18.8815 19.5 18.8815ZM12.7773 20.503C12.5476 20.3462 12.2372 20.4097 12.084 20.6449C11.9308 20.8802 11.9929 21.198 12.2226 21.3548C13.3107 22.0973 14.6554 22.4686 16 22.4686C17.3446 22.4686 18.6893 22.0973 19.7773 21.3548C20.0071 21.198 20.0692 20.8802 19.916 20.6449C19.7628 20.4097 19.4524 20.3462 19.2226 20.503C18.3025 21.1309 17.1513 21.4449 16 21.4449C15.3173 21.4449 14.6345 21.3345 14 21.1137C13.5646 20.9621 13.1518 20.7585 12.7773 20.503Z" fill="white"/>
    `

    redditIcon.appendChild(svg)

    voiceBtn.parentNode.insertBefore(redditIcon, voiceBtn)

    const tooltipDisplayText = `
    <div id='tooltipText'>Reddit Search</div>
    `
    mainInputBox.appendChild(
      document.createRange().createContextualFragment(tooltipDisplayText)
    )

    const tooltipText = document.getElementById(`tooltipText`)

    if (redditIcon && tooltipText) {
      redditIcon.addEventListener('mouseenter', () => {
        tooltipText.style.display = 'block'
      })
      redditIcon.addEventListener('mouseleave', () => {
        tooltipText.style.display = 'none'
      })
    }

    toggleClassBasedOnURL()
    window.addEventListener('popstate', toggleClassBasedOnURL)

    redditIcon.addEventListener('click', (e) => {
      const textArea = document.querySelector('textarea.gLFyf')
      const textValue = textArea.value.trim()

      if (textValue) {
        let searchTerm = encodeURIComponent(textValue)

        if (!searchTerm.includes('%20site%3Areddit.com')) {
          searchTerm += ' site:reddit.com'
        } else if (searchTerm.includes('%20site%3Areddit.com')) {
          searchTerm = searchTerm.replace('%20site%3Areddit.com', '')
        }

        window.location.href = `https://www.google.com/search?q=${searchTerm}`
      }
    })
  }
}
observe()

function toggleClassBasedOnURL() {
  const tooltipText = document.getElementById(`tooltipText`)
  const svgElem = document.querySelector('.svgElem')

  const currentUrl = window.location.href
  const containsSearch = currentUrl.includes('/search?q=')

  if (containsSearch) {
    tooltipText.classList.add('insideTooltipText') //Positions
    svgElem.classList.add('insideSvgElem') //Sizes
  } else {
    tooltipText.classList.remove('insideTooltipText') //Positions
    svgElem.classList.remove('insideSvgElem') //Sizes
  }
}
