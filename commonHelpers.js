import"./assets/styles-d59f2ebc.js";import{f,i as h}from"./assets/vendor-77e16229.js";const t=document.querySelector("[data-start]"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),calendar:document.querySelector("#datetime-picker")};let u=Date.now();t.disabled=!0;let y=Date.now(),d=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<y?(h.error({message:"Please choose a date in the future",messageColor:"#FFFFF0",backgroundColor:"#FF4500",position:"topRight",progressBar:!1,close:!1}),t.disabled=!0):(t.disabled=!1,u=e[0].getTime())}};f('input[type="text"]',p);function S(e){const c=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:i,minutes:l,seconds:m}}function n(e){return String(e).padStart(2,"0")}function b(){d=setInterval(()=>{const e=u-Date.now();if(e<0){clearInterval(d),t.disabled=!0;return}t.disabled=!0,o.calendar.disabled=!0,g(S(e))},1e3)}t.addEventListener("click",b);function g({days:e,hours:r,minutes:a,seconds:s}){o.days.textContent=n(e),o.hours.textContent=n(r),o.minutes.textContent=n(a),o.seconds.textContent=n(s)}
//# sourceMappingURL=commonHelpers.js.map
