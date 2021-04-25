const HomeLi = document.querySelector('.homeli a')
const GradeLi = document.querySelector('.gradeli a')
const LibraryLi = document.querySelector('.libraryli a')
const Icons = document.querySelector('.ulIcon').children


GradeLi.addEventListener('click', ()=> {
    
    GradeLi.classList.add('active')
    HomeLi.classList.remove('active')
    LibraryLi.classList.remove('active')
    
})

 
HomeLi.addEventListener('click', ()=> {
    
    HomeLi.classList.add('active')
    GradeLi.classList.remove('active')
    LibraryLi.classList.remove('active')
})

LibraryLi.addEventListener('click', ()=> {
    
    HomeLi.classList.remove('active')
    GradeLi.classList.remove('active')
    LibraryLi.classList.add('active')
})

const Start = document.querySelector('.start')

Start.addEventListener('click', ()=> {
    GradeLi.classList.add('active')
    HomeLi.classList.remove('active')
})


window.onload = function() {
    window.scrollTo(0,0)
}

const classesdiv = document.querySelector('.classes')
const ClassesKind = document.querySelector('.classes-kind')
const ClassesKindH3 = document.querySelector('.classes-kind .sec-head .sec-h3')
const ClassesChapter = document.querySelector('.classes-Chapter')
const ClassesChapterH3 = document.querySelector('.classes-Chapter .sec-head .sec-h3')
const ChapterKind =  document.querySelector('.chapter-kind')
const ChapterKindH3 = document.querySelector('.chapter-kind .sec-head .sec-h3')


const Classes = document.querySelector('.classes .btns').children

for(let i=0;i<Classes.length;i++){
    Classes[i].addEventListener('click', ()=> {
        // classesdiv.style.display = 'none'
        ClassesKind.style.display = 'block'
        classesdiv.style.opacity = '0'
        ClassesKindH3.innerHTML = Classes[i].innerHTML
    })
}

const BtnsKinds = document.querySelector('.classes-kind .language').children

for(let i = 0; i<BtnsKinds.length; i++) {
    BtnsKinds[i].addEventListener('click', ()=> {
        console.log(BtnsKinds[i].innerHTML)
        ClassesKind.style.display = 'none'
        ClassesChapter.style.display = 'block'
        ClassesChapterH3.innerHTML = BtnsKinds[i].innerHTML
    })
}

const ChapterBtns = document.querySelector('.classes-Chapter .btns-chapter').children

for(let i = 0; i<ChapterBtns.length; i++) {
    ChapterBtns[i].addEventListener('click', ()=> {
        ClassesChapter.style.display  = 'none'
        ChapterKind.style.display = 'block'
        ChapterKindH3.innerHTML = ChapterBtns[i].innerHTML
    })
}
