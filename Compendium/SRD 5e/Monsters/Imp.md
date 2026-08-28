---
archivist: true
entity_type: monster
slug: srd-5e_monster_imp
name: Imp
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.002Z'
---

```monster
slug: srd-5e_monster_imp
name: Imp
edition: '2014'
source: SRD 5.1
size: tiny
type: fiend
ac:
  - ac: 13
hp:
  average: 10
  formula: 3d4+3
speed:
  walk: 20
  fly: 40
abilities:
  str: 6
  dex: 17
  con: 13
  int: 11
  wis: 12
  cha: 14
senses:
  - darkvision 120 ft.
languages:
  - Infernal
  - Common
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - cold
  - piercing
  - slashing
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Sting
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d4+DEX` piercing damage, and the target must make on a `dc:CON` Constitution saving throw, taking `dmg:3d6` poison damage on a failed save, or half as much damage on a successful one.'
    attacks:
      - name: Sting attack
        type: melee
        bonus: 5
        damage_type: thunder
        range:
          reach: 5
  - name: Invisibility
    entries:
      - The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it.
reactions: []
legendary_actions: []
traits:
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the imp's darkvision.
  - name: Magic Resistance
    entries:
      - The imp has advantage on saving throws against spells and other magical effects.
  - name: Shapechanger
    entries:
      - The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: 'Variant: Familiar'
    entries:
      - The imp can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the imp senses as long as they are within 1 mile of each other. While the imp is within 10 feet of its master, the master shares the imp's Magic Resistance trait. At any time and for any reason, the imp can end its service as a familiar, ending the telepathic bond.
cr: '1'
skills:
  deception: 4
  insight: 3
  persuasion: 4
  stealth: 5
subtype: Devils
alignment: lawful evil
passive_perception: 11
```
