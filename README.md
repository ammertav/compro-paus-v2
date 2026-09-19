# PAUS Company Profile v2

Website company profile PT. Pandu Usaha Nusantara.
Dibangun dengan React + Vite, Tailwind CSS v4, dan React Router.

## Menjalankan

```bash
npm install
npm run dev      # development server
npm run build    # build produksi ke dist/
npm run lint     # ESLint
npm run format   # Prettier
```

## Struktur

```
src/
  pages/           satu file per halaman, hanya menyusun section
  components/
    layout/        Navbar, Footer, RootLayout
    ui/            komponen reusable (Button, Card, SectionLabel, ...)
    <halaman>/     section milik halaman tertentu (home, services, ...)
  data/            konten teks (layanan, FAQ, brand, navigasi, ...)
  hooks/           useReveal: scroll reveal + parallax
  lib/utils.js     helper cn()
public/images/     aset gambar
```

## Halaman

| Route           | File                   |
| --------------- | ---------------------- |
| `/`             | `pages/Home.jsx`       |
| `/who-we-are`   | `pages/WhoWeAre.jsx`   |
| `/our-team`     | `pages/OurTeam.jsx`    |
| `/our-brands`   | `pages/OurBrands.jsx`  |
| `/how-it-works` | `pages/HowItWorks.jsx` |
| `/services`     | `pages/Services.jsx`   |
| `/contact`      | `pages/Contact.jsx`    |

## Animasi

`hooks/useReveal.js` dipanggil di setiap halaman. Kontrak markup:

- `className="rv"`: blok yang muncul dengan fade up
- `className="rv-stagger"`: wrapper, child langsung muncul bergantian
- `<Parallax factor={0.1}>`: efek parallax

Jangan ganti dengan reveal berbasis class CSS (`.rv { opacity: 0 }`),
pola itu pernah menyebabkan halaman kosong saat tahap desain.

## Catatan layout

- Navbar memakai `position: sticky`. Jangan bungkus halaman dengan elemen
  ber-`overflow-x: hidden`, karena sticky akan berhenti bekerja.

## Masih placeholder

Nama & foto board, angka statistik (200/100), catatan founder,
produk Ammertav 02–03, gambar tiap tahap proses, dan form kontak
yang belum tersambung ke backend.
