---
archivist: true
entity_type: monster
slug: srd-5e_monster_kraken
name: Kraken
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.003Z'
---

```monster
slug: srd-5e_monster_kraken
name: Kraken
edition: '2014'
source: SRD 5.1
size: gargantuan
type: monstrosity
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 472
  formula: 27d20+189
speed:
  walk: 20
  swim: 60
abilities:
  str: 30
  dex: 11
  con: 25
  int: 22
  wis: 18
  cha: 20
senses:
  - truesight 120 ft.
languages:
  - understands Abyssal
  - Celestial
  - Infernal
  - and Primordial but can't speak
  - telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - bludgeoning
  - lightning
  - piercing
  - slashing
condition_immunities:
  - frightened
  - paralyzed
actions:
  - name: Multiattack
    entries:
      - The kraken makes three tentacle attacks, each of which it can replace with one use of Fling.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:+7`, reach 5 ft., one target. Hit: `dmg:3d8+STR` piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes `dmg:12d6` acid damage at the start of each of the kraken''s turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a `dc:25` Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 3d8
        damage_type: thunder
        range:
          reach: 5
  - name: Tentacle
    entries:
      - 'Melee Weapon Attack: `atk:+7`, reach 30 ft., one target. Hit: `dmg:3d6+STR` bludgeoning damage, and the target is grappled (escape `dc:18`). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target.'
    attacks:
      - name: Tentacle attack
        type: melee
        bonus: 7
        damage_type: thunder
        range:
          reach: 30
  - name: Fling
    entries:
      - One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes `dmg:1d6` bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a `dc:18` Dexterity saving throw or take the same damage and be knocked prone.
  - name: Lightning Storm
    entries:
      - The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a `dc:23` Dexterity saving throw, taking `dmg:4d10` lightning damage on a failed save, or half as much damage on a successful one.
reactions: []
legendary_actions:
  - name: Tentacle Attack or Fling
    entries:
      - The kraken makes one tentacle attack or uses its Fling.
  - name: Lightning Storm
    entries:
      - The kraken uses Lightning Storm.
  - name: Ink Cloud
    entries:
      - While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a `dc:23` Constitution saving throw, taking `dmg:3d10` poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn.
traits:
  - name: Amphibious
    entries:
      - The kraken can breathe air and water.
  - name: Freedom of Movement
    entries:
      - The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled.
  - name: Siege Monster
    entries:
      - The kraken deals double damage to objects and structures.
cr: '23'
saves:
  str: 17
  dex: 7
  con: 14
  int: 13
  wis: 11
alignment: chaotic evil
passive_perception: 14
```
