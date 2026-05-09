// app.js — render days and handle modal interactions

function renderDays(sectionId, weekKey) {
  const container = document.getElementById('days-' + weekKey);
  if (!container) return;

  const week = PROGRAM[weekKey];

  container.innerHTML = week.days.map(day => `
    <div class="day-card">
      <div class="day-head">
        <div>
          <div class="day-label-tag">${day.label}</div>
          <div class="day-name">${day.title}</div>
        </div>
      </div>
      <ul class="ex-list">
        ${day.exercises.map(ex => `
          <li class="ex-item" onclick="openModal('${ex.name.replace(/'/g, "\\'")}', '${ex.sets}')">
            <div class="ex-icon">
              ${getIllustration(ex.name)}
            </div>
            <div class="ex-info">
              <div class="ex-name">${ex.name}</div>
              ${ex.note ? `<div class="ex-note">${ex.note}</div>` : ''}
            </div>
            <div class="ex-sets">${ex.sets}</div>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// Render all weeks on load
renderDays('w1', 'w1');
renderDays('w3', 'w3');
renderDays('w5', 'w5');
renderDays('w7', 'w7');

// Section switching
function showSection(id, tabEl) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  const section = document.getElementById(id);
  if (section) section.classList.add('active');
  if (tabEl) tabEl.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

// Modal
function openModal(name, sets) {
  const details = EXERCISE_DETAILS[name] || { desc: 'Perform this exercise with good form and controlled tempo.', tips: [] };

  document.getElementById('modal-title').textContent = name;
  document.getElementById('modal-sets').textContent = sets;
  document.getElementById('modal-illus').innerHTML = getIllustration(name);
  document.getElementById('modal-desc').textContent = details.desc;

  const tipsEl = document.getElementById('modal-tips');
  if (details.tips && details.tips.length) {
    tipsEl.innerHTML = `<h4>Coaching cues</h4><ul>${details.tips.map(t => `<li>${t}</li>`).join('')}</ul>`;
  } else {
    tipsEl.innerHTML = '';
  }

  document.getElementById('modal').classList.add('open');
}

function closeModal(e) {
  if (e.target === document.getElementById('modal')) {
    document.getElementById('modal').classList.remove('open');
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') document.getElementById('modal').classList.remove('open');
});
