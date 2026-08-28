---
archivist: true
entity_type: monster
slug: srd-5e_monster_succubus-incubus
name: Succubus/Incubus
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.019Z'
---

```monster
slug: srd-5e_monster_succubus-incubus
name: Succubus/Incubus
edition: '2014'
source: SRD 5.1
size: medium
type: fiend
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
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
  - Common
  - Infernal
  - telepathy 60 ft.
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - cold
  - fire
  - lightning
  - piercing
  - poison
  - slashing
damage_immunities: []
condition_immunities: []
actions:
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d6+DEX` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Charm
    entries:
      - |-
        One humanoid the fiend can see within 30 feet of it must succeed on a `dc:15` Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.
        The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends.
  - name: Draining Kiss
    entries:
      - The fiend kisses a creature charmed by it or a willing creature. The target must make a `dc:15` Constitution saving throw against this magic, taking `dmg:5d10+CHA` psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.
  - name: Etherealness
    entries:
      - The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa.
reactions: []
legendary_actions: []
traits:
  - name: Shapechanger
    entries:
      - The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Telepathic Bond
    entries:
      - The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence.
cr: '4'
skills:
  deception: 9
  insight: 5
  perception: 5
  persuasion: 9
  stealth: 7
alignment: neutral evil
passive_perception: 15
```
