---
archivist: true
entity_type: monster
slug: efreeti
name: Efreeti
compendium: SRD
---

```monster
name: Efreeti
size: Large
type: Elemental
alignment: lawful evil
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
saves:
  int: 7
  wis: 6
  cha: 7
senses:
  - darkvision 120 ft.
passive_perception: 12
languages:
  - Ignan
damage_immunities:
  - fire
cr: '11'
traits:
  - name: Elemental Demise
    entries:
      - If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the djinni was wearing or carrying.
  - name: Innate Spellcasting
    entries:
      - |-
        The efreeti's innate spell casting ability is Charisma (spell save `dc:INT`, `atk:INT` with spell attacks). It can innately cast the following spells, requiring no material components:

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
actions:
  - name: Multiattack
    entries:
      - The efreeti makes two scimitar attacks or uses its Hurl Flame twice.
  - name: Scimitar
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage plus `damage:2d6` fire damage.'
  - name: Hurl Flame
    entries:
      - 'Ranged Spell Attack: `atk:INT`, range 120 ft., one target. Hit: `damage:5d6` fire damage.'
```
