(function () {
    "use strict";

    const translations = {
        en: {
            "meta.title": "Bal Bahadur Tamang | Sonam Tamang — Content Creator, Photographer & Photo Editor",
            "meta.description": "Personal portfolio of Bal Bahadur Tamang, professionally known as Sonam Tamang, showcasing his journey in photography, photo editing, content creation, studio work and technology.",

            "a11y.skip": "Skip to main content",
            "a11y.languageSwitcher": "Select language",
            "a11y.themeToggle": "Toggle color theme",
            "a11y.openMenu": "Open menu",
            "a11y.closeMenu": "Close menu",
            "a11y.profileSummary": "Profile summary",
            "a11y.profileHighlights": "Profile highlights",
            "a11y.workFilters": "Filter work areas",
            "a11y.socialLinks": "Social links",

            "brand.name": "Bal Bahadur Tamang",
            "brand.tagline": "Professionally known as Sonam Tamang",

            "nav.home": "Home",
            "nav.about": "About",
            "nav.whatido": "What I Do",
            "nav.work": "My Work",
            "nav.journey": "Journey",
            "nav.experience": "Experience",
            "nav.education": "Education",
            "nav.interests": "Interests",
            "nav.contact": "Contact",

            "hero.eyebrow": "Nepal-based Creative Individual",
            "hero.name": "Bal Bahadur Tamang",
            "hero.known": "Professionally known as",
            "hero.proName": "Sonam Tamang",
            "hero.role": "Content Creator • Photographer • Photo Editor",
            "hero.desc": "A growing creative individual from Nepal, learning through practical experience, creating digital work and exploring technology.",
            "hero.btnJourney": "Explore My Journey",
            "hero.btnWork": "View My Work",
            "hero.meta1": "Laligurans Photo Studio",
            "hero.meta2": "B.Ed. Second Year",
            "hero.meta3": "Nepal",

            "profile.alt": "Portrait of Bal Bahadur Tamang, professionally known as Sonam Tamang",
            "profile.name": "Bal Bahadur Tamang",
            "profile.role": "Content Creator • Photographer • Photo Editor",

            "about.kicker": "About Me",
            "about.title": "A practical creative journey built step by step",
            "about.lead": "Bal Bahadur Tamang, professionally known as Sonam Tamang, is a growing creative individual from Nepal.",
            "about.p1": "Bal Bahadur Tamang, professionally known as Sonam Tamang, is a growing creative individual from Nepal with practical experience in photography, photo editing, studio work and content creation.",
            "about.p2": "He currently works at Laligurans Photo Studio, where he is involved in photography, photo making, photo editing, printing, photocopy and other day-to-day studio services.",
            "about.p3": "He does not consider himself perfect or highly advanced in every field. Instead, he enjoys learning, practicing and improving step by step through real-world work, experimentation and continuous learning.",
            "about.p4": "Alongside his work, he is currently studying Bachelor of Education at Chautara Multiple Campus.",

            "facts.fullNameLabel": "Full Name",
            "facts.fullName": "Bal Bahadur Tamang",
            "facts.proNameLabel": "Professional Name",
            "facts.proName": "Sonam Tamang",
            "facts.countryLabel": "Country",
            "facts.country": "Nepal",
            "facts.identityLabel": "Identity",
            "facts.identity": "Content Creator • Photographer • Photo Editor",
            "facts.focusLabel": "Current Focus",
            "facts.focus": "Learning, creating, experimenting and improving step by step.",

            "what.kicker": "What I Do",
            "what.title": "Creative and practical work areas",
            "what.lead": "Photography, editing, studio services, content creation and technology-focused learning.",
            "what.photo.title": "Photography",
            "what.photo.desc": "Practical photography experience through photo studio work.",
            "what.edit.title": "Photo Editing",
            "what.edit.desc": "Photo editing and image processing while continuously improving editing skills.",
            "what.studio.title": "Studio Work",
            "what.studio.desc": "Photo making, photography, editing, printing, photocopy and other studio-related work.",
            "what.content.title": "Content Creation",
            "what.content.desc": "Digital content creation, especially YouTube, with experience growing three different channels through consistency, experimentation and learning.",
            "what.tech.title": "Technology",
            "what.tech.desc": "Technology and digital tools are among his main interests.",
            "what.technician.title": "Technical / Technician Skills",
            "what.technician.desc": "Interested in learning practical technical and technician-related skills.",

            "work.kicker": "My Work",
            "work.title": "Work areas",
            "work.lead": "A clean overview of creative areas connected to photography, editing, design and digital content. Project visuals can be added later only when available.",
            "work.empty": "No work items in this category yet.",

            "filter.all": "All",
            "filter.photography": "Photography",
            "filter.editing": "Editing",
            "filter.design": "Design",
            "filter.content": "Content",

            "exp.kicker": "Experience",
            "exp.title": "Laligurans Photo Studio",
            "exp.lead": "Practical studio work and day-to-day creative services.",
            "exp.role": "General Studio & Creative Work",
            "exp.started": "Started",
            "exp.present": "Present",
            "exp.task1": "Photography",
            "exp.task2": "Photo making",
            "exp.task3": "Photo editing",
            "exp.task4": "Photo printing",
            "exp.task5": "Photocopy",
            "exp.task6": "Image processing",
            "exp.task7": "General studio services",
            "exp.task8": "Other day-to-day studio work",
            "exp.task9": "Learning and practicing editing techniques",

            "content.kicker": "Content Creation",
            "content.title": "Learning through digital content",
            "content.lead": "Practical YouTube experience built through consistency, experimentation and learning.",
            "content.p1": "Bal Bahadur Tamang has practical experience in YouTube content creation and has grown three different YouTube channels through consistent content creation, experimentation and learning.",
            "content.p2": "This experience is based on learning by doing, observing audience response and improving presentation over time.",
            "content.item1": "Developing content ideas",
            "content.item2": "Creating content",
            "content.item3": "Publishing",
            "content.item4": "Improving presentation",
            "content.item5": "Experimenting with different content formats",
            "content.item6": "Understanding audience response",
            "content.item7": "Growing channels",

            "journey.kicker": "Journey",
            "journey.title": "A path shaped by practice",
            "journey.lead": "This journey has developed through practical work, studio experience, content creation, education and continuous learning.",
            "journey.item1.title": "Practical Work",
            "journey.item1.desc": "Building experience through real work, hands-on tasks and daily practice.",
            "journey.item2.title": "Studio Experience",
            "journey.item2.date": "2080-10-17 B.S.",
            "journey.item2.desc": "Started working at Laligurans Photo Studio.",
            "journey.item3.title": "Photography and Photo Editing",
            "journey.item3.desc": "Developing creative and editing skills through studio-related work.",
            "journey.item4.title": "YouTube Content Creation",
            "journey.item4.desc": "Gained experience growing three different YouTube channels through consistency, experimentation and learning.",
            "journey.item5.title": "Education and Exploration",
            "journey.item5.desc": "Continuing B.Ed. studies while exploring technology and practical technical skills.",

            "edu.kicker": "Education",
            "edu.title": "Academic background",
            "edu.lead": "Education continues alongside practical work and creative learning.",
            "edu.degree": "Bachelor of Education (B.Ed.)",
            "edu.campus": "Chautara Multiple Campus",
            "edu.status": "Second Year — Currently Studying",

            "interest.kicker": "Interests",
            "interest.title": "Areas of interest",
            "interest.lead": "Technology, content creation, technical skills, photography and photo editing.",
            "interest.tech.title": "Technology",
            "interest.tech.desc": "Interested in technology and digital tools.",
            "interest.content.title": "Content Creation",
            "interest.content.desc": "Interested in creating and experimenting with digital content.",
            "interest.technician.title": "Technician / Technical Skills",
            "interest.technician.desc": "Interested in learning practical technical skills.",
            "interest.photo.title": "Photography",
            "interest.photo.desc": "Interested in photography.",
            "interest.edit.title": "Photo Editing",
            "interest.edit.desc": "Interested in improving photo editing skills.",

            "ach.kicker": "Achievements",
            "ach.title": "Honest progress",
            "ach.lead": "Modest, factual milestones from practice, consistency and learning.",
            "ach.one.title": "Three YouTube Channels Grown",
            "ach.one.desc": "Experience growing three different YouTube channels through content creation, consistency, experimentation and learning.",
            "ach.two.title": "Practical Studio Experience",
            "ach.two.desc": "Ongoing practical experience at Laligurans Photo Studio.",
            "ach.three.title": "Continuous Learning",
            "ach.three.desc": "Continuing education while working and developing creative and digital skills.",

            "quote.text": "“I don't believe I need to be perfect at everything. I prefer to learn through practical experience, try new things, create, improve and keep moving forward.”",
            "quote.motto": "Learn. Create. Improve.",
            "quote.author": "— Bal Bahadur Tamang, professionally known as Sonam Tamang",

            "current.kicker": "Currently",
            "current.title": "Current focus",
            "current.lead": "Active areas of work, study and creative practice.",
            "current.item1": "Working at Laligurans Photo Studio",
            "current.item2": "Studying B.Ed. Second Year",
            "current.item3": "Developing photography skills",
            "current.item4": "Practicing photo editing",
            "current.item5": "Exploring content creation",
            "current.item6": "Interested in technology",
            "current.item7": "Interested in technician-related skills",

            "future.kicker": "Future",
            "future.title": "Looking ahead",
            "future.lead": "An honest direction focused on learning and practical growth.",
            "future.text": "I am still exploring where my interests in technology, content creation, photography and technical skills will take me. For now, my focus is on learning, gaining practical experience, creating, experimenting and improving step by step.",

            "contact.kicker": "Contact",
            "contact.title": "Let's Connect",
            "contact.lead": "Connect with Bal Bahadur Tamang through the official social channels below.",
            "contact.name": "Bal Bahadur Tamang",
            "contact.known": "Professionally known as",
            "contact.pro": "Sonam Tamang",
            "contact.role": "Content Creator • Photographer • Photo Editor",
            "contact.socialTitle": "Official links",

            "footer.name": "Bal Bahadur Tamang",
            "footer.tagline": "Professionally known as Sonam Tamang",
            "footer.role": "Content Creator • Photographer • Photo Editor",
            "footer.motto": "Learning. Creating. Improving.",
            "footer.quickLinks": "Quick Links",
            "footer.connect": "Connect",
            "footer.preferences": "Preferences",
            "footer.theme": "Toggle Theme",
            "footer.copy": "Bal Bahadur Tamang. All Rights Reserved."
        },

        ne: {
            "meta.title": "बलबहादुर तामाङ | सोनम तामाङ — कन्टेन्ट क्रिएटर, फोटोग्राफर र फोटो एडिटर",
            "meta.description": "बलबहादुर तामाङ, पेशागत रूपमा सोनम तामाङ, को फोटोग्राफी, फोटो एडिटिङ, कन्टेन्ट क्रिएसन, स्टुडियो काम र प्रविधि यात्रा देखाउने व्यक्तिगत पोर्टफोलियो।",

            "a11y.skip": "मुख्य सामग्रीमा जानुहोस्",
            "a11y.languageSwitcher": "भाषा छान्नुहोस्",
            "a11y.themeToggle": "रङ थीम परिवर्तन गर्नुहोस्",
            "a11y.openMenu": "मेनु खोल्नुहोस्",
            "a11y.closeMenu": "मेनु बन्द गर्नुहोस्",
            "a11y.profileSummary": "प्रोफाइल सारांश",
            "a11y.profileHighlights": "प्रोफाइल हाइलाइटहरू",
            "a11y.workFilters": "काम क्षेत्रहरू फिल्टर गर्नुहोस्",
            "a11y.socialLinks": "सामाजिक लिंकहरू",

            "brand.name": "बलबहादुर तामाङ",
            "brand.tagline": "पेशागत रूपमा सोनम तामाङ",

            "nav.home": "गृहपृष्ठ",
            "nav.about": "मेरो बारेमा",
            "nav.whatido": "मैले के गर्छु",
            "nav.work": "मेरो काम",
            "nav.journey": "यात्रा",
            "nav.experience": "अनुभव",
            "nav.education": "शिक्षा",
            "nav.interests": "रुचिहरू",
            "nav.contact": "सम्पर्क",

            "hero.eyebrow": "नेपालमा आधारित रचनात्मक व्यक्ति",
            "hero.name": "बलबहादुर तामाङ",
            "hero.known": "पेशागत रूपमा",
            "hero.proName": "सोनम तामाङ",
            "hero.role": "कन्टेन्ट क्रिएटर • फोटोग्राफर • फोटो एडिटर",
            "hero.desc": "नेपालबाट आएका एक उदाउँदा रचनात्मक व्यक्ति, जो व्यावहारिक अनुभवबाट सिक्दै, डिजिटल काम सिर्जना गर्दै र प्रविधि अन्वेषण गर्दै छन्।",
            "hero.btnJourney": "मेरो यात्रा हेर्नुहोस्",
            "hero.btnWork": "मेरो काम हेर्नुहोस्",
            "hero.meta1": "लालीगुराँस फोटो स्टुडियो",
            "hero.meta2": "बी.एड. दोस्रो वर्ष",
            "hero.meta3": "नेपाल",

            "profile.alt": "बलबहादुर तामाङको तस्बिर, पेशागत रूपमा सोनम तामाङ",
            "profile.name": "बलबहादुर तामाङ",
            "profile.role": "कन्टेन्ट क्रिएटर • फोटोग्राफर • फोटो एडिटर",

            "about.kicker": "मेरो बारेमा",
            "about.title": "चरणबद्ध रूपमा बनेको व्यावहारिक रचनात्मक यात्रा",
            "about.lead": "बलबहादुर तामाङ, पेशागत रूपमा सोनम तामाङ, नेपालबाट आएका एक उदाउँदा रचनात्मक व्यक्ति हुन्।",
            "about.p1": "बलबहादुर तामाङ, पेशागत रूपमा सोनम तामाङ, नेपालबाट आएका एक उदाउँदा रचनात्मक व्यक्ति हुन्, जसलाई फोटोग्राफी, फोटो एडिटिङ, स्टुडियो काम र कन्टेन्ट क्रिएसनमा व्यावहारिक अनुभव छ।",
            "about.p2": "उहाँ अहिले लालीगुराँस फोटो स्टुडियोमा काम गर्नुहुन्छ, जहाँ फोटोग्राफी, फोटो बनाउने, फोटो एडिटिङ, प्रिन्टिङ, फोटोकपी र अन्य दैनिक स्टुडियो सेवाहरूमा संलग्न हुनुहुन्छ।",
            "about.p3": "उहाँ आफूलाई हरेक क्षेत्रमा पूर्ण वा अत्यन्त उन्नत मान्नुहुन्न। बरु वास्तविक काम, प्रयोग र निरन्तर सिकाइमार्फत बिस्तारै सिक्ने, अभ्यास गर्ने र सुधार गर्ने कुरामा विश्वास गर्नुहुन्छ।",
            "about.p4": "कामसँगै उहाँ चौतारा बहुमुखी क्याम्पसमा शिक्षाशास्त्रमा स्नातक अध्ययन गर्दै हुनुहुन्छ।",

            "facts.fullNameLabel": "पूरा नाम",
            "facts.fullName": "बलबहादुर तामाङ",
            "facts.proNameLabel": "पेशागत नाम",
            "facts.proName": "सोनम तामाङ",
            "facts.countryLabel": "देश",
            "facts.country": "नेपाल",
            "facts.identityLabel": "पहिचान",
            "facts.identity": "कन्टेन्ट क्रिएटर • फोटोग्राफर • फोटो एडिटर",
            "facts.focusLabel": "हालको ध्यान",
            "facts.focus": "सिक्ने, सिर्जना गर्ने, प्रयोग गर्ने र चरणबद्ध रूपमा सुधार गर्ने।",

            "what.kicker": "मैले के गर्छु",
            "what.title": "रचनात्मक र व्यावहारिक कामका क्षेत्रहरू",
            "what.lead": "फोटोग्राफी, एडिटिङ, स्टुडियो सेवा, कन्टेन्ट क्रिएसन र प्रविधिमा आधारित सिकाइ।",
            "what.photo.title": "फोटोग्राफी",
            "what.photo.desc": "फोटो स्टुडियो काममार्फत प्राप्त व्यावहारिक फोटोग्राफी अनुभव।",
            "what.edit.title": "फोटो एडिटिङ",
            "what.edit.desc": "एडिटिङ सीपलाई निरन्तर सुधार गर्दै फोटो एडिटिङ र छवि प्रशोधन।",
            "what.studio.title": "स्टुडियो काम",
            "what.studio.desc": "फोटो बनाउने, फोटोग्राफी, एडिटिङ, प्रिन्टिङ, फोटोकपी र अन्य स्टुडियो सम्बन्धित काम।",
            "what.content.title": "कन्टेन्ट क्रिएसन",
            "what.content.desc": "विशेष गरी युट्युबमा डिजिटल कन्टेन्ट क्रिएसन। कन्टेन्ट क्रिएसन, निरन्तरता, प्रयोग र सिकाइमार्फत तीनवटा फरक युट्युब च्यानल बढाएको अनुभव।",
            "what.tech.title": "प्रविधि",
            "what.tech.desc": "प्रविधि र डिजिटल उपकरणहरू उहाँका मुख्य रुचिमध्ये हुन्।",
            "what.technician.title": "प्राविधिक / टेक्निसियन सीप",
            "what.technician.desc": "व्यावहारिक प्राविधिक र टेक्निसियन सम्बन्धित सीपहरू सिक्न रुचि।",

            "work.kicker": "मेरो काम",
            "work.title": "कामका क्षेत्रहरू",
            "work.lead": "फोटोग्राफी, एडिटिङ, डिजाइन र डिजिटल कन्टेन्टसँग जोडिएका रचनात्मक क्षेत्रहरूको सफा अवलोकन। वास्तविक प्रोजेक्ट तस्बिरहरू उपलब्ध भएपछि मात्र थप्न सकिन्छ।",
            "work.empty": "यो वर्गमा अहिले कुनै काम छैन।",

            "filter.all": "सबै",
            "filter.photography": "फोटोग्राफी",
            "filter.editing": "एडिटिङ",
            "filter.design": "डिजाइन",
            "filter.content": "कन्टेन्ट",

            "exp.kicker": "अनुभव",
            "exp.title": "लालीगुराँस फोटो स्टुडियो",
            "exp.lead": "व्यावहारिक स्टुडियो काम र दैनिक रचनात्मक सेवाहरू।",
            "exp.role": "सामान्य स्टुडियो र रचनात्मक काम",
            "exp.started": "सुरु",
            "exp.present": "हालसम्म",
            "exp.task1": "फोटोग्राफी",
            "exp.task2": "फोटो बनाउने",
            "exp.task3": "फोटो एडिटिङ",
            "exp.task4": "फोटो प्रिन्टिङ",
            "exp.task5": "फोटोकपी",
            "exp.task6": "छवि प्रशोधन",
            "exp.task7": "सामान्य स्टुडियो सेवाहरू",
            "exp.task8": "अन्य दैनिक स्टुडियो काम",
            "exp.task9": "एडिटिङ प्रविधिहरू सिक्ने र अभ्यास गर्ने",

            "content.kicker": "कन्टेन्ट क्रिएसन",
            "content.title": "डिजिटल कन्टेन्टमार्फत सिकाइ",
            "content.lead": "निरन्तरता, प्रयोग र सिकाइबाट बनेको व्यावहारिक युट्युब अनुभव।",
            "content.p1": "बलबहादुर तामाङलाई युट्युब कन्टेन्ट क्रिएसनमा व्यावहारिक अनुभव छ र निरन्तर कन्टेन्ट क्रिएसन, प्रयोग र सिकाइमार्फत तीनवटा फरक युट्युब च्यानल बढाएको अनुभव छ।",
            "content.p2": "यो अनुभव गरेर सिक्ने, दर्शकको प्रतिक्रिया बुझ्ने र समयसँगै प्रस्तुति सुधार गर्ने कुरामा आधारित छ।",
            "content.item1": "कन्टेन्ट आइडिया विकास गर्ने",
            "content.item2": "कन्टेन्ट सिर्जना गर्ने",
            "content.item3": "प्रकाशन गर्ने",
            "content.item4": "प्रस्तुति सुधार गर्ने",
            "content.item5": "विभिन्न कन्टेन्ट ढाँचासँग प्रयोग गर्ने",
            "content.item6": "दर्शकको प्रतिक्रिया बुझ्ने",
            "content.item7": "च्यानलहरू बढाउने",

            "journey.kicker": "यात्रा",
            "journey.title": "अभ्यासले बनाएको बाटो",
            "journey.lead": "व्यावहारिक काम, स्टुडियो अनुभव, कन्टेन्ट क्रिएसन, शिक्षा र निरन्तर सिकाइबाट विकसित यात्रा।",
            "journey.item1.title": "व्यावहारिक काम",
            "journey.item1.desc": "वास्तविक काम, हातले गर्ने काम र दैनिक अभ्यासमार्फत अनुभव बढाउँदै।",
            "journey.item2.title": "स्टुडियो अनुभव",
            "journey.item2.date": "२०८०-१०-१७ बि.सं.",
            "journey.item2.desc": "लालीगुराँस फोटो स्टुडियोमा काम सुरु।",
            "journey.item3.title": "फोटोग्राफी र फोटो एडिटिङ",
            "journey.item3.desc": "स्टुडियो सम्बन्धित काममार्फत रचनात्मक र एडिटिङ सीप विकास।",
            "journey.item4.title": "युट्युब कन्टेन्ट क्रिएसन",
            "journey.item4.desc": "निरन्तरता, प्रयोग र सिकाइमार्फत तीनवटा फरक युट्युब च्यानल बढाएको अनुभव।",
            "journey.item5.title": "शिक्षा र अन्वेषण",
            "journey.item5.desc": "बी.एड. अध्ययन जारी राख्दै प्रविधि र व्यावहारिक प्राविधिक सीपहरूको अन्वेषण।",

            "edu.kicker": "शिक्षा",
            "edu.title": "शैक्षिक पृष्ठभूमि",
            "edu.lead": "व्यावहारिक काम र रचनात्मक सिकाइसँगै शिक्षा पनि अगाडि बढिरहेको छ।",
            "edu.degree": "शिक्षाशास्त्रमा स्नातक (बी.एड.)",
            "edu.campus": "चौतारा बहुमुखी क्याम्पस",
            "edu.status": "दोस्रो वर्ष — हाल अध्ययनरत",

            "interest.kicker": "रुचिहरू",
            "interest.title": "रुचिका क्षेत्रहरू",
            "interest.lead": "प्रविधि, कन्टेन्ट क्रिएसन, प्राविधिक सीप, फोटोग्राफी र फोटो एडिटिङ।",
            "interest.tech.title": "प्रविधि",
            "interest.tech.desc": "प्रविधि र डिजिटल उपकरणहरूमा रुचि।",
            "interest.content.title": "कन्टेन्ट क्रिएसन",
            "interest.content.desc": "डिजिटल कन्टेन्ट सिर्जना र प्रयोग गर्न रुचि।",
            "interest.technician.title": "प्राविधिक / टेक्निसियन सीप",
            "interest.technician.desc": "व्यावहारिक प्राविधिक सीपहरू सिक्न रुचि।",
            "interest.photo.title": "फोटोग्राफी",
            "interest.photo.desc": "फोटोग्राफीमा रुचि।",
            "interest.edit.title": "फोटो एडिटिङ",
            "interest.edit.desc": "फोटो एडिटिङ सीप सुधार गर्न रुचि।",

            "ach.kicker": "उपलब्धिहरू",
            "ach.title": "इमान्दार प्रगति",
            "ach.lead": "अभ्यास, निरन्तरता र सिकाइबाट प्राप्त साधारण र वास्तविक उपलब्धिहरू।",
            "ach.one.title": "तीनवटा युट्युब च्यानल बढाएको अनुभव",
            "ach.one.desc": "कन्टेन्ट क्रिएसन, निरन्तरता, प्रयोग र सिकाइमार्फत तीनवटा फरक युट्युब च्यानल बढाएको अनुभव।",
            "ach.two.title": "व्यावहारिक स्टुडियो अनुभव",
            "ach.two.desc": "लालीगुराँस फोटो स्टुडियोमा निरन्तर व्यावहारिक अनुभव।",
            "ach.three.title": "निरन्तर सिकाइ",
            "ach.three.desc": "काम गर्दै रचनात्मक र डिजिटल सीप विकास गर्दै शिक्षा जारी राख्नु।",

            "quote.text": "“मलाई सबै कुरामा पूर्ण हुनुपर्छ भन्ने लाग्दैन। म व्यावहारिक अनुभवबाट सिक्न, नयाँ कुरा प्रयास गर्न, सिर्जना गर्न, सुधार गर्न र अगाडि बढ्न रुचाउँछु।”",
            "quote.motto": "सिक्नुहोस्। सिर्जना गर्नुहोस्। सुधार गर्नुहोस्।",
            "quote.author": "— बलबहादुर तामाङ, पेशागत रूपमा सोनम तामाङ",

            "current.kicker": "हाल",
            "current.title": "हालको ध्यान",
            "current.lead": "काम, पढाइ र रचनात्मक अभ्यासका सक्रिय क्षेत्रहरू।",
            "current.item1": "लालीगुराँस फोटो स्टुडियोमा काम गर्दै",
            "current.item2": "बी.एड. दोस्रो वर्ष अध्ययन गर्दै",
            "current.item3": "फोटोग्राफी सीप विकास गर्दै",
            "current.item4": "फोटो एडिटिङ अभ्यास गर्दै",
            "current.item5": "कन्टेन्ट क्रिएसन अन्वेषण गर्दै",
            "current.item6": "प्रविधिमा रुचि",
            "current.item7": "टेक्निसियन सम्बन्धित सीपहरूमा रुचि",

            "future.kicker": "भविष्य",
            "future.title": "अगाडिको सोच",
            "future.lead": "सिकाइ र व्यावहारिक विकासमा केन्द्रित इमान्दार दिशा।",
            "future.text": "प्रविधि, कन्टेन्ट क्रिएसन, फोटोग्राफी र प्राविधिक सीपहरूमा मेरो रुचिले मलाई कहाँ पुर्‍याउँछ, म अझै अन्वेषण गर्दै छु। अहिलेको लागि मेरो ध्यान सिक्ने, व्यावहारिक अनुभव प्राप्त गर्ने, सिर्जना गर्ने, प्रयोग गर्ने र चरणबद्ध रूपमा सुधार गर्ने कुरामा छ।",

            "contact.kicker": "सम्पर्क",
            "contact.title": "जोडिऔं",
            "contact.lead": "तलका आधिकारिक सामाजिक माध्यमहरूमार्फत बलबहादुर तामाङसँग जोडिन सकिन्छ।",
            "contact.name": "बलबहादुर तामाङ",
            "contact.known": "पेशागत रूपमा",
            "contact.pro": "सोनम तामाङ",
            "contact.role": "कन्टेन्ट क्रिएटर • फोटोग्राफर • फोटो एडिटर",
            "contact.socialTitle": "आधिकारिक लिंकहरू",

            "footer.name": "बलबहादुर तामाङ",
            "footer.tagline": "पेशागत रूपमा सोनम तामाङ",
            "footer.role": "कन्टेन्ट क्रिएटर • फोटोग्राफर • फोटो एडिटर",
            "footer.motto": "सिक्दै। सिर्जना गर्दै। सुधार गर्दै।",
            "footer.quickLinks": "छिटो लिंकहरू",
            "footer.connect": "जोडिनुहोस्",
            "footer.preferences": "प्राथमिकताहरू",
            "footer.theme": "थिम परिवर्तन",
            "footer.copy": "बलबहादुर तामाङ। सर्वाधिकार सुरक्षित।"
        }
    };

    const workItems = [
        {
            category: "photography",
            title: { en: "Photography", ne: "फोटोग्राफी" },
            description: {
                en: "Practical photography experience through real studio work and continuous practice.",
                ne: "वास्तविक स्टुडियो काम र निरन्तर अभ्यासमार्फत व्यावहारिक फोटोग्राफी अनुभव।"
            }
        },
        {
            category: "editing",
            title: { en: "Photo Editing", ne: "फोटो एडिटिङ" },
            description: {
                en: "Photo editing, retouching and image processing while improving step by step.",
                ne: "चरणबद्ध रूपमा सुधार गर्दै फोटो एडिटिङ, रिटचिङ र छवि प्रशोधन।"
            }
        },
        {
            category: "design",
            title: { en: "Thumbnails", ne: "थम्बनेल" },
            description: {
                en: "Creative thumbnail thinking connected with YouTube content and visual presentation.",
                ne: "युट्युब कन्टेन्ट र भिजुअल प्रस्तुतीकरणसँग जोडिएको रचनात्मक थम्बनेल सोच।"
            }
        },
        {
            category: "design",
            title: { en: "Posters", ne: "पोस्टर" },
            description: {
                en: "Poster-style visual composition connected with creative design and content presentation.",
                ne: "रचनात्मक डिजाइन र कन्टेन्ट प्रस्तुतीकरणसँग जोडिएको पोस्टर शैलीको भिजुअल संरचना।"
            }
        },
        {
            category: "design",
            title: { en: "Creative Designs", ne: "रचनात्मक डिजाइन" },
            description: {
                en: "Clean and practical creative design ideas connected with digital content.",
                ne: "डिजिटल कन्टेन्टसँग जोडिएको सफा र व्यावहारिक रचनात्मक डिजाइन सोच।"
            }
        },
        {
            category: "content",
            title: { en: "Digital Content", ne: "डिजिटल कन्टेन्ट" },
            description: {
                en: "Creating, publishing and improving digital content, especially for YouTube.",
                ne: "विशेष गरी युट्युबका लागि डिजिटल कन्टेन्ट सिर्जना, प्रकाशन र सुधार।"
            }
        }
    ];

    const state = {
        lang: "en",
        filter: "all",
        menuOpen: false
    };

    function storageGet(key) {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    function storageSet(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            /* Storage unavailable */
        }
    }

    function t(key) {
        const lang = translations[state.lang] ? state.lang : "en";
        return translations[lang][key] || translations.en[key] || key;
    }

    function applyTheme(theme) {
        const safeTheme = theme === "light" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", safeTheme);

        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.setAttribute("content", safeTheme === "dark" ? "#0b0d10" : "#f8f7f4");
        }

        storageSet("bt-theme", safeTheme);
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        applyTheme(current === "dark" ? "light" : "dark");
    }

    function applyLanguage(lang) {
        state.lang = translations[lang] ? lang : "en";
        document.documentElement.lang = state.lang;

        document.title = t("meta.title");

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", t("meta.description"));
        }

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            const value = t(key);
            if (value !== key) {
                element.textContent = value;
            }
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            const key = element.getAttribute("data-i18n-alt");
            const value = t(key);
            if (value !== key) {
                element.setAttribute("alt", value);
            }
        });

        document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
            const key = element.getAttribute("data-i18n-aria");
            const value = t(key);
            if (value !== key) {
                element.setAttribute("aria-label", value);
            }
        });

        document.querySelectorAll(".lang-btn").forEach((button) => {
            const isActive = button.dataset.lang === state.lang;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", isActive ? "true" : "false");
        });

        const menuToggle = document.getElementById("menuToggle");
        if (menuToggle) {
            menuToggle.setAttribute("aria-label", t(state.menuOpen ? "a11y.closeMenu" : "a11y.openMenu"));
        }

        storageSet("bt-language", state.lang);
        renderWork();
    }

    function renderWork() {
        const grid = document.getElementById("workGrid");
        if (!grid) return;

        grid.textContent = "";

        const items = state.filter === "all"
            ? workItems
            : workItems.filter((item) => item.category === state.filter);

        if (!items.length) {
            const empty = document.createElement("p");
            empty.className = "work-empty";
            empty.textContent = t("work.empty");
            grid.appendChild(empty);
            return;
        }

        items.forEach((item, index) => {
            const article = document.createElement("article");
            article.className = "work-card reveal visible";

            const top = document.createElement("div");
            top.className = "work-top";

            const category = document.createElement("span");
            category.className = "work-category";
            category.textContent = t("filter." + item.category);

            const number = document.createElement("span");
            number.className = "work-number";
            number.textContent = String(index + 1).padStart(2, "0");

            top.appendChild(category);
            top.appendChild(number);

            const title = document.createElement("h3");
            title.textContent = item.title[state.lang];

            const description = document.createElement("p");
            description.textContent = item.description[state.lang];

            article.appendChild(top);
            article.appendChild(title);
            article.appendChild(description);

            grid.appendChild(article);
        });
    }

    function initTheme() {
        const savedTheme = storageGet("bt-theme");
        applyTheme(savedTheme === "light" ? "light" : "dark");
    }

    function initLanguage() {
        const savedLanguage = storageGet("bt-language");
        applyLanguage(translations[savedLanguage] ? savedLanguage : "en");
    }

    function initThemeControls() {
        document.querySelectorAll(".js-theme-toggle").forEach((button) => {
            button.addEventListener("click", toggleTheme);
        });
    }

    function initLanguageControls() {
        document.querySelectorAll(".lang-btn").forEach((button) => {
            button.addEventListener("click", () => {
                applyLanguage(button.dataset.lang);
            });
        });
    }

    function initMenu() {
        const toggle = document.getElementById("menuToggle");
        const nav = document.getElementById("mainNav");

        if (!toggle || !nav) return;

        function setMenu(open) {
            state.menuOpen = open;
            nav.classList.toggle("open", open);
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", t(open ? "a11y.closeMenu" : "a11y.openMenu"));
        }

        toggle.addEventListener("click", () => {
            setMenu(!state.menuOpen);
        });

        nav.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                setMenu(false);
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && state.menuOpen) {
                setMenu(false);
                toggle.focus();
            }
        });

        document.addEventListener("click", (event) => {
            if (state.menuOpen && !nav.contains(event.target) && !toggle.contains(event.target)) {
                setMenu(false);
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 1120 && state.menuOpen) {
                setMenu(false);
            }
        }, { passive: true });
    }

    function initHeader() {
        const header = document.getElementById("siteHeader");
        if (!header) return;

        let ticking = false;

        function updateHeader() {
            header.classList.toggle("scrolled", window.scrollY > 18);
            ticking = false;
        }

        window.addEventListener("scroll", () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }, { passive: true });

        updateHeader();
    }

    function initFilters() {
        document.querySelectorAll(".filter-btn").forEach((button) => {
            button.addEventListener("click", () => {
                state.filter = button.dataset.filter || "all";

                document.querySelectorAll(".filter-btn").forEach((btn) => {
                    const isActive = btn === button;
                    btn.classList.toggle("active", isActive);
                    btn.setAttribute("aria-pressed", String(isActive));
                });

                renderWork();
            });
        });
    }

    function initReveal() {
        const items = document.querySelectorAll(".reveal");
        const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reducedMotion || !("IntersectionObserver" in window)) {
            items.forEach((item) => item.classList.add("visible"));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        items.forEach((item) => observer.observe(item));
    }

    function initActiveNav() {
        const sections = Array.from(document.querySelectorAll("main section[id]"));
        const links = Array.from(document.querySelectorAll(".main-nav a"));

        if (!sections.length || !links.length) return;

        const linkMap = {};

        links.forEach((link) => {
            const id = link.getAttribute("href").replace("#", "");
            linkMap[id] = link;
        });

        function setActive(id) {
            if (!linkMap[id]) return;

            links.forEach((link) => {
                const isActive = link === linkMap[id];
                link.classList.toggle("active", isActive);

                if (isActive) {
                    link.setAttribute("aria-current", "true");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        }

        if (!("IntersectionObserver" in window)) {
            setActive("home");
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, {
            rootMargin: "-45% 0px -50% 0px",
            threshold: 0
        });

        sections.forEach((section) => observer.observe(section));
        setActive("home");
    }

    function initProfileFallback() {
        const img = document.getElementById("profilePhoto");
        if (!img) return;

        let fallbackApplied = false;

        function setFallback() {
            if (fallbackApplied) return;
            fallbackApplied = true;

            const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#171b23"/><stop offset="100%" stop-color="#0b0d10"/></linearGradient></defs><rect width="800" height="1000" fill="url(#g)"/><circle cx="400" cy="430" r="190" fill="#c9a468" opacity="0.16"/><text x="400" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="170" font-weight="700" fill="#c9a468">BT</text></svg>`;

            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
        }

        img.addEventListener("error", setFallback);

        if (img.complete && img.naturalWidth === 0) {
            setFallback();
        }
    }

    /* Small circular brand photos (header + footer) with BT fallback */
    function initBrandPhotos() {
        document.querySelectorAll(".brand-photo").forEach((img) => {
            let applied = false;

            const apply = () => {
                if (applied) return;
                applied = true;
                const mark = img.closest(".brand-mark");
                if (mark) mark.classList.add("no-photo");
            };

            img.addEventListener("error", apply);

            if (img.complete && img.naturalWidth === 0) {
                apply();
            }
        });
    }

    /* Favicon: use profile photo, fall back to BT monogram if missing */
    function initFavicon() {
        const link = document.getElementById("siteFavicon");
        if (!link) return;

        const monogram = "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='#c9a468'/><text x='50' y='61' font-family='Arial' font-size='38' font-weight='700' text-anchor='middle' fill='#0b0d10'>BT</text></svg>");

        const test = new Image();
        test.onload = () => {
            link.type = "image/jpeg";
            link.href = "images/profile.jpg";
        };
        test.onerror = () => {
            link.type = "image/svg+xml";
            link.href = monogram;
        };
        test.src = "images/profile.jpg";
    }

    function initYear() {
        const year = document.getElementById("year");
        if (year) {
            year.textContent = new Date().getFullYear();
        }
    }

    function init() {
        initTheme();
        initLanguage();
        initThemeControls();
        initLanguageControls();
        initMenu();
        initHeader();
        initFilters();
        renderWork();
        initReveal();
        initActiveNav();
        initProfileFallback();
        initBrandPhotos();
        initFavicon();
        initYear();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();