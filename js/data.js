// Edit text and individual project/certificate asset paths here.
//
// ===================== GABAY: PICTURES, VIDEO AT LINKS =====================
// PROJECTS (bawat project sa ibaba):
//   thumbnail   = isang picture na lalabas sa project card
//                 folder: assets/projects/   hal. 'assets/projects/rentique-thumb.jpg'
//   screenshots = ilang pictures na lalabas kapag in-click ang project (gallery)
//                 hal. ['assets/projects/rentique-1.jpg', 'assets/projects/rentique-2.jpg']
//   video       = demo video (.mp4 file, HINDI YouTube link)
//                 hal. 'assets/projects/rentique-demo.mp4'
//                 Tumutugtog ito kapag tinapat ang mouse sa card, at may player sa loob ng project.
//   url         = link ng live website (button na "Open Live Website")
//   source      = link ng GitHub repository (button na "Source Code")
//
// CERTIFICATES (credentials sa ibaba):
//   image       = picture ng certificate
//                 folder: assets/certificates/   hal. 'assets/certificates/ygg-2025.jpg'
//
// Kapag '' o [] (walang laman), placeholder ang lalabas. Eksakto dapat ang spelling ng file name.
// Ang profile picture at CV ay nasa js/config.js.
// ===========================================================================
window.NBV_DATA = {
  name:'Neil Bein Vargas', birthday:'2004-12-30',
  titles:['Front-End Developer','Web Developer','IT Professional'],
  biography:'I am Neil Bein Vargas, a fourth-year Bachelor of Science in Information Systems student at Southern Luzon Technical College Foundation Inc. and currently working as a Liaison Officer at TAXBASE / JBB Builder and Supply. I am passionate about front-end development, web design, artificial intelligence, and emerging technologies. I enjoy creating functional, interactive, and visually appealing digital solutions. As a working student, I value responsibility, discipline, adaptability, and continuous learning. My goal is to become a successful IT professional and Front-End Developer, work with international clients, and build innovative websites and systems.',
  journey:[['2023','Began BSIS'],['Aug 2025','Started Liaison Officer role'],['2027','Expected graduation']],
  interests:['Web Designing','Exploring New Technologies','Artificial Intelligence','Gaming','Fitness & Working Out','Listening to Music','Traveling','Photography','Watching Anime','Entrepreneurship','Continuous Learning'],
  strengths:['Hardworking','Adaptable','Self-Motivated','Team Player','Patient','Dedicated','Detail-Oriented','Independent','Responsible','Creative','Problem Solver','Willing to Learn','Disciplined','Time Management'],
  goals:['Become a Professional Front-End Developer','Become a Successful IT Professional','Work with International Clients','Become a Freelancer','Start My Own Business','Support My Family','Build Innovative Websites and Systems','Continuous Personal and Professional Growth'],
  vision:'My goal is to become a successful IT professional and Front-End Developer who creates innovative and meaningful digital experiences. I aspire to work with international clients, pursue freelancing opportunities, and eventually establish my own business. Through continuous learning, dedication, and hard work, I aim to grow professionally, achieve my dreams, and build a better future for my family.',
  skills:[{title:'Front-End Development',icon:'01',items:['HTML5','CSS3','JavaScript','Bootstrap','React.js']},{title:'Back-End & Programming',icon:'02',items:['Python','PHP','Java']},{title:'Database & Cloud',icon:'03',items:['MySQL','Firebase']},{title:'Tools & Software',icon:'04',items:['Visual Studio Code','GitHub','Canva','Figma','XAMPP']}],
  techIcons:{HTML5:'html5',CSS3:'css3',JavaScript:'javascript',Bootstrap:'bootstrap','React.js':'react',Python:'python',PHP:'php',Java:'java',MySQL:'mysql',Firebase:'firebase','Visual Studio Code':'vscode',GitHub:'github',Canva:'canva',Figma:'figma',XAMPP:'apache'},

  // ============================== PROJECTS ==============================
  projects:[
    // ---------- PROJECT 1: RENTIQUE ----------
    {id:'rentique',title:'Rentique',type:'Clothing Rental Management System',status:'Live',
      url:'https://rentique.tech/',        // LINK: live website
      roles:['Front-End Developer','UI/UX Designer','Team Member','Quality Assurance (QA)'],
      tech:['HTML5','CSS3','Java','Python','MySQL','PHP','JavaScript'],
      description:'A clothing rental management system designed to ease clothing discovery and rental shop operations.',
      symbol:'R',tone:'violet',
      thumbnail:'',                         // PICTURE (card): hal. 'assets/projects/rentique-thumb.jpg'
      screenshots:['assets/projects/rentique-ss-1.png','assets/projects/rentique-ss-2.png','assets/projects/rentique-ss-3.png','assets/projects/rentique-ss-4.png'],
      video:'assets/projects/rentique-demo.mp4',
      source:''},                           // LINK: GitHub repo, hal. 'https://github.com/neilbeinvargas/rentique'

    // ---------- PROJECT 2: SHOEBASE / VARGAS FOOTWEAR ----------
    {id:'shoebase',title:'ShoeBase / Vargas Footwear',type:'E-commerce Website',status:'On Hold',
      url:'https://vargashoes.netlify.app/',                               // LINK: live website (kung meron)
      roles:['Front-End Developer','UI/UX Designer','System Developer','Quality Assurance (QA)'],
      tech:['HTML5','CSS3','JavaScript','Java','MySQL','PHP'],
      description:'A footwear e-commerce project featuring a product catalog and shopping-oriented interface.',
      symbol:'S',tone:'amber',
      thumbnail:'',                         // PICTURE (card): hal. 'assets/projects/shoebase-thumb.jpg'
      screenshots:['assets/projects/shoebase-ss-1.png','assets/projects/shoebase-ss-2.png','assets/projects/shoebase-ss-3.png','assets/projects/shoebase-ss-4.png'],
      video:'assets/projects/shoebase-demo.mp4',
      source:'https://github.com/neilbein/shoebase'},

    // ---------- PROJECT 3: DESIGNYOURTAOL ----------
    {id:'designyourtaol',title:'DesignYourTaol',type:'Interactive 3D Coffin Customizer',status:'Live',
      url:'https://designyourtaol.netlify.app/', // LINK: live website
      roles:['Front-End Developer','UI/UX Designer','System Developer','Quality Assurance (QA)'],
      tech:['HTML5','CSS3','JavaScript'],
      description:'A front-end project exploring interactive coffin customization and a 3D preview experience.',
      symbol:'D',tone:'blue',
      thumbnail:'',                         // PICTURE (card): hal. 'assets/projects/designyourtaol-thumb.jpg'
      screenshots:['assets/projects/dyt-ss-1.png','assets/projects/dyt-ss-2.png','assets/projects/dyt-ss-3.png'],
      video:'assets/projects/designyourtaol-demo.mp4',
      source:'https://github.com/neilbein/designyourtaol'},

    // ---------- PROJECT 4: FITNESSBASE ----------
    {id:'fitnessbase',title:'FitnessBase',type:'Fitness & Gym Website',status:'Live',
      url:'https://fitnesbase.netlify.app/',
      roles:['Front-End Developer','UI/UX Designer','System Developer'],
      tech:['HTML5','CSS3','JavaScript'],
      description:'A fitness and gym website featuring workout programs, nutrition guides, progress tracking, and coach profiles designed for health-conscious users.',
      symbol:'F',tone:'green',
      thumbnail:'',
      screenshots:['assets/projects/fitnessbase-ss-1.png','assets/projects/fitnessbase-ss-2.png','assets/projects/fitnessbase-ss-3.png','assets/projects/fitnessbase-ss-4.png'],
      video:'assets/projects/fitnessbase-demo.mp4',
      source:'https://github.com/neilbein/fitnessbase'},

    // ---------- PROJECT 5: LCC STORE ----------
    {id:'lccstore',title:'LCC Store',type:'Online Supermarket / E-Commerce Website',status:'Live',
      url:'https://lccstore.netlify.app/',
      roles:['Front-End Developer','UI/UX Designer','System Developer'],
      tech:['HTML5','CSS3','JavaScript'],
      description:'An online supermarket platform for LCC with product catalog browsing, category filtering, cart functionality, and a guest checkout experience.',
      symbol:'L',tone:'blue',
      thumbnail:'',
      screenshots:['assets/projects/lccstore-ss-1.png','assets/projects/lccstore-ss-2.png','assets/projects/lccstore-ss-3.png','assets/projects/lccstore-ss-4.png'],
      video:'assets/projects/lccstore-demo.mp4',
      source:'https://github.com/neilbein/lcc-store'}
  ],

  training:[['November 2025','YGG Play Summit 2025','YGG Metaversity (SM Aura, BGC)'],['June 2025','Quantum Computing and Blockchain Lecture Series & Hackathon','QCSP & Ateneo De Naga University'],['December 2024','SPARK Training Program on Digital Affiliate Marketing (54 Hours)','DICT Region V - ILCDB'],['December 2024','Bicol Partner Center Management Training (8 Hours)','DICT Region V - Tech4ED DTC Initiative']],

  // ======================= CERTIFICATES & AWARDS =======================
  // image = PICTURE ng certificate. Folder: assets/certificates/
  credentials:[
    {title:'YGG Play Summit 2025',type:'Certificate of Participation',issuer:'YGG Metaversity',year:2025,
      image:'assets/certificates/ygg-2025.png'},
    {title:'Quantum Computing & Blockchain Hackathon',type:'Certificate of Participation',issuer:'QCSP & ADNU',year:2025,
      image:'assets/certificates/quantum-hackathon-2025.png'},
    {title:'SPARK Digital Affiliate Marketing',type:'Certificate of Completion',issuer:'DICT - ILCDB',year:2024,
      image:'assets/certificates/spark-2024.png'},
    {title:'Bicol Partner Center Management',type:'Certificate of Completion',issuer:'DICT Region V',year:2024,
      image:'assets/certificates/bicol-partner-2024.png'},
    {title:'Best in Campaign & Sales Output',type:'Award',issuer:'Department of Information and Communications Technology (DICT Region V)',year:2024,
      image:'assets/certificates/best-in-campaign-2024.png'}
  ],
  achievements:[],
  responsibilities:'Facilitate official external transactions with the Bureau of Internal Revenue (BIR), commercial banks, and government agencies—handling client business registrations, COR updates, Authority to Print (ATP), and Tax Clearances. Execute over-the-counter banking transactions, including tax remittances, rental payments, and penalty settlements, while coordinating with notaries public to ensure document completeness.',
  professionalSkills:['Communication','Time management','Documentation','Client relations','Transaction management','Professional coordination'],
  availability:['Open to Work','Available for Freelance Projects','Open to Job Opportunities','Available for Remote Work','Open to International Clients','Open to Part-Time Opportunities']
};
