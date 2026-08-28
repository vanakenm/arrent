---
archivist: true
entity_type: monster
slug: srd-5e_monster_shield-guardian
name: Shield Guardian
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.016Z'
---

```monster
slug: srd-5e_monster_shield-guardian
name: Shield Guardian
edition: '2014'
source: SRD 5.1
size: large
type: construct
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 142
  formula: 15d10+60
speed:
  walk: 30
abilities:
  str: 18
  dex: 8
  con: 18
  int: 7
  wis: 10
  cha: 3
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - understands commands given in any language but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - paralyzed
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The guardian makes two fist attacks.
  - name: Fist
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage.'
    attacks:
      - name: Fist attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions:
  - name: Shield
    entries:
      - When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer.
legendary_actions: []
traits:
  - name: Bound
    entries:
      - The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian.
  - name: Regeneration
    entries:
      - The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit. point.
  - name: Spell Storing
    entries:
      - A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost.
cr: '7'
alignment: unaligned
passive_perception: 10
```
