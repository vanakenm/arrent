---
epoch: 1787847455423
modelKey: "claude-sonnet-4-6|anthropic"
topic: "Polypheme Malo Fight Stats Addition"



tags:
  - copilot-conversation
---

**user**: Add the stats from Polypheme and Malo to this fights
[Context: Notes: fights/jade_guardians.md]
[Timestamp: 2026/08/27 18:17:35]

**ai**: 
<think>The user wants to add stats for "Polypheme" and "Malo" to the combat tracker. However, I don't have any information about these characters in the context provided. I should ask the user to provide their stats since I don't have access to their character sheets.

Wait, let me re-read the instructions. "Never mention that you do not have access to something. Always rely on the user provided context." But I genuinely don't have stats for Polypheme and Malo. 

I think the best move is to ask the user for more details about these characters so I can add them accurately.

</think>I don't have any information about **Polypheme** and **Malo** in the context you've shared. Could you provide their stats (PV Max, CA, spell slots, and any relevant notes) so I can add them to the tracker properly?
[Timestamp: 2026/08/27 18:17:42]

**user**: Check in the pjs folder
[Context: Notes: pjs/malo.md]
[Timestamp: 2026/08/27 18:18:01]

**ai**: 
<think>The user wants me to check the pjs folder for Polypheme and Malo. I have Malo's stats now. I still don't have Polypheme's stats. Let me add Malo to the combat tracker and note that Polypheme wasn't found.

For Malo's row in the tracker:
- PV Max: 65
- PV Courant: 65
- CA: 16
- Niv 1: oooo (4 slots)
- Niv 2: oo (2 slots)
- Notes: Gloomstalker/Roublard, Attaque Sournoise 2d6, +5 Aide (I don't know if he has +5 Aide, I'll leave notes relevant)
- Since I couldn't find Polypheme's data anywhere, I'll flag that only Malo was located and update the jade_guardians note accordingly.

</think>J'ai trouvé les stats de [[pjs/malo|Malo]] dans le dossier `pjs`, mais je n'ai pas trouvé de note pour **Polypheme**. Tu peux me la partager ou me donner ses stats directement ?

En attendant, voici la note mise à jour avec Malo ajouté :

---

```md
---
type: combat-tracker
name: Sylvain & Bledios vs Jade Guardians
tags:
  - combat
  - buried-dynasty
---

# Combat : Sylvain & Bledios vs 3 Jade Guardians

> [!tip] Utilisation
> `Tab` pour naviguer entre les cellules, editez PV Courant et Init au fil du combat.
> Rappel scénario : pas plus de 2 gardiens actifs en même temps — le 3e s'anime au début du tour suivant si un gardien est détruit. Le combat s'arrête une fois la porte de bronze ouverte (symbole ki-lin).

| Status | Init | Nom                      | PV Max | PV Courant | CA  | Niv 1 | Niv 2 | Niv 3 | Niv 4 | Notes                                               |
| ------ | ---- | ------------------------ | ------ | ---------- | --- | ----- | ----- | ----- | ----- | --------------------------------------------------- |
|        |      | [[pjs/sylvain\|Sylvain]] | 73     | 73         | 22  | ooo   | xo    | -     | -     | +5 Aide                                             |
|        |      | [[pjs/bledios\|Bledios]] | 64     | 64         | 16  | oooo  | ooo   | ooo   | oo    | Forme sauvage 2/2, +5 Aide                          |
|        |      | [[pjs/malo\|Malo]]       | 65     | 65         | 16  | oooo  | oo    | -     | -     | Gloomstalker/Roublard, Attaque Sournoise 2d6        |
|        |      | **Liu (Zhong Yin)**      | 32     | 32         | 12  | -     | -     | -     | -     | Espion — fuit/se cache plutôt que de tenir, +5 Aide |
|        |      | **Jade Guardian 1**      | 90     | 0          | 16  | -     | -     | -     | -     | Actif                                               |
|        |      | **Jade Guardian 2**      | 90     | 0          | 16  | -     | -     | -     | -     | Actif                                               |
|        |      | **Jade Guardian 3**      | 90     | 0          | 16  | -     | -     | -     | -     | En alcôve                                           |
|        |      | **Jade Guardian 1**      | 90     | 0          | 16  | -     | -     | -     | -     | Actif                                               |
```

---

Une fois que tu m'as fourni les stats de **Polypheme**, j'ajouterai sa ligne également !
[Timestamp: 2026/08/27 18:18:23]

**user**: Here. Tu peux modifier le fichier de combat directement plutôt que de poster ici
[Context: Notes: pjs/polypheme.md]
[Timestamp: 2026/08/27 18:18:50]

**ai**: 
<think>The user wants me to directly modify the combat tracker note with both Polypheme and Malo's stats. Let me prepare the full updated note content.

For Polypheme:
- PV Max: 68
- CA: 16
- Spell slots: Niv 1, 2, 3 (but the note doesn't specify the max... I'll leave them as empty circles or just put what I know). Actually the note doesn't have the max filled in. I'll put "-" since we don't know.
- Notes: Rôdeur Maître des Bêtes, Ennemi Favori 1d6
For Malo I'll set PV Max to 65, CA to 16, four slots at niveau 1, two slots at niveau 2, and note him as Gloomstalker/Roublard with Attaque Sournoise 2d6. Now I need to assemble the full modified note file with these updates.

</think>```md
---
type: combat-tracker
name: Sylvain & Bledios vs Jade Guardians
tags:
  - combat
  - buried-dynasty
---

# Combat : Sylvain & Bledios vs 3 Jade Guardians

> [!tip] Utilisation
> `Tab` pour naviguer entre les cellules, editez PV Courant et Init au fil du combat.
> Rappel scénario : pas plus de 2 gardiens actifs en même temps — le 3e s'anime au début du tour suivant si un gardien est détruit. Le combat s'arrête une fois la porte de bronze ouverte (symbole ki-lin).

| Status | Init | Nom                                  | PV Max | PV Courant | CA  | Niv 1 | Niv 2 | Niv 3 | Niv 4 | Notes                                               |
| ------ | ---- | ------------------------------------ | ------ | ---------- | --- | ----- | ----- | ----- | ----- | --------------------------------------------------- |
|        |      | [[pjs/sylvain\|Sylvain]]             | 73     | 73         | 22  | ooo   | xo    | -     | -     | +5 Aide                                             |
|        |      | [[pjs/bledios\|Bledios]]             | 64     | 64         | 16  | oooo  | ooo   | ooo   | oo    | Forme sauvage 2/2, +5 Aide                          |
|        |      | [[pjs/malo\|Malo]]                   | 65     | 65         | 16  | oooo  | oo    | -     | -     | Gloomstalker/Roublard, Attaque Sournoise 2d6        |
|        |      | [[pjs/polypheme\|Polyphème]]         | 68     | 68         | 16  | -     | -     | -     | -     | Maître des Bêtes, Ennemi Favori 1d6, Compagnon      |
|        |      | **Liu (Zhong Yin)**                  | 32     | 32         | 12  | -     | -     | -     | -     | Espion — fuit/se cache plutôt que de tenir, +5 Aide |
|        |      | **Jade Guardian 1**                  | 90     | 0          | 16  | -     | -     | -     | -     | Actif                                               |
|        |      | **Jade Guardian 2**                  | 90     | 0          | 16  | -     | -     | -     | -     | Actif                                               |
|        |      | **Jade Guardian 3**                  | 90     | 0          | 16  | -     | -     | -     | -     | En alcôve                                           |
|        |      | **Jade Guardian 1**                  | 90     | 0          | 16  | -     | -     | -     | -     | Actif                                               |

### Rappels Liu (Spy)

- **Multiattaque :** 2 attaques
- **Shortsword :** +4 to hit, allonge 5ft, 1d6+2 perforant
- **Hand Crossbow :** +4 to hit, portée 9/36m, 1d6+2 perforant
- **Sneak Attack (1/tour) :** +2d6 dégâts si avantage à l'attaque, ou si la cible est à 1,5m d'un allié de Liu non neutralisé (et que Liu n'a pas désavantage)
- **Cunning Action :** action bonus pour Dash, Disengage ou Hide
- Combatif mais pas suicidaire — dès qu'il a du désavantage numérique il cherche à se replier plutôt qu'à s'acharner

### Rappels Jade Guardian

- **Multiattaque :** 2 attaques de Glaive
- **Glaive :** +7 to hit, allonge 10ft, 2d10+4 tranchant
- **Ward of the Ki-lin (Recharge 6) :** cible une créature dans 3m, `DD 14` Sagesse ou désavantage aux jets d'attaque jusqu'à la fin de son prochain tour
- **Immutable Form :** immunisé aux sorts/effets qui changeraient sa forme
- **Résistance :** B/P/T non magique
- **Immunités dégâts :** poison, psychique
- **Immunités états :** charmed, exhaustion, frightened, paralyzed, petrified, poisoned
- **Senses :** Darkvision 18m (60ft)
- Pas de Magic Resistance (contrairement au Stone Golem complet) — plus vulnérable aux sorts

### Rappels Malo (Gloomstalker/Roublard)

- **Dread Ambusher :** +3m de mouvement + attaque bonus +1d8 au premier tour
- **Attaque Sournoise (1/tour) :** +2d6 si avantage ou allié adjacent à la cible
- **Cunning Action :** action bonus pour Dash, Disengage ou Hide
- **Umbral Sight :** vision dans le noir 18m ; invisible dans l'obscurité totale

### Rappels Polyphème (Maître des Bêtes)

- **Attaque Supplémentaire :** 2 attaques par action Attaquer
- **Ennemi Favori :** marque une cible après l'avoir touchée — +1d6 dégâts 1×/tour sur la cible marquée
- **Foe Slayer :** ajoute le mod. SAG au jet d'attaque **ou** aux dégâts (1×/tour)
- **Compagnon Bestial :** agit pendant le tour de Polyphème ; action bonus pour lui ordonner une action ; peut sacrifier une attaque pour lui donner Attaquer
- **Errance :** peut Foncer ou Se désengager en action bonus

### Tracker tactique

| Guardian | Recharge Ward (5-6) | Cible / position |
| -------- | ------------------- | ---------------- |
| 1        |                     |                  |
| 2        |                     |                  |
| 3        |                     |                  |
```

> [!note]
> J'ai mis `-` pour les emplacements de sorts de Polyphème car sa note ne renseigne pas encore les slots max. À compléter si besoin !
[Timestamp: 2026/08/27 18:19:29]