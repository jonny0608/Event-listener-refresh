// Helper function: replaces content inside #out
function render(html) {
   document.getElementById('out').innerHTML = html
}

/* -------------------------------
   Demo 1: Click (counter)
-------------------------------- */
let clickCount = 0

document.getElementById('btnClick').addEventListener('click', () => {
   clickCount++

   render(`<p> You clicked my button! it's been clicked ${clickCount} time${clickCount === 1 ? '' : 's'}.</p>`)
})
/* --------------------------------------
   Demo 2: Double-click (toggle highlight)
--------------------------------------- */
const dblCard = document.getElementById('dblCard')
dblCard.addEventListener('dblclick', () => {
   dblCard.classList.toggle('activated')
   const state = dblCard.classList.contains('activated') ? 'ON' : 'OFF'
   render(`<p> the highlight is ${state}.</p>`)
})
/* --------------------------------
   Demo 3: Keypress (show key/code)
--------------------------------- */
const kbKey = document.getElementById('kbKey')
const kbCode = document.getElementById('kbCode')

document.addEventListener('keydown', e => {
   kbKey.textContent = e.key === ' ' ? '(space)' : e.key 
   kbCode.textContent = e.code
})
/* ----------------------------------------
   Demo 4: Show Time (12-hour format + day)
----------------------------------------- */


/* -------------------------
   Utility: Clear output
-------------------------- */
document.getElementById('btnClear').addEventListener('click', () => {
   render('<span class="text-secondary">Output cleared.</span>')
})

/* =================================================
   🔥 Event Listeners Challenge (Pick ONE to complete)

   Option A — Hover Highlight + Counter
   - Create a variable to track how many times the card was hovered
   - Add event listeners for mouseenter and mouseleave on the card
   - On mouseenter: add a highlight class, increase the counter, and show the count in #out
   - On mouseleave: remove the highlight class and show a message in #out
   


  
   Option C — Live Input Mirror
   - Add a text input element to the page
   - On every keystroke: update #out with a message that includes the input value
   - If the input is empty: show a neutral placeholder message instead
   - On focus: add a border/shadow class to the input
   - On blur: remove those classes and make sure #out shows the right message
================================================== */

const hoverCard = document.getElementById('hoverCard')
let hoverCount = 0

hoverCard.addEventListener('mouseenter', () => {
   hoverCount++
   render(`<p> You hovered over the card! It's been hovered ${hoverCount} time${hoverCount === 1 ? '' : 's'}.</p>`)
   

})