/* WIARM upgrades: navbar, progress bar, preloader, WhatsApp button,
   price CTAs, stats + portfolio, contact form, footer. */
(function () {
  // ======== غيّر البيانات دي ========
  const CFG = {
    phone: '966500000000',            // رقم واتساب بالصيغة الدولية بدون +
    email: 'hello@wiarm.com',
    socials: [
      { name: 'Instagram', url: '#' },
      { name: 'TikTok', url: '#' },
      { name: 'LinkedIn', url: '#' },
      { name: 'X', url: '#' }
    ],
    stats: [
      { n: 50, suffix: '+', ar: 'عميل', en: 'Clients' },
      { n: 300, suffix: '+', ar: 'فيديو', en: 'Videos' },
      { n: 5, suffix: '+', ar: 'سنوات خبرة', en: 'Years' }
    ],
    // ضيف أعمالك هنا: poster = صورة، video = رابط mp4 (اختياري)
    works: [
      { title: 'Brand Film', poster: '', video: '' },
      { title: 'Social Ad', poster: '', video: '' },
      { title: 'AI Campaign', poster: '', video: '' },
      { title: 'Event Coverage', poster: '', video: '' },
      { title: 'Product Shoot', poster: '', video: '' },
      { title: 'Motion Graphics', poster: '', video: '' }
    ]
  };
  const wa = (t) => `https://wa.me/${CFG.phone}?text=${encodeURIComponent(t)}`;

  // ======== CSS ========
  const css = `
  html{scroll-behavior:smooth}
  #wp-pre{position:fixed;inset:0;z-index:100;background:#0f0f10;display:grid;place-items:center;transition:opacity .6s,visibility .6s}
  #wp-pre.hide{opacity:0;visibility:hidden}
  #wp-pre b{font:900 clamp(2.5rem,10vw,5rem)/1 Cairo,sans-serif;letter-spacing:-.07em;animation:wpPulse 1.1s ease-in-out infinite alternate}
  #wp-pre b i{font-style:normal;color:#ee3a63}
  @keyframes wpPulse{to{opacity:.4;transform:scale(.97)}}
  #wp-bar{position:fixed;top:0;left:0;height:3px;width:0;z-index:70;background:linear-gradient(90deg,#b3123f,#ff5c8a);box-shadow:0 0 12px #ee3a63}
  #wp-nav{position:fixed;top:0;inset-inline:0;z-index:60;display:flex;align-items:center;justify-content:space-between;gap:1rem;
    padding:.8rem clamp(1rem,4vw,3rem);padding-top:calc(.8rem + env(safe-area-inset-top,0px));transition:background .3s,backdrop-filter .3s}
  #wp-nav.solid{background:rgba(15,15,16,.72);backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.07)}
  #wp-nav .logo{font:900 1.5rem/1 Cairo,sans-serif;letter-spacing:-.07em;color:#fff;text-decoration:none}
  #wp-nav .logo i{font-style:normal;color:#ee3a63}
  #wp-nav ul{display:none;gap:1.6rem;list-style:none;margin:0;padding:0}
  @media(min-width:900px){#wp-nav ul{display:flex}}
  #wp-nav ul a{color:rgba(255,255,255,.7);text-decoration:none;font-weight:600;font-size:.95rem;position:relative;transition:color .25s}
  #wp-nav ul a:hover,#wp-nav ul a.on{color:#fff}
  #wp-nav ul a.on::after{content:"";position:absolute;inset-inline:0;bottom:-6px;height:2px;border-radius:2px;background:#ee3a63}
  .wp-btn{display:inline-block;background:#ee3a63;color:#fff;font-weight:800;border-radius:9999px;padding:.55rem 1.3rem;text-decoration:none;border:0;cursor:pointer;
    font-family:Cairo,sans-serif;box-shadow:0 0 22px rgba(238,58,99,.45);transition:transform .25s,box-shadow .25s}
  .wp-btn:hover{transform:translateY(-2px);box-shadow:0 0 32px rgba(238,58,99,.75)}
  #wp-wa{position:fixed;bottom:calc(1.2rem + env(safe-area-inset-bottom,0px));right:1.2rem;z-index:60;width:3.6rem;height:3.6rem;border-radius:50%;
    background:#25d366;display:grid;place-items:center;box-shadow:0 8px 24px rgba(0,0,0,.5);animation:wpRing 2.4s infinite}
  #wp-wa svg{width:1.9rem;height:1.9rem;fill:#fff}
  @keyframes wpRing{0%{box-shadow:0 0 0 0 rgba(37,211,102,.6)}70%,100%{box-shadow:0 0 0 18px rgba(37,211,102,0)}}
  .price-cta{margin-top:1.4rem;width:100%;text-align:center;background:#fff;color:#ee3a63!important;font-weight:800}
  .price-cta:hover{background:#ffe3ea}
  .wp-sec{position:relative;padding:6rem clamp(1.5rem,5vw,5rem);overflow:hidden}
  .wp-wrap{max-width:72rem;margin:0 auto;position:relative;z-index:2}
  .wp-title{text-align:right;margin-bottom:2.5rem}
  .wp-title h2{font:900 clamp(2.2rem,5vw,3.6rem)/1.2 Cairo,sans-serif}
  .wp-title p{font:700 clamp(1.5rem,3vw,2.2rem)/1.2 Cairo,sans-serif}
  .wp-title hr{border:0;height:3px;background:#ee3a63;border-radius:3px;margin-top:.8rem}
  .wp-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:3rem;text-align:center}
  .wp-stat{padding:1.4rem .5rem;border-radius:1.5rem;background:linear-gradient(180deg,rgba(14,8,10,.9),rgba(163,21,63,.55))}
  .wp-stat b{display:block;font:900 clamp(2rem,6vw,3.6rem)/1 Cairo,sans-serif}
  .wp-stat span{font-weight:600;font-size:.9rem;opacity:.9}
  .wp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:1.2rem}
  .wp-work{position:relative;aspect-ratio:16/10;border-radius:1.4rem;overflow:hidden;background:linear-gradient(135deg,#2a0f18,#ee3a63);
    display:grid;place-items:end start;padding:1rem;font-weight:800;transition:transform .35s,box-shadow .35s}
  .wp-work:hover{transform:translateY(-5px);box-shadow:0 18px 40px -16px rgba(238,58,99,.7)}
  .wp-work video,.wp-work img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  .wp-work span{position:relative;z-index:2;text-shadow:0 2px 8px #000}
  .wp-form{display:grid;gap:.9rem;max-width:34rem;margin-inline-start:auto}
  .wp-form input,.wp-form textarea{width:100%;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:1rem;
    padding:.85rem 1.1rem;color:#fff;font:500 1rem Cairo,sans-serif;outline:0;transition:border-color .25s}
  .wp-form input:focus,.wp-form textarea:focus{border-color:#ee3a63}
  #wp-foot{padding:2rem clamp(1.5rem,5vw,5rem) 5rem;border-top:1px solid rgba(255,255,255,.08);text-align:center;font-size:.9rem;color:rgba(255,255,255,.7)}
  #wp-foot a{color:#fff;margin:0 .6rem;text-decoration:none;font-weight:600}
  #wp-foot a:hover{color:#ee3a63}
  .wp-rv{opacity:0;transform:translateY(34px);transition:opacity .9s,transform .9s}
  .wp-rv.in{opacity:1;transform:none}
  section[id]{scroll-margin-top:4.5rem}
  @media(prefers-reduced-motion:reduce){#wp-wa,#wp-pre b{animation:none}.wp-rv{opacity:1;transform:none}}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  const $ = (h) => { const d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstChild; };

  // ======== Preloader ========
  const pre = $('<div id="wp-pre"><b>WIAR<i>M</i></b></div>');
  document.body.prepend(pre);
  const hidePre = () => setTimeout(() => pre.classList.add('hide'), 500);
  document.readyState === 'complete' ? hidePre() : addEventListener('load', hidePre);
  setTimeout(hidePre, 4000);

  // ======== Progress bar ========
  const bar = $('<div id="wp-bar"></div>'); document.body.appendChild(bar);

  // ======== Navbar ========
  const links = [['about', 'من نحن'], ['services', 'خدماتنا'], ['works', 'أعمالنا'], ['pricing', 'الأسعار'], ['contact', 'تواصل']];
  const nav = $(`<nav id="wp-nav"><a class="logo" href="#hero">WIAR<i>M</i></a>
    <ul>${links.map(([id, t]) => `<li><a href="#${id}" data-id="${id}">${t}</a></li>`).join('')}</ul>
    <a class="wp-btn" href="#contact">تواصل معنا</a></nav>`);
  document.body.appendChild(nav);

  // ======== WhatsApp floating button ========
  document.body.appendChild($(`<a id="wp-wa" href="${wa('مرحباً WIARM، أرغب بالاستفسار عن خدماتكم')}" target="_blank" rel="noopener" aria-label="WhatsApp">
    <svg viewBox="0 0 32 32"><path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.4.7 4.7 1.9 6.600L3 29l7.100-1.800a12.500 12.500 0 0 0 5.900 1.500c6.900 0 12.600-5.600 12.600-12.500S22.900 3 16 3zm0 22.800c-1.900 0-3.800-.5-5.400-1.500l-.4-.2-4.200 1.100 1.100-4.100-.3-.4a10.300 10.300 0 0 1-1.600-5.500C5.200 9.800 10 5.200 16 5.200s10.800 4.600 10.800 10.300S21.900 25.800 16 25.800zm5.700-7.700c-.3-.2-1.900-.9-2.200-1-.3-.1-.5-.2-.7.200s-.8 1-1 1.200c-.2.200-.4.200-.7.100-1.900-.9-3.100-1.700-4.300-3.800-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1 1-1 2.400s1 2.800 1.200 3c.1.200 2.100 3.200 5.100 4.500 1.900.8 2.600.9 3.600.7.600-.1 1.900-.8 2.100-1.500.3-.7.3-1.300.2-1.500-.1-.1-.3-.2-.6-.4z"/></svg></a>`));

  // ======== CTA في كروت الأسعار ========
  document.querySelectorAll('.price-card').forEach((c) => {
    const name = (c.querySelector('.price-name') || {}).textContent || 'باقة';
    const price = (c.querySelector('.price-num') || {}).dataset?.count || '';
    c.appendChild($(`<a class="wp-btn price-cta" target="_blank" rel="noopener"
      href="${wa(`مرحباً WIARM، أرغب بطلب باقة ${name.trim()} (${price} ريال)`)}">اطلب الآن</a>`));
  });
  const pt = document.querySelectorAll('.pt-card');
  pt.forEach((c) => {
    const t = (c.querySelector('.pt-tab') || {}).textContent || 'شراكة';
    c.appendChild($(`<a class="wp-btn" style="margin-top:1rem" target="_blank" rel="noopener"
      href="${wa('مرحباً WIARM، أرغب بالاستفسار عن عقد شراكة: ' + t.replace(/\s+/g, ' ').trim())}">اطلب عرض سعر</a>`));
  });

  // ======== Stats + Portfolio (قبل الأسعار) ========
  const works = $(`<section id="works" class="wp-sec"><div class="wp-wrap">
    <div class="wp-title wp-rv"><h2 dir="rtl">أعمالنا</h2><p>Our Work</p><hr></div>
    <div class="wp-stats wp-rv">${CFG.stats.map((s) => `<div class="wp-stat"><b data-n="${s.n}" data-s="${s.suffix}">0</b><span>${s.ar} | ${s.en}</span></div>`).join('')}</div>
    <div class="wp-grid">${CFG.works.map((w) => `<div class="wp-work wp-rv" ${w.video ? `data-v="${w.video}"` : ''}>
      ${w.poster ? `<img src="${w.poster}" alt="${w.title}" loading="lazy">` : ''}<span>${w.title}</span></div>`).join('')}</div>
  </div></section>`);
  const pricing = document.getElementById('pricing');
  pricing ? pricing.before(works) : document.body.appendChild(works);

  // hover-play للفيديوهات (بيتحمل فقط عند أول hover)
  works.querySelectorAll('.wp-work[data-v]').forEach((el) => {
    let v;
    el.addEventListener('mouseenter', () => {
      if (!v) { v = document.createElement('video'); v.src = el.dataset.v; v.muted = true; v.loop = true; v.playsInline = true; el.prepend(v); }
      v.play();
    });
    el.addEventListener('mouseleave', () => v && v.pause());
  });

  // ======== Contact + Footer ========
  const contact = $(`<section id="contact" class="wp-sec"><div class="wp-wrap">
    <div class="wp-title wp-rv"><h2 dir="rtl">تواصل معنا</h2><p>Let’s Talk</p><hr></div>
    <form class="wp-form wp-rv" id="wp-form" dir="rtl">
      <input name="n" placeholder="الاسم | Name" required>
      <input name="p" placeholder="رقم الجوال | Phone" inputmode="tel">
      <textarea name="m" rows="4" placeholder="تفاصيل مشروعك | Your project" required></textarea>
      <button class="wp-btn" type="submit">إرسال عبر واتساب</button>
    </form></div></section>`);
  document.body.appendChild(contact);
  contact.querySelector('#wp-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    window.open(wa(`الاسم: ${f.get('n')}\nالجوال: ${f.get('p') || '-'}\n${f.get('m')}`), '_blank');
  });
  document.body.appendChild($(`<footer id="wp-foot"><p>${CFG.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join('')}</p>
    <p style="margin-top:.8rem"><a href="mailto:${CFG.email}">${CFG.email}</a></p>
    <p style="margin-top:.8rem">© ${new Date().getFullYear()} WIARM. All rights reserved.</p></footer>`));

  // ======== Scroll behaviors ========
  const onScroll = () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + '%';
    nav.classList.toggle('solid', h.scrollTop > 40);
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // تمييز السكشن الحالي
  const navLinks = [...nav.querySelectorAll('ul a')];
  const spy = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle('on', a.dataset.id === e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(([id]) => { const el = document.getElementById(id); el && spy.observe(el); });

  // reveal + عدّاد الأرقام
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rv = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); rv.unobserve(e.target);
    e.target.querySelectorAll('[data-n]').forEach((b) => {
      const to = +b.dataset.n, s = b.dataset.s || '', t0 = performance.now();
      if (reduce) { b.textContent = to + s; return; }
      const tick = (t) => {
        const p = Math.min((t - t0) / 1400, 1);
        b.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + (p === 1 ? s : '');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }), { threshold: 0.2 });
  document.querySelectorAll('.wp-rv').forEach((el, i) => { el.style.transitionDelay = (i % 6) * 0.1 + 's'; rv.observe(el); });
})();