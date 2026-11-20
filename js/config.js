// All public contact information and shared asset paths. Never put private keys here.
//
// ===================== GABAY: SAAN ILALAGAY ANG FILES =====================
// 1. Kopyahin muna ang file (picture/PDF/video) sa tamang folder sa loob ng "assets".
// 2. Isulat ang path nito sa loob ng '' dito, halimbawa: 'assets/profile/neil.jpg'
// 3. Dapat EKSAKTO ang spelling at malaki/maliit na letra (Neil.JPG ≠ neil.jpg).
// 4. Kapag '' (walang laman), placeholder ang lalabas sa website.
// ===========================================================================
window.NBV_CONFIG = {
  // PROFILE PICTURE: lalabas sa Home (malaking bilog) at sa About section.
  // Ilagay ang picture mo sa folder: assets/profile/
  // Halimbawa: profileImage: 'assets/profile/neil.jpg',
  // Mas maganda kung square (1:1), mga 800x800 pixels, .jpg / .png / .webp
  profileImage: 'assets/profile/profile.png',

  // CV / RESUME: para gumana ang "Download CV" at "View CV" buttons.
  // Ilagay ang PDF mo sa folder: assets/resume/
  // Halimbawa: cv: 'assets/resume/neil-vargas-cv.pdf',
  cv: 'assets/resume/neil-vargas-resume.pdf',

  // true = ipakita, false = itago sa website
  showBirthday: true,
  showPhone: true,

  // CONTACT DETAILS: lalabas sa Contact section at footer.
  email: 'neilbeinbase@gmail.com',
  phone: '09641440734',
  phoneInternational: '+639641440734',
  location: 'Legazpi City, Albay, Philippines',

  // CONTACT FORM (EmailJS): kailangan ito para gumana ang "Send Message".
  // Kunin ang mga ID sa https://www.emailjs.com/ (tingnan ang README.md).
  emailjs: { serviceId: '', templateId: '', publicKey: '', destination: '' },

  // SOCIAL MEDIA LINKS: palitan ang url ng sarili mong link.
  // Para magdagdag (hal. LinkedIn), kopyahin ang isang linya at palitan:
  // { name: 'LinkedIn', icon: 'fa-linkedin-in', fallback:'in', url:'https://www.linkedin.com/in/username' },
  socials: [
    { name: 'Facebook', icon: 'fa-facebook-f', fallback:'f', url:'https://www.facebook.com/share/1F3EjzMwF3/' },
    { name: 'Instagram', icon: 'fa-instagram', fallback:'IG', url:'https://www.instagram.com/neylben._?obrf=d2kzZWRweXowMXl3' },
    { name: 'GitHub', icon: 'fa-github', fallback:'GH', url:'https://github.com/neilbein' },
    { name: 'WhatsApp', icon: 'fa-whatsapp', fallback:'WA', url:'https://wa.me/qr/264OYIIZXAHNH1' }
  ]
};
