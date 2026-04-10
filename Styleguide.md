# Style Guide — Lorenzo De Francesco
**IT Manager · Digital Transformation**

---

## 1. Palette Colori

### Light Mode

| Nome | Hex | Ruolo |
|------|-----|-------|
| Deep Navy | `#141C26` | Testi principali, headline |
| Brand Blue | `#2E4A68` | Colore primario, bottoni, header |
| Sky Surface | `#BFCFE0` | Superfici leggere, sfondi card |
| Ember Orange | `#D4580F` | Accento, CTA secondari, badge |
| Steel | `#637288` | Testi secondari, icone, metadata |
| Fog White | `#F4F5F7` | Sfondo pagina, aree neutre |

### Dark Mode

| Nome | Hex | Ruolo |
|------|-----|-------|
| Night | `#0E1520` | Sfondo pagina |
| Navy Surface | `#152030` | Card, superfici elevate |
| Brand Blue | `#2E4A68` | Elementi di rilievo, bordi accent |
| Sky Muted | `#7A9AB8` | Testi secondari |
| Ember | `#E8702A` | Accento luminoso, CTA |
| Ice Text | `#E4ECF4` | Testi principali |

> I colori sono stati estratti direttamente dal guardaroba e dall'ambiente della foto profilo scattata al **CTO Connect**.

---

## 2. Tipografia

### Font scelti

| Ruolo | Font | Peso | Fonte |
|-------|------|------|-------|
| Titoli / Heading | **Outfit** | 600 | Google Fonts |
| Corpo testo / Body | **Nunito** | 400 · 500 | Google Fonts |

### Import Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Nunito:wght@400;500&display=swap" rel="stylesheet">
```

### Scala tipografica

| Elemento | Font | Dimensione | Peso |
|----------|------|-----------|------|
| H1 — Hero title | Outfit | 32px | 600 |
| H2 — Sezione | Outfit | 22px | 600 |
| H3 — Card title | Outfit | 16px | 600 |
| Body | Nunito | 14px | 400 |
| Small / Label | Nunito | 12px | 500 |
| Caption | Nunito | 11px | 400 |

---

## 3. CSS Variables

```css
:root {
  /* Typography */
  --font-heading: 'Outfit', sans-serif;
  --font-body:    'Nunito', sans-serif;

  /* Light Mode */
  --color-bg:      #F4F5F7;
  --color-surface: #EAECF0;
  --color-brand:   #2E4A68;
  --color-accent:  #D4580F;
  --color-muted:   #637288;
  --color-text:    #141C26;
}

[data-theme="dark"] {
  --color-bg:      #0E1520;
  --color-surface: #152030;
  --color-brand:   #2E4A68;
  --color-accent:  #E8702A;
  --color-muted:   #7A9AB8;
  --color-text:    #E4ECF4;
}
```

---

## 4. Principi di Design

- **Minimalista** — meno elementi, più impatto. Spazio bianco generoso.
- **Professionale** — niente effetti decorativi, niente gradienti, niente ombre pesanti.
- **Coerente** — stessi colori e font su sito, LinkedIn, presentazioni e materiali.
- **Leggibile** — testo sempre ad alto contrasto, dimensioni mai sotto 11px.

---

## 5. Utilizzo Corretto

### Bottoni

```css
/* Primario */
background: var(--color-brand);
color: var(--color-bg);
font-family: var(--font-heading);
font-weight: 600;
border-radius: 8px;
padding: 9px 20px;

/* Accento */
background: var(--color-accent);
color: #fff;
```

### Tag / Badge

```css
/* Default */
background: #2E4A6822;
color: var(--color-brand);
font-family: var(--font-body);
font-size: 11px;
font-weight: 500;
padding: 3px 10px;
border-radius: 20px;

/* Accent */
background: #D4580F22;
color: var(--color-accent);
```

### Barra accento

```css
/* Linea decorativa sopra le card */
width: 28px;
height: 3px;
background: var(--color-accent);
border-radius: 2px;
```

---

## 6. Da Evitare

- ❌ Font con grazie (serif) — non coerente con lo stile tech
- ❌ Più di 2 colori accentuati nella stessa schermata
- ❌ Testo su sfondo colorato senza verifica del contrasto
- ❌ Grassetto eccessivo — usare gerarchia tipografica invece
- ❌ Bordi arrotondati eccessivi su elementi formali

---

## 7. Applicazioni

| Contesto | Titolo | Body | Accento |
|----------|--------|------|---------|
| Sito personale | Outfit 600 | Nunito 400 | Ember Orange |
| LinkedIn banner | Outfit 600 | — | Brand Blue |
| Presentazioni | Outfit 600 | Nunito 400 | Ember Orange |
| Post social | Outfit 600 | Nunito 500 | Brand Blue o Ember |
| Email firma | Outfit 500 | Nunito 400 | Brand Blue |

---

*Versione 1.0 — Aprile 2026*