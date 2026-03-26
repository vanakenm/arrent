# El Crisol Despierto

*Boss final de la Memoria de la Fragua*

---

## Concept narratif

Quand la Gran Fragua a été détruite il y a des siècles, la catastrophe a laissé une cicatrice dans le tissu des ley lines : l'empreinte de sa propre destruction, figée pour l'éternité dans la mémoire du lieu. C'est **El Crisol Despierto** -- le Creuset Éveillé -- la forge qui se souvient de sa propre mort et cherche à la rejouer.

Il ne s'agit pas d'un gardien placé par Rufina. C'est quelque chose qu'elle a réveillé sans le vouloir en canalisant trop d'énergie dans la Memoria. El Crisol est la forge elle-même, consciente un instant, horrifique, et cherchant à consumer tout ce qui se trouve dans son antre.

**Déclencheur :** Le boss s'active quand les PJ pénètrent dans F30 et touchent la Clé du Seuil -- ou plus tôt si l'alerte maximale est atteinte dans l'aile intérieure.

---

## Lieu de combat : La Chambre du Grand Creuset

### Description narrative

> Les murs de cette salle circulaire sont couverts de bas-reliefs représentant des forgerons au travail, aujourd'hui figés dans des poses de terreur. Quatre piliers massifs se dressent aux coins de la salle, parcourus de tuyaux de métal noir d'où s'échappe une lueur orange pulsante. Au centre, un creuset de pierre de dix mètres de haut, fissures irradiant une lumière aveuglante, vibre de plus en plus fort. Puis le métal commence à bouger.

### Plan de la salle (grille 1,5 m / case)

```
Taille recommandée : 20 × 20 cases (30 m × 30 m)

 ┌────────────────────────────────────────┐
 │  [C1]  ═══pipe═══════════pipe═══ [C2]  │
 │   ║                             ║      │
 │  pipe   ┌──────────────┐       pipe   │
 │   ║     │  PLATEFORME  │        ║     │
 │   ║     │  SURÉLEVÉE   │        ║     │
 │  pipe   │   (+2 cases) │       pipe   │
 │   ║     └──────────────┘        ║     │
 │   ║         [BOSS]              ║     │
 │   ║      (cases 10,10)          ║     │
 │  pipe    ╔══════════╗          pipe   │
 │   ║      ║ BASSIN   ║           ║     │
 │   ║      ║ D'ÉNERGIE║           ║     │
 │  pipe    ╚══════════╝          pipe   │
 │   ║                             ║     │
 │  [C3]  ═══pipe═══════════pipe═══ [C4]  │
 └────────────────────────────────────────┘

[C1-C4] = Piliers-conduits (voir mécanique)
═══    = Tuyaux au sol (terrain difficile, dangereux)
PLATEFORME = Élévation +3 m, accessible par 2 échelles
BASSIN = Zone de failles de ley (3d8 force si on y entre)
```

### Éléments de décor

**Piliers-conduits (C1 à C4)** -- 4 piliers aux coins de la salle, 3 m de haut. Tuyaux courant le long des murs jusqu'au creuset central. Chaque pilier a AC 12, 30 PV, immunité feu et force. Détruire un pilier coupe le conduit correspondant (voir mécanique ci-dessous).

**Plateforme surélevée** -- Au centre-nord de la salle, une plateforme de 4×3 cases à 3 m de hauteur. Accessible par deux échelles (montée : 3 m de mouvement). Offre couverture partielle contre les attaques au sol. En Phase 1, le boss ne peut pas atteindre les créatures dessus avec ses attaques de mêlée.

**Tuyaux au sol** -- Les tuyaux courant entre les piliers comptent comme terrain difficile. Une créature qui commence son tour sur un tuyau actif subit 5 (1d10) dégâts de force.

**Bassin d'énergie** -- Zone centrale de 4×4 cases. Toute créature qui entre dans le bassin pour la première fois ou y commence son tour subit 14 (3d8) dégâts de force.

**Débris de forge** -- Six amas de 1×1 case disséminés dans la salle, offrant couverture partielle (PA +2) et ligne de vue bloquée.

---

## Mécanique des conduits

Les quatre piliers-conduits alimentent El Crisol en énergie tellurique. Tant qu'un pilier est actif, il confère un avantage à la créature :

| Conduit | Avantage conféré | Effet si coupé |
|---|---|---|
| **C1** (nord-ouest) | Régénération 15 PV au début de chaque tour | Perd la régénération |
| **C2** (nord-est) | +1 attaque par tour (multiattaque) | Perd l'attaque bonus |
| **C3** (sud-ouest) | Résistance aux dégâts contondants, perforants et tranchants non magiques | Perd la résistance |
| **C4** (sud-est) | **Résurrection** : si réduit à 0 PV, revient à 75 PV au début du tour suivant (une fois par phase) | Perd la résurrection |

> **Note MJ :** C4 est mécaniquement le plus critique. Les PJ qui coupent C1 en premier rendent la Phase 1 beaucoup plus courte. Ceux qui coupent C4 en premier empêchent la résurrection surprise.

**Coup de couteau dans un conduit :** Un personnage adjacent à un pilier peut utiliser son action pour le frapper (attaque vs AC 12) ou l'endommager (un sort ou capacité ciblant le pilier). À 0 PV, le pilier explose dans un rayon de 1,5 m (3d6 feu + 3d6 force, JS DEX DD 15, demi-dégâts).

---

## Phase 1 : L'Enclume *(El Yunque)*

### Description

El Crisol émerge du creuset comme un colosse de métal en fusion et de pierre animée, 4 m de haut, ancré au sol par quatre chaînes de ley energy. Il ne peut pas se déplacer, mais son seul bras -- un pilier de métal tordu -- frappe avec une force dévastatrice.

### Bloc de stats

**El Crisol Despierto -- Phase 1**
*Créature artificielle de Grande taille*

| Stat | Valeur |
|---|---|
| CA | 17 (armure naturelle) |
| Points de vie | 190 |
| Vitesse | 0 (ancré) |
| FOR | 24 (+7) |
| DEX | 4 (-3) |
| CON | 22 (+6) |
| INT | 3 (-4) |
| SAG | 6 (-2) |
| CHA | 1 (-5) |

**Jets de sauvegarde :** For +11, Con +10

**Immunités (dégâts) :** feu, poison, psychique

**Immunités (états) :** charmé, épuisement, effrayé, empoisonné, à terre, paralysé

**Sens :** Vision aveugle 18 m

---

**ACTIONS**

***Multiattaque.*** El Crisol effectue 2 attaques de Bras de forge (3 si C2 actif).

***Bras de forge.*** *Attaque de corps à corps :* +11 pour toucher, allonge 4,5 m, une cible. *Touché :* 25 (4d8 + 7) dégâts contondants.

***Impulsion tellurique (Recharge 5-6).*** El Crisol libère une onde d'énergie. Toutes les créatures dans un rayon de 6 m effectuent un JS de Constitution DD 17. *Raté :* 36 (8d8) dégâts de force et repoussé de 4,5 m. *Réussi :* la moitié des dégâts, pas de déplacement.

***Frappe sismique (1/tour).*** El Crisol frappe le sol. Toutes les créatures au sol dans un rayon de 3 m effectuent un JS de Dextérité DD 16. *Raté :* 18 (4d8) dégâts contondants et à terre. *Réussi :* la moitié.

---

**ACTIONS LÉGENDAIRES** (3/round, à la fin du tour d'une autre créature)

- ***Frappe (1 action) :*** Une attaque de Bras de forge.
- ***Appel de l'énergie (1 action) :*** El Crisol aspire l'énergie tellurique à travers les tuyaux actifs. Il récupère 5 PV par conduit encore actif (max 20 PV si les quatre sont intacts).
- ***Rugissement de la forge (2 actions) :*** Chaque créature dans un rayon de 9 m effectue un JS de Charisme DD 15 ou est effrayée jusqu'à la fin de son prochain tour.

---

**RÉACTIONS**

***Contrecoup.*** Quand un pilier-conduit est détruit à moins de 4,5 m, El Crisol effectue immédiatement une attaque de Bras de forge contre la créature responsable.

---

### Transition vers Phase 2

Quand El Crisol est réduit à 0 PV **et que C4 est détruit**, il est vaincu et passe à la Phase 3 finale.

Si C4 est **encore actif**, la résurrection se déclenche : El Crisol tombe, une lumière orange aveuglante emplit la salle, et il se relève à 75 PV. **C4 est maintenant détruit** (utilisé). La forme se liquéfie partiellement -- début de la Phase 2.

Si C4 est détruit mais que d'autres conduits sont encore actifs quand El Crisol tombe à 0 PV, passez directement à Phase 2 (sans résurrection).

---

## Phase 2 : La Fonte *(La Fusión)*

### Description

> La silhouette colossale s'effondre sur elle-même dans un craquement de métal. Mais au lieu de tomber inerte, elle fond -- et la masse de métal en fusion commence à se reformer en quelque chose de plus petit, de plus rapide. Une forme humanoïde à peine reconnaissable, entièrement de métal liquide, se redresse. Elle se déplace maintenant.

El Crisol perd sa masse mais gagne en mobilité et en imprévisibilité. Sa forme instable rend certaines résistances inutiles -- mais il devient aussi plus dangereux en mêlée rapprochée.

### Bloc de stats

**El Crisol Despierto -- Phase 2**
*Créature artificielle de Taille moyenne*

| Stat | Valeur |
|---|---|
| CA | 14 (forme instable) |
| Points de vie | 130 |
| Vitesse | 12 m |
| FOR | 20 (+5) |
| DEX | 14 (+2) |
| CON | 18 (+4) |
| INT | 5 (-3) |
| SAG | 8 (-1) |
| CHA | 1 (-5) |

**Jets de sauvegarde :** For +9, Con +8, Dex +6

**Immunités (dégâts) :** feu, poison, psychique

**Vulnérabilités :** froid (la forme liquide se solidifie et ralentit)

**Immunités (états) :** charmé, épuisement, effrayé, empoisonné, à terre, paralysé

**Sens :** Vision aveugle 18 m

---

**CAPACITÉS**

***Forme liquide.*** El Crisol peut traverser l'espace d'une créature hostile sans que cela ne compte comme terrain difficile. Les créatures dont l'espace est traversé effectuent un JS de Dextérité DD 15 ou subissent 10 (3d6) dégâts de feu.

***Surchauffe.*** Quand El Crisol subit des dégâts de froid, il est ralenti (vitesse réduite de moitié) jusqu'à la fin de son prochain tour.

---

**ACTIONS**

***Multiattack.*** El Crisol effectue 2 attaques de Coulée brûlante (3 si C2 encore actif).

***Coulée brûlante.*** *Attaque de corps à corps :* +9 pour toucher, allonge 1,5 m, une cible. *Touché :* 18 (3d8 + 5) dégâts de feu. La cible attrape le feu de forge : 5 (1d10) dégâts de feu au début de chacun de ses tours (JS Constitution DD 15 pour éteindre, action).

***Éclaboussure de fonte (Recharge 5-6).*** El Crisol projette du métal en fusion dans un cône de 9 m. JS Dextérité DD 16. *Raté :* 28 (8d6) dégâts de feu et le sol dans la zone devient terrain difficile brûlant (1d6 feu) jusqu'à la fin du prochain round.

***Absorption de conduit (1/tour, si conduit actif adjacent).*** El Crisol traverse un pilier actif et récupère 30 PV. Le pilier n'est pas détruit mais est désactivé jusqu'au début du prochain tour d'El Crisol.

---

**ACTIONS LÉGENDAIRES** (3/round)

- ***Coulée (1 action) :*** Une attaque de Coulée brûlante.
- ***Déplacement (1 action) :*** El Crisol se déplace de sa vitesse sans provoquer d'attaques d'opportunité.
- ***Fusion (2 actions) :*** El Crisol tente de saisir une créature (attaque d'empoigne +9, difficulté d'évasion DD 17). La créature empoignée subit 14 (4d6) dégâts de feu au début de chacun de ses tours.

---

### Transition vers Phase 3

**Si El Crisol tombe à 0 PV et que tous les conduits sont détruits :** Il est vaincu définitivement. Il s'effondre en une mare de métal froid. Passez à la résolution.

**Si El Crisol tombe à 0 PV et qu'au moins un conduit est encore actif :** La mare de métal en fusion se divise en trois. Phase 3.

---

## Phase 3 : L'Éclat *(Los Fragmentos)* -- conditionnelle

### Description

> La forme se divise dans un craquement assourdissant. Trois masses de métal liquide jaillissent dans des directions différentes et commencent à se solidifier en silhouettes à taille humaine -- des fragments, chacun portant une étincelle de la conscience d'El Crisol.

### Les Fragments de la Forge (×3)

*Créatures artificielles de Taille petite*

| Stat | Valeur |
|---|---|
| CA | 13 |
| Points de vie | 52 (8d6 + 24) |
| Vitesse | 9 m |
| FOR | 16 (+3) |
| DEX | 10 (+0) |
| CON | 16 (+3) |

**Immunités :** feu, poison, psychique

**ACTIONS**

***Frappe de fragment.*** *Attaque de corps à corps :* +5 pour toucher, 10 (2d6 + 3) dégâts contondants + 7 (2d6) dégâts de feu.

***Explosion finale (quand réduit à 0 PV).*** Le fragment explose. Toutes les créatures dans un rayon de 1,5 m effectuent un JS Dextérité DD 13 ou subissent 14 (4d6) dégâts de feu.

> **Note MJ :** Cette phase est du nettoyage. Les PJ ont survécu au plus dur. Trois créatures à 52 PV chacune sont gérables pour 6 personnages de niveau 7. Si les PJ sont épuisés, réduisez à 2 fragments.

---

## Résolution

**Victoire :** Tous les fragments détruits, ou El Crisol vaincu en Phase 2 avec tous les conduits coupés. Le métal se refroidit. Les spectres de la forge cessent leurs mouvements répétitifs et s'estompent paisiblement -- comme si la Memoria trouvait enfin la paix. La Clé du Seuil pulse doucement, prête à être emportée.

**Échec total :** El Crisol Phase 2 avec C4 encore actif peut théoriquement boucler indéfiniment. Si les PJ fuient sans la Clé, El Crisol ralentit mais la forge reste active -- Rufina sera alertée d'une intrusion.

---

## Conseils pour diriger le combat

**Montrez la mécanique des conduits tôt.** Dès le début du combat, El Crisol devrait utiliser son *Appel de l'énergie* légendaire pour que les joueurs comprennent que les piliers importent -- et que chaque conduit détruit réduit le soin de 5 PV.

**Les conduits dans l'ordre de priorité joueur :** Les joueurs découvriront probablement C4 (résurrection) en premier si vous annoncez clairement *"il se relève"* après la première mort. Laissez-les décider de la stratégie.

**La plateforme surélevée est un piège.** En Phase 1, elle semble parfaite (hors de portée). En Phase 2, El Crisol peut traverser les échelles et atteindre les joueurs en un mouvement. Ne révélez pas ce changement à l'avance.

**Froid = ressource stratégique.** Si un joueur a des sorts de froid (*rayon de givre*, *mur de glace*, *tempête de grêle*), ils comptent double en Phase 2. Récompensez la lecture de situation.

**Phase 3 : donnez-leur de l'espace.** Après deux phases intenses, laisser les joueurs "nettoyer" trois petites créatures est satisfaisant. Ne rendez pas les fragments trop difficiles.
