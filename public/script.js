/* ====== Vignaharta Extrusion Technic - Global JS ====== */

/* ===== Translations (EN / MR) ===== */
const translations = {
  en: {
    "nav.home":"Home","nav.about":"About Us","nav.aboutShort":"About","nav.vm":"Vision & Mission","nav.profile":"Company Profile","nav.products":"Products","nav.contact":"Contact",
    "cta.enquire":"Enquire Now","cta.quote":"Get a Quote","cta.view":"View Products","cta.request":"Request Quote","cta.talk":"Talk to an Engineer","cta.data":"Request Technical Data Sheet","cta.submit":"Send Enquiry",
    "top.phone":"+91 98765 43210","top.email":"info@vignahartaet.com","top.hours":"Mon - Sat: 9:00 AM - 7:00 PM",
    "hero.eyebrow":"Trusted Industrial Machinery Partner",
    "hero.title":"Reliable Extrusion Solutions for <span>Pipe Industries</span>",
    "hero.sub":"Precision-engineered Extruders, Screw Barrels, Gear Boxes, Spare Parts, and Chemical Machinery built for performance, durability, and continuous production.",
    "stat.1":"Years Experience","stat.2":"Industrial Clients","stat.3":"Machines Delivered","stat.4":"Support Available",
    "tag.products":"Our Divisions","head.products":"Engineered Solutions Across Three Specialized Divisions","sub.products":"From complete extrusion lines to precision spare parts and chemical machinery — one trusted partner for every pipe manufacturing need.",
    "vet.title":"VET – Extrusion Machinery","vet.desc":"High-performance extruder machines, screw barrels and gear boxes for PVC, HDPE, CPVC and PPR pipe production.",
    "ve.title":"VE – Industrial Spare Parts","ve.desc":"Genuine, precision-machined spare parts engineered for long life, easy maintenance and reduced downtime.",
    "pe.title":"PE – Pipe Chemical Machinery","pe.desc":"Specialized chemical mixing and dosing machinery for pipe manufacturing, ensuring consistent material quality.",
    "more":"Learn more",
    "tag.why":"Why Choose Us","head.why":"Engineered for Performance. Built for Reliability.","sub.why":"Trusted by leading pipe manufacturers across India for consistent quality, robust engineering, and dedicated technical support.",
    "why.1.t":"Precision Manufacturing","why.1.d":"CNC-machined components with strict quality control at every stage.",
    "why.2.t":"Custom Industrial Solutions","why.2.d":"Tailor-made extrusion lines designed around your production needs.",
    "why.3.t":"Energy Efficient Machines","why.3.d":"Optimized drives and screw geometry that reduce power consumption.",
    "why.4.t":"24/7 Technical Support","why.4.d":"Dedicated service engineers and rapid spare-parts dispatch.",
    "enq.title":"Quick Enquiry","enq.sub":"Tell us what you need — our team will respond within 24 hours.",
    "enq.name":"Your Name","enq.phone":"Phone Number","enq.product":"Select Product","enq.submit":"Submit Enquiry",
    "foot.about":"Vignaharta Extrusion Technic & Vignaharta Enterprise — manufacturer of industrial extrusion machinery, precision spare parts, and chemical machinery for the pipe manufacturing industry.",
    "foot.links":"Quick Links","foot.cats":"Product Categories","foot.contact":"Contact Info",
    "foot.rights":"© 2025 Vignaharta Extrusion Technic. All rights reserved.",
    // About
    "ab.tag":"About Us","ab.title":"A Trusted Name in Industrial Extrusion Machinery",
    "ab.p1":"Vignaharta Extrusion Technic and Vignaharta Enterprise are dedicated to delivering reliable, high-performance machinery for the pipe manufacturing industry across India.",
    "ab.p2":"With years of hands-on engineering expertise, we manufacture extruder machines, screw barrels, gear boxes, precision spare parts and chemical machinery — designed for continuous production, energy efficiency and long service life.",
    "ab.f1":"Decades of engineering expertise","ab.f2":"Strict in-house quality assurance","ab.f3":"Customer-focused service & support","ab.f4":"Customized industrial solutions",
    // Vision & Mission
    "vm.tag":"Vision & Mission","vm.head":"Driving the Future of Pipe Manufacturing","vm.sub":"Our purpose is clear — to empower pipe manufacturers with machinery that performs, lasts and delivers consistent value.",
    "vm.v.title":"Our Vision","vm.v.desc":"To become a trusted industrial machinery partner for pipe manufacturing businesses across India and global markets — recognized for quality, innovation, and engineering excellence.",
    "vm.m.title":"Our Mission","vm.m.desc":"To provide high-quality, reliable, and cost-effective extrusion machinery, spare parts, and technical support that helps our customers achieve uninterrupted production and long-term growth.",
    // Profile
    "cp.tag":"Company Profile","cp.head":"Built on Engineering. Driven by Quality.",
    "cp.p1":"Vignaharta Extrusion Technic is a specialist manufacturer of extruder machines, screw barrels and gear boxes, while Vignaharta Enterprise supplies a comprehensive range of industrial spare parts and chemical machinery for pipe production.",
    "cp.p2":"Our modern manufacturing facility is equipped with CNC machining, heat-treatment, and quality-testing capabilities — enabling us to deliver machinery that meets the highest performance standards expected by leading pipe industries.",
    "hl.1":"Years Experience","hl.2":"Happy Clients","hl.3":"Products Delivered","hl.4":"Support Coverage",
    // Products
    "pr.spec":"Technical Specifications","pr.app":"Application Areas","pr.feat":"Key Features",
    // Contact
    "ct.tag":"Get In Touch","ct.head":"Let's Discuss Your Requirement",
    "ct.sub":"Share your project details and our engineers will get back to you with the best machinery solution.",
    "ct.f.name":"Full Name","ct.f.company":"Company Name","ct.f.email":"Email Address","ct.f.phone":"Phone Number","ct.f.product":"Product Interest","ct.f.msg":"Your Message",
    "ct.success":"✓ Thank you! Your enquiry has been received. Our team will contact you within 24 hours.",
    "ct.addr.t":"Visit Our Office","ct.addr":"Dhok Kunj / Enclave Area, Industrial Zone, Maharashtra, India",
    "ct.phone.t":"Call Us","ct.email.t":"Email Us","ct.wa.t":"WhatsApp","ct.wa.btn":"Chat on WhatsApp",
  },
  mr: {
    "nav.home":"मुख्यपृष्ठ","nav.about":"आमच्याबद्दल","nav.aboutShort":"आमच्याबद्दल","nav.vm":"दृष्टी आणि ध्येय","nav.profile":"कंपनी प्रोफाइल","nav.products":"उत्पादने","nav.contact":"संपर्क",
    "cta.enquire":"चौकशी करा","cta.quote":"कोटेशन मिळवा","cta.view":"उत्पादने पहा","cta.request":"कोटेशन मागवा","cta.talk":"अभियंताशी बोला","cta.data":"तांत्रिक डेटा शीट मागवा","cta.submit":"चौकशी पाठवा",
    "top.phone":"+९१ ९८७६५ ४३२१०","top.email":"info@vignahartaet.com","top.hours":"सोम - शनि: सकाळी ९:०० - संध्या ७:००",
    "hero.eyebrow":"विश्वासू औद्योगिक यंत्रसामग्री भागीदार",
    "hero.title":"पाइप उद्योगांसाठी <span>विश्वसनीय एक्सट्रूजन उपाय</span>",
    "hero.sub":"उच्च कार्यक्षमता, टिकाऊपणा आणि सतत उत्पादनासाठी अचूकपणे डिझाइन केलेले एक्सट्रूडर, स्क्रू बॅरल, गिअर बॉक्स, स्पेअर पार्ट्स आणि केमिकल मशिनरी.",
    "stat.1":"वर्षांचा अनुभव","stat.2":"औद्योगिक ग्राहक","stat.3":"वितरित मशीन","stat.4":"सपोर्ट उपलब्ध",
    "tag.products":"आमचे विभाग","head.products":"तीन विशेष विभागांमध्ये अभियांत्रिकी उपाय","sub.products":"संपूर्ण एक्सट्रूजन लाइनपासून ते अचूक स्पेअर पार्ट्स आणि केमिकल मशिनरीपर्यंत — प्रत्येक पाइप उत्पादन गरजेसाठी एकच विश्वासू भागीदार.",
    "vet.title":"VET – एक्सट्रूजन यंत्रसामग्री","vet.desc":"PVC, HDPE, CPVC आणि PPR पाइप उत्पादनासाठी उच्च-कार्यक्षमता एक्सट्रूडर, स्क्रू बॅरल आणि गिअर बॉक्स.",
    "ve.title":"VE – औद्योगिक स्पेअर पार्ट्स","ve.desc":"दीर्घ आयुष्य, सुलभ देखभाल आणि कमी डाउनटाइमसाठी अचूक मशीन केलेले स्पेअर पार्ट्स.",
    "pe.title":"PE – पाइप केमिकल मशिनरी","pe.desc":"पाइप उत्पादनासाठी विशेष केमिकल मिक्सिंग आणि डोसिंग मशिनरी, सतत सामग्री गुणवत्ता सुनिश्चित करते.",
    "more":"अधिक जाणून घ्या",
    "tag.why":"आम्हाला का निवडावे","head.why":"कार्यक्षमतेसाठी डिझाइन केलेले. विश्वासार्हतेसाठी बांधलेले.","sub.why":"सातत्यपूर्ण गुणवत्ता, मजबूत अभियांत्रिकी आणि समर्पित तांत्रिक सहाय्यासाठी भारतातील अग्रगण्य पाइप उत्पादकांकडून विश्वासू.",
    "why.1.t":"अचूक उत्पादन","why.1.d":"प्रत्येक टप्प्यावर कठोर गुणवत्ता नियंत्रणासह CNC-मशीन केलेले घटक.",
    "why.2.t":"कस्टम औद्योगिक उपाय","why.2.d":"तुमच्या उत्पादन गरजांभोवती डिझाइन केलेल्या टेलर-मेड एक्सट्रूजन लाइन.",
    "why.3.t":"ऊर्जा कार्यक्षम मशीन","why.3.d":"ऑप्टिमाइझ केलेले ड्राइव्ह आणि स्क्रू भूमिती जे वीज वापर कमी करतात.",
    "why.4.t":"२४/७ तांत्रिक सहाय्य","why.4.d":"समर्पित सेवा अभियंते आणि जलद स्पेअर-पार्ट्स पाठवणे.",
    "enq.title":"त्वरित चौकशी","enq.sub":"तुम्हाला काय हवे आहे ते सांगा — आमची टीम २४ तासांच्या आत प्रतिसाद देईल.",
    "enq.name":"तुमचे नाव","enq.phone":"फोन नंबर","enq.product":"उत्पादन निवडा","enq.submit":"चौकशी सबमिट करा",
    "foot.about":"विघ्नहर्ता एक्सट्रूजन टेक्निक आणि विघ्नहर्ता एंटरप्राइझ — पाइप उत्पादन उद्योगासाठी औद्योगिक एक्सट्रूजन मशिनरी, अचूक स्पेअर पार्ट्स आणि केमिकल मशिनरीचे उत्पादक.",
    "foot.links":"त्वरित दुवे","foot.cats":"उत्पादन श्रेणी","foot.contact":"संपर्क माहिती",
    "foot.rights":"© २०२५ विघ्नहर्ता एक्सट्रूजन टेक्निक. सर्व हक्क राखीव.",
    "ab.tag":"आमच्याबद्दल","ab.title":"औद्योगिक एक्सट्रूजन यंत्रसामग्रीमध्ये विश्वासू नाव",
    "ab.p1":"विघ्नहर्ता एक्सट्रूजन टेक्निक आणि विघ्नहर्ता एंटरप्राइझ संपूर्ण भारतातील पाइप उत्पादन उद्योगासाठी विश्वसनीय, उच्च-कार्यक्षमता यंत्रसामग्री वितरित करण्यासाठी समर्पित आहेत.",
    "ab.p2":"अनेक वर्षांच्या प्रत्यक्ष अभियांत्रिकी कौशल्यासह, आम्ही सतत उत्पादन, ऊर्जा कार्यक्षमता आणि दीर्घ सेवा आयुष्यासाठी डिझाइन केलेले एक्सट्रूडर मशीन, स्क्रू बॅरल, गिअर बॉक्स, अचूक स्पेअर पार्ट्स आणि केमिकल मशिनरी तयार करतो.",
    "ab.f1":"दशकांचा अभियांत्रिकी अनुभव","ab.f2":"कठोर अंतर्गत गुणवत्ता हमी","ab.f3":"ग्राहक-केंद्रित सेवा आणि सहाय्य","ab.f4":"कस्टमाइझ केलेले औद्योगिक उपाय",
    "vm.tag":"दृष्टी आणि ध्येय","vm.head":"पाइप उत्पादनाचे भविष्य घडवत आहे","vm.sub":"आमचा हेतू स्पष्ट आहे — पाइप उत्पादकांना अशा यंत्रसामग्रीसह सक्षम करणे जी कार्य करते, टिकते आणि सातत्यपूर्ण मूल्य देते.",
    "vm.v.title":"आमची दृष्टी","vm.v.desc":"गुणवत्ता, नवकल्पना आणि अभियांत्रिकी उत्कृष्टतेसाठी ओळखले जाणारे — संपूर्ण भारत आणि जागतिक बाजारपेठेतील पाइप उत्पादन व्यवसायांसाठी एक विश्वासू औद्योगिक यंत्रसामग्री भागीदार बनणे.",
    "vm.m.title":"आमचे ध्येय","vm.m.desc":"उच्च-गुणवत्तेची, विश्वसनीय आणि किफायतशीर एक्सट्रूजन यंत्रसामग्री, स्पेअर पार्ट्स आणि तांत्रिक सहाय्य प्रदान करणे जे आमच्या ग्राहकांना अखंडित उत्पादन आणि दीर्घकालीन वाढ साध्य करण्यास मदत करते.",
    "cp.tag":"कंपनी प्रोफाइल","cp.head":"अभियांत्रिकीवर आधारित. गुणवत्तेने प्रेरित.",
    "cp.p1":"विघ्नहर्ता एक्सट्रूजन टेक्निक हे एक्सट्रूडर मशीन, स्क्रू बॅरल आणि गिअर बॉक्सचे विशेष उत्पादक आहे, तर विघ्नहर्ता एंटरप्राइझ पाइप उत्पादनासाठी औद्योगिक स्पेअर पार्ट्स आणि केमिकल मशिनरीची विस्तृत श्रेणी पुरवते.",
    "cp.p2":"आमची आधुनिक उत्पादन सुविधा CNC मशीनिंग, उष्णता-उपचार आणि गुणवत्ता-चाचणी क्षमतांनी सुसज्ज आहे — आम्हाला अग्रगण्य पाइप उद्योगांद्वारे अपेक्षित सर्वोच्च कार्यक्षमता मानकांची पूर्तता करणारी यंत्रसामग्री वितरित करण्यास सक्षम करते.",
    "hl.1":"वर्षांचा अनुभव","hl.2":"समाधानी ग्राहक","hl.3":"वितरित उत्पादने","hl.4":"सहाय्य कव्हरेज",
    "pr.spec":"तांत्रिक तपशील","pr.app":"अनुप्रयोग क्षेत्रे","pr.feat":"मुख्य वैशिष्ट्ये",
    "ct.tag":"संपर्कात रहा","ct.head":"तुमच्या आवश्यकतेची चर्चा करूया",
    "ct.sub":"तुमच्या प्रकल्पाचे तपशील शेअर करा आणि आमचे अभियंते तुमच्याशी सर्वोत्तम यंत्रसामग्री उपायासह संपर्क साधतील.",
    "ct.f.name":"पूर्ण नाव","ct.f.company":"कंपनीचे नाव","ct.f.email":"ईमेल पत्ता","ct.f.phone":"फोन नंबर","ct.f.product":"उत्पादन आवड","ct.f.msg":"तुमचा संदेश",
    "ct.success":"✓ धन्यवाद! तुमची चौकशी प्राप्त झाली आहे. आमची टीम २४ तासांच्या आत तुमच्याशी संपर्क साधेल.",
    "ct.addr.t":"आमच्या कार्यालयाला भेट द्या","ct.addr":"ढोक कुंज / एनक्लेव्ह क्षेत्र, औद्योगिक झोन, महाराष्ट्र, भारत",
    "ct.phone.t":"आम्हाला कॉल करा","ct.email.t":"आम्हाला ईमेल करा","ct.wa.t":"व्हॉट्सअ‍ॅप","ct.wa.btn":"व्हॉट्सअ‍ॅपवर चॅट करा",
  }
};

window.translations = translations;
window.applyLang = function(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if(translations[lang] && translations[lang][k]) el.innerHTML = translations[lang][k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const k = el.getAttribute("data-i18n-ph");
    if(translations[lang] && translations[lang][k]) el.setAttribute("placeholder", translations[lang][k]);
  });
  document.querySelectorAll(".lang-toggle button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang===lang);
  });
  localStorage.setItem("vet-lang", lang);
};
const applyLang = window.applyLang;

/* ===== Header / nav / scroll ===== */
function initHeader(){
  const header = document.querySelector(".site-header");
  const onScroll=()=>header && header.classList.toggle("scrolled", window.scrollY>20);
  window.addEventListener("scroll", onScroll); onScroll();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-list");
  const backdrop = document.querySelector(".nav-backdrop");
  const close=()=>{nav?.classList.remove("open");backdrop?.classList.remove("open")};
  toggle?.addEventListener("click",()=>{nav?.classList.toggle("open");backdrop?.classList.toggle("open")});
  backdrop?.addEventListener("click", close);
  nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));

  // Active link
  const path = window.location.pathname.split("/").pop() || "home.html";
  document.querySelectorAll(".nav-list a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href===path) a.classList.add("active");
  });

  // Language toggle
  document.querySelectorAll(".lang-toggle button").forEach(b=>{
    b.addEventListener("click",()=>applyLang(b.dataset.lang));
  });
  applyLang(localStorage.getItem("vet-lang") || "en");
}

/* ===== Reveal on scroll ===== */
function initReveal(){
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}});
  },{threshold:.12});
  els.forEach(el=>io.observe(el));
}

/* ===== Form validation ===== */
function validateField(input){
  const wrap = input.closest(".field") || input.parentElement;
  const err = wrap?.querySelector(".err");
  let msg="";
  const v = input.value.trim();
  if(input.required && !v) msg="This field is required";
  else if(input.type==="email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg="Enter a valid email";
  else if(input.type==="tel" && v && !/^[+\d][\d\s\-]{7,15}$/.test(v)) msg="Enter a valid phone number";
  if(err) err.textContent = msg;
  return !msg;
}
function initForms(){
  document.querySelectorAll("form[data-validate]").forEach(form=>{
    form.querySelectorAll("input,select,textarea").forEach(i=>{
      i.addEventListener("blur",()=>validateField(i));
    });
    form.addEventListener("submit",e=>{
      e.preventDefault();
      let ok=true;
      form.querySelectorAll("input,select,textarea").forEach(i=>{if(!validateField(i)) ok=false});
      if(ok){
        const msg = form.querySelector(".form-msg");
        if(msg){msg.classList.add("success");}
        form.reset();
        setTimeout(()=>msg?.classList.remove("success"),6000);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  initHeader(); initReveal(); initForms();
});
