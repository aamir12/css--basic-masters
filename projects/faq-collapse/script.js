// const toggles = document.querySelectorAll('.faq-toggle');

// toggles.forEach(toggle => {
//     toggle.addEventListener('click',(event)=>{
//         event.preventDefault();
//         return toggle.parentNode.classList.toggle('active');

//     })
// })


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        return faq.classList.toggle('active')
    })
})