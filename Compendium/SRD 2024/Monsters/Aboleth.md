---
archivist: true
entity_type: monster
slug: srd-2024_monster_aboleth
name: Aboleth
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.401Z'
---

```monster
slug: srd-2024_monster_aboleth
name: Aboleth
edition: '2024'
source: SRD 5.2
size: large
type: aberration
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 150
  formula: 20d10 + 40
speed:
  walk: 10
  swim: 40
abilities:
  str: 21
  dex: 9
  con: 15
  int: 18
  wis: 15
  cha: 18
senses:
  - darkvision 120 ft.
languages:
  - Deep Speech; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The aboleth makes two Tentacle attacks and uses either Consume Memories or Dominate Mind if available.
  - name: Tentacle
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:2d6+STR` Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:CON`) from one of four tentacles.'
    attacks:
      - name: Tentacle attack
        type: melee
        bonus: 9
        damage: 2d6+5
        damage_type: bludgeoning
        range:
          reach: 15
  - name: Consume Memories
    entries:
      - 'Intelligence Saving Throw: `dc:INT`, one creature within 30 feet that is Charmed or Grappled by the aboleth. Failure: `dmg:3d6` Psychic damage. Success: Half damage. Failure or Success: The aboleth gains the target''s memories if the target is a Humanoid and is reduced to 0 Hit Points by this action.'
  - name: Dominate Mind
    entries:
      - 'Wisdom Saving Throw: `dc:16`, one creature the aboleth can see within 30 feet. Failure: The target has the Charmed condition until the aboleth dies or is on a different plane of existence from the target. While Charmed, the target acts as an ally to the aboleth and is under its control while within 60 feet of it. In addition, the aboleth and the target can communicate telepathically with each other over any distance. The target repeats the save whenever it takes damage as well as after every 24 hours it spends at least 1 mile away from the aboleth, ending the effect on itself on a success.'
    recharge:
      type: per_day
      param: 2
reactions: []
legendary_actions:
  - name: Lash
    entries:
      - The aboleth makes one Tentacle attack.
  - name: Psychic Drain
    entries:
      - If the aboleth has at least one creature Charmed or Grappled, it uses Consume Memories and regains 5 (`dice:1d10`) Hit Points.
traits:
  - name: Amphibious
    entries:
      - The aboleth can breathe air and water.
  - name: Eldritch Restoration
    entries:
      - If destroyed, the aboleth gains a new body in `dice:5d10` days, reviving with all its Hit Points in the Far Realm or another location chosen by the DM.
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the aboleth fails a saving throw, it can choose to succeed instead.
  - name: Mucus Cloud
    entries:
      - 'While underwater, the aboleth is surrounded by mucus. Constitution Saving Throw: `dc:CON`, each creature in a 5-foot Emanation originating from the aboleth at the end of the aboleth''s turn. Failure: The target is cursed. Until the curse ends, the target''s skin becomes slimy, the target can breathe air and water, and it can''t regain Hit Points unless it is underwater. While the cursed creature is outside a body of water, the creature takes `dmg:1d12` Acid damage at the end of every 10 minutes unless moisture is applied to its skin before those minutes have passed.'
  - name: Probing Telepathy
    entries:
      - If a creature the aboleth can see communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires.
cr: '10'
saves:
  str: 5
  dex: 3
  con: 6
  int: 8
  wis: 6
  cha: 4
skills:
  history: 12
  perception: 10
alignment: lawful evil
passive_perception: 20
legendary_resistance: 3
```
