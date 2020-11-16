document.addEventListener('DOMContentLoaded', () => {

    // show/hide menu
    const $toggleMenuButton = document.getElementById('nav-toggle')
    const $navMenu = document.getElementById('nav-menu')

    if ($toggleMenuButton && $navMenu) {
        $toggleMenuButton.addEventListener('click', () => {
            $navMenu.classList.toggle('show')
        })
    }

    // active link
    const $links = $navMenu.querySelectorAll('.nav__link')
    if ($links)

        $links.forEach($link => $link.addEventListener('click', () => {
            $navMenu.classList.remove('show')
            $links.forEach($link => $link.classList.remove('active'))
            $link.classList.add('active')
        }))


    // Scroll to section
    const $sections = document.querySelectorAll('section[id]')

    window.addEventListener('scroll', () => {
        setTimeout(() => {
            scrollActive() // Anti throttle
        }, 100)
    })

    function scrollActive() {
        const scrollY = window.pageYOffset

        $sections.forEach($section => {
            const sectionHeight = $section.offsetHeight
            const sectionTop = $section.offsetTop - 50
            const sectionId = $section.getAttribute('id')
            const $currentLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

            if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
                $currentLink.classList.add('active')
            } else {
                $currentLink.classList.remove('active')
            }

        })
    }

    // Change header color by scrolling
    window.onscroll = () => {
        const $header = document.getElementById('header')
        if(window.scrollY >= 200)
            $header.classList.add('scrolled-header')
        else
            $header.classList.remove('scrolled-header')
    }


})

