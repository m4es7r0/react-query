export const hoverActive = (obj) => {
    const links = [...obj.current.children].map(e => [...e.children]).flat()
    return function onHover({ target }) {
        if (target.classList.contains('links')) {
            links.forEach(elem => {
                elem.classList.remove('active')
            })
        } else {
            let url = window.location.href
            // eslint-disable-next-line
            switch (url) {
                case 'http://localhost:3000/': {
                    links[0].classList.add('active')
                    break
                }
                case 'http://localhost:3000/super-heroes': {
                    links[1].classList.add('active')
                    break
                }
                case 'http://localhost:3000/rq-super-heroes': {
                    links[2].classList.add('active')
                    break
                }
                case 'http://localhost:3000/rq-parallel': {
                    links[3].classList.add('active')
                    break
                }
                case 'http://localhost:3000/rq-parallel-dynamic': {
                    links[4].classList.add('active')
                    break
                }
                case 'http://localhost:3000/rq-dependent': {
                    links[5].classList.add('active')
                    break
                }
                case 'http://localhost:3000/rq-pagenation': {
                    links[6].classList.add('active')
                    break
                }
            }
        }
    }
}