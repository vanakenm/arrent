---
archivist: true
entity_type: monster
slug: srd-2024_monster_kraken
name: Kraken
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.432Z'
---

```monster
slug: srd-2024_monster_kraken
name: Kraken
edition: '2024'
source: SRD 5.2
size: gargantuan
type: monstrosity
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 481
  formula: 26d20 + 208
speed:
  walk: 30
  swim: 120
abilities:
  str: 30
  dex: 11
  con: 26
  int: 22
  wis: 18
  cha: 20
senses:
  - truesight 120 ft.
languages:
  - Understands Abyssal
  - Celestial
  - Infernal
  - And Primordial but can't speak; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
  - lightning
condition_immunities:
  - frightened
  - grappled
  - paralyzed
  - restrained
actions:
  - name: Multiattack
    entries:
      - The kraken makes two Tentacle attacks and uses Fling, Lightning Strike, or Swallow.
  - name: Tentacle
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 30 ft. `dmg:4d6+STR` Bludgeoning damage. The target has the Grappled condition (escape `dc:CHA`) from one of ten tentacles, and it has the Restrained condition until the grapple ends.'
    attacks:
      - name: Tentacle attack
        type: melee
        bonus: 17
        damage: 4d6+10
        damage_type: bludgeoning
        range:
          reach: 30
  - name: Fling
    entries:
      - 'The kraken throws a Large or smaller creature Grappled by it to a space it can see within 60 feet of itself that isn''t in the air. Dexterity Saving Throw: `dc:25`, the creature thrown and each creature in the destination space. Failure: `dmg:4d8` Bludgeoning damage, and the target has the Prone condition. Success: Half damage only.'
  - name: Lightning Strike
    entries:
      - 'Dexterity Saving Throw: `dc:23`, one creature the kraken can see within 120 feet. Failure: `dmg:6d10` Lightning damage. Success: Half damage.'
  - name: Swallow
    entries:
      - 'Dexterity Saving Throw: `dc:25`, one creature Grappled by the kraken (it can have up to four creatures swallowed at a time). Failure: `dmg:3d8+STR` Piercing damage. If the target is Large or smaller, it is swallowed and no longer Grappled. A swallowed creature has the Restrained condition, has Cover|XPHB|Total Cover against attacks and other effects outside the kraken, and takes `dmg:7d6` Acid damage at the start of each of its turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a `dc:25` Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 10 feet of the kraken with the Prone condition. If the kraken dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse using 15 feet of movement, exiting Prone.'
reactions: []
legendary_actions:
  - name: Storm Bolt
    entries:
      - The kraken uses Lightning Strike.
  - name: Toxic Ink
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 15-foot Emanation originating from the kraken while it is underwater. Failure: The target has the Blinded and Poisoned conditions until the end of the kraken''s next turn. The kraken then moves up to its Speed. Failure or Success: The kraken can''t take this action again until the start of its next turn.'
traits:
  - name: Amphibious
    entries:
      - The kraken can breathe air and water.
  - name: Legendary Resistance (4/Day, or 5/Day in Lair)
    entries:
      - If the kraken fails a saving throw, it can choose to succeed instead.
  - name: Siege Monster
    entries:
      - The kraken deals double damage to objects and structures.
cr: '23'
saves:
  str: 17
  dex: 7
  con: 15
  int: 6
  wis: 11
  cha: 5
skills:
  history: 13
  perception: 11
alignment: chaotic evil
passive_perception: 21
legendary_resistance: 4
```
