var typed= new Typed(".role",{
    strings: ["Full-Stack Developer","Software Developer","Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})

// --------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const magicCursor = document.createElement('div');
    magicCursor.classList.add('magic-cursor');
    document.body.appendChild(magicCursor);

    document.addEventListener('mousemove', (e) => {
        magicCursor.style.left = `${e.pageX}px`;
        magicCursor.style.top = `${e.pageY}px`;
    });

    // Hide cursor when not hovering over the cards
    const cards = document.querySelectorAll('.theback');
    cards.forEach(theback => {
        theback.addEventListener('mouseenter', () => {
            magicCursor.style.opacity = '1';
        });
        theback.addEventListener('mouseleave', () => {
            magicCursor.style.opacity = '0';
        });
    });
});

// ----------------------------------------------------------

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
      
        form.classList.add('was-validated')
      }, false)
    })
})()


const form=document.forms.feedback;

const fullname=form.elements.fullname;
const email=form.elements.email;
const ph=form.elements.mobile;
const type=form.elements.type;
const desc=form.elements.description;
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(fullname.value,type.value,email.value,ph.value,desc.value);
    console.log([...new FormData(form)]);
});

// -------------------------------------------------------

let lastScrollTop = 0; // Keep track of last scroll position
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.top = '-100px'; // Adjust this value based on your header height
    } else {
        // Scrolling up
        header.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
