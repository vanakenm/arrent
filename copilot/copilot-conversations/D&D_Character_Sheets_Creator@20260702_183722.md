---
epoch: 1783010242752
modelKey: "claude-sonnet-4-6|anthropic"
topic: "D&D Character Sheets Creator"



tags:
  - copilot-conversation
---

**user**: Let's make actual "character sheets" from the pjs folder. We'll store D&D statistics (and their related +X), skills, proficiency number, saving throws, magical items, spells slots and other power.

Make a test already on Bledios sheet - a lot if missing, it's ok I'll fill it progressively
[Context: Notes: pjs/bledios.md]
[Timestamp: 2026/07/02 18:37:22]

**ai**: 
<think>The user wants to create a proper D&D character sheet format for their Obsidian notes, starting with the Bledios character. They want to include D&D statistics (STR, DEX, CON, INT, WIS, CHA with modifiers), skills, proficiency bonus, saving throws, magical items, spell slots, and other powers. Let me create a comprehensive template and apply it to Bledios with the existing information, leaving blanks for the user to fill in.</think>Here's a proper D&D 5e character sheet for Bledios, keeping all existing info and adding the full structure:

```markdown
# Bledios

## Identité
- **Classe:** 
- **Sous-classe:**
- **Race:**
- **Niveau:**
- **Background:**
- **Alignement:**

---

## Statistiques de Combat
- **PV Max:** 52 (actuels: 52)
- **CA:** 16
- **Initiative:** +7
- **Vitesse:**
- **Dés de vie:**

---

## Caractéristiques

| Caractéristique | Score | Modificateur |
| --- | --- | --- |
| Force (STR) |  | +0 |
| Dextérité (DEX) |  | +0 |
| Constitution (CON) |  | +0 |
| Intelligence (INT) |  | +0 |
| Sagesse (WIS) |  | +0 |
| Charisme (CHA) |  | +0 |

---

## Maîtrise
- **Bonus de maîtrise:** +

---

## Jets de Sauvegarde

| Caractéristique | Bonus | Maîtrise |
| --- | --- | --- |
| Force |  | ☐ |
| Dextérité |  | ☐ |
| Constitution |  | ☐ |
| Intelligence |  | ☐ |
| Sagesse |  | ☐ |
| Charisme |  | ☐ |

---

## Compétences

| Compétence | Caractéristique | Bonus | Maîtrise |
| --- | --- | --- | --- |
| Acrobaties | DEX |  | ☐ |
| Arcanes | INT |  | ☐ |
| Athlétisme | STR |  | ☐ |
| Discrétion | DEX |  | ☐ |
| Dressage | WIS |  | ☐ |
| Escamotage | DEX |  | ☐ |
| Histoire | INT |  | ☐ |
| Intimidation | CHA |  | ☐ |
| Investigation | INT |  | ☐ |
| Médecine | WIS |  | ☐ |
| Nature | INT |  | ☐ |
| Perception | WIS |  | ☐ |
| Perspicacité | WIS |  | ☐ |
| Persuasion | CHA |  | ☐ |
| Religion | INT |  | ☐ |
| Représentation | CHA |  | ☐ |
| Supercherie | CHA |  | ☐ |
| Survie | WIS |  | ☐ |
| Tromperie | CHA |  | ☐ |

---

## Emplacements de Sorts

| Niveau | Max | Actuels |
| --- | --- | --- |
| Niveau 1 | 4 | 4 |
| Niveau 2 | 3 | 1 |
| Niveau 3 | 3 | 3 |
| Niveau 4 | 1 | 1 |

### Sorts Préparés / Connus

#### Sorts innés / À volonté
- 

#### Niveau 1
- 

#### Niveau 2
- 

#### Niveau 3
- 

#### Niveau 4
- 

---

## Capacités de Classe

### Forme Animale
- **Utilisations:** 2 / 2
- **CR max:**
- **Restrictions:**

### Autres Capacités
- 

---

## Équipement & Magie

### Objets avec Attunement (X/3)
- Amulette coeur
- Anneau de sort niv 3 — *See Invisibility*

### Objets sans Attunement
- Lunettes de vision nocturne

### Armes & Armures
- 

### Potions
_Aucune potion actuellement_

---

## Bénédictions & Effets Actifs
- +12 sur un jet

---

## Langues & Maîtrises Diverses
- **Langues:**
- **Armures:**
- **Armes:**
- **Outils:**

---

## Notes
_Espace pour ajouter des notes sur le personnage..._
```

---

Quelques points notables :
- J'ai gardé **tout** ce qui existait déjà
- La section **Maîtrise** avec ☐/☑ facilite le remplissage au fur et à mesure
- Les sorts sont séparés par niveau pour que tu puisses les lister progressivement
- Tu peux remplacer les ☐ par ☑ pour les compétences/saves maîtrisés
[Timestamp: 2026/07/02 18:37:42]

**user**: Reminder: I don't care about alignmement in this campaign
[Context: Notes: pjs/bledios.md]
[Timestamp: 2026/07/02 18:39:03]

**ai**: 
<think>The user wants me to remove the alignment field from the character sheet. I'll update the Identité section accordingly.</think>Noted! I'll remove **Alignement** from the Identité section of all character sheets going forward. Here's the corrected block:

```markdown
## Identité
- **Classe:** 
- **Sous-classe:**
- **Race:**
- **Niveau:**
- **Background:**
```

I'll keep this in mind for any future character sheets in the `pjs` folder.
[Timestamp: 2026/07/02 18:39:06]

**user**: The whoel party jhust got at level 8th, some have custom classes, here is what they got for that level, update the sheet already moving to the structure used for bledios
[Context: Notes: pjs/bledios.md]
[Timestamp: 2026/07/02 18:41:03]

**user**: Mich / Bledios:
Amélioration de caractéristique
Amélioration de la forme sauvage (CR max ½ -> 1, sans limitation)
+1 emplacement de sort de niveau 4
Tuk/Zangra
Amélioration de caractéristique
+1 emplacement de sort de niveau 4
+3 sorts (1 de base, 2 grâce aux modifications apportées au lanceur de sorts connu (1 grâce au niveau, 1 grâce à l'ASI +2 en CHA)
Peut remplacer un sort par un autre du même niveau.
Sim/Malo
Attaque sournoise 1D6 -> 2D6
Archétype de roublard
Greg/varys
Amélioration de caractéristique
+1 Fureur
+1 Manœuvre sauvage
La poigne du Titan [T, 6] :
Nécessite unIl a réussi à saisir la créature à deux mains.
Vous traitez la créature agrippée comme une arme de mêlée simple. Avec la propriété « Projection » (20/60). Vous pouvez utiliser une Attaque pour projeter la créature au sol ou contre une autre cible (nécessite un jet d'attaque). La créature agrippée subit 4d10 + modificateur de Force dégâts contondants et est renversée à terre dans une case adjacente à la cible. La cible subit les mêmes dégâts si l'attaque réussit. Si vous projetez la créature, l'agrippement prend fin ; sinon, la créature bénéficie d'un jet de sauvegarde de Force pour se libérer.
Laurent/Polyphème
Amélioration de caractéristique
Land’s Stride

Yvan/Sylvain
Amélioration de caractéristique
+5 points de pool
[Context: Notes: pjs/bledios.md]
[Timestamp: 2026/07/02 18:41:04]

**ai**: 
<think>The user wants to update Bledios' sheet to level 8, but they haven't provided the level 8 gains yet. They said "here is what they got for that level" but didn't actually include the information. I should ask them to provide the level 8 details for Bledios.</think>It seems like you forgot to paste the level 8 gains! What did the party get at level 8? 👀
[Timestamp: 2026/07/02 18:41:06]

**ai**: 
<think>The user is sharing level-up information for multiple characters. They want me to note these changes. Let me organize this information clearly. Since the active note is Bledios, I should update that note and note the changes for other characters too.

Let me summarize the changes for each character clearly, and then provide the updated Bledios sheet since that's the active note.</think>Voici un résumé des améliorations par personnage pour que tu puisses les appliquer à chaque fiche :

---

### Mich / Bledios
- Amélioration de caractéristique (ASI)
- Forme sauvage : CR max ½ → **1**, sans limitation
- +1 emplacement de sort niveau 4 (2 max désormais)

### Tuk / Zangra
- ASI
- +1 emplacement de sort niveau 4
- +3 sorts connus (1 niveau, 1 ASI +2 CHA, 1 base)
- Peut remplacer un sort par un autre du même niveau

### Sim / Malo
- Attaque sournoise : 1d6 → **2d6**
- Archétype de roublard débloqué

### Greg / Varys
- ASI
- +1 Fureur
- +1 Manœuvre sauvage
- Nouvelle manœuvre : **La Poigne du Titan** [T, 6] — utilise une créature agrippée comme arme (Projection 20/60), 4d10 + Force dégâts contondants, renverse la cible adjacente, mêmes dégâts sur la cible touchée

### Laurent / Polyphème
- ASI
- **Land's Stride** débloqué

### Yvan / Sylvain
- ASI
- +5 points de pool

---

Pour Bledios, je peux mettre à jour la fiche directement — tu veux que je le fasse maintenant ? Et as-tu les détails de l'ASI (quel(s) score(s) augmenté(s)) pour chaque perso ?
[Timestamp: 2026/07/02 18:41:14]

**user**: Oui édite déjà celle de bledios, les caract je viendrais les encoder
[Context: Notes: pjs/bledios.md]
[Timestamp: 2026/07/02 18:43:01]

**ai**: 
<think>The user wants me to update the Bledios sheet with the level 8 changes, leaving the ASI stats for them to fill in later. Let me update the sheet based on what we know:
- Level 8
- Wild Shape: CR max ½ → 1, no restriction
- +1 spell slot level 4 (now 2 max)
- ASI (to be filled)

I'll provide the full updated sheet.</think>```markdown
# Bledios

## Identité
- **Classe:** 
- **Sous-classe:**
- **Race:**
- **Niveau:** 8
- **Background:**

---

## Statistiques de Combat
- **PV Max:** 52 (actuels: 52)
- **CA:** 16
- **Initiative:** +7
- **Vitesse:**
- **Dés de vie:**

---

## Caractéristiques

| Caractéristique | Score | Modificateur |
| --- | --- | --- |
| Force (STR) |  | +0 |
| Dextérité (DEX) |  | +0 |
| Constitution (CON) |  | +0 |
| Intelligence (INT) |  | +0 |
| Sagesse (WIS) |  | +0 |
| Charisme (CHA) |  | +0 |

---

## Maîtrise
- **Bonus de maîtrise:** +

---

## Jets de Sauvegarde

| Caractéristique | Bonus | Maîtrise |
| --- | --- | --- |
| Force |  | ☐ |
| Dextérité |  | ☐ |
| Constitution |  | ☐ |
| Intelligence |  | ☐ |
| Sagesse |  | ☐ |
| Charisme |  | ☐ |

---

## Compétences

| Compétence | Caractéristique | Bonus | Maîtrise |
| --- | --- | --- | --- |
| Acrobaties | DEX |  | ☐ |
| Arcanes | INT |  | ☐ |
| Athlétisme | STR |  | ☐ |
| Discrétion | DEX |  | ☐ |
| Dressage | WIS |  | ☐ |
| Escamotage | DEX |  | ☐ |
| Histoire | INT |  | ☐ |
| Intimidation | CHA |  | ☐ |
| Investigation | INT |  | ☐ |
| Médecine | WIS |  | ☐ |
| Nature | INT |  | ☐ |
| Perception | WIS |  | ☐ |
| Perspicacité | WIS |  | ☐ |
| Persuasion | CHA |  | ☐ |
| Religion | INT |  | ☐ |
| Représentation | CHA |  | ☐ |
| Supercherie | CHA |  | ☐ |
| Survie | WIS |  | ☐ |
| Tromperie | CHA |  | ☐ |

---

## Emplacements de Sorts

| Niveau | Max | Actuels |
| --- | --- | --- |
| Niveau 1 | 4 | 4 |
| Niveau 2 | 3 | 1 |
| Niveau 3 | 3 | 3 |
| Niveau 4 | 2 | 2 |

### Sorts Préparés / Connus

#### Sorts innés / À volonté
- 

#### Niveau 1
- 

#### Niveau 2
- 

#### Niveau 3
- 

#### Niveau 4
- 

---

## Capacités de Classe

### Forme Sauvage
- **Utilisations:** 2 / 2
- **CR max:** 1
- **Restrictions:** Aucune

### Autres Capacités
- 

---

## Équipement & Magie

### Objets avec Attunement (X/3)
- Amulette coeur
- Anneau de sort niv 3 — *See Invisibility*

### Objets sans Attunement
- Lunettes de vision nocturne

### Armes & Armures
- 

### Potions
_Aucune potion actuellement_

---

## Bénédictions & Effets Actifs
- +12 sur un jet

---

## Langues & Maîtrises Diverses
- **Langues:**
- **Armures:**
- **Armes:**
- **Outils:**

---

## Notes
_Espace pour ajouter des notes sur le personnage..._
```

Changements appliqués :
- **Niveau** → 8
- **Forme Sauvage** → CR 1, sans restriction
- **Emplacement niveau 4** → 2 max / 2 actuels
- ASI laissée vide pour que tu remplisses les caractéristiques 👍
[Timestamp: 2026/07/02 18:43:18]

**user**: Let's redo Malo's sheet, in the same format, here are some info. The magic quiver item can be create in its own file under a magic_item folder under the pjs because it's complex, on the sheet itself we keep the name 


We move to french too

Race: Human
Extra Language:
You know an extra language
ASI
Your Dexterity score is increased by 2.
Your Wisdom score is increased by 1.
Class: Gloomstalker
Proficiencies
Armor: Light armor, medium armor, shields
Weapons: Simple weapons, martial weapons
Tools: None
Saving Throws: Strength, Constitution
Skills: Athletics, Survival
Language: two extra language

Urban Tracker
You gain Proficiency in Sleight of Hand and Perception

Deft Explorer
Your proficiency bonus is double for one ability for which you have Proficiency (Stealth)

Fighting Style: Archery
You gain a +2 bonus to attack rolls you make with ranged weapons.

Spellcasting
You have access to 6 level 1 spells and 2 level 2 spells from the Gloomstalker spell list. 
You have 4 level 1 spell slots and 2 level 2 spell slots.
Gloom stalker Magic
Disguise Self: as an action you can alter your appearance (see Disguise self spell)
Shadow Step: as a bonus action Teleport from shadow to shadow (60 feet)

Dread Ambusher
You add your WIS modifier to your initiative roll
During the first turn of the combat you get the following benefits:
You have an extra 10 feet movement
You have an extra attack that deals +1d8 damage

You can Hide as a Bonus action  

Umbral Sight
You have a 60 feet Darkvision

Umbral Shroud
While in darkness you are Invisible

Bounty Hunter
Gain Proficiency in Investigation. 
Creatures you hit with Ensnaring Strike (either ranged or melee) have Disadvantage on their Saving Throw.

Piercer
Your Dexterity score is increased by 1.
Once per turn, when you hit a creature with an attack that deals piercing damage, you can re-roll one of the attack’s damage dice, and you must use the new roll.
When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage the target takes.
Extra Attack
Beginning at 5th level, you can attack twice, instead of once, whenever you take the attack action on your turn.

Class: Rogue
Proficiencies
Armor: Light armor
Tools: Thieves’ Tool (Proficiency doubled for sleight of hand)
Skills: Acrobatics

Expertise
You double your proficiency bonus for two skills for which you have proficiency (Perception, Investigation)

Sneak Attack
Once per turn, you can deal extra damage to one creature you hit with an attack if you have advantage on the attack roll or if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll. The attack must use a finesse or a ranged weapon.

The extra damage is Xd6 where X is your level in rogue class divided by 2 (rounded up)
Thieves' cant
You know thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation.

Cunning Action
You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.


Roguish Archetype: Member of the League of Shadows
Born in the shadows: 
“You have been reborned into the shadows”
Once per round you can take free hide action if you are in darkness
Marked by the shadows: 
“Marked by the shadows, members can find each other out anywhere if they don’t hide”
You get a proficiency in Persuasion and Deception (if you already have or later get a proficiency with either of these skills you get an expertise instead)
While using Persuasion or Deception with other members or, during criminal or underground activities you can use your DEX modifier as your CHA modifier for these skills.
Bound by the shadows: 
“The League deals in favors as its internal currency. These debts are bound by the shadows themselves—witnessed and remembered across the multiverse. A favor given is never forgotten; a favor owed is always collected.”
You have a maximum favor (FV) of proficiency bonus x2
You start at proficiency bonus
You can recover favor up to your maximum with the following activities:
Long rest in a settlement with league presence (+1)
Downtime day dedicated to league work (+2)
Help a fellow member with a favor (+1-3 depending on the ask)
Favors come in 3 tiers
Tier 0 (trivial): 
these favors are generally minor and thus free
can be anything like a meal, a safe house option, information, …
are not tracked as they are part of the life of the league

Tier 1 (standard): these favors are the usual business between members
cost 1-3 FV but can be assumed to be repaid offline (during downtimes)
the cost varies with how much it implicate the other member and how rare or risky the ask is
1FV can be anything like gather specific information, obtain a specific item, secure shelter for 24 hours, get introduction to a contact
3FV can be anything like Smuggle across borders, NPC assistance, obtain rare item/information, clear your name locally

Tier 2 (major): these favors are a big ask even between members
they are tracked in game and not with the FV points, they should be repaid/collected in game (if possible)


Other
Background: Criminal
Skill Proficiencies: Deception, Stealth
Tool Proficiencies: One type of gaming set, thieves’ tools
Criminal contact: You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.
Equipment
Longbow +1 of Darkness: You can use your action to cast Darkness once per long rest. The effects are similar to the spell Darkness but do not require any component (V, S, M).
Quiver of many tricks:This obsidian-black quiver never runs out of ordinary arrows. Each dawn, you may attune its magic to prepare a number of special trick arrows equal to your proficiency bonus + your Dexterity modifier (minimum 2, Malo = 3 + 4 = 7).

More powerful arrows may cost 2 or more slots to prepare.
Special arrow slots are regained at dawn.
You may fire special arrows using any bow.
Once fired, a trick arrow vanishes after resolving its effect.
Special arrows are considered magic. 
Any saving throw required by a special arrow has a DC of 8 + Proficiency + DEX modifier (Malo = 8 + 3 + 4 = 15)

Trick Arrow List
When preparing, choose from the following options:

(Cost 1 slot each unless stated otherwise)

Silencer Arrow (costs 2 slots): On hit, the target can’t speak 1 minute (Wisdom save at the end of each turn to end the effect).

Snare Arrow: On hit, spectral cords restrain the target (Strength save at the end of each turn to escape).

Smoke Arrow: Creates a 20-ft radius heavily obscured smoke cloud for 1 minute.

Flash Arrow (costs 2 slots): Bursts with dazzling light; creatures in a 15-ft radius must make a Dex save or be blinded until the start of your next turn.

Sleep Arrow (costs 2 slots): Release a gas that  affects creatures in a 20-ft radius as if cast by Sleep (using 5d8).

Explosive Arrow (costs 2 slots): Explodes in a 10-ft radius for 3d8 fire damage (Dex save half).

Grapple / Grappling Hook Arrow: Fires a hook and cable. Stick to any surface and can be used for climbing, swinging, or pulling objects.

Sonic Arrow: Emits high-frequency sound waves affecting creatures in a 15-ft radius must make a Con save or be deafened until the start of your next turn.

Razor / Blade Arrow: Has retractable blades for cutting cables or fabric. 

Ice Arrow (costs 2 slots): Fires a cryogenic payload that freezes targets. Adds 1d8 cold damage. Reduce the speed of the target to 0 until your next turn (Save DEX to have speed halved instead)

Electric  Arrow (costs 2 slots): Delivers an electric shock upon impact. Adds 1d8 lightning damage. Target loses their reaction until your next turn.

Acid Arrow (costs 2 slots): Releases corrosive chemicals to melt locks or restraints. Adds 1d8 acid damages. If the target is an object instead add 2d8. On objects this damage lingers for a 1min doing 2D8 its damage each round.
[Context: Notes: pjs/malo.md]
[Timestamp: 2026/07/02 18:45:00]

**ai**: 
<think>The user wants me to:
1. Rewrite Malo's character sheet in the same format as Bledios, but in French
2. Create a separate file for the "Quiver of many tricks" magic item under a magic_item folder under pjs
3. Keep only the name of the quiver on the sheet itself

Let me create both files. Let me first organize all the information for Malo's sheet, then create the magic item file.

For the sheet, I need to figure out stats. The user hasn't provided explicit stat scores, but I can note what I know:
- DEX increased by 2 (human ASI) + 1 (Piercer) = +3 total to DEX
- WIS increased by 1 (human ASI)

Looking at the sneak attack progression, the update at level 8 shows it went from 1d6 to 2d6, which suggests the rogue level is now 3 since that's when sneak attack increases to 2d6.

The archetype unlock at level 8 is a bit confusing since rogue archetypes typically come at level 3, so they might be multiclassing, but I'll just organize what's provided and leave gaps for missing details. I'll create both the character sheet and a comprehensive entry for the Quiver of Many Tricks magic item.

For Malo, I have the core details: Human Ranger (Gloomstalker) / Rogue (League of Shadows) at level 8 with 58 HP, AC 16, and that exceptional +14 initiative. The ability scores aren't explicitly stated, but I can infer the DEX modifier is +4 from the quiver slot calculation, and the high initiative suggests WIS bonuses from Dread Ambusher. I'll fill in what I can confirm and leave the rest blank for the user to complete.

Now I'm organizing the spell slots and known spells, plus cataloging the equipment including the attuned items like the Longbow of Darkness and the Dague. I need to create the character files with proper structure, including a separate markdown file for the Quiver of Many Tricks in the magic items folder.</think>Voici les deux fichiers à créer :

---

**`pjs/malo.md`**
```markdown
# Malo

## Identité
- **Race:** Humain
- **Classe principale:** Rôdeur — Gloomstalker
- **Classe secondaire:** Roublard — Membre de la Ligue des Ombres
- **Niveau:** 8
- **Background:** Criminel

---

## Statistiques de Combat
- **PV Max:** 58 (actuels: 58)
- **CA:** 16
- **Initiative:** +14
- **Vitesse:**
- **Dés de vie:**

---

## Caractéristiques

| Caractéristique | Score | Modificateur |
| --- | --- | --- |
| Force (STR) |  | +0 |
| Dextérité (DEX) |  | +4 |
| Constitution (CON) |  | +0 |
| Intelligence (INT) |  | +0 |
| Sagesse (WIS) |  | +0 |
| Charisme (CHA) |  | +0 |

---

## Maîtrise
- **Bonus de maîtrise:** +3

---

## Jets de Sauvegarde

| Caractéristique | Bonus | Maîtrise |
| --- | --- | --- |
| Force |  | ☑ |
| Dextérité |  | ☐ |
| Constitution |  | ☑ |
| Intelligence |  | ☐ |
| Sagesse |  | ☐ |
| Charisme |  | ☐ |

---

## Compétences

| Compétence | Caractéristique | Bonus | Maîtrise |
| --- | --- | --- | --- |
| Acrobaties | DEX |  | ☑ |
| Arcanes | INT |  | ☐ |
| Athlétisme | STR |  | ☑ |
| Discrétion | DEX |  | ☑ ★★ |
| Escamotage | DEX |  | ☑ ★★ |
| Histoire | INT |  | ☐ |
| Intimidation | CHA |  | ☐ |
| Investigation | INT |  | ☑ ★★ |
| Médecine | WIS |  | ☐ |
| Nature | INT |  | ☐ |
| Perception | WIS |  | ☑ ★★ |
| Perspicacité | WIS |  | ☐ |
| Persuasion | CHA |  | ☑ |
| Religion | INT |  | ☐ |
| Représentation | CHA |  | ☐ |
| Supercherie | CHA |  | ☑ |
| Survie | WIS |  | ☑ |
| Tromperie | CHA |  | ☐ |

_★★ = Expertise (bonus de maîtrise doublé)_

---

## Langues & Maîtrises Diverses
- **Langues:** Commun + 3 langues supplémentaires (à remplir)
- **Armures:** Armures légères, armures intermédiaires, boucliers
- **Armes:** Armes simples, armes de guerre
- **Outils:** Outils de voleur (expertise), un jeu de société

---

## Emplacements de Sorts

| Niveau | Max | Actuels |
| --- | --- | --- |
| Niveau 1 | 4 | 4 |
| Niveau 2 | 2 | 2 |

### Sorts Connus (6 niv.1 / 2 niv.2)

#### Sorts innés
- **Déguisement** *(Disguise Self)* — action, 1×/repos long
- **Pas des ombres** *(Shadow Step)* — action bonus, téléportation ombre à ombre (18m)

#### Niveau 1
- 
- 
- 
- 
- 
- 

#### Niveau 2
- 
- 

---

## Capacités de Classe

### Rôdeur — Gloomstalker

#### Style de Combat : Tir
- +2 aux jets d'attaque avec des armes à distance

#### Chasseur des Ténèbres *(Dread Ambusher)*
- Ajoute le modificateur de SAG à l'initiative
- Au premier tour de combat :
  - +3m de mouvement supplémentaire
  - Une attaque supplémentaire infligeant +1d8 dégâts

#### Action furtive
- Se cacher en action bonus

#### Vision des Ombres *(Umbral Sight)*
- Vision dans le noir : 18m

#### Voile des Ombres *(Umbral Shroud)*
- Invisible tant que dans l'obscurité

#### Chasseur de Primes *(Bounty Hunter)*
- Maîtrise en Investigation
- Les créatures touchées par *Liens Enchevêtrés* ont un désavantage à leur JS

---

### Roublard — Ligue des Ombres

#### Attaque Sournoise
- **1 fois par tour**, dégâts supplémentaires si avantage ou allié adjacent : **2d6**
- Doit utiliser une arme à finesse ou à distance

#### Argot des Voleurs *(Thieves' Cant)*
- Langage codé des criminels

#### Action Rusée *(Cunning Action)*
- Action bonus : Foncer, Se désengager, ou Se cacher

#### Né dans les Ombres
- 1 fois par round, action furtive gratuite si dans l'obscurité

#### Marqué par les Ombres
- Maîtrise en Persuasion et Supercherie (ou expertise si déjà maîtrisé)
- Peut utiliser le modificateur DEX à la place de CHA pour Persuasion/Supercherie avec des membres ou lors d'activités criminelles

#### Lié par les Ombres — Système de Faveurs (FV)
- **FV max :** Bonus de maîtrise × 2 = **6**
- **FV actuels :** 3 (= bonus de maîtrise de départ)
- Récupération :
  - Long repos dans un établissement avec présence de la ligue : **+1**
  - Journée de travail pour la ligue : **+2**
  - Aider un membre : **+1 à +3**
- Paliers de faveurs :
  - **Tier 0 (trivial)** — gratuit, non suivi
  - **Tier 1 (standard)** — coûte 1–3 FV, réglé en hors-jeu
  - **Tier 2 (majeur)** — suivi en jeu, remboursé en jeu

---

### Don : Perceur *(Piercer)*
- +1 DEX (inclus dans les caractéristiques)
- 1 fois par tour sur un coup infligeant des dégâts perforants : relance un dé de dégâts, garde le nouveau résultat
- Sur un coup critique perforant : un dé de dégâts supplémentaire

### Attaque Supplémentaire
- Peut attaquer deux fois lors de l'action Attaquer

---

## Équipement & Magie

### Objets avec Attunement (2/3)
- **Arc long +1 des Ténèbres** — +1 aux jets d'attaque et de dégâts à distance. Peut lancer *Ténèbres* (1×/repos long, sans composante)
- **Dague**

### Objets sans Attunement
- [[Carquois aux Mille Ruses]] *(Quiver of Many Tricks)*

### Potions
- Potion de poison

---

## Bénédictions & Effets Actifs
- +12 sur un jet

---

## Notes
_Espace pour ajouter des notes sur le personnage..._
```

---

**`pjs/magic_items/carquois_aux_mille_ruses.md`**
```markdown
# Carquois aux Mille Ruses
*(Quiver of Many Tricks)*

## Description
Ce carquois d'un noir d'obsidienne ne se vide jamais de ses flèches ordinaires.

---

## Règles Générales

- **Slots de flèches spéciales :** Bonus de maîtrise + modificateur DEX (minimum 2)
  - **Malo :** 3 + 4 = **7 slots**
- Les slots sont rechargés **à l'aube**
- Les flèches plus puissantes coûtent **2 slots ou plus**
- Les flèches spéciales peuvent être tirées avec **n'importe quel arc**
- Une fois tirée, la flèche disparaît après résolution de l'effet
- Les flèches spéciales sont considérées comme **magiques**
- **DC des JS :** 8 + Maîtrise + modificateur DEX
  - **Malo :** 8 + 3 + 4 = **15**

---

## Liste des Flèches

| Flèche | Coût | Effet |
| --- | --- | --- |
| Flèche Silencieuse | 2 slots | Sur touche : la cible ne peut plus parler pendant 1 minute (JS Sagesse à la fin de chaque tour pour mettre fin à l'effet) |
| Flèche Piège | 1 slot | Sur touche : des liens spectraux entravation la cible (JS Force à la fin de chaque tour pour s'échapper) |
| Flèche de Fumée | 1 slot | Crée un nuage de fumée (rayon 6m, fortement obscurci) pendant 1 minute |
| Flèche Flash | 2 slots | Explosion lumineuse : créatures dans un rayon de 4,5m font un JS DEX ou sont aveuglées jusqu'au début de votre prochain tour |
| Flèche Soporifique | 2 slots | Gaz affectant les créatures dans un rayon de 6m comme le sort *Sommeil* (5d8) |
| Flèche Explosive | 2 slots | Explosion dans un rayon de 3m : 3d8 dégâts de feu (JS DEX pour demi-dégâts) |
| Flèche Grappin | 1 slot | Fixe un crochet et un câble sur toute surface — escalade, balancement, ou traction d'objets |
| Flèche Sonique | 1 slot | Ondes sonores dans un rayon de 4,5m : JS Constitution ou être assourdi jusqu'au début de votre prochain tour |
| Flèche Rasoir | 1 slot | Lames rétractables — découpe câbles ou tissu |
| Flèche de Glace | 2 slots | +1d8 dégâts de froid. Réduit la vitesse de la cible à 0 jusqu'au prochain tour (JS DEX : vitesse réduite de moitié) |
| Flèche Électrique | 2 slots | +1d8 dégâts de foudre. La cible perd sa réaction jusqu'au prochain tour |
| Flèche Acide | 2 slots | +1d8 dégâts d'acide. Sur un objet : +2d8, et les dégâts persistent 1 minute (2d8/round) |
```

---

Quelques points notés :
- Le **+4 DEX** est déduit des calculs dans l'équipement (DC 15, 7 slots)
- Les **★★** dans les compétences indiquent les expertises
- Le **FV de départ** est fixé à 3 (= bonus de maîtrise), à ajuster si besoin
- Les scores de caractéristiques restent à remplir comme pour Bledios
[Timestamp: 2026/07/02 18:46:18]

**user**: Go pour polypheme maitenant basé là dessus:

https://www.gmbinder.com/share/-MEWbwuL-HVr282cXb8C

 Level 1
Canny Explorer
Canny: 1 expertise
Forager: Find 2x more food and water, on fail find enough for 1 person
Look-out: You don't suffer a -5 penalty to your passive Wisdom(Perception) score while traveling at a fast pace. Even when you are engaged in another activity while traveling (i.e., foraging, navigating, tracking) you remain alert to dangerous
Pathfinder: Difficult terrain doesn't slow your travel, and you have advantage on Intelligence(Nature) checks to identify Wilderness and Dungeon Hazards
Scout: You can move stealthily while traveling at a normal pace
Swift Tracker: You can track while traveling at a fast pace, and finding a trail only takes 1 minutes in confined area and 10 minutes outdoors
Guide: You can guide the travel for a group of up to six creatures. While guide by you your group can move stealthily while traveling at a normal pace and difficult terrain doesn't slow your group's trave
Favored Foe:
When you hit a creature with an attack roll, you can call on your mystical bound with nature to mark the target as your favored enemy for 1 minute
The first time on each of your turn that you hit the favored enemy and deal damage to it, including when you mark it, you can increase that damage by 1d4
You can use this feature to mark a favorite enemy a number of times equal to your proficiency bonus and you regain all expended uses when you finish a long rest.
This feature's extra damage increases when you reach certain level in this class: to 1d6 at 6th level and to 1d8 at 14th level
Level 2
Fighting Style: Two-Weapon Fighting
When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack. On your turn, you can draw or stow an additional weapon.
Foe Slayer:
You have learned to spot and exploit weaknesses in your enemy's defense

Once each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make.

You can choose to use this feature before or after the roll, but before any effects of the roll are applied.
Spellcasting
[Same as before]
Level 3
Animal Kin
At 3rd level, your bond to the animal kingdom grants you an innate understanding with beasts and they consider you kin as long as you don't threaten them.

You have advantage on your Wisdom (Animal Handling) checks, and you can speak to and understand beasts as if under the constant effect of the speak with animals spell.
Level 4
 ASI
Level 5
 Extra Attack
Level 6
Roving
At 6th level, your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed.

In addition, you can take the Dash or Disengage action as a bonus action on your turn.
Beast Master
Beast Master Magic
Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Beast Master Spells table. 
The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.

            Beast Master Spells
            Ranger Level	Spell
            3rd	find familiar
            5th	healing spirit
            9th	conjure animals
            13th	guardian of nature
            17th	insect plague
    
Primal Beast Companion

Beginning at 3rd level, you can use action action magically summon a primal beast, which draws strength from your bond with nature. 

The beast is friendly to you and your companions and obeys your commands. 

Choose its stat block — Beast of the Land, Beast of the Sea, or Beast of the Sky — which uses your proficiency bonus (PB) in several places. 



You also determine the kind of animal the beast is, choosing a kind appropriate for the stat block. Whatever kind you choose, the beast bears primal markings, indicating its mystical origin.
        
While your Companion is within 1 mile of you, you can communicate with it telepathically. 

Additionally, as an action, you can see through your companion’s eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the companion has. 

During this time, you are deaf and blind with regard to your own senses.

If your companion is within 5 feet of an enemy that they can see, you can see them as well.
Combat
In combat, the beast acts during your turn. It can move and use its reaction on its own, but the only action it takes is the Dodge action, unless you take a bonus action on your turn to command it to take another action. 

That action can be one in its stat block or some other action. Once an action is given, the companion will keep carrying that action as long as it makes sense (e.g. once given the command to attack it will continue attacking each round).

You can also sacrifice one of your attacks when you take the Attack action to command the beast to take the Attack action. 

If you are incapacitated, the beast can take any action of its choice, not just Dodge.

If the beast has died within the last hour, you can use your action to touch it and expend a spell slot of 1st level or higher. 

The beast returns to life after 1 minute with all its hit points restored.

When you finish a long rest, you can summon a different primal beast. 

The new beast appears in an unoccupied space within 5 feet of you, and you choose its stat block and appearance. 

If you already have a beast from this feature, it vanishes when the new beast appears. The beast also vanishes if you die.

Beasts of the land or the sea can be used as a mount
Mystic Bond
At 5th level:
As long as you have your companion within 100f of you, they count as a catalyst for your spell
        
Any spell that can be cast using a Bonus action or controlled by using a bonus action and that does not require a Somatic component can be done using your companion's Bonus action of the round.
At 7th level
The beast's attacks now count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.

In addition, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you.

Bestial Fury
        Starting at 11th level, when you command your beast companion to take the Attack action, the beast can make two attacks.

    Primal Beast Companion:
        Starting at 13th level, you can Now Call Medium size Beast of the Sky that can be used as a mount.

    Superior Beast Defense
        At 15th level, whenever an attacker that your companion can see hits it with an attack, it can use its reaction to halve the attack’s damage against it.
        In addition, when the beast is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.
[Context: Notes: pjs/items/Carquois aux Mille Ruses.md]
[Timestamp: 2026/07/02 18:52:32]

**ai**: 
<think>The user wants me to create a character sheet for Polyphème based on the GM Binder link (which appears to be a custom Ranger subclass - Beast Master) and the level-up information provided earlier. Let me organize all the information I have about Polyphème/Laurent.

From the level 8 update:
- Laurent/Polyphème got an ASI and Land's Stride (which matches "Roving" at level 6 - increased walking speed, climbing/swimming speed, Dash/Disengage as bonus action)

Wait, actually "Land's Stride" was mentioned but looking at the class, level 6 gives "Roving" which has similar features. Let me just use what was given.
I'll build out the character sheet with the Ranger class features at each level, leaving blanks for details like ability scores and specific spells that weren't provided.</think>Voici la fiche de Polyphème :

---

**`pjs/polypheme.md`**
```markdown
# Polyphème

## Identité
- **Race:**
- **Classe:** Rôdeur — Maître des Bêtes *(Beast Master)*
- **Niveau:** 8
- **Background:**

---

## Statistiques de Combat
- **PV Max:**
- **CA:**
- **Initiative:**
- **Vitesse:** Base + 1,5m (Errance) / Escalade : égale à la marche / Nage : égale à la marche
- **Dés de vie:**

---

## Caractéristiques

| Caractéristique | Score | Modificateur |
| --- | --- | --- |
| Force (STR) |  | +0 |
| Dextérité (DEX) |  | +0 |
| Constitution (CON) |  | +0 |
| Intelligence (INT) |  | +0 |
| Sagesse (WIS) |  | +0 |
| Charisme (CHA) |  | +0 |

---

## Maîtrise
- **Bonus de maîtrise:** +

---

## Jets de Sauvegarde

| Caractéristique | Bonus | Maîtrise |
| --- | --- | --- |
| Force |  | ☐ |
| Dextérité |  | ☐ |
| Constitution |  | ☐ |
| Intelligence |  | ☐ |
| Sagesse |  | ☐ |
| Charisme |  | ☐ |

---

## Compétences

| Compétence | Caractéristique | Bonus | Maîtrise |
| --- | --- | --- | --- |
| Acrobaties | DEX |  | ☐ |
| Arcanes | INT |  | ☐ |
| Athlétisme | STR |  | ☐ |
| Discrétion | DEX |  | ☐ |
| Dressage | WIS |  | ☑ (avantage) |
| Escamotage | DEX |  | ☐ |
| Histoire | INT |  | ☐ |
| Intimidation | CHA |  | ☐ |
| Investigation | INT |  | ☐ |
| Médecine | WIS |  | ☐ |
| Nature | INT |  | ☐ |
| Perception | WIS |  | ☐ |
| Perspicacité | WIS |  | ☐ |
| Persuasion | CHA |  | ☐ |
| Religion | INT |  | ☐ |
| Représentation | CHA |  | ☐ |
| Supercherie | CHA |  | ☐ |
| Survie | WIS |  | ☐ |
| Tromperie | CHA |  | ☐ |

_Note : 1 expertise au choix (Explorateur Aguerri)_

---

## Langues & Maîtrises Diverses
- **Langues:**
- **Armures:**
- **Armes:**
- **Outils:**

---

## Emplacements de Sorts

| Niveau | Max | Actuels |
| --- | --- | --- |
| Niveau 1 |  |  |
| Niveau 2 |  |  |
| Niveau 3 |  |  |

### Sorts de classe (Maître des Bêtes — innés)

| Niveau de classe | Sort |
| --- | --- |
| 3 | *Familier* *(Find Familiar)* |
| 5 | *Esprit guérisseur* *(Healing Spirit)* |
| 9 | *Invoquer des animaux* *(Conjure Animals)* |

### Sorts Connus

#### Niveau 1
-
-
-
-

#### Niveau 2
-
-

#### Niveau 3
-
-

---

## Capacités de Classe

### Explorateur Aguerri *(Canny Explorer)*
- **1 expertise** au choix
- **Fourrageur :** Trouve 2× plus de nourriture/eau ; en cas d'échec, trouve au moins pour 1 personne
- **Guetteur :** Pas de malus de -5 à la Perception passive en déplacement rapide, même en activité secondaire
- **Éclaireur :** Se déplace furtivement à allure normale
- **Pisteur Rapide :** Piste à allure rapide ; repérer une piste prend 1 min en zone fermée, 10 min en extérieur
- **Trailblazer :** Terrain difficile ne ralentit pas le déplacement ; avantage sur Nature pour identifier les dangers
- **Guide :** Peut guider un groupe de 6 créatures : déplacement furtif à allure normale, terrain difficile ignoré

---

### Ennemi Favori *(Favored Foe)*
- Marquer une cible après l'avoir touchée (1 minute)
- 1 fois par tour sur la cible marquée : **+1d6 dégâts** supplémentaires
- Utilisations : **Bonus de maîtrise** / repos long
- Progression : 1d4 (niv.1) → **1d6 (niv.6)** → 1d8 (niv.14)

---

### Style de Combat : Combat à Deux Armes
- Ajoute le modificateur de caractéristique aux dégâts de la deuxième attaque
- Peut dégainer ou ranger une arme supplémentaire par tour

---

### Tueur d'Ennemis *(Foe Slayer)*
- 1 fois par tour : ajoute le modificateur de **SAG** au jet d'attaque **ou** aux dégâts
- Peut être décidé avant ou après le jet, mais avant application des effets

---

### Kin Animal *(Animal Kin)*
- Avantage sur les jets de **Dressage**
- Parle et comprend les bêtes comme sous l'effet de *Parler aux animaux* (permanent)

---

### Attaque Supplémentaire
- Peut attaquer **deux fois** lors de l'action Attaquer

---

### Errance *(Roving)*
- Vitesse de marche **+1,5m**
- Vitesse d'escalade et de nage = vitesse de marche
- Peut utiliser **Foncer** ou **Se désengager** en action bonus

---

### Foulée des Terres *(Land's Stride)*
- *(Détails à compléter)*

---

### Compagnon Bestial Primaire *(Primal Beast Companion)*

#### Règles générales
- Invoqué par une action
- Amical, obéit aux ordres
- Stat block au choix : **Bête de Terre**, **Bête de Mer**, ou **Bête des Cieux**
- Communication télépathique jusqu'à 300m
- Action : voir/entendre par ses sens jusqu'au début de votre prochain tour (sourd/aveugle pendant ce temps)
- Si un ennemi est à 1,5m du compagnon et visible par lui, vous le voyez également

#### Combat
- Agit pendant votre tour
- Par défaut : action **Esquiver**
- Action bonus pour lui ordonner une autre action (maintenue tant que pertinente)
- Vous pouvez sacrifier une de vos attaques pour lui donner l'action **Attaquer**
- Si vous êtes incapacité : le compagnon agit librement

#### Résurrection
- Dans l'heure suivant sa mort : dépenser un emplacement de sort niv.1+ et le toucher → revient à la vie après 1 minute avec tous ses PV

#### Changement de compagnon
- Au repos long : peut invoquer une nouvelle bête (l'ancienne disparaît)

---

### Lien Mystique *(Mystic Bond)*

#### Niveau 5
- Le compagnon (dans un rayon de 30m) sert de **catalyseur de sort**
- Les sorts lancés en action bonus sans composante gestuelle peuvent être déclenchés via l'**action bonus du compagnon**

#### Niveau 7
- Les attaques du compagnon comptent comme **magiques**
- Les sorts ciblant uniquement vous affectent aussi le compagnon s'il est à **9m ou moins**

---

## Équipement & Magie

### Objets avec Attunement (X/3)
-

### Objets sans Attunement
-

### Armes & Armures
-

### Potions
-

---

## Compagnon Bestial

- **Type de bête :**
- **Stat block :**
- **Nom :**
- **PV :**
- **CA :**
- **Vitesse :**
- **Attaques :**
- **Capacités spéciales :**

---

## Bénédictions & Effets Actifs
-

---

## Notes
_Espace pour ajouter des notes sur le personnage..._
```

---

Points notés :
- La section **Compagnon Bestial** est en bas pour le garder accessible en jeu
- Le **Lien Mystique** est séparé par palier (niv.5 / niv.7) pour plus de clarté
- **Land's Stride** est marqué à compléter car il n'était pas dans le doc fourni
- Les sorts du Maître des Bêtes sont listés séparément des sorts connus car ils ne comptent pas dans le quota
[Timestamp: 2026/07/02 18:53:30]