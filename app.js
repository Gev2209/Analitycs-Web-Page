// const progress = document.querySelector('.new_visi')
// progress.addEventListener('mouseenter',function () {
//         progress.style.backgroundColor = 'blue'
// })
// const progres = document.querySelector('.new_visi')
// progress.addEventListener('mouseleave',function () {
//         progress.style.backgroundColor = 'blue'
// })

// const bar = document.querySelector('.fa-bars')
// bar.addEventListener('mouseenter',function () {
//     bar.style.color = 'blue'
// })
// const bars = document.querySelector('.fa-bars')
// bar.addEventListener('mouseleave',function () {
//     bar.style.color = 'white'
// })

// const bar = document.querySelector('.fa-bars')
// bar.addEventListener('click', function () {
    
// })

const bar = document.querySelector('.fa-bars')
bar.addEventListener('mouseenter', function () {
    bar.style.transform = 'rotate(45deg)',
    bar.style.color = 'red'
    
})
const bars = document.querySelector('.fa-bars')
bar.addEventListener('mouseleave', function () {
    bar.style.transform = 'rotate(360deg)',
    bar.style.color = 'white'
    
})
// const bars = document.querySelector('.fa-bars')
// bar.addEventListener('click', function () {
//     bar.style.transform = 'rotate(360deg)',
//     bar.style.color = 'white'
    
// })
const fixed = document.querySelector('.fixed_')
fixed.addEventListener('click', function () {
    fixed[bar].style.display = 'block'
})