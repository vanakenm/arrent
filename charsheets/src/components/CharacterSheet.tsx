import type { Character } from '../lib/types';

const ABILITY_LABELS: Record<string, string> = {
  str: 'Force (STR)',
  dex: 'Dextérité (DEX)',
  con: 'Constitution (CON)',
  int: 'Intelligence (INT)',
  wis: 'Sagesse (WIS)',
  cha: 'Charisme (CHA)',
};

interface Props {
  character: Character;
  dirty: boolean;
  saving: boolean;
  error: string | null;
  readOnly?: boolean;
  onChange?: (updater: (c: Character) => Character) => void;
  onSave?: () => void;
  onReload?: () => void;
}

function clamp(value: number, min: number | null, max: number | null): number {
  let v = value;
  if (min !== null && v < min) v = min;
  if (max !== null && v > max) v = max;
  return v;
}

export default function CharacterSheet({ character: c, dirty, saving, error, readOnly, onChange, onSave, onReload }: Props) {
  return (
    <div className="sheet">
      <header className="sheet-header">
        <h2>{c.name}</h2>
        <div className="sheet-actions no-print">
          {readOnly && <span className="badge badge-readonly">Lecture seule</span>}
          {!readOnly && dirty && <span className="badge badge-dirty">Non enregistré</span>}
          <button onClick={() => window.print()}>Imprimer / Enregistrer en PDF</button>
          {!readOnly && (
            <>
              <button onClick={onReload} disabled={saving}>
                Recharger depuis le fichier
              </button>
              <button className="primary" onClick={onSave} disabled={saving || !dirty}>
                {saving ? 'Enregistrement…' : 'Enregistrer dans le fichier'}
              </button>
            </>
          )}
        </div>
      </header>
      {error && <p className="error no-print">{error}</p>}

      <section>
        <h3>Identité</h3>
        <dl className="kv">
          <dt>Race</dt>
          <dd>{c.identity.race ?? '—'}</dd>
          <dt>Classe</dt>
          <dd>
            {c.identity.class ?? '—'}
            {c.identity.secondaryClass ? ` / ${c.identity.secondaryClass}` : ''}
          </dd>
          <dt>Niveau</dt>
          <dd>{c.identity.level ?? '—'}</dd>
          <dt>Background</dt>
          <dd>{c.identity.background ?? '—'}</dd>
        </dl>
      </section>

      <section>
        <h3>Statistiques de combat</h3>
        <div className="stat-row">
          <label className="stat-box">
            <span>PV</span>
            <span className="hp-input">
              {readOnly ? (
                <strong>{c.combatStats.hpCurrent ?? '—'}</strong>
              ) : (
                <input
                  type="number"
                  value={c.combatStats.hpCurrent ?? ''}
                  onChange={(e) => {
                    const raw = e.target.value === '' ? null : Number(e.target.value);
                    const value = raw === null ? null : clamp(raw, 0, c.combatStats.hpMax);
                    onChange?.((prev) => ({ ...prev, combatStats: { ...prev.combatStats, hpCurrent: value } }));
                  }}
                />
              )}
              <span>/ {c.combatStats.hpMax ?? '—'}</span>
            </span>
          </label>
          <div className="stat-box">
            <span>CA</span>
            <strong>{c.combatStats.ac ?? '—'}</strong>
          </div>
          <div className="stat-box">
            <span>Initiative</span>
            <strong>{c.combatStats.initiative ?? '—'}</strong>
          </div>
          {c.combatStats.speed && (
            <div className="stat-box stat-box-wide">
              <span>Vitesse</span>
              <strong>{c.combatStats.speed}</strong>
            </div>
          )}
        </div>
      </section>

      <section>
        <h3>Caractéristiques</h3>
        <table>
          <tbody>
            {(Object.keys(ABILITY_LABELS) as (keyof typeof ABILITY_LABELS)[]).map((key) => {
              const a = c.abilityScores[key as keyof Character['abilityScores']];
              return (
                <tr key={key}>
                  <td>{ABILITY_LABELS[key]}</td>
                  <td>{a?.score ?? '—'}</td>
                  <td>{a?.modifier !== null && a?.modifier !== undefined ? (a.modifier >= 0 ? `+${a.modifier}` : a.modifier) : '—'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="muted">Bonus de maîtrise : {c.proficiencyBonus ?? '—'}</p>
      </section>

      <section>
        <h3>Jets de sauvegarde</h3>
        <table>
          <thead>
            <tr>
              <th>Caractéristique</th>
              <th>Maîtrise</th>
            </tr>
          </thead>
          <tbody>
            {c.savingThrows.map((s) => (
              <tr key={s.ability}>
                <td>{ABILITY_LABELS[s.ability]}</td>
                <td>{s.proficient ? '☑' : '☐'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>Compétences</h3>
        <table>
          <thead>
            <tr>
              <th>Compétence</th>
              <th>Carac.</th>
              <th>Maîtrise</th>
            </tr>
          </thead>
          <tbody>
            {c.skills.map((s) => (
              <tr key={s.name}>
                <td>{s.name}</td>
                <td>{s.ability.toUpperCase()}</td>
                <td>
                  {s.proficient ? (s.expertise ? '☑ ★★' : '☑') : '☐'}
                  {s.note ? ` (${s.note})` : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {c.skillsNote && <p className="muted">{c.skillsNote}</p>}
      </section>

      <section>
        <h3>Langues & maîtrises diverses</h3>
        <dl className="kv">
          <dt>Langues</dt>
          <dd>{c.proficienciesAndLanguages.languages ?? '—'}</dd>
          <dt>Armures</dt>
          <dd>{c.proficienciesAndLanguages.armor ?? '—'}</dd>
          <dt>Armes</dt>
          <dd>{c.proficienciesAndLanguages.weapons ?? '—'}</dd>
          <dt>Outils</dt>
          <dd>{c.proficienciesAndLanguages.tools ?? '—'}</dd>
        </dl>
      </section>

      {c.spellcasting && (
        <section>
          <h3>Sorts</h3>
          {(c.spellcasting.saveDC || c.spellcasting.attackBonus || c.spellcasting.focus) && (
            <p className="muted">
              {c.spellcasting.ability ? `Caractéristique : ${c.spellcasting.ability.toUpperCase()}. ` : ''}
              {c.spellcasting.saveDC ? `DD des sorts : ${c.spellcasting.saveDC}. ` : ''}
              {c.spellcasting.attackBonus ? `Jet d'attaque : +${c.spellcasting.attackBonus}. ` : ''}
              {c.spellcasting.focus ? `Focaliseur : ${c.spellcasting.focus}.` : ''}
            </p>
          )}
          <table>
            <thead>
              <tr>
                <th>Niveau</th>
                <th>Max</th>
                <th>Actuels</th>
              </tr>
            </thead>
            <tbody>
              {c.spellcasting.slots.map((slot) => (
                <tr key={slot.level}>
                  <td>Niveau {slot.level}</td>
                  <td>{slot.max ?? '—'}</td>
                  <td>
                    {readOnly ? (
                      slot.current ?? '—'
                    ) : (
                      <input
                        type="number"
                        value={slot.current ?? ''}
                        onChange={(e) => {
                          const raw = e.target.value === '' ? null : Number(e.target.value);
                          const value = raw === null ? null : clamp(raw, 0, slot.max);
                          onChange?.((prev) => ({
                            ...prev,
                            spellcasting: prev.spellcasting
                              ? {
                                  ...prev.spellcasting,
                                  slots: prev.spellcasting.slots.map((sl) =>
                                    sl.level === slot.level ? { ...sl, current: value } : sl
                                  ),
                                }
                              : prev.spellcasting,
                          }));
                        }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {c.spellcasting.innate && c.spellcasting.innate.length > 0 && (
            <>
              <h4>Sorts innés</h4>
              <ul>
                {c.spellcasting.innate.map((sp) => (
                  <li key={sp.name}>
                    <strong>{sp.name}</strong>
                    {sp.englishName ? ` (${sp.englishName})` : ''}
                    {sp.usage ? ` — ${sp.usage}` : ''}
                  </li>
                ))}
              </ul>
            </>
          )}

          {c.spellcasting.grantedByClassLevel && c.spellcasting.grantedByClassLevel.length > 0 && (
            <>
              <h4>Sorts de classe</h4>
              <ul>
                {c.spellcasting.grantedByClassLevel.map((sp) => (
                  <li key={sp.name}>
                    Niv. {sp.characterLevel} — <strong>{sp.name}</strong>
                    {sp.englishName ? ` (${sp.englishName})` : ''}
                  </li>
                ))}
              </ul>
            </>
          )}

          {c.spellcasting.byLevel.some((lv) => lv.spells.length > 0) && (
            <>
              <h4>Sorts connus / préparés</h4>
              {c.spellcasting.byLevel.map((lv) => (
                <div key={lv.level}>
                  <strong>Niveau {lv.level}</strong>
                  <ul>
                    {lv.spells.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </section>
      )}

      <section>
        <h3>Ressources</h3>
        {c.resources.length === 0 ? (
          <p className="muted">Aucune ressource particulière recensée.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Actuel</th>
                <th>Max</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {c.resources.map((r) => (
                <tr key={r.name}>
                  <td>{r.name}</td>
                  <td>
                    {readOnly ? (
                      r.current ?? '—'
                    ) : (
                      <input
                        type="number"
                        value={r.current ?? ''}
                        onChange={(e) => {
                          const raw = e.target.value === '' ? null : Number(e.target.value);
                          const value = raw === null ? null : clamp(raw, r.min, r.max);
                          onChange?.((prev) => ({
                            ...prev,
                            resources: prev.resources.map((res) => (res.name === r.name ? { ...res, current: value } : res)),
                          }));
                        }}
                      />
                    )}
                  </td>
                  <td>{r.max ?? '—'}</td>
                  <td className="description-cell">{r.description ?? ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {c.savageManeuvers && c.savageManeuvers.length > 0 && (
        <section>
          <h3>Manœuvres Sauvages</h3>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Coût (Fureur)</th>
                <th>Action</th>
                <th>Effet</th>
              </tr>
            </thead>
            <tbody>
              {c.savageManeuvers.map((m) => (
                <tr key={m.name}>
                  <td>{m.name}</td>
                  <td>{m.furyCost}</td>
                  <td>{m.action}</td>
                  <td className="description-cell">
                    {m.description}
                    {m.progressionTable && (
                      <div className="progression-table">
                        <span className="muted">Table de progression :</span>
                        <table>
                          <thead>
                            <tr>
                              <th>Niv.</th>
                              <th>Coût</th>
                              <th>Dégâts</th>
                            </tr>
                          </thead>
                          <tbody>
                            {m.progressionTable.map((row) => (
                              <tr key={row.level}>
                                <td>{row.level}</td>
                                <td>{row.cost}</td>
                                <td>{row.damage}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <section>
        <h3>Capacités</h3>
        {c.capabilities.length === 0 ? (
          <p className="muted">À compléter.</p>
        ) : (
          <ul className="capabilities-list">
            {c.capabilities.map((cap) => (
              <li key={cap.name}>
                <strong>{cap.name}</strong>
                {cap.recovery ? <span className="muted"> — {cap.recovery}</span> : null}
                <p>{cap.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3>Équipement & magie</h3>
        <h4>Objets avec attunement ({c.equipment.attunement.current ?? '?'}/{c.equipment.attunement.max ?? '?'})</h4>
        <ul>
          {c.equipment.attunement.items.map((it) => (
            <li key={it.name}>
              <strong>{it.name}</strong>
              {it.description ? ` — ${it.description}` : ''}
            </li>
          ))}
        </ul>
        {c.equipment.nonAttunement.length > 0 && (
          <>
            <h4>Objets sans attunement</h4>
            <ul>
              {c.equipment.nonAttunement.map((it) => (
                <li key={it.name}>
                  <strong>{it.name}</strong>
                  {it.description ? ` — ${it.description}` : ''}
                </li>
              ))}
            </ul>
          </>
        )}
        {c.equipment.weaponsAndArmor.length > 0 && (
          <>
            <h4>Armes & armures</h4>
            <ul>
              {c.equipment.weaponsAndArmor.map((it) => (
                <li key={it.name}>
                  <strong>{it.name}</strong>
                  {it.description ? ` — ${it.description}` : ''}
                </li>
              ))}
            </ul>
          </>
        )}
        {c.equipment.potions.length > 0 && (
          <>
            <h4>Potions</h4>
            <ul>
              {c.equipment.potions.map((it, i) => (
                <li key={i} className={it.used ? 'used' : ''}>
                  <strong>{it.name}</strong>
                  {it.description ? ` — ${it.description}` : ''}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      {c.blessingsAndActiveEffects.length > 0 && (
        <section>
          <h3>Bénédictions & effets actifs</h3>
          <ul>
            {c.blessingsAndActiveEffects.map((b, i) => (
              <li key={i} className={b.active ? '' : 'used'}>
                {b.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {c.companion && (
        <section>
          <h3>Compagnon</h3>
          <dl className="kv">
            <dt>Nom</dt>
            <dd>{c.companion.name ?? '—'}</dd>
            <dt>Type</dt>
            <dd>{c.companion.beastType ?? '—'}</dd>
            <dt>PV</dt>
            <dd>{c.companion.hp ?? '—'}</dd>
            <dt>CA</dt>
            <dd>{c.companion.ac ?? '—'}</dd>
          </dl>
        </section>
      )}

      <section>
        <h3>Statut actuel</h3>
        {readOnly ? (
          <p>{c.status || '—'}</p>
        ) : (
          <input
            type="text"
            className="status-input"
            placeholder="ex. Empoisonné, en ville, recherche par la garde…"
            value={c.status}
            onChange={(e) => {
              const value = e.target.value;
              onChange?.((prev) => ({ ...prev, status: value }));
            }}
          />
        )}
      </section>

      <section>
        <h3>Notes</h3>
        {readOnly ? (
          <p className="notes-readonly">{c.notes || '—'}</p>
        ) : (
          <textarea
            className="notes-textarea"
            rows={6}
            value={c.notes}
            onChange={(e) => {
              const value = e.target.value;
              onChange?.((prev) => ({ ...prev, notes: value }));
            }}
          />
        )}
      </section>
    </div>
  );
}
