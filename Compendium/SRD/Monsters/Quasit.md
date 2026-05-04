---
archivist: true
entity_type: monster
slug: quasit
name: Quasit
compendium: SRD
---

```monster
name: Quasit
size: Tiny
type: Fiend
subtype: demon
alignment: chaotic evil
ac:
  - ac: 13
hp:
  average: 7
  formula: 3d4
speed:
  walk: 40
abilities:
  str: 5
  dex: 17
  con: 10
  int: 7
  wis: 10
  cha: 10
skills:
  stealth: 5
senses:
  - darkvision 120 ft.
passive_perception: 10
languages:
  - Abyssal
  - Common
damage_resistances:
  - cold
  - fire
  - lightning; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - poison
condition_immunities:
  - poisoned
cr: '1'
traits:
  - name: Shapechanger
    entries:
      - The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Magic Resistance
    entries:
      - The quasit has advantage on saving throws against spells and other magical effects.
  - name: 'Variant: Familiar'
    entries:
      - The quasit can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the quasit is within 10 feet of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the quasit can end its service as a familiar, ending the telepathic bond.
actions:
  - name: Claw (Bite in Beast Form)
    entries:
      - 'Melee Weapon Attack: `atk:+4`, reach 5 ft., one target. Hit: `damage:1d4+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or take `damage:2d4` poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
  - name: Scare (1/day)
    entries:
      - One creature of the quasit's choice within 20 ft. of it must succeed on a `dc:WIS` Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success.
  - name: Invisibility
    entries:
      - The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it.
```
