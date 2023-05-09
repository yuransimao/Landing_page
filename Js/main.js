window.onhashchange= (e) =>{
    const oldUrl = e.oldURL.split('#')[1]
    const newUrl = e.newURL.split('#')[1]

    const oldMenu = document.querySelector(`.item a[href='#${oldUrl }'] `)
    const newMenu = document.querySelector(`.item a[href='#${newUrl}'] `)

    oldMenu && oldMenu.classList.remove('active')
    newMenu &&  newMenu.classList.add('active')


    console.log(oldMenu)
}