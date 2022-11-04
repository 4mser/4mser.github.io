new fullpage('#fullpage',  {
    fitToSection: true,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css3: true,
    easingcss3: 'ease-out',

    //Barra de Navegación 
    menu: '#menu',
    /* navigationTooltips: ['Inicio', 'Productos', 'Contacto'], */
    showActiveTooltip: false,

    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelectorAll('div h1');
        const indicador = document.getElementById('indicador')

          
        const tl = new TimelineMax({delay: 0.2});
        const t2 = new TimelineMax({delay: 0.2});
        const t3 = new TimelineMax({delay: 0.5});
        const t4 = new TimelineMax({delay: 0.5});
        const t5 = new TimelineMax({delay: 0});
        const t6 = new TimelineMax({delay: 0});
        const t7 = new TimelineMax({delay: 0});

        t4.fromTo(title, 0.5, { y: "70", opacity: 0}, { y: 0, opacity: 1});

        if(destination.index === 0) {
          t5.fromTo(indicador, 0.1, {rotation: 0}, {rotation:0});

          
        }
        


        if(destination.index === 1) {
          const a1 = document.getElementById('a1');
          const a2 = document.getElementById('a2');
          const a3 = document.getElementById('a3');
          const a4 = document.getElementById('a4');
          const a5 = document.getElementById('a5');
          const a6 = document.getElementById('a6');
          const a7 = document.getElementById('a7');
          const a8 = document.getElementById('a8');
          const space = document.getElementById('space');
          const skills = document.getElementById('skills');
          const about = document.getElementById('about');
          const indicador = document.getElementById('indicador');

          

          t6.fromTo(indicador, 0.1, {rotation: 0}, {rotation:28});
          
          tl.fromTo(about, 0.5, { y: "0", x:"-300", opacity: 0}, { x: '0',y: 0, opacity: 1});

          t2.fromTo(space, 1, { y: "0", x:"-300", opacity: 0}, { x: '0',y: 0, opacity: 1});

          t2.fromTo(skills, 0.5, {y: "0", x:"100", opacity: 0}, { x: '0',y: 0, opacity: 1});

          

          t3.fromTo(a1, 0.2, { y: "-50", opacity: 0}, { x: '0',y: 0, opacity: 1});

          t3.fromTo(a2, 0.2, { y: "-50", opacity: 0}, { x: '0',y: 0, opacity: 1});

          t3.fromTo(a3, 0.2, { y: "-50", opacity: 0}, { x: '0',y: 0, opacity: 1});

          t3.fromTo(a4, 0.2, { y: "-50", opacity: 0}, { x: '0',y: 0, opacity: 1});

          t3.fromTo(a5, 0.2, { y: "-50", opacity: 0}, { x: '0',y: 0, opacity: 1});

          t3.fromTo(a6, 0.2, { y: "-50", opacity: 0}, { x: '0',y: 0, opacity: 1});

          t3.fromTo(a7, 0.3, { y: "50", opacity: 0}, { x: '0',y: 0, opacity: 1});

          };

          if(destination.index === 2) {
            t7.fromTo(indicador, 0.1, {rotation: 50}, {rotation:56});
          }
    }
   
});



document.addEventListener('mousemove', move);
function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 350;
    const y = (window.innerHeight - e.pageY * speed) / 300;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    layer.style.transition = '.1s';
  })
};


 
 const dot = document.querySelector('.dot');
 const dot2 = document.querySelector('.dot2');
 const dot3 = document.querySelector('.dot3');
 const dot4 = document.querySelector('.dot4');
 const dot5 = document.querySelector('.dot5');
 const dot6 = document.querySelector('.dot6');
 const cursor = document.querySelector('.cursor');
 document.addEventListener('mousemove', (e) => {
  cursor.style.left = (e.pageX - 10) + 'px';
  cursor.style.top = (e.pageY - 10)+ 'px';

  dot.style.left = e.pageX + 'px';
  dot.style.top = e.pageY+ 'px';

  dot2.style.left = e.pageX + 'px';
  dot2.style.top = e.pageY+ 'px';

  dot3.style.left = e.pageX + 'px';
  dot3.style.top = e.pageY+ 'px';

  dot4.style.left = e.pageX + 'px';
  dot4.style.top = e.pageY+ 'px';

  dot5.style.left = e.pageX + 'px';
  dot5.style.top = e.pageY+ 'px';

  dot6.style.left = e.pageX + 'px';
  dot6.style.top = e.pageY+ 'px';
 });



 

/* const wea = document.getElementById('minombre');

wea.addEventListener('click', () => {
var video = document.getElementById('video');

video.src = './assets/images/tunel.mp4';
}) */

const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');

video1.addEventListener('click', () => {
var fondo = document.getElementById('video');

fondo.src = './images/nebula.mp4';
});

video2.addEventListener('click', () => {
var fondo = document.getElementById('video');

fondo.src = './images/tunel.mp4';
});

video3.addEventListener('click', () => {
var fondo = document.getElementById('video');

fondo.src = './images/sunset.mp4';
});


/* btn navegador */

const btn = document.querySelector('.nav');

let menuOpen = false;
btn.addEventListener('click', () => {
if(!menuOpen) {
  btn.classList.add('open');
  menuOpen = true;

  const nav = document.querySelector('.navegadorContainer');
  nav.classList.add('open');

} else {
  btn.classList.remove('open');
  menuOpen = false;

  const nav = document.querySelector('.navegadorContainer');
  nav.classList.remove('open')
}
});

const minombre = document.getElementById('minombre');

minombre.addEventListener('mouseenter', () => {
    const img = document.querySelector('.imagenYo');

    minombre.classList.add('stroke');
    img.classList.add('yey');
});

minombre.addEventListener('mouseleave', () => {
    const img = document.querySelector('.imagenYo');

    minombre.classList.remove('stroke');
    img.classList.remove('yey');
})



/* sección works & skills */

const display = document.getElementById('works');


const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');
const a7 = document.getElementById('a7');
const a8 = document.getElementById('a8');



const t1 = document.querySelectorAll('.t1');

console.log(t1);

const works = document.getElementById('works');

const space = document.getElementById('space');

a1.addEventListener('click', () => {
    
    /* display.classList.toggle('display'); */

    
});


/* animación cursor hover */

a1.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

a1.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});


a2.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

a2.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});


a3.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

a3.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});


a4.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

a4.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});



a5.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

a5.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});


a6.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

a6.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});

a7.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

a7.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});


minombre.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

minombre.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});


const container = document.querySelector('.container');

container.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

container.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});


const aboutme = document.getElementById('aboutme');
const home = document.getElementById('home');
const somecode = document.getElementById('somecode');
const contact = document.getElementById('contact');


aboutme.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

aboutme.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});

home.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

home.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});

somecode.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

somecode.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});

contact.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

contact.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});

const botonNavegador = document.querySelector('.nav');

botonNavegador.addEventListener('mouseenter', () => {
  cursor.classList.add('cursorHover');
  
  dot2.classList.add('dotOpen');
  dot3.classList.add('dotOpen');
  dot4.classList.add('dotOpen');
  dot5.classList.add('dotOpen');
  dot6.classList.add('dotOpen');
});

botonNavegador.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursorHover');
  
  dot2.classList.remove('dotOpen');
  dot3.classList.remove('dotOpen');
  dot4.classList.remove('dotOpen');
  dot5.classList.remove('dotOpen');
  dot6.classList.remove('dotOpen');
});


// abrir los contenedores



a1.addEventListener('click', () => {
  a1open = document.querySelector('.a1open');
  a1open.classList.add('works');
  a1.style.opacity = ('0');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('0');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('0');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('0');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('0');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('0');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('0');
  a7.style.transition = ('0.5s');
});

const boton = document.getElementById('btnWorks');

boton.addEventListener('click', () => {
  const a1open = document.querySelector('.a1open');
  a1open.classList.remove('works');
  a1.style.opacity = ('1');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('1');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('1');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('1');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('1');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('1');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('1');
  a7.style.transition = ('0.5s');
});


/* 2 */

a2.addEventListener('click', () => {
  const a2open = document.querySelector('.a2open');
  a2open.classList.add('works');
  a1.style.opacity = ('0');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('0');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('0');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('0');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('0');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('0');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('0');
  a7.style.transition = ('0.5s');
});


const boton2 = document.getElementById('btnWorks2')

boton2.addEventListener('click', () => {
  const a2open = document.querySelector('.a2open');
  a2open.classList.remove('works');
  a1.style.opacity = ('1');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('1');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('1');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('1');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('1');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('1');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('1');
  a7.style.transition = ('0.5s');
});

/* 3 */

a3.addEventListener('click', () => {
  const a3open = document.querySelector('.a3open');
  a3open.classList.add('works');
  a1.style.opacity = ('0');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('0');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('0');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('0');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('0');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('0');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('0');
  a7.style.transition = ('0.5s');
});


const boton3 = document.getElementById('btnWorks3')

boton3.addEventListener('click', () => {
  const a3open = document.querySelector('.a3open');
  a3open.classList.remove('works');
  a1.style.opacity = ('1');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('1');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('1');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('1');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('1');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('1');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('1');
  a7.style.transition = ('0.5s');
});

/* 4 */

a4.addEventListener('click', () => {
  const a4open = document.querySelector('.a4open');
  a4open.classList.add('works');
  a1.style.opacity = ('0');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('0');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('0');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('0');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('0');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('0');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('0');
  a7.style.transition = ('0.5s');
});


const boton4 = document.getElementById('btnWorks4')

boton4.addEventListener('click', () => {
  const a4open = document.querySelector('.a4open');
  a4open.classList.remove('works');
  a1.style.opacity = ('1');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('1');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('1');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('1');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('1');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('1');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('1');
  a7.style.transition = ('0.5s');
});

/* 5 */

a5.addEventListener('click', () => {
  const a5open = document.querySelector('.a5open');
  a5open.classList.add('works');
  a1.style.opacity = ('0');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('0');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('0');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('0');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('0');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('0');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('0');
  a7.style.transition = ('0.5s');
});


const boton5 = document.getElementById('btnWorks5')

boton5.addEventListener('click', () => {
  const a5open = document.querySelector('.a5open');
  a5open.classList.remove('works');
  a1.style.opacity = ('1');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('1');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('1');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('1');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('1');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('1');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('1');
  a7.style.transition = ('0.5s');
});

/* 6 */

a6.addEventListener('click', () => {
  const a6open = document.querySelector('.a6open');
  a6open.classList.add('works');
  a1.style.opacity = ('0');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('0');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('0');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('0');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('0');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('0');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('0');
  a7.style.transition = ('0.5s');
});


const boton6 = document.getElementById('btnWorks6')

boton6.addEventListener('click', () => {
  const a6open = document.querySelector('.a6open');
  a6open.classList.remove('works');
  a1.style.opacity = ('1');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('1');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('1');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('1');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('1');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('1');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('1');
  a7.style.transition = ('0.5s');
});

/* 7 */

a7.addEventListener('click', () => {
  const a7open = document.querySelector('.a7open');
  a7open.classList.add('works');
  a1.style.opacity = ('0');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('0');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('0');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('0');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('0');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('0');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('0');
  a7.style.transition = ('0.5s');
});


const boton7 = document.getElementById('btnWorks7')

boton7.addEventListener('click', () => {
  const a7open = document.querySelector('.a7open');
  a7open.classList.remove('works');
  a1.style.opacity = ('1');
  a1.style.transition = ('0.5s');

  a2.style.opacity = ('1');
  a2.style.transition = ('0.5s');

  a3.style.opacity = ('1');
  a3.style.transition = ('0.5s');

  a4.style.opacity = ('1');
  a4.style.transition = ('0.5s');

  a5.style.opacity = ('1');
  a5.style.transition = ('0.5s');

  a6.style.opacity = ('1');
  a6.style.transition = ('0.5s');

  a7.style.opacity = ('1');
  a7.style.transition = ('0.5s');
});


/* sección libros */

const divulgacion = document.getElementById('divulgacion');
const ficcion = document.getElementById('ficcion');
const novelas = document.getElementById('novelas');

// abre la sección de libros divulgación

divulgacion.addEventListener('click', () => {
  const libros = document.getElementById('libros');
  libros.classList.add('librosAbiertos');
  const about = document.getElementById('about');
  const librosRecomendados = document.getElementById('librosRecomendados');


  const skills = document.getElementById('skills');
  const space = document.getElementById('space');

  about.style.opacity = ('0');
  about.style.transition = ('1s');

  skills.style.opacity = ('0');
  skills.style.transition = ('1s');

  space.style.opacity = ('0');
  space.style.transition = ('1s');

  librosRecomendados.style.opacity = ('0');
  librosRecomendados.style.transition = ('1s');

  

  
});

// cierra la sección de libros de divulación

const btn8 = document.getElementById('btn8');

btn8.addEventListener('click', () => {
  const libros = document.getElementById('libros');
  libros.classList.remove('librosAbiertos');
  const about = document.getElementById('about');
  const librosRecomendados = document.getElementById('librosRecomendados');


  const skills = document.getElementById('skills');
  const space = document.getElementById('space');

  about.style.opacity = ('1');
  about.style.transition = ('0.5s');

  skills.style.opacity = ('1');
  skills.style.transition = ('0.5s');

  space.style.opacity = ('1');
  space.style.transition = ('0.5s');

  librosRecomendados.style.opacity = ('1');
  librosRecomendados.style.transition = ('0.5s');

});

