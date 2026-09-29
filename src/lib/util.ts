import { contact, sizes, flowers, bouquets, type SizeId } from '../config/site.config';

/** WhatsApp link with a prefilled message. */
export const waLink = (text: string = contact.whatsappGreeting) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:${contact.phoneHref}`;

/** 1234 -> "1,234 ₪" */
export const price = (n: number) => `${n.toLocaleString('he-IL')} ₪`;

export const sizeOf = (id: SizeId) => sizes.find((s) => s.id === id)!;

export const flowerByName = (name: string) => flowers.find((f) => f.name === name);
export const flowerById = (id: string) => flowers.find((f) => f.id === id)!;

export const bouquetOrderText = (b: (typeof bouquets)[number]) =>
  `שלום נועה, אשמח להזמין את זר ${b.code} "${b.name}" (${sizeOf(b.size).label}, ${price(sizeOf(b.size).price)}). למי ולאן: `;

export const monthNames = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];

/** Month (1-12) of the build date in Israel. Pages that show "in season now" also update it in the browser. */
export const buildMonth = () =>
  Number(new Intl.DateTimeFormat('en', { timeZone: 'Asia/Jerusalem', month: 'numeric' }).format(new Date()));

/** 2026-09-28 -> 28.9.2026 */
export const formatDate = (iso: string) => iso.split('-').reverse().map(Number).join('.');
