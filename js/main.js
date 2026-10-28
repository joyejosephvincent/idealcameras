document.documentElement.classList.add('js');
(function(){
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,
io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
var tc=document.getElementById('tc');
function p(n){return(n<10?'0':'')+n}
if(!rm){setInterval(function(){var f=Math.floor(performance.now()/1000*24),s=Math.floor(f/24);tc.textContent=p(Math.floor(s/3600))+':'+p(Math.floor(s/60)%60)+':'+p(s%60)+':'+p(f%24)},42)}
if(!rm){
var els=[].slice.call(document.querySelectorAll('.eq')),tx=0,ty=0,mx=0,my=0,q=0;
function tick(){q=0;mx+=(tx-mx)*.07;my+=(ty-my)*.07;
var k=innerWidth<760?.35:1,y=scrollY;
els.forEach(function(e){var s=+e.dataset.s,m=+e.dataset.m*(k<1?0:1);
e.style.transform='translate3d('+(mx*m).toFixed(1)+'px,'+(y*s*k+my*m).toFixed(1)+'px,0)'});
if(Math.abs(tx-mx)>.002||Math.abs(ty-my)>.002)req()}
function req(){if(!q)q=requestAnimationFrame(tick)}
addEventListener('scroll',req,{passive:true});
addEventListener('mousemove',function(e){tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5;req()},{passive:true});
req()}
var ENDPOINT='',f=document.getElementById('f'),em=document.getElementById('em'),msg=document.getElementById('msg');
f.addEventListener('submit',function(ev){ev.preventDefault();
var v=em.value.trim();
if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){msg.textContent='Please enter a valid email address.';em.focus();return}
if(f.website.value)return;
function ok(){msg.textContent='You’re on the list. We’ll email you when we launch.';f.reset()}
if(ENDPOINT){fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({email:v})}).then(function(r){r.ok?ok():msg.textContent='Something went wrong. Please try again.'}).catch(function(){msg.textContent='Network error. Please try again.'})}
else{try{var a=JSON.parse(localStorage.getItem('ic_notify')||'[]');a.push(v);localStorage.setItem('ic_notify',JSON.stringify(a))}catch(e){}ok()}
})})();

/* ===== hover animations ===== */
(function(){
var fine=matchMedia('(hover:hover) and (pointer:fine)').matches,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!fine||rm)return;
/* logo 3D tilt + shine */
var slate=document.querySelector('.slate'),logo=document.getElementById('logo');
if(slate&&logo){
slate.addEventListener('pointermove',function(e){var r=slate.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
slate.classList.add('tilt');slate.style.setProperty('--mx',x*100+'%');slate.style.setProperty('--my',y*100+'%');
logo.style.transform='rotateY('+((x-.5)*22).toFixed(2)+'deg) rotateX('+((.5-y)*18).toFixed(2)+'deg) scale(1.06)'});
slate.addEventListener('pointerleave',function(){slate.classList.remove('tilt');logo.style.transform=''})}
/* hero spotlight */
var hero=document.querySelector('.hero');
if(hero){hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();hero.style.setProperty('--sx',(e.clientX-r.left)+'px');hero.style.setProperty('--sy',(e.clientY-r.top)+'px');hero.classList.add('hot')});
hero.addEventListener('pointerleave',function(){hero.classList.remove('hot')})}
/* card light follows cursor */
document.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--cx',(e.clientX-r.left)+'px');c.style.setProperty('--cy',(e.clientY-r.top)+'px')})});
})();
