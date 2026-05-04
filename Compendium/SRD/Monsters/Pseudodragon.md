---
archivist: true
entity_type: monster
slug: pseudodragon
name: Pseudodragon
compendium: SRD
---

```monster
name: Pseudodragon
size: Tiny
type: Dragon
alignment: neutral good
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 7
  formula: 2d4+2
speed:
  walk: 15
  fly: 60
abilities:
  str: 6
  dex: 15
  con: 13
  int: 10
  wis: 12
  cha: 10
skills:
  perception: 3
  stealth: 4
senses:
  - blindsight 10 ft.
  - darkvision 60 ft.
passive_perception: 13
languages:
  - understands Common and Draconic but can't speak
cr: 1/4
traits:
  - name: Keen Senses
    entries:
      - The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell.
  - name: Magic Resistance
    entries:
      - The pseudodragon has advantage on saving throws against spells and other magical effects.
  - name: Limited Telepathy
    entries:
      - The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 ft. of it that can understand a language.
  - name: 'Variant: Familiar'
    entries:
      - The pseudodragon can serve another creature as a familiar, forming a magic, telepathic bond with that willing companion. While the two are bonded, the companion can sense what the pseudodragon senses as long as they are within 1 mile of each other. While the pseudodragon is within 10 feet of its companion, the companion shares the pseudodragon's Magic Resistance trait. At any time and for any reason, the pseudodragon can end its service as a familiar, ending the telepathic bond.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d4+DEX` piercing damage.'
  - name: Sting
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:1d4+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake.'
```
