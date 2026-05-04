---
archivist: true
entity_type: monster
slug: gynosphinx
name: Gynosphinx
compendium: SRD
---

```monster
name: Gynosphinx
size: Large
type: Monstrosity
alignment: lawful neutral
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 136
  formula: 16d10+48
speed:
  walk: 40
  fly: 60
abilities:
  str: 18
  dex: 15
  con: 16
  int: 18
  wis: 18
  cha: 18
skills:
  arcana: 12
  history: 12
  perception: 8
  religion: 8
senses:
  - truesight 120 ft.
passive_perception: 18
languages:
  - Common
  - Sphinx
damage_resistances:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - psychic
condition_immunities:
  - charmed
  - frightened
cr: '11'
traits:
  - name: Inscrutable
    entries:
      - The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage.
  - name: Magic Weapons
    entries:
      - The sphinx's weapon attacks are magical.
  - name: Spellcasting
    entries:
      - |-
        The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save `dc:INT`, `atk:INT` with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared:

        * Cantrips (at will): mage hand, minor illusion, prestidigitation
        * 1st level (4 slots): detect magic, identify, shield
        * 2nd level (3 slots): darkness, locate object, suggestion
        * 3rd level (3 slots): dispel magic, remove curse, tongues
        * 4th level (3 slots): banishment, greater invisibility
        * 5th level (1 slot): legend lore
actions:
  - name: Multiattack
    entries:
      - The sphinx makes two claw attacks.
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` slashing damage.'
legendary:
  - name: Claw Attack
    entries:
      - The sphinx makes one claw attack.
  - name: Teleport (Costs 2 Actions)
    entries:
      - The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.
  - name: Cast a Spell (Costs 3 Actions)
    entries:
      - The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.
legendary_actions: 3
```
