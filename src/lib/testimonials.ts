import seedData from "@/json/testimonials.json";

export interface Testimonial {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  quote: string;
  visible: boolean;
  createdAt: string;
}

const STORAGE_KEY = "sevasi_testimonials";

function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const SEED_DATA: Testimonial[] = seedData as Testimonial[];

function getAll(): Testimonial[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_DATA));
    return [...SEED_DATA];
  }
  try {
    return JSON.parse(raw) as Testimonial[];
  } catch {
    return [...SEED_DATA];
  }
}

function save(testimonials: Testimonial[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials));
}

export const testimonialStore = {
  getAll,

  getVisible(): Testimonial[] {
    return getAll().filter((t) => t.visible);
  },

  getById(id: string): Testimonial | undefined {
    return getAll().find((t) => t.id === id);
  },

  create(data: Omit<Testimonial, "id" | "createdAt" | "visible">): Testimonial {
    const all = getAll();
    const entry: Testimonial = {
      ...data,
      id: generateUUID(),
      visible: false,
      createdAt: new Date().toISOString(),
    };
    all.unshift(entry);
    save(all);
    return entry;
  },

  update(id: string, data: Partial<Testimonial>): Testimonial | null {
    const all = getAll();
    const idx = all.findIndex((t) => t.id === id);
    if (idx === -1) return null;
    all[idx] = { ...all[idx], ...data, id };
    save(all);
    return all[idx];
  },

  toggleVisibility(id: string): Testimonial | null {
    const all = getAll();
    const idx = all.findIndex((t) => t.id === id);
    if (idx === -1) return null;
    all[idx].visible = !all[idx].visible;
    save(all);
    return all[idx];
  },

  remove(id: string): boolean {
    const all = getAll();
    const filtered = all.filter((t) => t.id !== id);
    if (filtered.length === all.length) return false;
    save(filtered);
    return true;
  },
};
