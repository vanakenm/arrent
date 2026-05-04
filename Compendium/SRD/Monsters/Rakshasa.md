---
archivist: true
entity_type: monster
slug: rakshasa
name: Rakshasa
compendium: SRD
---

```monster
name: Rakshasa
size: Medium
type: Fiend
alignment: lawful evil
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
skills:
  deception: 10
  insight: 8
senses:
  - darkvision 60 ft.
passive_perception: 13
languages:
  - Common
  - Infernal
damage_vulnerabilities:
  - piercing from magic weapons wielded by good creatures
damage_immunities:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks
cr: '13'
traits:
  - name: Limited Magic Immunity
    entries:
      - The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects.
  - name: Innate Spellcasting
    entries:
      - |-
        The rakshasa's innate spellcasting ability is Charisma (spell save `dc:CHA`, `atk:CHA` with spell attacks). The rakshasa can innately cast the following spells, requiring no material components:

        At will: detect thoughts, disguise self, mage hand, minor illusion
        3/day each: charm person, detect magic, invisibility, major image, suggestion
        1/day each: dominate person, fly, plane shift, true seeing
actions:
  - name: Multiattack
    entries:
      - The rakshasa makes two claw attacks
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target''s thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic.'
```
