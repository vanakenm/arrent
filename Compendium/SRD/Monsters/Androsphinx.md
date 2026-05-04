---
archivist: true
entity_type: monster
slug: androsphinx
name: Androsphinx
compendium: SRD
---

```monster
name: Androsphinx
size: Large
type: Monstrosity
alignment: lawful neutral
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 199
  formula: 19d10+95
speed:
  walk: 40
  fly: 60
abilities:
  str: 22
  dex: 10
  con: 20
  int: 16
  wis: 18
  cha: 23
saves:
  dex: 6
  con: 11
  int: 9
  wis: 10
skills:
  arcana: 9
  perception: 10
  religion: 15
senses:
  - truesight 120 ft.
passive_perception: 20
languages:
  - Common
  - Sphinx
damage_immunities:
  - psychic; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
condition_immunities:
  - charmed
  - frightened
cr: '17'
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
        The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save `dc:WIS`, `atk:WIS` with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared:

        * Cantrips (at will): sacred flame, spare the dying, thaumaturgy
        * 1st level (4 slots): command, detect evil and good, detect magic
        * 2nd level (3 slots): lesser restoration, zone of truth
        * 3rd level (3 slots): dispel magic, tongues
        * 4th level (3 slots): banishment, freedom of movement
        * 5th level (2 slots): flame strike, greater restoration
        * 6th level (1 slot): heroes' feast
actions:
  - name: Multiattack
    entries:
      - The sphinx makes two claw attacks.
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d10+STR` slashing damage.'
  - name: Roar (3/Day)
    entries:
      - |-
        The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.
        **First Roar.** Each creature that fails a `dc:WIS` Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
        **Second Roar.** Each creature that fails a `dc:WIS` Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
        **Third Roar.** Each creature makes a `dc:18` Constitution saving throw. On a failed save, a creature takes `damage:8d10` thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone.
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
