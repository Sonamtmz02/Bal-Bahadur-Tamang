/* =========================================================
   SONAM TAMANG — Portfolio Scripting
   Vanilla JS only — language, theme, nav, portfolio, reveal
   ========================================================= */

/* ---------- Translations ---------- */
const translations = {
    en: {
        "a11y.skip": "Skip to content",
        "nav.logo": "Sonam Tamang",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.whatido": "What I Do",
        "nav.work": "My Work",
        "nav.journey": "Journey",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.interests": "Interests",
        "nav.contact": "Contact",

        "hero.eyebrow": "From Nepal · Creative Explorer",
        "hero.fullName": "Bal Bahadur Tamang",
        "hero.akaLabel": "Professionally known as",
        "hero.brandName": "Sonam Tamang",
        "hero.role": "Content Creator • Photographer • Photo Editor",
        "hero.desc": "A growing creative individual from Nepal, learning through practical experience, creating digital work and exploring technology.",
        "hero.ctaJourney": "Explore My Journey",
        "hero.ctaWork": "View My Work",

        "about.tag": "01 — About Me",
        "about.title": "Who I Am",
        "about.p1": "I'm Bal Bahadur Tamang, professionally known as Sonam Tamang — a growing creative individual from Nepal with practical experience in photography, photo editing, studio work and content creation.",
        "about.p2": "I currently work at Laligurans Photo Studio, where I'm involved in photography, photo making, editing, printing, photocopy and other day-to-day studio services.",
        "about.p3": "I don't consider myself perfect or highly advanced in every field. I enjoy learning, practicing and improving step by step. Most of my experience has come through real-world work, experimentation and continuous learning.",
        "about.p4": "Alongside my work, I'm currently studying Bachelor of Education at Chautara Multiple Campus.",
        "about.identityLabel": "Professional Identity",
        "about.identityValue": "Content Creator • Photographer • Photo Editor",
        "about.countryLabel": "Country",
        "about.countryValue": "Nepal",
        "about.currentLabel": "Current Focus",
        "about.currentValue": "Learning, creating, experimenting and improving step by step.",

        "whatido.tag": "02 — What I Do",
        "whatido.title": "My Creative Work",
        "whatido.lead": "Practical work, ongoing learning and creative exploration.",
        "whatido.photo.title": "Photography",
        "whatido.photo.desc": "Practical photography experience through photo studio work.",
        "whatido.editing.title": "Photo Editing",
        "whatido.editing.desc": "Photo editing and image processing while continuously improving editing skills.",
        "whatido.studio.title": "Studio Work",
        "whatido.studio.desc": "Photo making, photography, editing, printing, photocopy and other studio-related work.",
        "whatido.content.title": "Content Creation",
        "whatido.content.desc": "Digital content creation, especially YouTube. Experience growing three different YouTube channels through content creation, consistency, experimentation and learning.",
        "whatido.tech.title": "Technology",
        "whatido.tech.desc": "Technology and digital tools are among my main interests.",
        "whatido.technician.title": "Technical / Technician Skills",
        "whatido.technician.desc": "Interested in learning practical technical and technician-related skills.",

        "experience.tag": "03 — Experience",
        "experience.title": "Studio Experience",
        "experience.role": "General Studio & Creative Work",
        "experience.present": "Present",
        "experience.task1": "Photography",
        "experience.task2": "Photo making",
        "experience.task3": "Photo editing",
        "experience.task4": "Photo printing",
        "experience.task5": "Photocopy",
        "experience.task6": "Image processing",
        "experience.task7": "General studio services",
        "experience.task8": "Other day-to-day studio work",
        "experience.task9": "Learning and practicing editing techniques",

        "content.tag": "04 — Content Creation",
        "content.title": "Creating on YouTube",
        "content.p1": "I have practical experience in YouTube content creation and have grown three different YouTube channels through consistent content creation, experimentation and learning.",
        "content.p2": "This is not about being an expert — it's about staying curious, showing up regularly and letting every video teach something new.",
        "content.item1": "Developing content ideas",
        "content.item2": "Creating content",
        "content.item3": "Publishing",
        "content.item4": "Improving presentation",
        "content.item5": "Experimenting with different content formats",
        "content.item6": "Understanding audience response",
        "content.item7": "Growing channels",

        "education.tag": "05 — Education",
        "education.title": "Education",
        "education.degree": "Bachelor of Education (B.Ed.)",
        "education.inst": "Chautara Multiple Campus",
        "education.status": "Second Year — Currently Studying",

        "interests.tag": "06 — Interests",
        "interests.title": "Things I'm Drawn To",
        "interests.tech.title": "Technology",
        "interests.tech.desc": "Interested in technology and digital tools.",
        "interests.content.title": "Content Creation",
        "interests.content.desc": "Interested in creating and experimenting with digital content.",
        "interests.technician.title": "Technician / Technical Skills",
        "interests.technician.desc": "Interested in learning practical technical skills.",
        "interests.photo.title": "Photography",
        "interests.photo.desc": "Interested in photography.",
        "interests.editing.title": "Photo Editing",
        "interests.editing.desc": "Interested in improving photo editing skills.",

        "journey.tag": "07 — Journey",
        "journey.title": "The Path So Far",
        "journey.lead": "A journey built through doing, not just planning.",
        "journey.item1.title": "Practical Work",
        "journey.item1.desc": "Building experience through real work, not just theory.",
        "journey.item2.title": "Photography & Photo Editing",
        "journey.item2.desc": "Learning to see, compose, edit and refine images.",
        "journey.item3.title": "Studio Experience",
        "journey.item3.desc": "Day-to-day work at Laligurans Photo Studio — hands-on and practical.",
        "journey.item4.title": "YouTube Content Creation",
        "journey.item4.desc": "Growing three YouTube channels through consistency and experimentation.",
        "journey.item5.title": "Education",
        "journey.item5.desc": "Studying Bachelor of Education at Chautara Multiple Campus.",
        "journey.item6.title": "Technology & Technical Skills",
        "journey.item6.desc": "Exploring digital tools and practical technician skills along the way.",
        "journey.item7.title": "Continuous Learning",
        "journey.item7.desc": "Still exploring, still improving, still curious.",

        "achieve.tag": "08 — Achievements",
        "achieve.title": "Small Wins, Honest Progress",
        "achieve.one.title": "Three YouTube Channels Grown",
        "achieve.one.desc": "Experience growing three different YouTube channels through content creation, consistency, experimentation and learning.",
        "achieve.two.title": "Practical Studio Experience",
        "achieve.two.desc": "Ongoing practical experience at Laligurans Photo Studio.",
        "achieve.three.title": "Continuous Learning",
        "achieve.three.desc": "Continuing education while working and developing creative and digital skills.",

        "philosophy.quote": "I don't believe I need to be perfect at everything. I prefer to learn through practical experience, try new things, create, improve and keep moving forward.",
        "philosophy.motto": "Learn. Create. Improve.",

        "currently.tag": "09 — Currently",
        "currently.title": "Right Now",
        "currently.item1": "Working at Laligurans Photo Studio",
        "currently.item2": "Studying B.Ed. Second Year",
        "currently.item3": "Developing photography skills",
        "currently.item4": "Practicing photo editing",
        "currently.item5": "Exploring content creation",
        "currently.item6": "Interested in technology",
        "currently.item7": "Interested in technician-related skills",

        "work.tag": "10 — My Work",
        "work.title": "Selected Work",
        "work.lead": "A growing collection of photography, edits and creative pieces.",
        "work.filter.all": "All",
        "work.filter.photo": "Photography",
        "work.filter.editing": "Editing",
        "work.filter.design": "Design",
        "work.filter.content": "Content",
        "work.viewLink": "View",
        "work.placeholder.cat": "Placeholder",
        "work.placeholder.desc": "Replace this card with real work when ready.",

        "future.tag": "11 — Future",
        "future.title": "Looking Ahead",
        "future.text": "I am still exploring where my interests in technology, content creation, photography and technical skills will take me. For now, my focus is on learning, gaining practical experience, creating, experimenting and improving step by step.",

        "contact.tag": "12 — Contact",
        "contact.title": "Let's Connect",
        "contact.lead": "Feel free to reach out through any of the channels below.",
        "contact.full": "Bal Bahadur Tamang",
        "contact.akaLabel": "Professionally known as",
        "contact.aka": "Sonam Tamang",
        "contact.role": "Content Creator • Photographer • Photo Editor",

        "footer.brand": "Sonam Tamang",
        "footer.fullName": "Bal Bahadur Tamang",
        "footer.role": "Content Creator • Photographer • Photo Editor",
        "footer.motto": "Learning. Creating. Improving.",
        "footer.nav": "Navigate",
        "footer.connect": "Connect",
        "footer.prefs": "Preferences",
        "footer.theme": "Toggle Theme",
        "footer.copy": "Bal Bahadur Tamang. All Rights Reserved."
    },

    ne: {
        "a11y.skip": "सामग्रीमा जानुहोस्",
        "nav.logo": "सोनम तामाङ",
        "nav.home": "गृहपृष्ठ",
        "nav.about": "मेरो बारेमा",
        "nav.whatido": "मैले के गर्छु",
        "nav.work": "मेरो काम",
        "nav.journey": "यात्रा",
        "nav.experience": "अनुभव",
        "nav.education": "शिक्षा",
        "nav.interests": "रुचिहरू",
        "nav.contact": "सम्पर्क",

        "hero.eyebrow": "नेपालबाट · रचनात्मक अन्वेषक",
        "hero.fullName": "बलबहादुर तामाङ",
        "hero.akaLabel": "पेशागत नाम",
        "hero.brandName": "सोनम तामाङ",
        "hero.role": "कन्टेन्ट क्रिएटर • फोटोग्राफर • फोटो एडिटर",
        "hero.desc": "नेपालबाट आएका एक उदाउँदा रचनात्मक व्यक्ति, जो व्यावहारिक अनुभवबाट सिक्दै, डिजिटल काम सिर्जना गर्दै र प्रविधि अन्वेषण गर्दै छन्।",
        "hero.ctaJourney": "मेरो यात्रा हेर्नुहोस्",
        "hero.ctaWork": "मेरो काम हेर्नुहोस्",

        "about.tag": "०१ — मेरो बारेमा",
        "about.title": "म को हुँ",
        "about.p1": "म बलबहादुर तामाङ, पेशागत रूपमा सोनम तामाङ — नेपालबाट आएका एक उदाउँदा रचनात्मक व्यक्ति, जसलाई फोटोग्राफी, फोटो एडिटिङ, स्टुडियो काम र कन्टेन्ट क्रिएसनमा व्यावहारिक अनुभव छ।",
        "about.p2": "म अहिले लालीगुराँस फोटो स्टुडियोमा काम गर्छु, जहाँ म फोटोग्राफी, फोटो बनाउने, एडिटिङ, प्रिन्टिङ, फोटोकपी र अन्य दैनिक स्टुडियो सेवाहरूमा संलग्न छु।",
        "about.p3": "म आफूलाई हरेक क्षेत्रमा पूर्ण वा धेरै उन्नत मान्दिनँ। म सिक्न, अभ्यास गर्न र चरणबद्ध रूपमा सुधार गर्न मन पराउँछु। मेरो अधिकांश अनुभव वास्तविक काम, प्रयोग र निरन्तर सिकाइबाट आएको हो।",
        "about.p4": "कामसँगै, म अहिले चौतारा बहुमुखी क्याम्पसमा शिक्षाशास्त्रमा स्नातक (बी.एड.) अध्ययन गर्दै छु।",
        "about.identityLabel": "पेशागत पहिचान",
        "about.identityValue": "कन्टेन्ट क्रिएटर • फोटोग्राफर • फोटो एडिटर",
        "about.countryLabel": "देश",
        "about.countryValue": "नेपाल",
        "about.currentLabel": "हालको ध्यान",
        "about.currentValue": "सिक्ने, सिर्जना गर्ने, प्रयोग गर्ने र चरणबद्ध रूपमा सुधार गर्ने।",

        "whatido.tag": "०२ — मैले के गर्छु",
        "whatido.title": "मेरो रचनात्मक काम",
        "whatido.lead": "व्यावहारिक काम, निरन्तर सिकाइ र रचनात्मक अन्वेषण।",
        "whatido.photo.title": "फोटोग्राफी",
        "whatido.photo.desc": "फोटो स्टुडियो कामबाट प्राप्त व्यावहारिक फोटोग्राफी अनुभव।",
        "whatido.editing.title": "फोटो एडिटिङ",
        "whatido.editing.desc": "एडिटिङ सीपलाई निरन्तर सुधार गर्दै फोटो एडिटिङ र छवि प्रशोधन।",
        "whatido.studio.title": "स्टुडियो काम",
        "whatido.studio.desc": "फोटो बनाउने, फोटोग्राफी, एडिटिङ, प्रिन्टिङ, फोटोकपी र अन्य स्टुडियो-सम्बन्धित काम।",
        "whatido.content.title": "कन्टेन्ट क्रिएसन",
        "whatido.content.desc": "डिजिटल कन्टेन्ट क्रिएसन, विशेष गरी युट्युब। कन्टेन्ट क्रिएसन, निरन्तरता, प्रयोग र सिकाइमार्फत तीनवटा युट्युब च्यानलहरू बढाएको अनुभव।",
        "whatido.tech.title": "प्रविधि",
        "whatido.tech.desc": "प्रविधि र डिजिटल उपकरणहरू मेरो प्रमुख रुचिमध्ये हुन्।",
        "whatido.technician.title": "प्राविधिक / टेक्निसियन सीप",
        "whatido.technician.desc": "व्यावहारिक प्राविधिक र टेक्निसियन-सम्बन्धित सीपहरू सिक्न इच्छुक।",

        "experience.tag": "०३ — अनुभव",
        "experience.title": "स्टुडियो अनुभव",
        "experience.role": "सामान्य स्टुडियो र रचनात्मक काम",
        "experience.present": "हालसम्म",
        "experience.task1": "फोटोग्राफी",
        "experience.task2": "फोटो बनाउने",
        "experience.task3": "फोटो एडिटिङ",
        "experience.task4": "फोटो प्रिन्टिङ",
        "experience.task5": "फोटोकपी",
        "experience.task6": "छवि प्रशोधन",
        "experience.task7": "सामान्य स्टुडियो सेवाहरू",
        "experience.task8": "अन्य दैनिक स्टुडियो काम",
        "experience.task9": "एडिटिङ प्रविधिहरू सिक्ने र अभ्यास गर्ने",

        "content.tag": "०४ — कन्टेन्ट क्रिएसन",
        "content.title": "युट्युबमा सिर्जना",
        "content.p1": "मलाई युट्युब कन्टेन्ट क्रिएसनमा व्यावहारिक अनुभव छ र निरन्तर कन्टेन्ट क्रिएसन, प्रयोग र सिकाइमार्फत तीनवटा फरक युट्युब च्यानलहरू बढाएको छु।",
        "content.p2": "यो विशेषज्ञ हुने बारेमा होइन — यो जिज्ञासु रहने, नियमित रूपमा उपस्थित हुने र हरेक भिडियोले केही नयाँ सिकाओस् भन्ने बारेमा हो।",
        "content.item1": "कन्टेन्ट आइडिया विकास गर्ने",
        "content.item2": "कन्टेन्ट सिर्जना गर्ने",
        "content.item3": "प्रकाशन गर्ने",
        "content.item4": "प्रस्तुति सुधार गर्ने",
        "content.item5": "विभिन्न कन्टेन्ट ढाँचाहरूसँग प्रयोग गर्ने",
        "content.item6": "दर्शकको प्रतिक्रिया बुझ्ने",
        "content.item7": "च्यानलहरू बढाउने",

        "education.tag": "०५ — शिक्षा",
        "education.title": "शिक्षा",
        "education.degree": "शिक्षाशास्त्रमा स्नातक (बी.एड.)",
        "education.inst": "चौतारा बहुमुखी क्याम्पस",
        "education.status": "दोस्रो वर्ष — हाल अध्ययनरत",

        "interests.tag": "०६ — रुचिहरू",
        "interests.title": "मलाई आकर्षित गर्ने कुराहरू",
        "interests.tech.title": "प्रविधि",
        "interests.tech.desc": "प्रविधि र डिजिटल उपकरणहरूमा रुचि।",
        "interests.content.title": "कन्टेन्ट क्रिएसन",
        "interests.content.desc": "डिजिटल कन्टेन्ट सिर्जना र प्रयोग गर्न रुचि।",
        "interests.technician.title": "प्राविधिक / टेक्निसियन सीप",
        "interests.technician.desc": "व्यावहारिक प्राविधिक सीपहरू सिक्न रुचि।",
        "interests.photo.title": "फोटोग्राफी",
        "interests.photo.desc": "फोटोग्राफीमा रुचि।",
        "interests.editing.title": "फोटो एडिटिङ",
        "interests.editing.desc": "फोटो एडिटिङ सीप सुधार गर्न रुचि।",

        "journey.tag": "०७ — यात्रा",
        "journey.title": "अहिलेसम्मको बाटो",
        "journey.lead": "योजना मात्र होइन, गरेर बनेको यात्रा।",
        "journey.item1.title": "व्यावहारिक काम",
        "journey.item1.desc": "सिद्धान्त मात्र होइन, वास्तविक काममार्फत अनुभव बढाउँदै।",
        "journey.item2.title": "फोटोग्राफी र फोटो एडिटिङ",
        "journey.item2.desc": "छविहरू हेर्न, बनाउन, एडिट गर्न र परिष्कृत गर्न सिक्दै।",
        "journey.item3.title": "स्टुडियो अनुभव",
        "journey.item3.desc": "लालीगुराँस फोटो स्टुडियोमा दैनिक काम — हातले गर्ने र व्यावहारिक।",
        "journey.item4.title": "युट्युब कन्टेन्ट क्रिएसन",
        "journey.item4.desc": "निरन्तरता र प्रयोगमार्फत तीनवटा युट्युब च्यानलहरू बढाउँदै।",
        "journey.item5.title": "शिक्षा",
        "journey.item5.desc": "चौतारा बहुमुखी क्याम्पसमा शिक्षाशास्त्रमा स्नातक अध्ययन।",
        "journey.item6.title": "प्रविधि र प्राविधिक सीप",
        "journey.item6.desc": "बाटोमा डिजिटल उपकरण र व्यावहारिक प्राविधिक सीपहरू अन्वेषण गर्दै।",
        "journey.item7.title": "निरन्तर सिकाइ",
        "journey.item7.desc": "अझै अन्वेषण गर्दै, अझै सुधार गर्दै, अझै जिज्ञासु।",

        "achieve.tag": "०८ — उपलब्धिहरू",
        "achieve.title": "साना जितहरू, इमान्दार प्रगति",
        "achieve.one.title": "तीनवटा युट्युब च्यानलहरू बढाएँ",
        "achieve.one.desc": "कन्टेन्ट क्रिएसन, निरन्तरता, प्रयोग र सिकाइमार्फत तीनवटा फरक युट्युब च्यानलहरू बढाएको अनुभव।",
        "achieve.two.title": "व्यावहारिक स्टुडियो अनुभव",
        "achieve.two.desc": "लालीगुराँस फोटो स्टुडियोमा निरन्तर व्यावहारिक अनुभव।",
        "achieve.three.title": "निरन्तर सिकाइ",
        "achieve.three.desc": "काम गर्दै रचनात्मक र डिजिटल सीपहरू विकास गर्दै शिक्षा जारी राख्दै।",

        "philosophy.quote": "मलाई लाग्दैन कि म सबै कुरामा पूर्ण हुनुपर्छ। म व्यावहारिक अनुभवबाट सिक्न, नयाँ कुराहरू प्रयास गर्न, सिर्जना गर्न, सुधार गर्न र अगाडि बढ्न रुचाउँछु।",
        "philosophy.motto": "सिक्नुहोस्। सिर्जना गर्नुहोस्। सुधार गर्नुहोस्।",

        "currently.tag": "०९ — हाल",
        "currently.title": "अहिले",
        "currently.item1": "लालीगुराँस फोटो स्टुडियोमा काम गर्दै",
        "currently.item2": "बी.एड. दोस्रो वर्ष अध्ययन गर्दै",
        "currently.item3": "फोटोग्राफी सीप विकास गर्दै",
        "currently.item4": "फोटो एडिटिङ अभ्यास गर्दै",
        "currently.item5": "कन्टेन्ट क्रिएसन अन्वेषण गर्दै",
        "currently.item6": "प्रविधिमा रुचि",
        "currently.item7": "टेक्निसियन-सम्बन्धित सीपहरूमा रुचि",

        "work.tag": "१० — मेरो काम",
        "work.title": "छानिएका कामहरू",
        "work.lead": "फोटोग्राफी, एडिट्स र रचनात्मक कामहरूको बढ्दो संग्रह।",
        "work.filter.all": "सबै",
        "work.filter.photo": "फोटोग्राफी",
        "work.filter.editing": "एडिटिङ",
        "work.filter.design": "डिजाइन",
        "work.filter.content": "कन्टेन्ट",
        "work.viewLink": "हेर्नुहोस्",
        "work.placeholder.cat": "प्लेसहोल्डर",
        "work.placeholder.desc": "तयार भएपछि यो कार्ड वास्तविक कामले प्रतिस्थापन गर्नुहोस्।",

        "future.tag": "११ — भविष्य",
        "future.title": "अगाडि हेर्दा",
        "future.text": "प्रविधि, कन्टेन्ट क्रिएसन, फोटोग्राफी र प्राविधिक सीपहरूमा मेरो रुचिले मलाई कहाँ पुर्याउँछ, म अझै अन्वेषण गर्दै छु। अहिलेको लागि, मेरो ध्यान सिक्ने, व्यावहारिक अनुभव प्राप्त गर्ने, सिर्जना गर्ने, प्रयोग गर्ने र चरणबद्ध रूपमा सुधार गर्ने मा छ।",

        "contact.tag": "१२ — सम्पर्क",
        "contact.title": "जोडिऔं",
        "contact.lead": "तलका कुनै पनि माध्यममार्फत सम्पर्क गर्न नहिचकिचाउनुहोस्।",
        "contact.full": "बलबहादुर तामाङ",
        "contact.akaLabel": "पेशागत नाम",
        "contact.aka": "सोनम तामाङ",
        "contact.role": "कन्टेन्ट क्रिएटर • फोटोग्राफर • फोटो एडिटर",

        "footer.brand": "सोनम तामाङ",
        "footer.fullName": "बलबहादुर तामाङ",
        "footer.role": "कन्टेन्ट क्रिएटर • फोटोग्राफर • फोटो एडिटर",
        "footer.motto": "सिक्दै। सिर्जना गर्दै। सुधार गर्दै।",
        "footer.nav": "नेभिगेट",
        "footer.connect": "जोडिनुहोस्",
        "footer.prefs": "प्राथमिकताहरू",
        "footer.theme": "थिम टगल",
        "footer.copy": "बलबहादुर तामाङ। सर्वाधिकार सुरक्षित।"
    }
};

/* ---------- Portfolio Project Data ---------- */
const projects = [
    {
        title: "Portrait Study 01",
        category: "photography",
        image: "images/project-01.jpg",
        description: "A portrait photography piece exploring natural light and composition.",
        link: ""
    },
    {
        title: "Color Grade Experiment",
        category: "editing",
        image: "images/project-02.jpg",
        description: "Photo editing exploration with warm cinematic color grading.",
        link: ""
    },
    {
        title: "YouTube Thumbnail Design",
        category: "design",
        image: "images/project-03.jpg",
        description: "Thumbnail design work for YouTube content creation.",
        link: ""
    },
    {
        title: "Studio Session Series",
        category: "photography",
        image: "images/project-04.jpg",
        description: "Studio photography session — controlled lighting and posing.",
        link: ""
    },
    {
        title: "Retouching Practice",
        category: "editing",
        image: "images/project-05.jpg",
        description: "Skin retouching and image refinement practice.",
        link: ""
    },
    {
        title: "Content Poster Concept",
        category: "design",
        image: "images/project-06.jpg",
        description: "Poster and visual design concept for digital content.",
        link: ""
    },
    {
        title: "YouTube Content Piece",
        category: "content",
        image: "images/project-07.jpg",
        description: "A piece from my YouTube content creation journey.",
        link: ""
    },
    {
        title: "Street Photography",
        category: "photography",
        image: "images/project-08.jpg",
        description: "Real-world street photography captured in Nepal.",
        link: ""
    },
    {
        title: "Creative Edit Series",
        category: "editing",
        image: "images/project-09.jpg",
        description: "Creative photo editing series exploring different styles.",
        link: ""
    }
];

/* ---------- State ---------- */
let currentLang = "en";
let currentFilter = "all";

/* ---------- Language System ---------- */
function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            // Preserve HTML for specific keys if needed
            if (el.tagName === "IMG") {
                el.setAttribute("alt", dict[key]);
            } else {
                el.textContent = dict[key];
            }
        }
    });

    // Update placeholder labels (re-render with current filter & language)
    renderProjects();

    // Sync language buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
        const isActive = btn.getAttribute("data-lang") === lang;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    // Update meta description / title for language
    const descKey = lang === "ne" ? "hero.desc" : "hero.desc";
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl && dict[descKey]) descEl.setAttribute("content", dict[descKey]);

    try { localStorage.setItem("st-lang", lang); } catch (e) {}
}

function initLanguage() {
    let saved = "en";
    try { saved = localStorage.getItem("st-lang") || "en"; } catch (e) {}
    if (!translations[saved]) saved = "en";
    applyLanguage(saved);
}

/* ---------- Theme System ---------- */
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    // Update meta theme-color
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0a0a0f" : "#f8f6f2");
    try { localStorage.setItem("st-theme", theme); } catch (e) {}
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
}

function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem("st-theme"); } catch (e) {}
    if (saved === "light" || saved === "dark") {
        applyTheme(saved);
    } else {
        // System preference fallback, default to dark for premium feel
        const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
        applyTheme(prefersLight ? "dark" : "dark"); // Force dark as the premium default
    }
}

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close menu on link click (mobile)
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 1120) {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    });
}

/* ---------- Header Scroll Shadow ---------- */
function initHeaderScroll() {
    const header = document.getElementById("siteHeader");
    if (!header) return;
    const onScroll = () => {
        if (window.scrollY > 10) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}

/* ---------- Active Nav Highlight ---------- */
function initActiveNav() {
    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(".main-nav a");
    if (!sections.length || !links.length) return;

    const setActive = (id) => {
        links.forEach(l => {
            const isMatch = l.getAttribute("href") === "#" + id;
            l.classList.toggle("active", isMatch);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                setActive(entry.target.id);
            }
        });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.5] });

    sections.forEach(sec => observer.observe(sec));
}

/* ---------- Scroll Reveal ---------- */
function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    // Respect reduced motion
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        items.forEach(i => i.classList.add("visible"));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    items.forEach(item => observer.observe(item));
}

/* ---------- Portfolio Rendering ---------- */
const categoryLabels = {
    en: { photography: "Photography", editing: "Editing", design: "Design", content: "Content" },
    ne: { photography: "फोटोग्राफी", editing: "एडिटिङ", design: "डिजाइन", content: "कन्टेन्ट" }
};

function renderProjects() {
    const grid = document.getElementById("workGrid");
    if (!grid) return;

    const dict = translations[currentLang] || translations.en;
    const filtered = currentFilter === "all" ? projects : projects.filter(p => p.category === currentFilter);

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="work-empty">${dict["work.placeholder.desc"]}</div>`;
        return;
    }

    grid.innerHTML = filtered.map((p, idx) => {
        const catLabel = (categoryLabels[currentLang] || categoryLabels.en)[p.category] || p.category;
        // Fallback SVG generator
        const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250">
  <defs>
    <linearGradient id="g${idx}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1a24"/>
      <stop offset="100%" stop-color="#0f0f16"/>
    </linearGradient>
  </defs>
  <rect width="400" height="250" fill="url(#g${idx})"/>
  <circle cx="320" cy="70" r="28" fill="#d4a574" opacity="0.25"/>
  <path d="M0 200 L120 140 L220 180 L400 100 L400 250 L0 250 Z" fill="#d4a574" opacity="0.15"/>
  <text x="20" y="40" font-family="Inter, sans-serif" font-size="12" fill="#d4a574" font-weight="600" letter-spacing="2">${catLabel.toUpperCase()}</text>
  <text x="20" y="230" font-family="Inter, sans-serif" font-size="16" fill="#edeae3" font-weight="600">${p.title}</text>
</svg>`)}`;

        const linkHtml = p.link
            ? `<a href="${p.link}" target="_blank" rel="noopener" class="work-link">${dict["work.viewLink"]} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg></a>`
            : "";

        return `
        <article class="work-card reveal visible">
            <div class="work-thumb">
                <img src="${p.image}" alt="${p.title}" loading="lazy"
                     onerror="this.onerror=null;this.src='${placeholder}';" />
            </div>
            <div class="work-body">
                <span class="work-cat">${catLabel}</span>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                ${linkHtml}
            </div>
        </article>`;
    }).join("");
}

function initFilters() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter");
            renderProjects();
        });
    });
}

/* ---------- Footer Year ---------- */
function initYear() {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
}

/* ---------- Boot ---------- */
function init() {
    initTheme();
    initLanguage();
    initMobileMenu();
    initHeaderScroll();
    initActiveNav();
    initFilters();
    renderProjects();
    initReveal();
    initYear();

    // Theme toggles (both in header & footer)
    document.querySelectorAll("#themeToggle, #themeToggle2").forEach(btn => {
        btn.addEventListener("click", toggleTheme);
    });

    // Language buttons (delegated for both header & footer)
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            if (lang) applyLanguage(lang);
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
    }
