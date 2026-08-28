---
archivist: true
entity_type: monster
slug: srd-5e_monster_gynosphinx
name: Gynosphinx
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.000Z'
---

```monster
slug: srd-5e_monster_gynosphinx
name: Gynosphinx
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
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
senses:
  - truesight 120 ft.
languages:
  - Common
  - Sphinx
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
damage_immunities:
  - psychic
condition_immunities:
  - charmed
  - frightened
actions:
  - name: Multiattack
    entries:
      - The sphinx makes two claw attacks.
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 8
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions:
  - name: Claw Attack
    entries:
      - The sphinx makes one claw attack.
  - name: Teleport
    entries:
      - The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.
  - name: Cast a Spell
    entries:
      - The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.
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
        The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save `dc:INT`, `atk:+8` with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared:

        * Cantrips (at will): mage hand, minor illusion, prestidigitation
        * 1st level (4 slots): detect magic, identify, shield
        * 2nd level (3 slots): darkness, locate object, suggestion
        * 3rd level (3 slots): dispel magic, remove curse, tongues
        * 4th level (3 slots): banishment, greater invisibility
        * 5th level (1 slot): legend lore
cr: '11'
skills:
  arcana: 12
  history: 12
  perception: 8
  religion: 8
subtype: Sphinxes
alignment: lawful neutral
passive_perception: 18
```
