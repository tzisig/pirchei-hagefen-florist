// Single source of truth for everything client-specific.
// To offer this site to another florist: edit this file, replace the images in src/assets/img,
// run `npm run icons` if the colors changed, then `npm run build`.
// Nothing in pages or components should hard-code a phone, price, area, hour or name.

import hero from '../assets/img/hero.jpg';
import ownerPhoto from '../assets/img/owner.jpg';
import studio from '../assets/img/studio.jpg';
import delivery from '../assets/img/delivery.jpg';
import giftCard from '../assets/img/gift-card.jpg';
import svcEveryday from '../assets/img/svc-everyday.jpg';
import svcEvents from '../assets/img/svc-events.jpg';
import svcSubscription from '../assets/img/svc-subscription.jpg';
import svcSympathy from '../assets/img/svc-sympathy.jpg';
import svcPlants from '../assets/img/svc-plants.jpg';
import bRanunculus from '../assets/img/b-ranunculus.jpg';
import bProtea from '../assets/img/b-protea.jpg';
import bLisianthus from '../assets/img/b-lisianthus.jpg';
import bPeony from '../assets/img/b-peony.jpg';
import bDusk from '../assets/img/b-dusk.jpg';
import bPinkVase from '../assets/img/b-pink-vase.jpg';
import bSpring from '../assets/img/b-spring.jpg';
import bGarden from '../assets/img/b-garden.jpg';
import bWhiteRoses from '../assets/img/b-white-roses.jpg';
import bHydrangea from '../assets/img/b-hydrangea.jpg';
import bTulips from '../assets/img/b-tulips.jpg';
import bWild from '../assets/img/b-wild.jpg';
import gTableCandles from '../assets/img/g-table-candles.jpg';
import gCenterpiece from '../assets/img/g-centerpiece.jpg';
import gWhiteTable from '../assets/img/g-white-table.jpg';
import gLongTable from '../assets/img/g-long-table.jpg';
import gAnthurium from '../assets/img/g-anthurium.jpg';
import gBridal from '../assets/img/g-bridal.jpg';
import areaRehavia from '../assets/img/area-rehavia.jpg';
import areaBaka from '../assets/img/area-baka.jpg';
import areaEinKarem from '../assets/img/area-ein-karem.jpg';
import areaBeitHakerem from '../assets/img/area-beit-hakerem.jpg';
import areaArnona from '../assets/img/area-arnona.jpg';
import areaKatamon from '../assets/img/area-katamon.jpg';
import seasonAnemone from '../assets/img/season-anemone.jpg';
import seasonPurple from '../assets/img/season-purple.jpg';

// ---------------------------------------------------------------------------
// Identity
// ---------------------------------------------------------------------------

export const site = {
  name: 'פרחי הגפן',
  shortName: 'פרחי הגפן',
  tagline: 'חנות פרחים וסטודיו לעיצוב פרחים בירושלים',
  url: 'https://pirchei-hagefen-florist.pages.dev',
  lang: 'he',
  dir: 'rtl',
  locale: 'he_IL',
  /** Demo mode: noindex on every page, X-Robots-Tag header, and a demo note in the footer. */
  isDemo: true,
  demoNote: 'אתר הדגמה לתיק עבודות. העסק, האנשים, המחירים וההמלצות בדויים.',
  foundedYear: 2014,
  updated: '2026-09-28',
};

export const owner = {
  name: 'נועה אלמוג',
  role: 'מעצבת פרחים ובעלת הסטודיו',
  image: ownerPhoto,
  imageAlt: 'מעצבת פרחים בסינר עוטפת זר ורדים בסטודיו',
  short: 'נועה מעצבת פרחים בירושלים משנת 2014. כל זר יוצא מהשולחן שלה בבקעה, והיא עדיין עונה בעצמה לרוב ההודעות בוואטסאפ.',
  story: [
    'גדלתי במושב ליד בית שמש, בין חממות של ליזיאנתוס. כשהייתי בת 12 כבר ידעתי לחתוך גבעול באלכסון ולהוריד עלים מתחת לקו המים, ועוד לא ידעתי שזה יהיה המקצוע שלי.',
    'אחרי לימודי עיצוב בבצלאל עבדתי שלוש שנים אצל מעצבת אירועים בתל אביב. שם למדתי לבנות שולחן של 300 אורחים בשש שעות, ולמדתי גם מה אני לא רוצה: זרים שנראים אותו דבר בכל עונה.',
    'ב-2014 פתחתי את פרחי הגפן בחנות קטנה בבקעה. אנחנו קונים פעמיים בשבוע ישירות ממגדלים, ולכן מה שיש בזרים שלנו תלוי בעונה. בחורף יש כלניות ונוריות, בקיץ חמניות והורטנזיות. זה עולה פחות, מחזיק יותר, ונראה כמו ירושלים.',
  ],
  credentials: [
    'בוגרת המחלקה לעיצוב בבצלאל',
    'השתלמות בעיצוב פרחים לאירועים, בית הספר לפרחים בהולנד (Aalsmeer)',
    'חברה בארגון מעצבי הפרחים בישראל',
  ],
};

// ---------------------------------------------------------------------------
// Contact, hours, delivery rules
// ---------------------------------------------------------------------------

export const contact = {
  phone: '050-000-0000',
  phoneHref: '+972500000000',
  whatsapp: '972500000000',
  email: 'hello@florist-demo.co.il',
  street: 'רחוב בית לחם (כתובת לדוגמה)',
  locality: 'ירושלים',
  neighborhood: 'בקעה',
  region: 'ירושלים',
  country: 'IL',
  postalCode: '9346000',
  geo: { lat: 31.7571, lng: 35.2203 },
  responsePromise: 'נחזור אליכם תוך שעה בשעות הפתיחה',
  /** Default text for the plain WhatsApp button. */
  whatsappGreeting: 'שלום נועה, אשמח להזמין זר',
};

/** Opening hours, Israel time. day: 0 = Sunday. cutoff = last order time for same-day delivery. */
export const hours = [
  { day: 0, label: 'ראשון', opens: '08:00', closes: '19:00', cutoff: '14:00' },
  { day: 1, label: 'שני', opens: '08:00', closes: '19:00', cutoff: '14:00' },
  { day: 2, label: 'שלישי', opens: '08:00', closes: '19:00', cutoff: '14:00' },
  { day: 3, label: 'רביעי', opens: '08:00', closes: '19:00', cutoff: '14:00' },
  { day: 4, label: 'חמישי', opens: '08:00', closes: '20:00', cutoff: '15:00' },
  { day: 5, label: 'שישי', opens: '07:30', closes: '14:00', cutoff: '11:00' },
  { day: 6, label: 'שבת', opens: '', closes: '', cutoff: '' },
] as const;

export const deliveryRules = {
  timeZone: 'Asia/Jerusalem',
  /** Shown next to the cutoff times. */
  sameDayNote: 'הזמנה עד שעת הסגירה של היום מגיעה עוד היום, בחלון של שלוש שעות.',
  pickupNote: 'איסוף עצמי מהחנות בבקעה בלי תוספת תשלום, בכל שעות הפתיחה.',
  hospitalNote: 'במחלקות טיפול נמרץ, בפגיות ובחלק ממחלקות האשפוז אסור להכניס פרחים. לפני משלוח לבית חולים נבדוק איתכם את המחלקה.',
  holidayNote: 'בערבי חג שעות המשלוח מקדימות. לפני ראש השנה, פסח ושבועות כדאי להזמין יומיים מראש.',
};

// ---------------------------------------------------------------------------
// Theme (colors also feed the icon generator: npm run icons)
// ---------------------------------------------------------------------------

export const theme = {
  themeColor: '#3a1b3d',
  colors: {
    grape: '#3a1b3d',
    grapeDeep: '#27112a',
    grapeSoft: '#5a3159',
    vine: '#3f5a26',
    tendril: '#cfe07a',
    paper: '#f6f2f5',
    blush: '#ecdfe8',
    text: '#241427',
    muted: '#62536a',
    line: '#d9cad4',
    whatsapp: '#17784a',
    error: '#a3122e',
  },
};

export const social = {
  instagram: '',
  facebook: '',
};

// ---------------------------------------------------------------------------
// Numbers shown on the site (demo values)
// ---------------------------------------------------------------------------

export const stats = {
  rating: 4.9,
  reviewCount: 212,
  bouquetsPerYear: 6800,
  weddingsPerYear: 40,
  growers: 9,
};

// ---------------------------------------------------------------------------
// Sizes and prices (VAT included). Used by the catalog, the builder and the price table.
// ---------------------------------------------------------------------------

export const sizes = [
  { id: 's', label: 'קטן', stems: 'כ-12 גבעולים', price: 180 },
  { id: 'm', label: 'בינוני', stems: 'כ-20 גבעולים', price: 260 },
  { id: 'l', label: 'גדול', stems: 'כ-30 גבעולים', price: 380 },
  { id: 'xl', label: 'מפואר', stems: 'כ-45 גבעולים', price: 520 },
] as const;

export type SizeId = (typeof sizes)[number]['id'];

export const priceNote = 'כל המחירים כוללים מע"מ. דמי משלוח לפי שכונה, ראו בעמוד המשלוחים.';

// ---------------------------------------------------------------------------
// Flowers and seasons (months 1-12). Drives the season calendar and the builder.
// ---------------------------------------------------------------------------

export type Flower = {
  id: string;
  name: string;
  latin: string;
  months: number[];
  local: boolean;
  note: string;
};

const all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const flowers: Flower[] = [
  { id: 'anemone', name: 'כלנית', latin: 'Anemone coronaria', months: [12, 1, 2, 3], local: true, note: 'הפרח של החורף הירושלמי. אדומה, סגולה ולבנה, נפתחת בחום ונסגרת בלילה.' },
  { id: 'ranunculus', name: 'נורית', latin: 'Ranunculus asiaticus', months: [1, 2, 3, 4], local: true, note: 'עשרות עלי כותרת דקים כמו נייר. מחזיקה עד עשרה ימים באגרטל.' },
  { id: 'narcissus', name: 'נרקיס', latin: 'Narcissus tazetta', months: [11, 12, 1, 2], local: true, note: 'ריחני מאוד. בזר אנחנו שמים אותו בכלי נפרד, כי הנוזל שלו מקצר חיים לפרחים אחרים.' },
  { id: 'tulip', name: 'טוליפ', latin: 'Tulipa', months: [12, 1, 2, 3, 4], local: false, note: 'ממשיך לגדול באגרטל גם אחרי שנחתך, ומתכופף לכיוון האור.' },
  { id: 'iris', name: 'אירוס', latin: 'Iris hollandica', months: [2, 3, 4], local: true, note: 'כחול-סגול עמוק. נפתח תוך יום-יומיים מניצן סגור.' },
  { id: 'calla', name: 'כלה', latin: 'Zantedeschia aethiopica', months: [12, 1, 2, 3, 4, 5], local: true, note: 'קו נקי ואלגנטי. מתאימה לזרי כלה ולזרים לאזכרה.' },
  { id: 'peony', name: 'אדמונית', latin: 'Paeonia lactiflora', months: [4, 5, 6], local: false, note: 'עונה קצרה של כשישה שבועות. מגיעה סגורה כמו כדור ונפתחת לגודל של כף יד.' },
  { id: 'lavender', name: 'לבנדר', latin: 'Lavandula angustifolia', months: [5, 6, 7], local: true, note: 'ריח חזק שמחזיק גם אחרי שהזר מתייבש.' },
  { id: 'sunflower', name: 'חמנייה', latin: 'Helianthus annuus', months: [5, 6, 7, 8, 9, 10], local: true, note: 'הפרח של הקיץ. צריכה הרבה מים, אז מוסיפים לאגרטל כל יום.' },
  { id: 'hydrangea', name: 'הורטנזיה', latin: 'Hydrangea macrophylla', months: [5, 6, 7, 8, 9], local: false, note: 'שותה גם דרך עלי הכותרת. אם היא נובלת, טובלים את כל הראש במים לעשר דקות.' },
  { id: 'lisianthus', name: 'ליזיאנתוס', latin: 'Eustoma grandiflorum', months: [4, 5, 6, 7, 8, 9, 10, 11], local: true, note: 'גדל בחממות בישראל. נראה כמו ורד עדין ומחזיק שבועיים.' },
  { id: 'protea', name: 'פרוטאה', latin: 'Protea cynaroides', months: [9, 10, 11, 12, 1], local: true, note: 'מגדלים אותה גם בערבה. פרח גדול שמתייבש יפה ונשאר על המדף חודשים.' },
  { id: 'rose', name: 'ורד', latin: 'Rosa', months: all, local: true, note: 'זמין כל השנה. בסתיו אנחנו עובדים עם ורדי גן מקומיים, עם ריח.' },
  { id: 'gypsophila', name: 'גיבסנית', latin: 'Gypsophila paniculata', months: all, local: true, note: 'העננים הלבנים בין הפרחים. נראית טוב גם לבד, בזר גדול אחד.' },
  { id: 'eucalyptus', name: 'אקליפטוס', latin: 'Eucalyptus cinerea', months: all, local: true, note: 'הירוק הכסוף שברוב הזרים שלנו. מרענן את הריח של כל החדר.' },
];

// ---------------------------------------------------------------------------
// Bouquet catalog. code = what customers quote in WhatsApp.
// ---------------------------------------------------------------------------

export type Palette = 'white' | 'blush' | 'warm' | 'deep' | 'wild';

/** flowers = ids from `flowers` that fit the palette. The builder offers the ones in season. */
export const palettes: { id: Palette; label: string; description: string; swatch: string[]; flowers: string[] }[] = [
  { id: 'white', label: 'לבן וירוק', description: 'שקט ונקי. מתאים לכל אירוע ולכל בית.', swatch: ['#f7f5ef', '#dfe6d2', '#7d8f68'], flowers: ['calla', 'ranunculus', 'anemone', 'narcissus', 'hydrangea', 'lisianthus', 'rose', 'gypsophila'] },
  { id: 'blush', label: 'ורוד ולילך', description: 'רך ורומנטי.', swatch: ['#f3cfd9', '#d9b3d6', '#b07aa1'], flowers: ['peony', 'ranunculus', 'tulip', 'anemone', 'hydrangea', 'lisianthus', 'rose'] },
  { id: 'warm', label: 'כתום וצהוב', description: 'שמח ומלא אור.', swatch: ['#f6c343', '#ef8a3c', '#c8553d'], flowers: ['sunflower', 'ranunculus', 'tulip', 'narcissus', 'protea', 'rose'] },
  { id: 'deep', label: 'בורדו וסגול', description: 'עמוק ודרמטי, בעיקר בחורף.', swatch: ['#6d1a36', '#4b2a5c', '#2e2436'], flowers: ['anemone', 'iris', 'protea', 'tulip', 'lisianthus', 'rose'] },
  { id: 'wild', label: 'פרחי שדה', description: 'נראה כאילו נקטף הבוקר מהגבעה.', swatch: ['#e9e1b9', '#a9b77c', '#8a6aa3'], flowers: ['lavender', 'anemone', 'iris', 'sunflower', 'lisianthus', 'gypsophila'] },
];

export type Bouquet = {
  code: string;
  slug: string;
  name: string;
  image: ImageMetadata;
  imageAlt: string;
  palette: Palette;
  flowers: string[];
  size: SizeId;
  description: string;
};

export const bouquets: Bouquet[] = [
  { code: '01', slug: 'neshef', name: 'נשף', image: bRanunculus, imageAlt: 'נורית לבנה גדולה עם פרחים כתומים וצהובים על רקע כהה', palette: 'warm', flowers: ['נורית', 'ורד', 'אקליפטוס'], size: 'm', description: 'נורית לבנה במרכז, מוקפת ורדים כתומים. זר שמח שלא צועק.' },
  { code: '02', slug: 'arava', name: 'ערבה', image: bProtea, imageAlt: 'פרוטאות אדומות באגרטל כהה על רקע שחור', palette: 'deep', flowers: ['פרוטאה', 'אקליפטוס'], size: 'l', description: 'פרוטאות מגידול בערבה. מחזיק שבועיים, ואחר כך מתייבש יפה על המדף.' },
  { code: '03', slug: 'mishol', name: 'משעול', image: bLisianthus, imageAlt: 'ליזיאנתוס ורוד וטוליפ צהוב על רקע כהה', palette: 'blush', flowers: ['ליזיאנתוס', 'טוליפ'], size: 'm', description: 'ליזיאנתוס מחממה ליד בית שמש, עם נגיעה של צהוב.' },
  { code: '04', slug: 'pericha', name: 'פריחה', image: bPeony, imageAlt: 'ענף של אדמוניות ורודות על רקע ירוק כהה', palette: 'blush', flowers: ['אדמונית', 'ורד'], size: 'l', description: 'אדמוניות בעונה הקצרה שלהן, באביב. מחוץ לעונה נחליף בוורדי גן.' },
  { code: '05', slug: 'bein-arbayim', name: 'בין ערביים', image: bDusk, imageAlt: 'סידור פרחים בגווני בורדו וסגול באגרטל ירוק', palette: 'deep', flowers: ['ורד', 'הורטנזיה', 'אקליפטוס'], size: 'm', description: 'הצבעים של ירושלים אחרי השקיעה. אהוב במיוחד לימי נישואין.' },
  { code: '06', slug: 'boker', name: 'בוקר', image: bPinkVase, imageAlt: 'נוריות ורודות באגרטל לבן על אדן חלון', palette: 'blush', flowers: ['נורית'], size: 's', description: 'צרור קטן של נוריות. מתנה קטנה שמאירה שולחן עבודה.' },
  { code: '07', slug: 'aviv', name: 'אביב', image: bSpring, imageAlt: 'נוריות לבנות, ורודות וכתומות באגרטל זכוכית', palette: 'warm', flowers: ['נורית', 'כלנית'], size: 'm', description: 'כל הצבעים של מרץ בזר אחד.' },
  { code: '08', slug: 'gan', name: 'גן', image: bGarden, imageAlt: 'זר ורדי גן בגוון אפרסק עם עלווה ירוקה על שולחן עץ', palette: 'wild', flowers: ['ורד', 'אקליפטוס', 'גיבסנית'], size: 'l', description: 'ורדי גן עם עלווה חופשית. נראה כאילו נקטף מהחצר.' },
  { code: '09', slug: 'lavan', name: 'לבן', image: bWhiteRoses, imageAlt: 'זר עגול וצפוף של ורדים לבנים עטוף בנייר', palette: 'white', flowers: ['ורד'], size: 'xl', description: 'חמישים ורדים לבנים בכדור אחד צפוף. להצעת נישואין או לתודה גדולה.' },
  { code: '10', slug: 'anan', name: 'ענן', image: bHydrangea, imageAlt: 'זר של הורטנזיה לבנה וורדים בגוון שמנת', palette: 'white', flowers: ['הורטנזיה', 'ורד'], size: 'm', description: 'רך ובהיר. מתאים גם ליולדת וגם לנחמה.' },
  { code: '11', slug: 'ahava', name: 'אהבה', image: bTulips, imageAlt: 'שני זרים של טוליפים אדומים עטופים בנייר לבן', palette: 'deep', flowers: ['טוליפ'], size: 'm', description: 'טוליפים אדומים בלבד. בלי הסברים.' },
  { code: '12', slug: 'sadeh', name: 'שדה', image: bWild, imageAlt: 'פרחי שדה לבנים וצהובים באגרטל זכוכית גבוה', palette: 'wild', flowers: ['גיבסנית', 'לבנדר', 'אקליפטוס'], size: 's', description: 'פרחי שדה ועשבים. הזר הכי ירושלמי שלנו.' },
];

// ---------------------------------------------------------------------------
// Services (one page each)
// ---------------------------------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  short: string;
  keyword: string;
  image: ImageMetadata;
  imageAlt: string;
  priceFrom: number;
  priceUnit: string;
  intro: string;
  whenTitle: string;
  when: string[];
  includesTitle: string;
  includes: string[];
  steps: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  formTopic: string;
};

export const services: Service[] = [
  {
    slug: 'gift-bouquets',
    title: 'זרים למתנה',
    short: 'זר מוכן מהקטלוג או זר בהתאמה אישית, עם כרטיס ברכה בכתב יד.',
    keyword: 'משלוח פרחים בירושלים',
    image: svcEveryday,
    imageAlt: 'נוריות ורודות, לבנות ואדומות עטופות בנייר חום',
    priceFrom: 180,
    priceUnit: 'לזר',
    intro: 'יום הולדת, תודה, החלמה או סתם יום שלישי. בוחרים זר מהקטלוג או מספרים לנו למי הוא מיועד, ואנחנו מרכיבים אותו מהפרחים שהגיעו השבוע מהמגדלים.',
    whenTitle: 'מתי מזמינים',
    when: ['יום הולדת או יום נישואין', 'תודה למורה, לרופאה או לשכנה', 'לידה או החלמה', 'כשרוצים לשמח מישהו בלי סיבה'],
    includesTitle: 'מה מקבלים',
    includes: ['זר עטוף בנייר ממוחזר, עם מים בשקית בתחתית', 'כרטיס ברכה שנכתב ביד', 'שקית חומר הזנה ודף הוראות טיפול', 'תמונה של הזר בוואטסאפ לפני שהוא יוצא'],
    steps: [
      { title: 'בוחרים', text: 'זר מהקטלוג, או צבע ותקציב בבונה הזרים.' },
      { title: 'שולחים', text: 'הודעת וואטסאפ מוכנה עם כל הפרטים, או טלפון.' },
      { title: 'מאשרים', text: 'אנחנו שולחים תמונה של הזר ואתם מאשרים לפני היציאה.' },
      { title: 'מקבלים', text: 'השליח מתקשר לפני שהוא מגיע, ואנחנו שולחים לכם הודעה כשהזר נמסר.' },
    ],
    faq: [
      { q: 'אפשר לבחור זר מהקטלוג ולשנות בו צבע?', a: 'כן. כתבו לנו את מספר הזר ואת השינוי, ונתאים את הפרחים למה שיש השבוע.' },
      { q: 'מה אם הנמען לא בבית?', a: 'השליח מתקשר לנמען. אם אין מענה, נתאם איתכם השארה אצל שכן או משלוח חוזר בלי תוספת תשלום באותו יום.' },
      { q: 'אפשר להוסיף שוקולד או יין?', a: 'אפשר להוסיף שוקולד מחנות שוקולד שכנה בבקעה. יין איננו שולחים.' },
    ],
    formTopic: 'זר למתנה',
  },
  {
    slug: 'weddings-events',
    title: 'חתונות ואירועים',
    short: 'זר כלה, מרכזי שולחן, חופה ועיצוב מקום, מפגישת היכרות ועד פירוק.',
    keyword: 'עיצוב פרחים לחתונה בירושלים',
    image: svcEvents,
    imageAlt: 'מרכז שולחן גבוה של ורדים ופרחים סגולים בחתונה',
    priceFrom: 4500,
    priceUnit: 'לחבילת חתונה',
    intro: 'אנחנו לוקחים עד ארבעה אירועים בחודש, כדי שנועה תהיה בכל אחד מהם בעצמה. העבודה מתחילה בפגישה במקום האירוע, ונגמרת כשהפרחים האחרונים יוצאים משם.',
    whenTitle: 'לאילו אירועים',
    when: ['חתונות בגני אירועים באזור ירושלים ועין כרם', 'בר ובת מצווה', 'ברית ושמחת בת', 'אירועי חברה, השקות וכנסים'],
    includesTitle: 'מה כולל עיצוב חתונה',
    includes: ['פגישת היכרות וסיור במקום האירוע', 'הדמיה של הצבעים והפרחים לפני הזמנת הפרחים', 'זר כלה וסיכות לחתן ולהורים', 'עיצוב חופה ומרכזי שולחן', 'הקמה ביום האירוע ופירוק בסופו'],
    steps: [
      { title: 'פגישה', text: 'שיחה על הסגנון, המקום והתקציב. בלי התחייבות.' },
      { title: 'הצעה', text: 'תוך שבוע: הצעת מחיר מפורטת והדמיית צבעים.' },
      { title: 'הזמנת פרחים', text: 'שבועיים לפני האירוע אנחנו מזמינים מהמגדלים ומעדכנים אתכם.' },
      { title: 'יום האירוע', text: 'מגיעים שש שעות לפני, בונים, ונשארים עד שהכל במקום.' },
    ],
    faq: [
      { q: 'כמה זמן מראש צריך להזמין?', a: 'לחתונה מומלץ ארבעה עד שישה חודשים מראש, בעיקר בין מאי לאוקטובר. לאירועים קטנים מספיקים שבועיים.' },
      { q: 'עובדים גם מחוץ לירושלים?', a: 'כן, עד מרחק של שעה נסיעה, בתוספת עלות הובלה שתופיע בהצעת המחיר.' },
      { q: 'אפשר להשתמש בפרחים מהחופה גם בקבלת הפנים?', a: 'כן, ואנחנו ממליצים על זה. זה חוסך בתקציב ונותן לפרחים עבודה כפולה.' },
    ],
    formTopic: 'חתונה או אירוע',
  },
  {
    slug: 'flower-subscriptions',
    title: 'מינוי פרחים לבית ולמשרד',
    short: 'זר טרי כל שבוע או כל שבועיים, במחיר קבוע, בלי לזכור להזמין.',
    keyword: 'מינוי פרחים שבועי',
    image: svcSubscription,
    imageAlt: 'פרחים בודדים באגרטלי זכוכית שקופים על שולחן לבן',
    priceFrom: 140,
    priceUnit: 'למשלוח',
    intro: 'מינוי זה הדרך הכי זולה להחזיק פרחים בבית כל הזמן. אתם בוחרים גודל ותדירות, ואנחנו בוחרים כל שבוע את הפרחים הכי טובים שהגיעו.',
    whenTitle: 'למי זה מתאים',
    when: ['בית שרוצה פרחים לשבת כל שבוע', 'קבלה של משרד, מרפאה או קליניקה', 'בתי קפה ומסעדות', 'מתנה של שלושה חודשים למישהו שאוהבים'],
    includesTitle: 'מה כולל המינוי',
    includes: ['משלוח קבוע ביום שתבחרו, או ביום שישי לפני שבת', 'אגרטל זכוכית במשלוח הראשון, בלי תוספת תשלום', 'החלפת הזר הישן במשרדים', 'דילוג או הקפאה בהודעה פשוטה, בלי קנס'],
    steps: [
      { title: 'גודל', text: 'בית: קטן או בינוני. משרד: לפי גודל הקבלה.' },
      { title: 'תדירות', text: 'כל שבוע או כל שבועיים.' },
      { title: 'יום', text: 'ביום שישי לשבת, או בכל יום אחר בשבוע.' },
      { title: 'תשלום', text: 'חיוב חודשי בכרטיס אשראי. אפשר לבטל בכל חודש.' },
    ],
    faq: [
      { q: 'אפשר להקפיא את המינוי כשאנחנו בחופשה?', a: 'כן. שולחים הודעה עד יום לפני המשלוח, ואנחנו מדלגים.' },
      { q: 'מה המחיר למשרד?', a: 'מ-290 ש"ח למשלוח, כולל החלפה של הזר הקודם ומים טריים. המחיר המדויק תלוי בגודל ובמספר הסידורים.' },
      { q: 'אפשר לבקש לא לקבל פרחים עם ריח חזק?', a: 'כן, ובמשרדים אנחנו ממליצים על זה. נרשום את זה במינוי ולא נשלח לבנדר, נרקיס או חבצלות.' },
    ],
    formTopic: 'מינוי פרחים',
  },
  {
    slug: 'sympathy-flowers',
    title: 'פרחים לאזכרה ולניחומים',
    short: 'זרים שקטים לאזכרה, לטקס ולביקור, בהתאם למנהגים.',
    keyword: 'פרחים לאזכרה בירושלים',
    image: svcSympathy,
    imageAlt: 'סידור של פרחי כלה לבנים ועלווה ירוקה על רקע אפור',
    priceFrom: 220,
    priceUnit: 'לזר',
    intro: 'בהלוויה יהודית לא נהוג להביא פרחים, ובבית האבלים בזמן השבעה מקובל יותר לשלוח אוכל. פרחים מתאימים לאזכרה, לאזכרת שלושים ולשנה, לטקסים ולבית של משפחה שאינה נוהגת לפי המנהג. אם אתם לא בטוחים, נשמח לעזור לבחור.',
    whenTitle: 'מתי שולחים',
    when: ['אזכרת שלושים ואזכרת שנה', 'טקסי זיכרון ביום הזיכרון', 'לבית משפחה שאינה נוהגת לפי המנהג', 'לחבר שעבר אובדן, כמה שבועות אחרי'],
    includesTitle: 'מה מקבלים',
    includes: ['זר בגוונים לבנים וירוקים, בלי צבעים חזקים', 'כרטיס בכתב יד עם הנוסח שתכתבו', 'אפשרות לזר יבש או לעציץ שנשאר לאורך זמן', 'משלוח שקט: השליח לא מתקשר מראש אם ביקשתם'],
    steps: [
      { title: 'שיחה', text: 'נשאל על הנסיבות ועל המנהג במשפחה.' },
      { title: 'בחירה', text: 'זר, זר עם אגרטל, או עציץ.' },
      { title: 'נוסח', text: 'עוזרים לכתוב כרטיס, אם צריך.' },
      { title: 'משלוח', text: 'לבית, לבית העלמין או לאולם הטקס.' },
    ],
    faq: [
      { q: 'אפשר להביא זר לבית העלמין בירושלים?', a: 'כן, בבית העלמין הר המנוחות אפשר להניח פרחים ליד הקבר. אנחנו מביאים את הזר לשער הכניסה בתיאום איתכם.' },
      { q: 'מה שולחים לבית שיושב שבעה?', a: 'לרוב מקובל לשלוח אוכל. אם המשפחה אינה נוהגת לפי המנהג, זר לבן שקט מתאים.' },
    ],
    formTopic: 'פרחים לאזכרה',
  },
  {
    slug: 'plants-gifts',
    title: 'עציצים ומארזי מתנה',
    short: 'עציצים שנשארים חודשים, בכלי קרמיקה של קדרים מירושלים.',
    keyword: 'עציצים למתנה בירושלים',
    image: svcPlants,
    imageAlt: 'עציץ לבנדר בעטיפה צהובה עם סרט אדום',
    priceFrom: 150,
    priceUnit: 'לעציץ',
    intro: 'עציץ מחזיק הרבה אחרי שזר נובל. אנחנו שותלים אותו בכלי קרמיקה מקדרים ירושלמיים ומוסיפים דף טיפול פשוט, כדי שהוא ישרוד גם אצל מי שאין לו יד ירוקה.',
    whenTitle: 'מתי עציץ ולא זר',
    when: ['חנוכת בית או משרד חדש', 'מתנה למי שאין לו זמן לטפל בזר', 'חג לחברי צוות או ללקוחות', 'לבית חולים, במחלקות שבהן מותר'],
    includesTitle: 'מה במארז',
    includes: ['צמח שמתאים לתאורה בבית של המקבל', 'כלי קרמיקה בעבודת יד', 'כרטיס ברכה ודף טיפול', 'במארזי חברה: מיתוג בכרטיס ומשלוח לכמה כתובות'],
    steps: [
      { title: 'איפה יעמוד', text: 'ספרו לנו אם יש שמש, צל או מזגן.' },
      { title: 'בוחרים צמח', text: 'נציע שניים או שלושה שמתאימים.' },
      { title: 'בוחרים כלי', text: 'מהקדרים שאנחנו עובדים איתם.' },
      { title: 'משלוח', text: 'עם דף טיפול בעברית פשוטה.' },
    ],
    faq: [
      { q: 'יש מארזים לחברות?', a: 'כן, מ-20 מארזים ומעלה. כולל כרטיס ממותג ומשלוח לכמה כתובות בירושלים.' },
      { q: 'איזה עציץ הכי קשה להרוג?', a: 'זמיוקולקס וסנסווריה. הם מסתדרים עם מעט אור והשקיה פעם בשבועיים.' },
    ],
    formTopic: 'עציץ או מארז',
  },
];

// ---------------------------------------------------------------------------
// Delivery areas (one page each). Content written for each neighborhood.
// ---------------------------------------------------------------------------

export type Area = {
  slug: string;
  name: string;
  keyword: string;
  image: ImageMetadata;
  imageAlt: string;
  fee: number;
  window: string;
  minutes: number;
  intro: string;
  local: { title: string; text: string }[];
  landmarks: string[];
  nearby: string[];
};

export const areas: Area[] = [
  {
    slug: 'baka',
    name: 'בקעה',
    keyword: 'חנות פרחים בבקעה',
    image: areaBaka,
    imageAlt: 'סמטת אבן ירושלמית עם אופניים ליד קיר מצויר',
    fee: 0,
    window: 'תוך שעתיים',
    minutes: 10,
    intro: 'החנות שלנו נמצאת בבקעה, ולכן המשלוחים כאן בחינם ומהירים. אפשר גם לקפוץ לאסוף בעצמכם ולבחור פרחים מהדלי.',
    local: [
      { title: 'איסוף מהחנות', text: 'בשכונה הרבה לקוחות מעדיפים לעבור ברגל ולאסוף. שלחו הודעה, ונכין את הזר עד שתגיעו.' },
      { title: 'מינויים לבתי קפה ברחוב בית לחם ובעמק רפאים', text: 'אנחנו מחליפים פרחים כל יום ראשון בכמה בתי קפה בשכונה. כך הפרחים בחלון תמיד טריים לשבוע.' },
      { title: 'בתים ישנים עם חצר', text: 'בהרבה בתי אבן בבקעה הכניסה דרך חצר או שער. כתבו לנו הערה על השער, והשליח ימצא אתכם.' },
    ],
    landmarks: ['רחוב בית לחם', 'עמק רפאים', 'פארק המסילה'],
    nearby: ['katamon', 'arnona'],
  },
  {
    slug: 'katamon',
    name: 'קטמון',
    keyword: 'משלוח פרחים לקטמון',
    image: areaKatamon,
    imageAlt: 'רחוב מגורים עם בית אבן וקישוטים צבעוניים תלויים',
    fee: 25,
    window: 'חלון של שלוש שעות',
    minutes: 15,
    intro: 'קטמון הישנה, הגונן והקטמונים קרובים אלינו, והמשלוחים לשם יוצאים כמה פעמים ביום. ביום שישי זה האזור הכי עמוס שלנו, בגלל הזרים לשבת.',
    local: [
      { title: 'זרים לשבת ביום שישי', text: 'ביום שישי אנחנו יוצאים לקטמון בשני סבבים, ב-9:00 וב-11:30. הזמנה עד חמישי בערב מבטיחה את הסבב הראשון.' },
      { title: 'בנייני רכבת בלי מעלית', text: 'בהרבה מהבניינים בגונן אין מעלית. השליחים שלנו עולים עד הדלת, גם לקומה רביעית.' },
      { title: 'מינוי משפחתי', text: 'מינוי שבועי לשבת במחיר קבוע, עם אגרטל במשלוח הראשון.' },
    ],
    landmarks: ['פארק המסילה', 'רחוב רחל אמנו', 'הגונן'],
    nearby: ['baka', 'rehavia'],
  },
  {
    slug: 'rehavia',
    name: 'רחביה',
    keyword: 'משלוח פרחים לרחביה',
    image: areaRehavia,
    imageAlt: 'רחוב שקט עם עצים ובניינים בירושלים בשעת בוקר',
    fee: 30,
    window: 'חלון של שלוש שעות',
    minutes: 20,
    intro: 'ברחביה ובטלביה הרבה משרדים, קליניקות ושגרירויות לצד בתי מגורים. אנחנו מגיעים לשם כל יום, גם עם זרים וגם עם מינויים למשרדים.',
    local: [
      { title: 'משרדים וקליניקות', text: 'ברחביה אנחנו מחזיקים מינויים שבועיים לקבלה של כמה מרפאות ומשרדי עורכי דין. הזר מוחלף ביום ראשון בבוקר, לפני שהמשרד נפתח.' },
      { title: 'חניה', text: 'ברחובות הצרים של רחביה קשה לעצור. אנחנו מתקשרים דקה לפני, כדי שמישהו ירד או יפתח את השער.' },
      { title: 'בתי באוהאוס', text: 'בחלק מהבניינים לדלת יש אינטרקום ישן. כתבו לנו את שם המשפחה כפי שהוא מופיע עליו.' },
    ],
    landmarks: ['רחוב עזה', 'גן הוורדים הסמוך לכנסת', 'רחוב רמב"ן'],
    nearby: ['katamon', 'beit-hakerem'],
  },
  {
    slug: 'arnona',
    name: 'ארנונה',
    keyword: 'משלוח פרחים לארנונה ותלפיות',
    image: areaArnona,
    imageAlt: 'נוף של ירושלים מגבעה, עם עצי ברוש ובתי אבן',
    fee: 25,
    window: 'חלון של שלוש שעות',
    minutes: 15,
    intro: 'ארנונה, תלפיות ומקור חיים נמצאות עשר דקות מאיתנו. באזור התעשייה של תלפיות יש הרבה משרדים, ולכן חלק גדול מהמשלוחים לשם הם מינויים לקבלה.',
    local: [
      { title: 'אזור התעשייה תלפיות', text: 'למשרדים באזור התעשייה אנחנו מגיעים בבוקר, עד 10:00, כדי שהזר יחכה לאורחים של אותו יום.' },
      { title: 'הטיילת', text: 'הצעת נישואין בטיילת ארמון הנציב? אנחנו מביאים את הזר עד לספסל, בשעה שתתאמו איתנו.' },
      { title: 'בתים פרטיים', text: 'בארנונה הרבה בתים עם גינה. בקיץ נוסיף לזר שקית חומר הזנה כפולה, כי החום מקצר את חיי הזר.' },
    ],
    landmarks: ['טיילת ארמון הנציב', 'אזור התעשייה תלפיות', 'קיבוץ רמת רחל'],
    nearby: ['baka', 'katamon'],
  },
  {
    slug: 'beit-hakerem',
    name: 'בית הכרם',
    keyword: 'משלוח פרחים לבית הכרם',
    image: areaBeitHakerem,
    imageAlt: 'רחוב ראשי בירושלים עם חנויות, עצים ומכוניות חונות',
    fee: 35,
    window: 'חלון של שלוש שעות',
    minutes: 25,
    intro: 'בית הכרם, בית וגן וקריית משה נמצאות בצד המערבי של העיר. אנחנו יוצאים לשם בשני סבבים ביום, ומגיעים גם לבתי החולים שבאזור.',
    local: [
      { title: 'בתי חולים', text: 'במחלקות רבות אסור להכניס פרחים, בעיקר בטיפול נמרץ, בפגייה ובמחלקות אונקולוגיות. לפני משלוח לבית חולים נבדוק איתכם את המחלקה, ואם צריך נציע עציץ קטן או מארז.' },
      { title: 'קמפוס גבעת רם', text: 'לסטודנטים ולסגל באוניברסיטה העברית בגבעת רם אנחנו מביאים עד שער הקמפוס, כי לרכבי משלוח אין כניסה.' },
      { title: 'מינויים לבתים', text: 'הרבה משפחות בבית הכרם מזמינות מינוי ליום חמישי, כדי שהזר יהיה פתוח ויפה בשבת.' },
    ],
    landmarks: ['שדרות הרצל', 'קמפוס גבעת רם', 'גן סאקר'],
    nearby: ['rehavia', 'ein-karem'],
  },
  {
    slug: 'ein-karem',
    name: 'עין כרם',
    keyword: 'פרחים לחתונה בעין כרם',
    image: areaEinKarem,
    imageAlt: 'סמטת אבן צרה עם קשתות ומדרגות',
    fee: 45,
    window: 'חלון של ארבע שעות',
    minutes: 35,
    intro: 'עין כרם היא אחד המקומות האהובים לחתונות בירושלים. יש בה גני אירועים ומסעדות עם גן, ואנחנו מכירים את רובם מבפנים.',
    local: [
      { title: 'חתונות בגני אירועים', text: 'עבדנו ברוב המקומות בכפר. אנחנו יודעים איפה נכנסת משאית, איפה עולים במדרגות, ומתי השמש שוקעת מאחורי ההר, וזה משנה את בחירת הצבעים.' },
      { title: 'בית החולים הדסה עין כרם', text: 'משלוחים לבית החולים יוצאים פעמיים ביום. בדקו קודם אם המחלקה מאפשרת פרחים. אם לא, נציע מארז בלי פרחים.' },
      { title: 'דרכים צרות', text: 'לחלק מהבתים בכפר אין גישה לרכב. נתאם איתכם נקודת מסירה ליד הכביש הראשי.' },
    ],
    landmarks: ['מעיין הבתולה', 'רחוב מעלות עין כרם', 'בית החולים הדסה עין כרם'],
    nearby: ['beit-hakerem', 'rehavia'],
  },
];

// ---------------------------------------------------------------------------
// Reviews (demo), gallery, FAQ
// ---------------------------------------------------------------------------

export const reviews = [
  { name: 'מיכל ר.', area: 'קטמון', rating: 5, service: 'מינוי פרחים', text: 'יש לנו מינוי לשבת כבר שנתיים. אף פעם לא קיבלנו אותו זר פעמיים, ותמיד מגיעים לפני 11:00 ביום שישי.' },
  { name: 'יואב ש.', area: 'רחביה', rating: 5, service: 'זר למתנה', text: 'הזמנתי מחו"ל ליום ההולדת של אמא שלי. קיבלתי תמונה של הזר לפני שיצא, והודעה כשנמסר. אמא התקשרה לבכות לי בטלפון.' },
  { name: 'הילה ודניאל', area: 'עין כרם', rating: 5, service: 'חתונה', text: 'נועה הגיעה איתנו לסיור במקום, ושאלה מתי בדיוק השקיעה. החופה הייתה בצבעים של השמיים באותה שעה.' },
  { name: 'רונית א.', area: 'בית הכרם', rating: 5, service: 'עציץ', text: 'רציתי לשלוח פרחים לאבא שלי בבית חולים. הם בדקו מראש שאסור במחלקה, והציעו עציץ קטן שאפשר להשאיר בחדר. לא הייתי חושבת על זה לבד.' },
  { name: 'משרד ב. ושות\'', area: 'תלפיות', rating: 5, service: 'מינוי למשרד', text: 'זר בקבלה כל יום ראשון, מוחלף בלי שנצטרך לבקש. מאז שביקשנו בלי פרחים ריחניים, אף לקוח לא התלונן.' },
  { name: 'אסתר ל.', area: 'בקעה', rating: 4, service: 'זר למתנה', text: 'זר יפה מאוד ומחיר הוגן. ביקשתי אדמוניות בנובמבר, ונועה הסבירה בסבלנות שאין עונה והציעה ורדי גן. היה נהדר.' },
];

export const gallery = [
  { image: gBridal, alt: 'זר כלה של ורדים לבנים וכלניות לבנות', title: 'זר כלה, עין כרם', text: 'כלניות לבנות וורדי גן, בחתונה בחורף.' },
  { image: gCenterpiece, alt: 'מרכז שולחן נמוך של ורדים סגולים בין נרות גבוהים', title: 'מרכזי שולחן, מושבה גרמנית', text: 'סידורים נמוכים, כדי שהאורחים יראו זה את זה.' },
  { image: gTableCandles, alt: 'שולחן קינוחים עם פרחים ורודים ולבנים ונרות', title: 'שולחן קינוחים, בר מצווה', text: 'פרחים בגובה העיניים ליד העוגה.' },
  { image: gLongTable, alt: 'שולחן אבירים ארוך עם סידורי פרחים לבנים לכל אורכו', title: 'שולחן אבירים, ארוחת חברה', text: 'שלושים מטר של גיבסנית ואקליפטוס.' },
  { image: gWhiteTable, alt: 'מרכז שולחן לבן עם נרות על מפה מפוספסת', title: 'חתונה בלבן, רחביה', text: 'לבן וירוק בלבד, לבקשת הזוג.' },
  { image: gAnthurium, alt: 'סידור פרחים לבן עם אנתוריום על שולחן עץ', title: 'אירוע השקה, תלפיות', text: 'אנתוריום לבן, כי הוא מחזיק ערב שלם בלי מים.' },
];

export const faq = [
  { q: 'עד מתי אפשר להזמין משלוח לאותו יום?', a: 'בימים ראשון עד רביעי עד 14:00, בחמישי עד 15:00 ובשישי עד 11:00. בשבת החנות סגורה.' },
  { q: 'כמה עולה משלוח?', a: 'בבקעה המשלוח בחינם. בשאר השכונות בין 25 ל-45 ש"ח, לפי המרחק. הרשימה המלאה בעמוד המשלוחים.' },
  { q: 'אפשר לשלם בלי להגיע לחנות?', a: 'כן. אחרי שנאשר את הזר בוואטסאפ, נשלח לכם קישור לתשלום מאובטח בכרטיס אשראי או בביט.' },
  { q: 'הזר יהיה בדיוק כמו בתמונה?', a: 'הצבעים והסגנון כן. הפרחים עצמם משתנים לפי מה שהגיע מהמגדלים באותו שבוע, ולפני היציאה נשלח לכם תמונה של הזר האמיתי.' },
  { q: 'כמה זמן זר מחזיק?', a: 'בדרך כלל שבוע עד עשרה ימים. מחליפים מים כל יומיים, וחותכים סנטימטר מהגבעולים באלכסון.' },
  { q: 'אפשר לבטל הזמנה?', a: 'עד שמתחילים להכין את הזר, כן, עם החזר מלא. אחרי שהפרחים נחתכו אי אפשר לבטל, כי מדובר בטובין שמתקלקלים.' },
  { q: 'אתם שולחים מחוץ לירושלים?', a: 'זרים רגילים רק בירושלים. אירועים וחתונות עד מרחק של שעה נסיעה.' },
  { q: 'אפשר לשלוח פרחים לבית חולים?', a: 'רק למחלקות שמאפשרות. לפני המשלוח נבדוק איתכם את המחלקה, ואם אסור נציע עציץ קטן או מארז בלי פרחים.' },
  { q: 'אפשר להזמין בלי כרטיס ברכה?', a: 'כן. וגם להפך: אפשר לשלוח רק כרטיס עם פרח אחד, ב-60 ש"ח כולל משלוח בבקעה.' },
];

// ---------------------------------------------------------------------------
// Builder options and contact form
// ---------------------------------------------------------------------------

export const occasions = [
  { id: 'birthday', label: 'יום הולדת', card: ['מזל טוב! שתהיה שנה פורחת', 'עוד שנה של צחוק. מזל טוב'] },
  { id: 'love', label: 'אהבה', card: ['סתם כי אני אוהב/ת אותך', 'לך. כל יום מחדש'] },
  { id: 'thanks', label: 'תודה', card: ['תודה על הכל. באמת', 'בלעדייך זה לא היה קורה'] },
  { id: 'baby', label: 'לידה', card: ['ברוכים הבאים לעולם הקטן והמתוק', 'מזל טוב להורים הטריים'] },
  { id: 'getwell', label: 'החלמה', card: ['מחכים לראות אותך בחוץ', 'רפואה שלמה ומהירה'] },
  { id: 'sympathy', label: 'ניחומים', card: ['חושבים עליכם', 'משתתפים בצערכם'] },
  { id: 'justbecause', label: 'בלי סיבה', card: ['ראיתי את זה וחשבתי עלייך', 'שיהיה לך יום יפה'] },
] as const;

export const form = {
  /** Every lead is sent to every destination. Empty = demo mode (no network call). */
  destinations: [] as ({ type: 'web3forms'; accessKey: string } | { type: 'webhook'; url: string })[],
  thankYouPath: '/thank-you/',
  topics: ['זר למתנה', 'מינוי פרחים', 'חתונה או אירוע', 'פרחים לאזכרה', 'עציץ או מארז', 'שאלה אחרת'],
  submitLabel: 'שליחת הפנייה',
  privacyNote: 'הפרטים משמשים רק לחזרה אליכם ולא מועברים לאף אחד.',
};

export const analytics = { ga4: '' };

export const legal = {
  businessName: 'פרחי הגפן (שם לדוגמה)',
  businessId: '000000000',
  accessibilityCoordinator: 'נועה אלמוג',
  accessibilityEmail: 'hello@florist-demo.co.il',
  privacyUpdated: '2026-09-28',
  termsUpdated: '2026-09-28',
  /** Services that receive or store data from the site. Keep in sync with form.destinations and analytics. */
  dataProcessors: [
    'Cloudflare: אחסון האתר והעברת התקשורת אליו',
    'Web3Forms: שליחת פניות מהטופס למייל (כשהטופס מחובר)',
    'Google Sheets: שמירת גיבוי של הפניות (כשהטופס מחובר)',
    'Google Analytics: מדידת שימוש באתר, רק אחרי הסכמה לעוגיות',
  ],
};

// ---------------------------------------------------------------------------
// Images used by layout-level pieces
// ---------------------------------------------------------------------------

export const images = {
  hero,
  heroAlt: 'זר של נוריות לבנות ווורדים ורודים באור עמום על רקע כהה',
  studio,
  studioAlt: 'מעצבת פרחים מסדרת זר על שולחן עבודה בסטודיו עם קיר תכלת',
  delivery,
  deliveryAlt: 'שליח מוסר זר פרחים לבנים לאישה בשער הבית',
  giftCard,
  giftCardAlt: 'זר פרחים צבעוני עם כרטיס ברכה על רקע כהה',
  seasonAnemone,
  seasonAnemoneAlt: 'כלניות אדומות בשדה ירוק',
  seasonPurple,
  seasonPurpleAlt: 'כלנית סגולה פתוחה בשמש',
};

/** Hero annotations: the point each label marks, in % of the hero photo (x from the left, y from the top). */
export const heroSpecimens = [
  { flower: 'ranunculus', x: 60, y: 38 },
  { flower: 'rose', x: 25, y: 38 },
  { flower: 'gypsophila', x: 17, y: 16 },
];
