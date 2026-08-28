---
archivist: true
entity_type: subclass
slug: srd-5e_subclass_oath-of-devotion
name: Oath of Devotion
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.752Z'
---

```subclass
slug: srd-5e_subclass_oath-of-devotion
name: Oath of Devotion
edition: '2014'
source: SRD 5.1
description: ''
parent_class: '[[SRD 5e/Classes/Paladin]]'
features_by_level:
  '3':
    - id: channel-divinity
      name: Channel Divinity
      description: "When you take this oath at 3rd level, you gain the following two Channel Divinity options.\r\n\r\n**Sacred Weapon.** As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.\r\n\r\nYou can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.\r\n\r\n**Turn the Unholy.** As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.\r\n\r\nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
      action: action
      resources:
        - id: cleric:channel-divinity
          name: Channel Divinity
          max_formula: '1'
          scales_at:
            - level: 6
              max: '2'
            - level: 18
              max: '3'
          reset: short-rest
    - id: oath-spells
      name: Oath Spells
      description: "You gain oath spells at the paladin levels listed.\r\n\r\n### Oath of Devotion Spells\r\n| Paladin Level | Spells |\r\n| --- | --- |\r\n| 3rd | protection from evil and good, sanctuary |\r\n| 5th | lesser restoration, zone of truth |\r\n| 9th | beacon of hope, dispel magic |\r\n| 13th | freedom of movement, guardian of faith |\r\n| 17th | commune, flame strike |"
    - id: tenets-of-devotion
      name: Tenets of Devotion
      description: "Though the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.\r\n\r\n*Honesty.* Don't lie or cheat. Let your word be your promise.\r\n\r\n*Courage.* Never fear to act, though caution is wise.\r\n\r\n*Compassion.* Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom.\r\n\r\n*Honor.* Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm.\r\n\r\n*Duty.* Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you."
  '5':
    - id: oath-spells
      name: Oath Spells
      description: "You gain oath spells at the paladin levels listed.\r\n\r\n### Oath of Devotion Spells\r\n| Paladin Level | Spells |\r\n| --- | --- |\r\n| 3rd | protection from evil and good, sanctuary |\r\n| 5th | lesser restoration, zone of truth |\r\n| 9th | beacon of hope, dispel magic |\r\n| 13th | freedom of movement, guardian of faith |\r\n| 17th | commune, flame strike |"
  '7':
    - id: aura-of-devotion
      name: Aura of Devotion
      description: "Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.\r\n\r\nAt 18th level, the range of this aura increases to 30 feet."
  '9':
    - id: oath-spells
      name: Oath Spells
      description: "You gain oath spells at the paladin levels listed.\r\n\r\n### Oath of Devotion Spells\r\n| Paladin Level | Spells |\r\n| --- | --- |\r\n| 3rd | protection from evil and good, sanctuary |\r\n| 5th | lesser restoration, zone of truth |\r\n| 9th | beacon of hope, dispel magic |\r\n| 13th | freedom of movement, guardian of faith |\r\n| 17th | commune, flame strike |"
  '13':
    - id: oath-spells
      name: Oath Spells
      description: "You gain oath spells at the paladin levels listed.\r\n\r\n### Oath of Devotion Spells\r\n| Paladin Level | Spells |\r\n| --- | --- |\r\n| 3rd | protection from evil and good, sanctuary |\r\n| 5th | lesser restoration, zone of truth |\r\n| 9th | beacon of hope, dispel magic |\r\n| 13th | freedom of movement, guardian of faith |\r\n| 17th | commune, flame strike |"
  '15':
    - id: purity-of-spirit
      name: Purity of Spirit
      description: Beginning at 15th level, you are always under the effects of a *protection from evil and good* spell.
  '17':
    - id: oath-spells
      name: Oath Spells
      description: "You gain oath spells at the paladin levels listed.\r\n\r\n### Oath of Devotion Spells\r\n| Paladin Level | Spells |\r\n| --- | --- |\r\n| 3rd | protection from evil and good, sanctuary |\r\n| 5th | lesser restoration, zone of truth |\r\n| 9th | beacon of hope, dispel magic |\r\n| 13th | freedom of movement, guardian of faith |\r\n| 17th | commune, flame strike |"
  '18':
    - id: aura-of-devotion
      name: Aura of Devotion
      description: "Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.\r\n\r\nAt 18th level, the range of this aura increases to 30 feet."
  '20':
    - id: holy-nimbus
      name: Holy Nimbus
      description: "At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.\r\n\r\nWhenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.\r\n\r\nIn addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.\r\n\r\nOnce you use this feature, you can't use it again until you finish a long rest."
resources: []
```
