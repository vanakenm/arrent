---
archivist: true
entity_type: monster
slug: imp
name: Imp
compendium: SRD
---

```monster
name: Imp
size: Tiny
type: Fiend
subtype: devil
alignment: lawful evil
ac:
  - ac: 13
hp:
  average: 10
  formula: 3d4+3
speed:
  walk: 20
  fly: 40
abilities:
  str: 6
  dex: 17
  con: 13
  int: 11
  wis: 12
  cha: 14
skills:
  deception: 4
  insight: 3
  persuasion: 4
  stealth: 5
senses:
  - darkvision 120 ft.
passive_perception: 11
languages:
  - Infernal
  - Common
damage_resistances:
  - cold; bludgeoning
  - piercing
  - and slashing from nonmagical/nonsilver weapons
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
cr: '1'
traits:
  - name: Shapechanger
    entries:
      - The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the imp's darkvision.
  - name: Magic Resistance
    entries:
      - The imp has advantage on saving throws against spells and other magical effects.
  - name: 'Variant: Familiar'
    entries:
      - The imp can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the imp senses as long as they are within 1 mile of each other. While the imp is within 10 feet of its master, the master shares the imp's Magic Resistance trait. At any time and for any reason, the imp can end its service as a familiar, ending the telepathic bond.
actions:
  - name: Sting (Bite in Beast Form)
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d4+DEX` piercing damage, and the target must make on a `dc:CON` Constitution saving throw, taking `damage:3d6` poison damage on a failed save, or half as much damage on a successful one.'
  - name: Invisibility
    entries:
      - The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it.
```
