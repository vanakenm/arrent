---
archivist: true
entity_type: monster
slug: gibbering-mouther
name: Gibbering Mouther
compendium: SRD
---

```monster
name: Gibbering Mouther
size: Medium
type: Aberration
alignment: neutral
ac:
  - ac: 9
hp:
  average: 67
  formula: 9d8+27
speed:
  walk: 10
  swim: 10
abilities:
  str: 10
  dex: 8
  con: 16
  int: 3
  wis: 10
  cha: 6
senses:
  - darkvision 60 ft.
passive_perception: 10
condition_immunities:
  - prone
cr: '2'
traits:
  - name: Aberrant Ground
    entries:
      - The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a `dc:STR` Strength saving throw or have its speed reduced to 0 until the start of its next turn.
  - name: Gibbering
    entries:
      - The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a `dc:WIS` Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack.
actions:
  - name: Multiattack
    entries:
      - The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle.
  - name: Bites
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:5d6` piercing damage. If the target is Medium or smaller, it must succeed on a `dc:STR` Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther.'
  - name: Blinding Spittle (Recharge 5-6)
    entries:
      - The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a `dc:13` Dexterity saving throw or be blinded until the end of the mouther's next turn.
```
