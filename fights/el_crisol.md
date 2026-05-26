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


ll Crisol émerge du creuset comme un colosse de métal en fusion et de pierre animée, 4 m de haut, ancré au sol par quatre chaînes de ley energy. Il ne peut pas se déplacer, mais son seul bras -- un pilier de métal tordu -- frappe avec une force dévastatrice.

***Multiattaque.*** El Crisol effectue 2 attaques de Bras de forge (3 si C2 actif).

***Bras de forge.*** *Attaque de corps à corps :* +11 pour toucher, allonge 4,5 m, une cible. *Touché :* 25 (4d8 + 7) dégâts contondants.

***Impulsion tellurique (Recharge 5-6).*** El Crisol libère une onde d'énergie. Toutes les créatures dans un rayon de 6 m effectuent un JS de Constitution DD 17. *Raté :* 36 (8d8) dégâts de force et repoussé de 4,5 m. *Réussi :* la moitié des dégâts, pas de déplacement.

***Frappe sismique (1/tour).*** El Crisol frappe le sol. Toutes les créatures au sol dans un rayon de 3 m effectuent un JS de Dextérité DD 16. *Raté :* 18 (4d8) dégâts contondants et à terre. *Réussi :* la moitié. 
## Phase 1 : L'Enclume (El Yunque)

| Init | Nom                          | PV Max | PV Courant | CA  | Niv 1 | Niv 2 | Niv 3 | Niv 4 | Notes                       |
| ---- | ---------------------------- | ------ | ---------- | --- | ----- | ----- | ----- | ----- | --------------------------- |
| 17   | [[pjs/varys\|Varys]]         | 75     | 32         | 17  | -     | -     | -     | -     | Rage 13/16                  |
|      | [[pjs/zangra\|Zangra]]       | 45     | 45         | 16  | oooo  | oox   | xxo   | o     | Inspiration 2/4             |
| 16   | [[pjs/malo\|Malo]]           | 58     | 43         | 16  | -     | -     | -     | -     |                             |
|      | [[pjs/sylvain\|Sylvain]]     | 60     | 60         | 22  | ooo   | ox    | -     | -     |                             |
| 15   | [[pjs/bledios\|Bledios]]     | 52     | 52         | 16  | oooo  | xxo   | oxx   | o     | Forme animale 2/2           |
|      | [[pjs/polypheme\|Polypheme]] | 58     | 58         | 16  | -     | -     | -     | -     | Stats manquantes            |
| 3    | **El Crisol P1**             | 190    | 190        | 17  | -     | -     | -     | -     | Ancré, 2 attaques (3 si C2) |


### Conduits

| Conduit | PV   | CA  | Statut  | Effet                             |
| ------- | ---- | --- | ------- | --------------------------------- |
| C1 (NO) | 0/30 | 12  | Inactif | Regen 15 PV/tour                  |
| C2 (NE) | 0/30 | 12  | Inactif | +1 attaque                        |
| C3 (SO) | 0/30 | 12  | Inactif | Greg Resistance B/P/T non magique |
| C4 (SE) | 0/30 | 12  | Inactif | Mic: Resurrection (1x/phase)      |
Les PJs sont au Sud
Les portes s'ouvrent
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
