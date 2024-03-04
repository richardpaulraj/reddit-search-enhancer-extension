// 'use strict'

const observe = () => {
  const mainInputBox = document.querySelector('.RNNXgb') //Player
  if (!mainInputBox) {
    return
  }

  const svgns = 'http://www.w3.org/2000/svg'
  const voiceBtn = document.querySelector('.XDyW0e') //Setting

  //Advanced Playback btn
  const redditIcon = document.querySelector('.redditIcon')

  if (voiceBtn && !redditIcon) {
    const redditIcon = Object.assign(voiceBtn.cloneNode(true), {
      textContent: '',
      style: '',
      title: '',
    })

    redditIcon.classList.replace('XDyW0e', 'redditIcon')

    const svg = document.createElementNS(svgns, 'svg')
    svg.setAttribute('height', '100%')
    svg.setAttribute('width', '100%')
    svg.setAttribute('viewBox', '0 0 42 42')

    // Create image element
    const image = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'image'
    )
    image.setAttribute(
      'href',
      'https://img.icons8.com/ios/100/FA5252/xbox-r.png'
    )

    image.classList.add('icon')
    image.setAttribute('width', '24')
    image.setAttribute('height', '24')
    image.setAttribute('x', '9')
    image.setAttribute('y', '9')

    // Append image to SVG
    svg.appendChild(image)

    redditIcon.appendChild(svg)

    voiceBtn.parentNode.insertBefore(redditIcon, voiceBtn)

    tooltipText()
    toggleTooltip(redditIcon)
  }
}

function tooltipText() {
  const tooltipDisplayText = `
    <div id='tooltipText'>Reddit Search</div>
    `
  const mainInputBox = document.querySelector('.RNNXgb') //Player

  mainInputBox.appendChild(
    document.createRange().createContextualFragment(tooltipDisplayText)
  )
}

function toggleTooltip(icon) {
  const toggle = document.getElementById(`tooltipText`)

  if (icon && toggle) {
    icon.addEventListener('mouseenter', () => {
      toggle.style.display = 'block'
    })
    icon.addEventListener('mouseleave', () => {
      toggle.style.display = 'none'
    })
  }
}

addEventListener('load', observe)
