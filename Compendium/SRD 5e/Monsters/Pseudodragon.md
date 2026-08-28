---
archivist: true
entity_type: monster
slug: srd-5e_monster_pseudodragon
name: Pseudodragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.011Z'
---

```monster
slug: srd-5e_monster_pseudodragon
name: Pseudodragon
edition: '2014'
source: SRD 5.1
size: tiny
type: dragon
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
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - understands Common and Draconic but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d4+DEX` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
  - name: Sting
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:1d4+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake.'
    attacks:
      - name: Sting attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Senses
    entries:
      - The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell.
  - name: Limited Telepathy
    entries:
      - The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 ft. of it that can understand a language.
  - name: Magic Resistance
    entries:
      - The pseudodragon has advantage on saving throws against spells and other magical effects.
  - name: 'Variant: Familiar'
    entries:
      - The pseudodragon can serve another creature as a familiar, forming a magic, telepathic bond with that willing companion. While the two are bonded, the companion can sense what the pseudodragon senses as long as they are within 1 mile of each other. While the pseudodragon is within 10 feet of its companion, the companion shares the pseudodragon's Magic Resistance trait. At any time and for any reason, the pseudodragon can end its service as a familiar, ending the telepathic bond.
cr: '0.25'
skills:
  perception: 3
  stealth: 4
alignment: neutral good
passive_perception: 13
```
