---
archivist: true
entity_type: monster
slug: srd-5e_monster_androsphinx
name: Androsphinx
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.977Z'
---

```monster
slug: srd-5e_monster_androsphinx
name: Androsphinx
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
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
senses:
  - truesight 120 ft.
languages:
  - Common
  - Sphinx
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - bludgeoning
  - piercing
  - psychic
  - slashing
condition_immunities:
  - charmed
  - frightened
actions:
  - name: Multiattack
    entries:
      - The sphinx makes two claw attacks.
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d10+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 12
        damage: 2d10
        damage_type: thunder
        range:
          reach: 5
  - name: Roar
    entries:
      - |-
        The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.
        **First Roar.** Each creature that fails a `dc:WIS` Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
        **Second Roar.** Each creature that fails a `dc:WIS` Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
        **Third Roar.** Each creature makes a `dc:18` Constitution saving throw. On a failed save, a creature takes `dmg:8d10` thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone.
    recharge:
      type: per_day
      param: 3
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
        The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save `dc:WIS`, `atk:+10` with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared:

        * Cantrips (at will): sacred flame, spare the dying, thaumaturgy
        * 1st level (4 slots): command, detect evil and good, detect magic
        * 2nd level (3 slots): lesser restoration, zone of truth
        * 3rd level (3 slots): dispel magic, tongues
        * 4th level (3 slots): banishment, freedom of movement
        * 5th level (2 slots): flame strike, greater restoration
        * 6th level (1 slot): heroes' feast
cr: '17'
saves:
  dex: 6
  con: 11
  int: 9
  wis: 10
skills:
  arcana: 9
  perception: 10
  religion: 15
subtype: Sphinxes
alignment: lawful neutral
passive_perception: 20
```
