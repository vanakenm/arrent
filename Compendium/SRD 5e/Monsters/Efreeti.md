---
archivist: true
entity_type: monster
slug: srd-5e_monster_efreeti
name: Efreeti
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.990Z'
---

```monster
slug: srd-5e_monster_efreeti
name: Efreeti
edition: '2014'
source: SRD 5.1
size: large
type: elemental
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 200
  formula: 16d10+112
speed:
  walk: 40
  fly: 60
abilities:
  str: 22
  dex: 12
  con: 24
  int: 16
  wis: 15
  cha: 16
senses:
  - darkvision 120 ft.
languages:
  - Ignan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The efreeti makes two scimitar attacks or uses its Hurl Flame twice.
  - name: Scimitar
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage plus `dmg:2d6` fire damage.'
    attacks:
      - name: Scimitar attack
        type: melee
        bonus: 10
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Hurl Flame
    entries:
      - 'Ranged Spell Attack: `atk:+7`, range 120 ft., one target. Hit: `dmg:5d6` fire damage.'
    attacks:
      - name: Hurl Flame attack
        type: ranged
        bonus: 7
        damage_type: thunder
        range:
          normal: 120
reactions: []
legendary_actions: []
traits:
  - name: Elemental Demise
    entries:
      - If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the djinni was wearing or carrying.
  - name: Innate Spellcasting
    entries:
      - |-
        The efreeti's innate spell casting ability is Charisma (spell save `dc:INT`, `atk:+7` with spell attacks). It can innately cast the following spells, requiring no material components:

        At will: detect magic
        3/day each: enlarge/reduce, tongues
        1/day each: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire
  - name: 'Variant: Genie Powers'
    entries:
      - |-
        Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.

        **Disguises.** Some genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.
        **Wishes.** The genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.
        To be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit.
cr: '11'
saves:
  int: 7
  wis: 6
  cha: 7
subtype: Genies
alignment: lawful evil
passive_perception: 12
```
