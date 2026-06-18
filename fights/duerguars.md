---
type: combat-tracker
name: Duerguars
tags:
  - combat
  - le-sceau-des-seuils
---
Malo 15
Varys 14
Bledios 13


```monster
name: Duergar
size: Medium
type: Humanoid
subtype: dwarf
alignment: lawful evil
ac:
  - ac: 16
    from:
      - scale mail, shield
hp:
  average: 26
  formula: 4d8+8
speed:
  walk: 25
abilities:
  str: 14
  dex: 11
  con: 14
  int: 11
  wis: 10
  cha: 9
senses:
  - darkvision 120 ft.
passive_perception: 10
languages:
  - Dwarvish
  - Undercommon
damage_resistances:
  - poison
cr: '1'
traits:
  - name: Duergar Resilience
    entries:
      - The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
actions:
  - name: Enlarge (Recharges after a Short or Long Rest)
    entries:
      - For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available.
  - name: War Pick
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage, or `damage:2d8+STR` piercing damage while enlarged.'
  - name: Javelin
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 30/120 ft., one target. Hit: `damage:1d6+STR` piercing damage, or `damage:2d6+STR` piercing damage while enlarged.'
  - name: Invisibility (Recharges after a Short or Long Rest)
    entries:
      - The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.
```

# Combat : Duerguars


> [!tip] Utilisation
> `Tab` pour naviguer entre les cellules, editez PV Courant et sorts au fil du combat.

| Init | Nom                          | PV Max | PV Courant | CA  | Niv 1 | Niv 2 | Niv 3 | Niv 4 | Notes                 |
| ---- | ---------------------------- | ------ | ---------- | --- | ----- | ----- | ----- | ----- | --------------------- |
|      |                              |        |            |     |       |       |       |       |                       |
| 16   | **Duergar 4**                | 26     | 4          | 16  | -     | -     | -     | -     | Agrandissement 1/jour |
| 13   | [[pjs/bledios\|Bledios]]     | 52     | 31         | 16  | xooo  | xxo   | oxx   | x     | Forme animale 2/2     |
| 14   | [[pjs/varys\|Varys]]         | 75     | 35         | 19  | -     | -     | -     | -     | Rage 7/16             |
| 15   | [[pjs/malo\|Malo]]           | 58     | 22         | 16  | -     | -     | -     | -     |                       |
|      | [[pjs/polypheme\|Polypheme]] | 58     | 58         | 16  | -     | -     | -     | -     | Stats manquantes      |
|      | [[pjs/zangra\|Zangra]]       | 45     | 45         | 16  | oooo  | oox   | xxo   | o     | Inspiration 2/4       |
|      | [[pjs/sylvain\|Sylvain]]     | 60     | 60         | 22  | ooo   | xx    | -     | -     |                       |
| 16   | **Duergar 5**                | 26     | 26         | 16  | -     | -     | -     | -     | Agrandissement 1/jour |
| 16   | **Duergar 6**                | 26     | 26         | 16  | -     | -     | -     | -     | Agrandissement 1/jour |

### Rappels Duergar


- **War Pick :** +4, 1d8+2 perforant, ou 2d8+2 si agrandi
- **Javelin :** +4, portee 9/36 m, 1d6+2 perforant, ou 2d6+2 si agrandi
- **Agrandissement (1/jour) :** pendant 1 minute, taille Large, avantage aux JS FOR et aux tests FOR, +1d6 degats avec les attaques d'arme
- **Invisibilite (1/jour) :** jusqu'a attaque, sort lance, concentration rompue ou fin volontaire
- **Vision dans le noir :** 36 m
- **Resistance duergar :** avantage contre charme, etourdissement, paralysie, illusions

### Tracker tactique

| Duergar | Agrandi | Invisible | Cible / position |
| ------- | ------- | --------- | ---------------- |
| 1       |         |           |                  |
| 2       |         |           |                  |
| 3       |         |           |                  |
| 4       |         |           |                  |
| 5       |         |           |                  |
| 6       |         |           |                  |