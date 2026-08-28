---
archivist: true
entity_type: monster
slug: srd-5e_monster_green-hag
name: Green Hag
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.999Z'
---

```monster
slug: srd-5e_monster_green-hag
name: Green Hag
edition: '2014'
source: SRD 5.1
size: medium
type: fey
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 82
  formula: 11d8+33
speed:
  walk: 30
abilities:
  str: 18
  dex: 12
  con: 16
  int: 13
  wis: 14
  cha: 14
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Draconic
  - Sylvan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 6
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Illusory Appearance
    entries:
      - |-
        The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.
        The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a `dc:20` Intelligence (Investigation) check to discern that the hag is disguised.
  - name: Invisible Passage
    entries:
      - The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her.
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The hag can breathe air and water.
  - name: Hag Coven
    entries:
      - |-
        When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.
        A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.
  - name: Hag Eye (Coven Only)
    entries:
      - |-
        A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes `dmg:3d10` psychic damage and is blinded for 24 hours.
        A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over.
  - name: Innate Spellcasting
    entries:
      - |-
        The hag's innate spellcasting ability is Charisma (spell save `dc:CHA`). She can innately cast the following spells, requiring no material components:

        At will: dancing lights, minor illusion, vicious mockery
  - name: Mimicry
    entries:
      - The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful `dc:14` Wisdom (Insight) check.
  - name: Shared Spellcasting (Coven Only)
    entries:
      - |-
        While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:

        * 1st level (4 slots): identify, ray of sickness
        * 2nd level (3 slots): hold person, locate object
        * 3rd level (3 slots): bestow curse, counterspell, lightning bolt
        * 4th level (3 slots): phantasmal killer, polymorph
        * 5th level (2 slots): contact other plane, scrying
        * 6th level (1 slot): eye bite

        For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.
cr: '3'
skills:
  arcana: 3
  deception: 4
  perception: 4
  stealth: 3
subtype: Hags
alignment: neutral evil
passive_perception: 14
```
