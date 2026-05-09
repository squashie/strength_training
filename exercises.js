// Exercise YouTube tutorial links
// Curated from well-known coaching channels: Jeff Nippard, Alan Thrall (Untamed Strength),
// Squat University, Scott Herman Fitness

const YOUTUBE_VIDEOS = {
  'Back squat':              { id: 'ultWZbUMPL8', channel: 'Jeff Nippard',        title: 'How To Squat' },
  'Romanian deadlift':       { id: 'JCXUYuzwNrM', channel: 'Jeff Nippard',        title: 'How To Romanian Deadlift' },
  'Goblet squat':            { id: 'MxsFDhcyFyE', channel: 'Jeff Nippard',        title: 'How To Goblet Squat' },
  'Seated row':              { id: 'GZbfZ033f74', channel: 'Scott Herman Fitness', title: 'How To Seated Cable Row' },
  'Plank hold':              { id: 'ASdvN_XEl_c', channel: 'Jeff Nippard',        title: 'How To Plank' },
  'Barbell overhead press':  { id: 'qEwKCR5JCog', channel: 'Jeff Nippard',        title: 'How To Overhead Press' },
  'Incline bench press':     { id: 'jPLdzuHckI8', channel: 'Jeff Nippard',        title: 'How To Incline Bench Press' },
  'Lat pulldown':            { id: 'CAwf7n6Luuc', channel: 'Scott Herman Fitness', title: 'How To Lat Pulldown' },
  'EZ-bar curl':             { id: 'O_MwlOWSTyM', channel: 'Scott Herman Fitness', title: 'How To Barbell Curl' },
  'Tricep pushdown':         { id: 'mnENjzhez6Y', channel: 'Scott Herman Fitness', title: 'How To Tricep Pushdown' },
  'Conventional deadlift':   { id: 'MBbyAqvTNkU', channel: 'Alan Thrall',         title: 'How To Deadlift (5 Step)' },
  'Bench press':             { id: 'BYKScL2sgCs', channel: 'Jeff Nippard',        title: 'How To Bench Press' },
  'Barbell row':             { id: 'FWJR5Ve8bnQ', channel: 'Jeff Nippard',        title: 'How To Barbell Row' },
  'Walking lunge':           { id: 'D7KaRcUTQeE', channel: 'Scott Herman Fitness', title: 'How To Lunge' },
  'Ab wheel / leg raise':    { id: 'G_7FTgnNSAw', channel: 'Jeff Nippard',        title: 'How To Leg Raise' },
  'Bulgarian split squat':   { id: 'HFoJ8RQVbDs', channel: 'Jeff Nippard',        title: 'How To Bulgarian Split Squat' },
  'Preacher curl':           { id: 'fIWP-FRFNU0', channel: 'Scott Herman Fitness', title: 'How To Preacher Curl' },
  'Close-grip bench press':  { id: 'nEF0bvBqeG8', channel: 'Scott Herman Fitness', title: 'Close Grip Bench Press' },
  'Sumo deadlift':           { id: 'opLAAiTTnSM', channel: 'Alan Thrall',         title: 'How To Sumo Deadlift' },
  'Pendlay row':             { id: 'apOvOuTnTWg', channel: 'Alan Thrall',         title: 'How To Pendlay Row' },
  'Reverse lunge':           { id: '4YGFp5-8P-E', channel: 'Scott Herman Fitness', title: 'How To Reverse Lunge' },
  'Hanging knee raise':      { id: 'hdng3tKFGXI', channel: 'Scott Herman Fitness', title: 'Hanging Knee Raise' },
  'Hack squat (barbell)':    { id: 'EdtPTnSagFM', channel: 'Scott Herman Fitness', title: 'Barbell Hack Squat' },
  'Pallof press':            { id: 'AH_QZLm_0-s', channel: 'Squat University',    title: 'Pallof Press' },
  'Overhead tricep ext.':    { id: 'YbX7Wd8jQ-Q', channel: 'Scott Herman Fitness', title: 'Overhead Tricep Extension' },
  'Floor press':             { id: 'XbBiePMO-xo', channel: 'Alan Thrall',         title: 'How To Floor Press' },
  'Weighted plank':          { id: 'ASdvN_XEl_c', channel: 'Jeff Nippard',        title: 'Plank Progressions' },
  'Dead bug':                { id: '4XLEnwUr1d8', channel: 'Squat University',    title: 'How To Dead Bug' },
  'Weighted dip / bench':    { id: 'nEF0bvBqeG8', channel: 'Scott Herman Fitness', title: 'Weighted Dip / Close Grip Bench' },
};

// Returns an HTML string: a YouTube thumbnail that links to the video
function getIllustration(name) {
  const vid = YOUTUBE_VIDEOS[name];

  if (!vid) {
    const query = encodeURIComponent('how to ' + name + ' exercise tutorial');
    return `<a href="https://www.youtube.com/results?search_query=${query}" target="_blank" rel="noopener" class="yt-thumb yt-fallback" aria-label="Search YouTube for ${name} tutorial">
      <div class="yt-fallback-inner">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <circle cx="18" cy="18" r="18" fill="#FF0000"/>
          <polygon points="14,11 28,18 14,25" fill="white"/>
        </svg>
        <span>Find tutorial</span>
      </div>
    </a>`;
  }

  const thumbUrl = `https://img.youtube.com/vi/${vid.id}/mqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${vid.id}`;

  return `<a href="${videoUrl}" target="_blank" rel="noopener" class="yt-thumb" aria-label="Watch ${vid.title} on YouTube by ${vid.channel}">
    <div class="yt-thumb-inner">
      <img src="${thumbUrl}" alt="${vid.title}" loading="lazy" onerror="this.parentNode.classList.add('yt-no-thumb')">
      <div class="yt-play-btn" aria-hidden="true">
        <svg width="44" height="44" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="22" fill="rgba(0,0,0,0.65)"/>
          <polygon points="17,14 34,22 17,30" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="yt-meta">
      <span class="yt-title">${vid.title}</span>
      <span class="yt-channel">${vid.channel}</span>
    </div>
  </a>`;
}
