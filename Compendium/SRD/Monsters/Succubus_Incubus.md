---
archivist: true
entity_type: monster
slug: succubusincubus
name: Succubus/Incubus
compendium: SRD
---

```monster
name: Succubus/Incubus
size: Medium
type: Fiend
subtype: shapechanger
alignment: neutral evil
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 66
  formula: 12d8+12
speed:
  walk: 30
  fly: 60
abilities:
  str: 8
  dex: 17
  con: 13
  int: 15
  wis: 12
  cha: 20
skills:
  deception: 9
  insight: 5
  perception: 5
  persuasion: 9
  stealth: 7
senses:
  - darkvision 60 ft.
passive_perception: 15
languages:
  - Abyssal
  - Common
  - Infernal
  - telepathy 60 ft.
damage_resistances:
  - cold
  - fire
  - lightning
  - poison; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
cr: '4'
traits:
  - name: Telepathic Bond
    entries:
      - The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence.
  - name: Shapechanger
    entries:
      - The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
actions:
  - name: Claw (Fiend Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` slashing damage.'
  - name: Charm
    entries:
      - |-
        One humanoid the fiend can see within 30 feet of it must succeed on a `dc:15` Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.
        The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends.
  - name: Draining Kiss
    entries:
      - The fiend kisses a creature charmed by it or a willing creature. The target must make a `dc:15` Constitution saving throw against this magic, taking `damage:5d10+CHA` psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.
  - name: Etherealness
    entries:
      - The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa.
```
