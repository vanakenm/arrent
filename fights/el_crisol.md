---
type: combat-tracker
name: El Crisol Despierto
tags:
  - combat
  - le-sceau-des-seuils
  - boss
linked: "[[le_sceau_des_seuils/boss_el_crisol_despierto]]"
---
	
# Combat : El Crisol Despierto

> [!tip] Utilisation
> Utilisez le mode **Live Preview** pour éditer les cellules directement. Avec le plugin **Advanced Tables**, utilisez `Tab` pour naviguer entre les cellules comme dans un tableur.
> - Cochez les emplacements de sorts utilisés en remplaçant le chiffre par un `x`
> - Mettez à jour les PV courants au fil du combat

## Phase 1 : L'Enclume (El Yunque)

| Init | Nom                          | PV Max | PV Courant | CA  | Niv 1 | Niv 2 | Niv 3 | Niv 4 | Notes                       |
| ---- | ---------------------------- | ------ | ---------- | --- | ----- | ----- | ----- | ----- | --------------------------- |
| +17  | [[pjs/varys\|Varys]]         | 75     | 75         | 17  | -     | -     | -     | -     | Rage 6/16                   |
| +16  | [[pjs/zangra\|Zangra]]       | 45     | 45         | 16  | oooo  | oox   | xxo   | o     | Inspiration 2/4             |
| +14  | [[pjs/malo\|Malo]]           | 58     | 58         | 16  | -     | -     | -     | -     |                             |
| +14  | [[pjs/sylvain\|Sylvain]]     | 60     | 60         | 22  | ooo   | ox    | -     | -     |                             |
| +7   | [[pjs/bledios\|Bledios]]     | 52     | 52         | 16  | oooo  | xoo   | ooo   | o     | Forme animale 2/2           |
|      | [[pjs/polypheme\|Polypheme]] | ?      | ?          | ?   | -     | -     | -     | -     | Stats manquantes            |
|      | **El Crisol P1**             | 190    | 190        | 17  | -     | -     | -     | -     | Ancré, 2 attaques (3 si C2) |

### Conduits

| Conduit | PV | Statut | Effet |
| ------- | -- | ------ | ----- |
| C1 (NO) | 30/30 | Actif | Regen 15 PV/tour |
| C2 (NE) | 30/30 | Actif | +1 attaque |
| C3 (SO) | 30/30 | Actif | Resistance B/P/T non magique |
| C4 (SE) | 30/30 | Actif | Resurrection (1x/phase) |

### Actions legendaires (3/round)

- Frappe (1) / Appel energie (1, +5 PV/conduit actif) / Rugissement (2, JS CHA DD 15)

### Rappels

- Impulsion tellurique (Recharge 5-6) : 6m, JS CON DD 17, 8d8 force
- Frappe sismique (1/tour) : 3m, JS DEX DD 16, 4d8 contondant

---

## Phase 2 : La Fonte (La Fusion)

| Init | Nom | PV Max | PV Courant | CA | Niv 1 | Niv 2 | Niv 3 | Niv 4 | Notes |
| ---- | --- | ------ | ---------- | -- | ----- | ----- | ----- | ----- | ----- |
| | [[pjs/varys\|Varys]] | 75 | | 17 | - | - | - | - | Rage /16 |
| | [[pjs/zangra\|Zangra]] | 45 | | 16 | | | | | Inspiration /4 |
| | [[pjs/malo\|Malo]] | 58 | | 16 | - | - | - | - | |
| | [[pjs/sylvain\|Sylvain]] | 60 | | 22 | | | - | - | |
| | [[pjs/bledios\|Bledios]] | 52 | | 16 | | | | | Forme animale /2 |
| | [[pjs/polypheme\|Polypheme]] | ? | | ? | - | - | - | - | |
| | **El Crisol P2** | 130 | 130 | 14 | - | - | - | - | Vitesse 12m, Vulnerable froid |

### Actions legendaires (3/round)

- Coulee (1) / Deplacement (1, sans AO) / Fusion (2, empoigne +9, 4d6 feu/tour)

### Rappels

- Forme liquide : traverse espaces, JS DEX DD 15 ou 3d6 feu
- Eclaboussure de fonte (Recharge 5-6) : cone 9m, JS DEX DD 16, 8d6 feu
- Absorption conduit (1/tour) : +30 PV, desactive conduit 1 tour

---

## Phase 3 : L'Eclat (Los Fragmentos) -- conditionnelle

> Uniquement si au moins un conduit est encore actif quand P2 tombe a 0 PV.

| Init | Nom | PV Max | PV Courant | CA | Niv 1 | Niv 2 | Niv 3 | Niv 4 | Notes |
| ---- | --- | ------ | ---------- | -- | ----- | ----- | ----- | ----- | ----- |
| | [[pjs/varys\|Varys]] | 75 | | 17 | - | - | - | - | Rage /16 |
| | [[pjs/zangra\|Zangra]] | 45 | | 16 | | | | | Inspiration /4 |
| | [[pjs/malo\|Malo]] | 58 | | 16 | - | - | - | - | |
| | [[pjs/sylvain\|Sylvain]] | 60 | | 22 | | | - | - | |
| | [[pjs/bledios\|Bledios]] | 52 | | 16 | | | | | Forme animale /2 |
| | [[pjs/polypheme\|Polypheme]] | ? | | ? | - | - | - | - | |
| | **Fragment 1** | 52 | 52 | 13 | - | - | - | - | Explosion finale: 1.5m, JS DEX DD 13, 4d6 feu |
| | **Fragment 2** | 52 | 52 | 13 | - | - | - | - | Explosion finale a 0 PV |
| | **Fragment 3** | 52 | 52 | 13 | - | - | - | - | Explosion finale a 0 PV |

### Rappels

- Frappe de fragment : +5, 2d6+3 contondant + 2d6 feu
- A 0 PV : explosion 1.5m, JS DEX DD 13, 4d6 feu
