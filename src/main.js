const chapters = [
  ['บ้านหลังแรก', 'First Care Home', '1–30', 'เริ่มต้นด้วยบ้านพักเล็ก ๆ วางรากฐานการดูแล จัดทีมชุดแรก และพาธุรกิจผ่าน 30 วันแรกของคุณ', 'nursing', 'ก้าวแรกของการดูแล'],
  ['ศูนย์พยาบาล', 'Professional Nursing Center', '31–90', 'ยกระดับสู่ศูนย์พยาบาลมืออาชีพ เพิ่มโปรแกรมดูแลเฉพาะทาง และบริหารกระแสเงินสดระหว่างการขยายกิจการ', 'nursing', 'คุณภาพที่เติบโตไปด้วยกัน'],
  ['ชีวิตที่ลงตัว', 'Tranquila Senior Living', '91–150', 'สร้างวิลล่าสำหรับผู้สูงอายุ พร้อมพื้นที่พักผ่อนและสิ่งอำนวยความสะดวก ให้การดูแลและคุณภาพชีวิตเดินไปด้วยกัน', 'living', 'มากกว่าบ้าน คือความสุข'],
  ['ดูแลถึงบ้าน', 'Home Care', '151–210', 'ขยายการดูแลออกนอกศูนย์ จับคู่ทักษะบุคลากรกับงานเยี่ยมบ้าน และวางแผนการให้บริการที่ต่อเนื่อง', 'living', 'ความใส่ใจที่ไปได้ไกลกว่า'],
  ['สร้างทีม', 'Healthcare Workforce', '211–270', 'ลงทุนในการฝึกอบรมและพัฒนาทักษะ สร้างทีมบุคลากร และรับงานจัดส่งทีมดูแลให้ธุรกิจอื่น', 'nursing', 'ทีมที่ดี คือรากฐานที่แข็งแรง'],
  ['โรงพยาบาล', 'Neuro Hospital', '271–330', 'ก้าวสู่การบริหารโรงพยาบาลระบบประสาท ดูแลการดำเนินงานคลินิกผู้ป่วยนอกและ Stroke Unit ในระบบจำลอง', 'hospital', 'ความท้าทายบทใหม่'],
  ['อาณาจักร', 'Healthcare Empire', '331–390', 'เชื่อมธุรกิจของคุณเป็นเครือข่ายสาขา บริหารภาพรวมของอาณาจักร ก่อนเดินทางต่อในโหมดเล่นอิสระ', 'hospital', 'จากความฝัน สู่เครือข่ายการดูแล'],
];
const tabs = document.querySelector('.chapter-tabs');
function selectChapter(index, focus = false) {
  tabs.querySelectorAll('button').forEach((button, i) => {
    button.setAttribute('aria-selected', String(i === index));
    button.tabIndex = i === index ? 0 : -1;
    if (focus && i === index) button.focus();
  });
  const [name, english, days, description, image, tag] = chapters[index];
  document.querySelector('#chapter-panel').setAttribute('aria-labelledby', `chapter-${index}`);
  document.querySelector('#chapter-panel').innerHTML = `<div class="chapter-picture"><span>CHAPTER 0${index + 1}</span><img src="${import.meta.env.BASE_URL}assets/${image}.${image === 'hospital' ? 'webp' : 'png'}" alt="${name}" width="256" height="256"></div><div class="chapter-text"><p class="eyebrow">DAYS ${days} · ${english.toUpperCase()}</p><h3>${name}</h3><p>${description}</p><span class="chapter-tag">${tag}</span></div>`;
}
chapters.forEach((chapter, i) => {
  const button = document.createElement('button');
  button.id = `chapter-${i}`;
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-controls', 'chapter-panel');
  button.textContent = `${String(i + 1).padStart(2, '0')} ${chapter[0]}`;
  button.addEventListener('click', () => selectChapter(i));
  button.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (i + 1) % chapters.length;
    if (event.key === 'ArrowLeft') next = (i + chapters.length - 1) % chapters.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = chapters.length - 1;
    if (next !== undefined) { event.preventDefault(); selectChapter(next, true); }
  });
  tabs.append(button);
});
selectChapter(0);
const dialog = document.querySelector('#preview');
document.querySelector('#open-preview').addEventListener('click', () => dialog.showModal());
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
const menu = document.querySelector('.menu');
const nav = document.querySelector('.header nav');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'ปิดเมนู' : 'เปิดเมนู'); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
