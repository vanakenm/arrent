---
archivist: true
entity_type: monster
slug: srd-2024_monster_darkmantle
name: Darkmantle
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.415Z'
---

```monster
slug: srd-2024_monster_darkmantle
name: Darkmantle
edition: '2024'
source: SRD 5.2
size: small
type: aberration
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 22
  formula: 5d6 + 5
speed:
  walk: 10
  fly: 30
abilities:
  str: 16
  dex: 12
  con: 13
  int: 2
  wis: 10
  cha: 5
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Crush
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage, and the darkmantle attaches to the target. If the target is a Medium or smaller creature and the darkmantle had Advantage on the attack roll, it covers the target, which has the Blinded condition and is suffocating while the darkmantle is attached in this way. While attached to a target, the darkmantle can attack only the target but has Advantage on its attack rolls. Its Speed becomes 0, it can''t benefit from any bonus to its Speed, and it moves with the target. A creature can take an action to try to detach the darkmantle from itself, doing so with a successful `dc:STR` Strength (Athletics) check. On its turn, the darkmantle can detach itself by using 5 feet of movement.'
    attacks:
      - name: Crush attack
        type: melee
        bonus: 5
        damage: 1d6+3
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Darkness Aura
    entries:
      - Magical darkness fills a 15-foot Emanation originating from the darkmantle. This effect lasts while the darkmantle maintains Concentration on it, up to 10 minutes. Darkvision can't penetrate this area, and no light can illuminate it.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits: []
cr: '0.5'
saves:
  str: 3
  dex: 1
  con: 1
  int: -4
  wis: 0
  cha: -3
skills:
  stealth: 3
alignment: unaligned
passive_perception: 10
```
