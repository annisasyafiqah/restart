const panels = document.querySelectorAll('.panel') //mengambil div panel

//Membuat class panel aktif ketika di klik
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

//Menghapus tanda aktif pada kelas
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}