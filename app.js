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

// Section switching — scroll to top only on desktop (mobile: sticky nav is enough)
function showSection(id, tabEl) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  const section = document.getElementById(id);
  if (section) section.classList.add('active');
  if (tabEl) tabEl.classList.add('active');

  // Only scroll on desktop — on mobile the page stays put so the nav stays visible
  if (window.innerWidth > 600) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

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

  const overlay = document.getElementById('modal');
  overlay.classList.add('open');

  // Prevent body scroll while modal open
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal')) {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// Swipe-down to close modal on mobile
(function() {
  const overlay = document.getElementById('modal');
  let startY = 0;
  let startX = 0;
  let dragging = false;

  overlay.addEventListener('touchstart', function(e) {
    const modal = overlay.querySelector('.modal');
    // Only initiate swipe if touch starts on the modal itself (not a link inside)
    if (modal && modal.contains(e.target)) {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      dragging = true;
    }
  }, { passive: true });

  overlay.addEventListener('touchmove', function(e) {
    if (!dragging) return;
    const dy = e.touches[0].clientY - startY;
    const dx = Math.abs(e.touches[0].clientX - startX);
    // Only track vertical swipes
    if (dy > 0 && dx < 40) {
      const modal = overlay.querySelector('.modal');
      if (modal) {
        modal.style.transform = `translateY(${Math.min(dy, 200)}px)`;
        modal.style.transition = 'none';
        modal.style.opacity = Math.max(0.4, 1 - dy / 300).toString();
      }
    }
  }, { passive: true });

  overlay.addEventListener('touchend', function(e) {
    if (!dragging) return;
    dragging = false;
    const dy = e.changedTouches[0].clientY - startY;
    const modal = overlay.querySelector('.modal');
    if (modal) {
      modal.style.transition = '';
      modal.style.transform = '';
      modal.style.opacity = '';
      if (dy > 80) {
        closeModal();
      }
    }
  }, { passive: true });
})();
