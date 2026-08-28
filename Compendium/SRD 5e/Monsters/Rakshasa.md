---
archivist: true
entity_type: monster
slug: srd-5e_monster_rakshasa
name: Rakshasa
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.012Z'
---

```monster
slug: srd-5e_monster_rakshasa
name: Rakshasa
edition: '2014'
source: SRD 5.1
size: medium
type: fiend
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 110
  formula: 13d8+52
speed:
  walk: 40
abilities:
  str: 14
  dex: 17
  con: 18
  int: 13
  wis: 16
  cha: 20
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Infernal
damage_vulnerabilities:
  - piercing
damage_resistances: []
damage_immunities:
  - bludgeoning
  - piercing
  - slashing
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The rakshasa makes two claw attacks
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target''s thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Innate Spellcasting
    entries:
      - |-
        The rakshasa's innate spellcasting ability is Charisma (spell save `dc:CHA`, `atk:+10` with spell attacks). The rakshasa can innately cast the following spells, requiring no material components:

        At will: detect thoughts, disguise self, mage hand, minor illusion
        3/day each: charm person, detect magic, invisibility, major image, suggestion
        1/day each: dominate person, fly, plane shift, true seeing
  - name: Limited Magic Immunity
    entries:
      - The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects.
cr: '13'
skills:
  deception: 10
  insight: 8
alignment: lawful evil
passive_perception: 13
```
