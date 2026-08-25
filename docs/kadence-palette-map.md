# Paleta Safebiz în WordPress (Kadence)

> **Sursa culorilor rămâne `src/styles/tokens.css`.** Documentul ăsta spune doar **unde ajunge**
> fiecare token în tema Kadence de pe site. Nu introduce culori noi.

## De ce e nevoie de document

Kadence are **15 sloturi de paletă cu rol fix**, pe care tema le aplică automat (scara textului,
fundalurile, mesajele de sistem). Nu sunt 15 culori libere: o culoare pusă în slotul greșit se
aplică singură unde nu trebuie.

Rolurile sunt cele din sursa temei (`inc/customizer/react/src/palette/palette-component.js`).

## Maparea

| Slot | Rol Kadence | Token | Hex |
|---|---|---|---|
| `palette1` | Accent | `--color-brand` | `#14a68b` |
| `palette2` | Accent alternativ | `--color-accent-light` | `#d0db97` |
| `palette3` | Text — cel mai puternic | `--color-ink` | `#0a2239` |
| `palette4` | Text — puternic | `--color-text` | `#0a2239` |
| `palette5` | Text — mediu (body) | `--color-text` | `#0a2239` |
| `palette6` | Text — subtil | `--color-text-muted` | `#5a6b7d` |
| `palette7` | Fundal subtil / **bordură** | `--color-border` | `#e1e5e9` |
| `palette8` | Fundal deschis | `--color-bg-alt` | `#f7f9fa` |
| `palette9` | Alb | `--color-bg` | `#ffffff` |
| `palette10` | Accent complementar | `--color-brand-hover` | `#3a7d44` |
| `palette11` | Notificare — succes | `--color-success` | `#69b578` |
| `palette12`–`palette15` | info · eroare · avertizare · rating | *(implicitele Kadence)* | — |

## Două excepții

1. **`--border-strong` (`#c9d0d6`) nu are slot în Kadence.** În build-ul WordPress se folosește
   `palette7`. Valoarea rămâne valabilă pentru web și print, unde există control liber de CSS.
2. **Kadence nu are slot pentru culoarea bordurilor.** Convenția temei: linia se desenează în
   `palette7` („fundal subtil") pe fundal `palette9` (alb). O linie `palette7` pe fundal `palette8`
   e **practic invizibilă** — cele două valori sunt aproape identice.

## Istoric

**2026-08-25 — aliniere.** Până la data asta, pe `stager.safebiz.ro` erau completate doar sloturile
de brand (`palette1`, `2`, `3`, `10`, `11`). Toată scara de gri și toate fundalurile erau valorile
din fabrică ale temei Kadence — adică majoritatea suprafeței site-ului nu era în culorile Safebiz,
deși documentele de brand le declarau. Cauza: brieful de generare a design system-ului cerea culorile,
nu **forma** paletei, iar la instalare nimeni nu avea maparea asta scrisă.

Verificare, pe orice sit Kadence:

```bash
node wat/tools/kadence-palette-audit.js --site https://stager.safebiz.ro
```

Iese cod 1 dacă au rămas sloturi din fabrică la brand sau la suprafețe.
