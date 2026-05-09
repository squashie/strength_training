// SVG stick-figure illustrations for each exercise
// Each returns an SVG string showing the movement pattern

const ILLUSTRATIONS = {

  'Back squat': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- barbell on back -->
    <line x1="40" y1="52" x2="160" y2="52" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="38" cy="52" r="9" stroke="#c94f1e" stroke-width="3" fill="none"/>
    <circle cx="162" cy="52" r="9" stroke="#c94f1e" stroke-width="3" fill="none"/>
    <!-- head -->
    <circle cx="100" cy="34" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso leaning forward -->
    <line x1="100" y1="44" x2="95" y2="78" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- hips -->
    <line x1="82" y1="78" x2="108" y2="78" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- left leg -->
    <line x1="82" y1="78" x2="72" y2="108" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="72" y1="108" x2="68" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- right leg -->
    <line x1="108" y1="78" x2="118" y2="108" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="118" y1="108" x2="122" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- feet -->
    <line x1="58" y1="130" x2="78" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="112" y1="130" x2="132" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- depth arrow -->
    <text x="150" y="95" font-size="10" fill="#c94f1e" font-family="sans-serif">depth</text>
    <line x1="148" y1="98" x2="148" y2="120" stroke="#c94f1e" stroke-width="1.5" stroke-dasharray="2,2"/>
    <polygon points="145,120 151,120 148,126" fill="#c94f1e"/>
  </svg>`,

  'Romanian deadlift': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- head -->
    <circle cx="76" cy="28" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso hinged forward -->
    <line x1="76" y1="38" x2="102" y2="72" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- hips back -->
    <circle cx="104" cy="74" r="5" fill="#c94f1e"/>
    <!-- legs straight -->
    <line x1="104" y1="74" x2="100" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="104" y1="74" x2="112" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- feet -->
    <line x1="90" y1="120" x2="110" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="102" y1="120" x2="122" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms hanging + barbell -->
    <line x1="88" y1="50" x2="82" y2="88" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="86" y1="50" x2="80" y2="88" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="60" y1="90" x2="130" y2="90" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="58" cy="90" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <circle cx="132" cy="90" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <!-- hip hinge label -->
    <text x="118" y="68" font-size="10" fill="#c94f1e" font-family="sans-serif">hinge</text>
    <path d="M 116 62 Q 108 58 105 72" stroke="#c94f1e" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>
  </svg>`,

  'Goblet squat': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- head -->
    <circle cx="100" cy="32" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso upright -->
    <line x1="100" y1="42" x2="100" y2="78" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms holding weight at chest -->
    <line x1="100" y1="55" x2="80" y2="62" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="100" y1="55" x2="120" y2="62" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- dumbbell/plate -->
    <rect x="85" y="60" width="30" height="16" rx="3" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <!-- hips -->
    <line x1="84" y1="78" x2="116" y2="78" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- legs deep squat -->
    <line x1="84" y1="78" x2="70" y2="112" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="70" y1="112" x2="64" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="116" y1="78" x2="130" y2="112" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="130" y1="112" x2="136" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="54" y1="130" x2="74" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="126" y1="130" x2="146" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- upright text -->
    <text x="148" y="55" font-size="10" fill="#c94f1e" font-family="sans-serif">chest</text>
    <text x="148" y="67" font-size="10" fill="#c94f1e" font-family="sans-serif">up</text>
  </svg>`,

  'Seated row': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- seat -->
    <rect x="108" y="90" width="60" height="8" rx="2" fill="#d8d4c8"/>
    <!-- head -->
    <circle cx="100" cy="52" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso upright on seat -->
    <line x1="100" y1="62" x2="102" y2="92" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- hips on bench -->
    <line x1="90" y1="92" x2="130" y2="92" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- legs -->
    <line x1="110" y1="92" x2="108" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="126" y1="92" x2="128" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="96" y1="120" x2="118" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="118" y1="120" x2="138" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms pulling handle -->
    <line x1="94" y1="72" x2="66" y2="76" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="94" y1="72" x2="66" y2="80" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- cable + anchor -->
    <line x1="52" y1="78" x2="66" y2="78" stroke="#c94f1e" stroke-width="2" stroke-dasharray="3,2"/>
    <rect x="30" y="68" width="24" height="20" rx="3" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <text x="34" y="82" font-size="10" font-weight="bold" fill="#c94f1e" font-family="sans-serif">LAT</text>
    <!-- squeeze cue -->
    <text x="42" y="40" font-size="10" fill="#c94f1e" font-family="sans-serif">squeeze</text>
    <path d="M 72 44 Q 88 50 94 64" stroke="#c94f1e" stroke-width="1.5" fill="none"/>
  </svg>`,

  'Plank hold': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- ground -->
    <line x1="30" y1="112" x2="170" y2="112" stroke="#d8d4c8" stroke-width="2"/>
    <!-- head -->
    <circle cx="152" cy="78" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- straight body -->
    <line x1="142" y1="82" x2="58" y2="100" stroke="#1a1a18" stroke-width="3" stroke-linecap="round"/>
    <!-- forearms on ground -->
    <line x1="130" y1="88" x2="128" y2="112" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="116" y1="91" x2="114" y2="112" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- feet -->
    <line x1="48" y1="100" x2="46" y2="112" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="60" y1="98" x2="58" y2="112" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- straight line indicator -->
    <line x1="52" y1="90" x2="155" y2="72" stroke="#c94f1e" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="68" y="76" font-size="10" fill="#c94f1e" font-family="sans-serif">neutral spine</text>
  </svg>`,

  'Barbell overhead press': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- barbell overhead -->
    <line x1="44" y1="22" x2="156" y2="22" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="42" cy="22" r="9" stroke="#c94f1e" stroke-width="3" fill="none"/>
    <circle cx="158" cy="22" r="9" stroke="#c94f1e" stroke-width="3" fill="none"/>
    <!-- head -->
    <circle cx="100" cy="52" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso -->
    <line x1="100" y1="62" x2="100" y2="98" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms up -->
    <line x1="100" y1="68" x2="76" y2="40" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="76" y1="40" x2="68" y2="22" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="100" y1="68" x2="124" y2="40" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="124" y1="40" x2="132" y2="22" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- hips -->
    <line x1="88" y1="98" x2="112" y2="98" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- legs -->
    <line x1="88" y1="98" x2="86" y2="128" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="112" y1="98" x2="114" y2="128" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="76" y1="128" x2="96" y2="128" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="104" y1="128" x2="124" y2="128" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- braced core cue -->
    <text x="130" y="88" font-size="10" fill="#c94f1e" font-family="sans-serif">brace</text>
    <text x="130" y="100" font-size="10" fill="#c94f1e" font-family="sans-serif">core</text>
  </svg>`,

  'Incline bench press': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- incline bench -->
    <line x1="40" y1="125" x2="145" y2="75" stroke="#d8d4c8" stroke-width="8" stroke-linecap="round"/>
    <line x1="40" y1="125" x2="40" y2="138" stroke="#d8d4c8" stroke-width="4" stroke-linecap="round"/>
    <line x1="145" y1="75" x2="155" y2="138" stroke="#d8d4c8" stroke-width="4" stroke-linecap="round"/>
    <!-- figure on bench -->
    <circle cx="148" cy="60" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso along bench -->
    <line x1="138" y1="64" x2="75" y2="96" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms pressing barbell -->
    <line x1="118" y1="74" x2="110" y2="46" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="96" y1="84" x2="88" y2="56" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- barbell -->
    <line x1="68" y1="48" x2="128" y2="40" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="66" cy="48" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <circle cx="130" cy="40" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <!-- legs -->
    <line x1="75" y1="96" x2="56" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="56" y1="120" x2="44" y2="130" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  'Lat pulldown': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- pulldown bar -->
    <line x1="56" y1="20" x2="144" y2="20" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <line x1="56" y1="20" x2="60" y2="36" stroke="#c94f1e" stroke-width="3" stroke-linecap="round"/>
    <line x1="144" y1="20" x2="140" y2="36" stroke="#c94f1e" stroke-width="3" stroke-linecap="round"/>
    <!-- seat -->
    <rect x="70" y="108" width="60" height="8" rx="2" fill="#d8d4c8"/>
    <!-- head -->
    <circle cx="100" cy="52" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso slight lean back -->
    <line x1="100" y1="62" x2="96" y2="108" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms gripping bar wide -->
    <line x1="100" y1="68" x2="76" y2="44" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="76" y1="44" x2="62" y2="36" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="100" y1="68" x2="124" y2="44" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="124" y1="44" x2="138" y2="36" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- legs under pad -->
    <rect x="70" y="100" width="60" height="6" rx="2" fill="#d8d4c8"/>
    <line x1="84" y1="116" x2="82" y2="136" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="114" y1="116" x2="116" y2="136" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="72" y1="136" x2="92" y2="136" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="106" y1="136" x2="126" y2="136" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- cable line -->
    <line x1="100" y1="22" x2="100" y2="2" stroke="#c94f1e" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="14" y="12" font-size="10" fill="#c94f1e" font-family="sans-serif">cable</text>
  </svg>`,

  'EZ-bar curl': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- head -->
    <circle cx="100" cy="30" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso -->
    <line x1="100" y1="40" x2="100" y2="88" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- upper arms down -->
    <line x1="96" y1="48" x2="78" y2="72" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="104" y1="48" x2="122" y2="72" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- forearms curled up -->
    <line x1="78" y1="72" x2="80" y2="54" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="122" y1="72" x2="120" y2="54" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- EZ bar -->
    <path d="M 68 52 Q 78 48 88 54 Q 100 58 112 54 Q 122 48 132 52" stroke="#c94f1e" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="66" cy="53" r="7" stroke="#c94f1e" stroke-width="2" fill="none"/>
    <circle cx="134" cy="53" r="7" stroke="#c94f1e" stroke-width="2" fill="none"/>
    <!-- legs -->
    <line x1="92" y1="88" x2="90" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="108" y1="88" x2="110" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="80" y1="120" x2="100" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="100" y1="120" x2="120" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- elbows cue -->
    <text x="30" y="78" font-size="10" fill="#c94f1e" font-family="sans-serif">elbows</text>
    <text x="30" y="90" font-size="10" fill="#c94f1e" font-family="sans-serif">fixed</text>
  </svg>`,

  'Tricep pushdown': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- cable machine top -->
    <rect x="80" y="4" width="40" height="16" rx="3" stroke="#c94f1e" stroke-width="2" fill="none"/>
    <text x="85" y="16" font-size="9" fill="#c94f1e" font-family="sans-serif">cable</text>
    <line x1="100" y1="20" x2="100" y2="38" stroke="#c94f1e" stroke-width="2" stroke-dasharray="3,2"/>
    <!-- rope/bar -->
    <line x1="82" y1="38" x2="118" y2="38" stroke="#c94f1e" stroke-width="4" stroke-linecap="round"/>
    <!-- head -->
    <circle cx="100" cy="52" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso slight lean -->
    <line x1="100" y1="62" x2="100" y2="100" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- upper arms pinned to sides -->
    <line x1="96" y1="68" x2="82" y2="76" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="104" y1="68" x2="118" y2="76" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- forearms extended down -->
    <line x1="82" y1="76" x2="80" y2="100" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="118" y1="76" x2="120" y2="100" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- handle at bottom -->
    <line x1="72" y1="100" x2="128" y2="100" stroke="#c94f1e" stroke-width="4" stroke-linecap="round"/>
    <!-- legs -->
    <line x1="94" y1="100" x2="90" y2="128" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="106" y1="100" x2="110" y2="128" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="80" y1="128" x2="100" y2="128" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="100" y1="128" x2="120" y2="128" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  'Conventional deadlift': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- barbell on floor -->
    <line x1="36" y1="110" x2="164" y2="110" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="34" cy="110" r="14" stroke="#c94f1e" stroke-width="3" fill="none"/>
    <circle cx="166" cy="110" r="14" stroke="#c94f1e" stroke-width="3" fill="none"/>
    <!-- floor -->
    <line x1="20" y1="124" x2="180" y2="124" stroke="#d8d4c8" stroke-width="2"/>
    <!-- figure mid-pull -->
    <circle cx="100" cy="34" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso angled -->
    <line x1="100" y1="44" x2="96" y2="80" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- hips -->
    <circle cx="96" cy="82" r="5" fill="#c94f1e"/>
    <!-- arms straight down to bar -->
    <line x1="98" y1="56" x2="88" y2="110" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="94" y1="56" x2="84" y2="110" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- legs -->
    <line x1="96" y1="82" x2="86" y2="110" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="96" y1="82" x2="106" y2="110" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="76" y1="110" x2="96" y2="110" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="96" y1="110" x2="116" y2="110" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- bar over mid-foot label -->
    <text x="126" y="98" font-size="10" fill="#c94f1e" font-family="sans-serif">bar over</text>
    <text x="126" y="110" font-size="10" fill="#c94f1e" font-family="sans-serif">mid-foot</text>
  </svg>`,

  'Bench press': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- flat bench -->
    <rect x="36" y="98" width="128" height="12" rx="3" fill="#d8d4c8"/>
    <line x1="48" y1="110" x2="44" y2="130" stroke="#d8d4c8" stroke-width="5" stroke-linecap="round"/>
    <line x1="152" y1="110" x2="156" y2="130" stroke="#d8d4c8" stroke-width="5" stroke-linecap="round"/>
    <!-- figure lying -->
    <circle cx="148" cy="82" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso flat -->
    <line x1="138" y1="86" x2="62" y2="96" stroke="#1a1a18" stroke-width="3" stroke-linecap="round"/>
    <!-- arms pressing -->
    <line x1="120" y1="90" x2="116" y2="60" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="96" y1="92" x2="92" y2="62" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- barbell -->
    <line x1="60" y1="54" x2="148" y2="54" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="58" cy="54" r="9" stroke="#c94f1e" stroke-width="3" fill="none"/>
    <circle cx="150" cy="54" r="9" stroke="#c94f1e" stroke-width="3" fill="none"/>
    <!-- legs flat -->
    <line x1="62" y1="96" x2="46" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="46" y1="120" x2="38" y2="130" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- feet on floor -->
    <text x="14" y="85" font-size="10" fill="#c94f1e" font-family="sans-serif">arch</text>
    <text x="14" y="97" font-size="10" fill="#c94f1e" font-family="sans-serif">+retract</text>
  </svg>`,

  'Barbell row': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- head -->
    <circle cx="78" cy="38" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso near parallel -->
    <line x1="78" y1="48" x2="110" y2="76" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- hips back -->
    <circle cx="112" cy="78" r="5" fill="#c94f1e"/>
    <!-- legs bent -->
    <line x1="112" y1="78" x2="108" y2="108" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="108" y1="108" x2="104" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="112" y1="78" x2="126" y2="108" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="126" y1="108" x2="128" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="94" y1="130" x2="114" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="118" y1="130" x2="138" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms pulling bar to waist -->
    <line x1="88" y1="55" x2="82" y2="86" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="84" y1="55" x2="78" y2="86" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- barbell at waist -->
    <line x1="52" y1="88" x2="128" y2="88" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="50" cy="88" r="9" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <circle cx="130" cy="88" r="9" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <text x="14" y="70" font-size="10" fill="#c94f1e" font-family="sans-serif">row to</text>
    <text x="14" y="82" font-size="10" fill="#c94f1e" font-family="sans-serif">belly</text>
  </svg>`,

  'Walking lunge': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- floor -->
    <line x1="20" y1="132" x2="180" y2="132" stroke="#d8d4c8" stroke-width="2"/>
    <!-- head -->
    <circle cx="100" cy="32" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso upright -->
    <line x1="100" y1="42" x2="100" y2="80" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms at sides / barbell optional -->
    <line x1="96" y1="55" x2="80" y2="70" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="104" y1="55" x2="120" y2="70" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- front leg bent 90 -->
    <line x1="94" y1="80" x2="76" y2="105" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="76" y1="105" x2="64" y2="132" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- back leg extended -->
    <line x1="106" y1="80" x2="126" y2="105" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="126" y1="105" x2="136" y2="132" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- feet -->
    <line x1="54" y1="132" x2="74" y2="132" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="126" y1="132" x2="146" y2="132" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- knee over toe cue -->
    <text x="24" y="108" font-size="10" fill="#c94f1e" font-family="sans-serif">knee</text>
    <text x="24" y="120" font-size="10" fill="#c94f1e" font-family="sans-serif">over toe</text>
    <line x1="54" y1="112" x2="64" y2="126" stroke="#c94f1e" stroke-width="1.5" stroke-dasharray="2,2"/>
  </svg>`,

  'Ab wheel / leg raise': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- floor -->
    <line x1="20" y1="118" x2="180" y2="118" stroke="#d8d4c8" stroke-width="2"/>
    <!-- hanging bar for leg raise version -->
    <line x1="60" y1="8" x2="140" y2="8" stroke="#d8d4c8" stroke-width="4" stroke-linecap="round"/>
    <!-- figure hanging -->
    <circle cx="100" cy="26" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- arms up gripping bar -->
    <line x1="96" y1="22" x2="82" y2="8" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="104" y1="22" x2="118" y2="8" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- torso straight -->
    <line x1="100" y1="36" x2="100" y2="72" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- legs raised to 90° -->
    <line x1="94" y1="72" x2="72" y2="84" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="72" y1="84" x2="60" y2="72" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="106" y1="72" x2="128" y2="84" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="128" y1="84" x2="140" y2="72" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- feet -->
    <line x1="50" y1="70" x2="70" y2="74" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="130" y1="70" x2="150" y2="74" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- arrow for movement -->
    <path d="M 100 76 Q 82 90 66 80" stroke="#c94f1e" stroke-width="1.5" fill="none" stroke-dasharray="3,2"/>
    <text x="60" y="108" font-size="10" fill="#c94f1e" font-family="sans-serif">control the descent</text>
  </svg>`,

  'Bulgarian split squat': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- bench behind -->
    <rect x="128" y="94" width="52" height="10" rx="3" fill="#d8d4c8"/>
    <line x1="134" y1="104" x2="130" y2="130" stroke="#d8d4c8" stroke-width="4" stroke-linecap="round"/>
    <line x1="174" y1="104" x2="178" y2="130" stroke="#d8d4c8" stroke-width="4" stroke-linecap="round"/>
    <!-- floor -->
    <line x1="20" y1="130" x2="180" y2="130" stroke="#d8d4c8" stroke-width="2"/>
    <!-- head -->
    <circle cx="80" cy="34" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso upright -->
    <line x1="80" y1="44" x2="80" y2="84" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms at sides -->
    <line x1="76" y1="56" x2="60" y2="72" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="84" y1="56" x2="100" y2="72" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- front leg bent -->
    <line x1="76" y1="84" x2="60" y2="108" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="60" y1="108" x2="52" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- back leg on bench -->
    <line x1="84" y1="84" x2="110" y2="90" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="110" y1="90" x2="140" y2="94" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- front foot -->
    <line x1="42" y1="130" x2="62" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- label -->
    <text x="22" y="108" font-size="10" fill="#c94f1e" font-family="sans-serif">rear foot</text>
    <text x="22" y="120" font-size="10" fill="#c94f1e" font-family="sans-serif">elevated</text>
    <line x1="58" y1="115" x2="110" y2="96" stroke="#c94f1e" stroke-width="1.5" stroke-dasharray="2,2"/>
  </svg>`,

  'Preacher curl': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- preacher pad -->
    <path d="M 56 120 L 60 68 L 110 68 L 114 120 Z" stroke="#d8d4c8" stroke-width="3" fill="#e8e4dc" stroke-linejoin="round"/>
    <!-- seat -->
    <rect x="100" y="110" width="70" height="10" rx="2" fill="#d8d4c8"/>
    <!-- head -->
    <circle cx="130" cy="52" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso leaning into pad -->
    <line x1="120" y1="60" x2="92" y2="86" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- upper arms on pad -->
    <line x1="104" y1="70" x2="88" y2="96" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="112" y1="72" x2="96" y2="96" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- forearms + EZ bar -->
    <line x1="88" y1="96" x2="82" y2="78" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="96" y1="96" x2="90" y2="78" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- EZ bar curled -->
    <path d="M 60 76 Q 72 70 84 76 Q 90 80 96 76" stroke="#c94f1e" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="58" cy="77" r="7" stroke="#c94f1e" stroke-width="2" fill="none"/>
    <circle cx="98" cy="76" r="7" stroke="#c94f1e" stroke-width="2" fill="none"/>
    <!-- legs -->
    <line x1="116" y1="120" x2="114" y2="138" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="152" y1="120" x2="154" y2="138" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <text x="140" y="72" font-size="10" fill="#c94f1e" font-family="sans-serif">strict</text>
    <text x="140" y="84" font-size="10" fill="#c94f1e" font-family="sans-serif">isolation</text>
  </svg>`,

  'Close-grip bench press': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- flat bench -->
    <rect x="36" y="98" width="128" height="12" rx="3" fill="#d8d4c8"/>
    <line x1="48" y1="110" x2="44" y2="130" stroke="#d8d4c8" stroke-width="5" stroke-linecap="round"/>
    <line x1="152" y1="110" x2="156" y2="130" stroke="#d8d4c8" stroke-width="5" stroke-linecap="round"/>
    <!-- figure lying -->
    <circle cx="148" cy="82" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <line x1="138" y1="86" x2="62" y2="96" stroke="#1a1a18" stroke-width="3" stroke-linecap="round"/>
    <!-- arms closer grip pressing -->
    <line x1="116" y1="90" x2="108" y2="62" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="100" y1="92" x2="92" y2="64" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- barbell, narrow grip indicated -->
    <line x1="70" y1="58" x2="128" y2="56" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="68" cy="58" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <circle cx="130" cy="56" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <!-- narrow grip bracket -->
    <line x1="108" y1="62" x2="92" y2="64" stroke="#c94f1e" stroke-width="2" stroke-dasharray="2,2"/>
    <text x="92" y="52" font-size="10" fill="#c94f1e" font-family="sans-serif">narrow grip</text>
    <line x1="62" y1="96" x2="46" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  'Sumo deadlift': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- barbell on floor -->
    <line x1="30" y1="112" x2="170" y2="112" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="28" cy="112" r="14" stroke="#c94f1e" stroke-width="3" fill="none"/>
    <circle cx="172" cy="112" r="14" stroke="#c94f1e" stroke-width="3" fill="none"/>
    <line x1="20" y1="126" x2="180" y2="126" stroke="#d8d4c8" stroke-width="2"/>
    <!-- head -->
    <circle cx="100" cy="34" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso more upright than conv -->
    <line x1="100" y1="44" x2="100" y2="80" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- hips -->
    <circle cx="100" cy="82" r="5" fill="#c94f1e"/>
    <!-- arms straight down -->
    <line x1="98" y1="56" x2="96" y2="112" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="102" y1="56" x2="104" y2="112" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- wide sumo stance legs -->
    <line x1="94" y1="82" x2="66" y2="112" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="106" y1="82" x2="134" y2="112" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- feet pointing out -->
    <line x1="56" y1="112" x2="76" y2="112" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="56" y1="112" x2="52" y2="122" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="124" y1="112" x2="144" y2="112" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="144" y1="112" x2="148" y2="122" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- wide stance arrows -->
    <text x="20" y="96" font-size="10" fill="#c94f1e" font-family="sans-serif">wide</text>
    <text x="152" y="96" font-size="10" fill="#c94f1e" font-family="sans-serif">stance</text>
  </svg>`,

  'Pendlay row': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- floor -->
    <line x1="20" y1="126" x2="180" y2="126" stroke="#d8d4c8" stroke-width="2"/>
    <!-- barbell on floor reset -->
    <line x1="40" y1="116" x2="160" y2="116" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="38" cy="116" r="10" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <circle cx="162" cy="116" r="10" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <!-- head -->
    <circle cx="78" cy="38" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso near-parallel -->
    <line x1="78" y1="48" x2="106" y2="74" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- hips -->
    <circle cx="108" cy="76" r="5" fill="#c94f1e"/>
    <!-- legs bent -->
    <line x1="108" y1="76" x2="100" y2="110" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="108" y1="76" x2="122" y2="110" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="88" y1="116" x2="110" y2="116" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="110" y1="116" x2="132" y2="116" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms in pull position -->
    <line x1="88" y1="56" x2="80" y2="84" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="84" y1="56" x2="76" y2="84" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- dead-stop label -->
    <text x="14" y="105" font-size="9" fill="#c94f1e" font-family="sans-serif">dead-stop</text>
    <text x="14" y="117" font-size="9" fill="#c94f1e" font-family="sans-serif">each rep</text>
    <line x1="48" y1="110" x2="48" y2="118" stroke="#c94f1e" stroke-width="1.5"/>
    <polygon points="45,118 51,118 48,122" fill="#c94f1e"/>
  </svg>`,

  'Reverse lunge': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="130" x2="180" y2="130" stroke="#d8d4c8" stroke-width="2"/>
    <circle cx="100" cy="30" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <line x1="100" y1="40" x2="100" y2="78" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="96" y1="52" x2="80" y2="66" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="104" y1="52" x2="120" y2="66" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- front leg forward + bent -->
    <line x1="94" y1="78" x2="80" y2="104" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="80" y1="104" x2="74" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- back leg stepping backward -->
    <line x1="106" y1="78" x2="128" y2="108" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="128" y1="108" x2="136" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="64" y1="130" x2="84" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="126" y1="130" x2="146" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- step back arrow -->
    <text x="134" y="68" font-size="10" fill="#c94f1e" font-family="sans-serif">step</text>
    <text x="134" y="80" font-size="10" fill="#c94f1e" font-family="sans-serif">back</text>
    <line x1="148" y1="82" x2="148" y2="100" stroke="#c94f1e" stroke-width="1.5"/>
    <polygon points="145,100 151,100 148,106" fill="#c94f1e"/>
  </svg>`,

  'Hanging knee raise': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="60" y1="8" x2="140" y2="8" stroke="#d8d4c8" stroke-width="4" stroke-linecap="round"/>
    <circle cx="100" cy="26" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <line x1="96" y1="22" x2="82" y2="8" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="104" y1="22" x2="118" y2="8" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="100" y1="36" x2="100" y2="72" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- knees raised up -->
    <line x1="94" y1="72" x2="76" y2="90" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="76" y1="90" x2="80" y2="108" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="106" y1="72" x2="124" y2="90" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="124" y1="90" x2="120" y2="108" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="70" y1="108" x2="90" y2="110" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="110" y1="110" x2="130" y2="108" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- knee height arrows -->
    <line x1="56" y1="90" x2="70" y2="90" stroke="#c94f1e" stroke-width="1.5" stroke-dasharray="2,2"/>
    <polygon points="70,87 76,90 70,93" fill="#c94f1e"/>
    <text x="20" y="82" font-size="10" fill="#c94f1e" font-family="sans-serif">knees</text>
    <text x="20" y="94" font-size="10" fill="#c94f1e" font-family="sans-serif">to hip</text>
  </svg>`,

  'Hack squat (barbell)': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="130" x2="180" y2="130" stroke="#d8d4c8" stroke-width="2"/>
    <circle cx="100" cy="32" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso upright -->
    <line x1="100" y1="42" x2="100" y2="80" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms behind/beside holding bar -->
    <line x1="96" y1="58" x2="78" y2="72" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="78" y1="72" x2="74" y2="90" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="104" y1="58" x2="122" y2="72" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="122" y1="72" x2="126" y2="90" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- barbell behind legs -->
    <line x1="54" y1="90" x2="146" y2="90" stroke="#c94f1e" stroke-width="4" stroke-linecap="round"/>
    <circle cx="52" cy="90" r="8" stroke="#c94f1e" stroke-width="2" fill="none"/>
    <circle cx="148" cy="90" r="8" stroke="#c94f1e" stroke-width="2" fill="none"/>
    <!-- legs bent -->
    <line x1="93" y1="80" x2="78" y2="108" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="78" y1="108" x2="72" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="107" y1="80" x2="122" y2="108" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="122" y1="108" x2="128" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="62" y1="130" x2="82" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="118" y1="130" x2="138" y2="130" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <text x="14" y="84" font-size="10" fill="#c94f1e" font-family="sans-serif">bar</text>
    <text x="14" y="96" font-size="10" fill="#c94f1e" font-family="sans-serif">behind</text>
  </svg>`,

  'Pallof press': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- cable anchor on left -->
    <rect x="14" y="56" width="20" height="28" rx="3" stroke="#c94f1e" stroke-width="2" fill="none"/>
    <text x="16" y="75" font-size="9" fill="#c94f1e" font-family="sans-serif">LAT</text>
    <line x1="34" y1="70" x2="80" y2="70" stroke="#c94f1e" stroke-width="2" stroke-dasharray="3,2"/>
    <!-- head -->
    <circle cx="100" cy="38" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso -->
    <line x1="100" y1="48" x2="100" y2="90" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- arms extended pressing cable away from side -->
    <line x1="96" y1="62" x2="82" y2="70" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="104" y1="62" x2="82" y2="70" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- handle -->
    <circle cx="82" cy="70" r="5" fill="#c94f1e"/>
    <!-- legs -->
    <line x1="92" y1="90" x2="88" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="108" y1="90" x2="112" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="78" y1="120" x2="98" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="102" y1="120" x2="122" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- resist rotation cue -->
    <path d="M 108 58 Q 118 62 118 70 Q 118 78 108 82" stroke="#c94f1e" stroke-width="1.5" fill="none"/>
    <text x="120" y="68" font-size="9" fill="#c94f1e" font-family="sans-serif">resist</text>
    <text x="120" y="80" font-size="9" fill="#c94f1e" font-family="sans-serif">rotation</text>
  </svg>`,

  'Overhead tricep ext.': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="30" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso -->
    <line x1="100" y1="40" x2="100" y2="90" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- upper arms overhead -->
    <line x1="96" y1="50" x2="88" y2="24" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="104" y1="50" x2="112" y2="24" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- forearms bent behind head -->
    <line x1="88" y1="24" x2="84" y2="50" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="112" y1="24" x2="116" y2="50" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- EZ bar at back of head -->
    <path d="M 74 54 Q 84 48 94 54 Q 100 58 106 54 Q 116 48 126 54" stroke="#c94f1e" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="72" cy="55" r="7" stroke="#c94f1e" stroke-width="2" fill="none"/>
    <circle cx="128" cy="55" r="7" stroke="#c94f1e" stroke-width="2" fill="none"/>
    <!-- extension arc -->
    <path d="M 88 24 Q 82 14 90 10" stroke="#c94f1e" stroke-width="1.5" fill="none" stroke-dasharray="2,2"/>
    <polygon points="86,8 92,8 90,14" fill="#c94f1e"/>
    <!-- legs -->
    <line x1="92" y1="90" x2="88" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="108" y1="90" x2="112" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="78" y1="120" x2="98" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="102" y1="120" x2="122" y2="120" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <text x="140" y="48" font-size="10" fill="#c94f1e" font-family="sans-serif">extend</text>
    <text x="140" y="60" font-size="10" fill="#c94f1e" font-family="sans-serif">up</text>
  </svg>`,

  'Floor press': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- floor -->
    <line x1="20" y1="118" x2="180" y2="118" stroke="#d8d4c8" stroke-width="2"/>
    <!-- figure lying on floor -->
    <circle cx="148" cy="68" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso flat -->
    <line x1="138" y1="72" x2="56" y2="100" stroke="#1a1a18" stroke-width="3" stroke-linecap="round"/>
    <!-- arms pressing - elbows at ~45° touching floor -->
    <line x1="116" y1="80" x2="108" y2="56" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="100" y1="84" x2="92" y2="60" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- barbell -->
    <line x1="68" y1="52" x2="130" y2="50" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="66" cy="52" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <circle cx="132" cy="50" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <!-- legs flat -->
    <line x1="56" y1="100" x2="36" y2="116" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="64" y1="96" x2="48" y2="116" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- elbow cue -->
    <text x="14" y="84" font-size="9" fill="#c94f1e" font-family="sans-serif">elbows</text>
    <text x="14" y="96" font-size="9" fill="#c94f1e" font-family="sans-serif">floor stop</text>
    <line x1="58" y1="96" x2="44" y2="100" stroke="#c94f1e" stroke-width="1" stroke-dasharray="2,2"/>
  </svg>`,

  'Weighted plank': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="118" x2="180" y2="118" stroke="#d8d4c8" stroke-width="2"/>
    <circle cx="152" cy="78" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- body straight -->
    <line x1="142" y1="82" x2="56" y2="104" stroke="#1a1a18" stroke-width="3" stroke-linecap="round"/>
    <!-- weight plate on back -->
    <ellipse cx="110" cy="88" rx="16" ry="8" stroke="#c94f1e" stroke-width="2.5" fill="none" transform="rotate(-10 110 88)"/>
    <text x="102" y="91" font-size="9" fill="#c94f1e" font-family="sans-serif">plate</text>
    <!-- forearms -->
    <line x1="130" y1="88" x2="128" y2="118" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="116" y1="92" x2="114" y2="118" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- feet on toes -->
    <line x1="48" y1="104" x2="44" y2="118" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="60" y1="100" x2="56" y2="118" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- straight line -->
    <line x1="50" y1="94" x2="153" y2="74" stroke="#c94f1e" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="32" y="80" font-size="10" fill="#c94f1e" font-family="sans-serif">rigid spine</text>
  </svg>`,

  'Dead bug': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- figure lying on back -->
    <circle cx="100" cy="38" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <!-- torso flat on floor (horizontal) -->
    <line x1="100" y1="48" x2="100" y2="80" stroke="#1a1a18" stroke-width="3" stroke-linecap="round"/>
    <!-- left arm extended overhead -->
    <line x1="96" y1="58" x2="64" y2="44" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- right arm up bent 90 -->
    <line x1="104" y1="58" x2="130" y2="58" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="130" y1="58" x2="140" y2="44" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- left knee up 90 -->
    <line x1="93" y1="80" x2="72" y2="80" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="72" y1="80" x2="68" y2="100" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- right leg extended -->
    <line x1="107" y1="80" x2="140" y2="95" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="140" y1="95" x2="158" y2="106" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <!-- floor -->
    <line x1="20" y1="115" x2="180" y2="115" stroke="#d8d4c8" stroke-width="2"/>
    <!-- spine pressed flat cue -->
    <text x="20" y="128" font-size="10" fill="#c94f1e" font-family="sans-serif">spine flat to floor — opposite arm+leg</text>
  </svg>`,

  'Weighted dip / bench': `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- dip bars suggestion (or bench) -->
    <rect x="36" y="98" width="128" height="10" rx="2" fill="#d8d4c8"/>
    <line x1="48" y1="108" x2="44" y2="130" stroke="#d8d4c8" stroke-width="5" stroke-linecap="round"/>
    <line x1="152" y1="108" x2="156" y2="130" stroke="#d8d4c8" stroke-width="5" stroke-linecap="round"/>
    <!-- plate on chest for added weight -->
    <ellipse cx="100" cy="84" rx="18" ry="10" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <text x="91" y="87" font-size="9" fill="#c94f1e" font-family="sans-serif">+weight</text>
    <!-- figure lying -->
    <circle cx="148" cy="76" r="10" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <line x1="138" y1="80" x2="60" y2="96" stroke="#1a1a18" stroke-width="3" stroke-linecap="round"/>
    <!-- arms pressing -->
    <line x1="118" y1="86" x2="110" y2="62" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="100" y1="90" x2="94" y2="66" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <!-- barbell -->
    <line x1="66" y1="58" x2="126" y2="56" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="64" cy="58" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <circle cx="128" cy="56" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <line x1="60" y1="96" x2="44" y2="118" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <text x="14" y="52" font-size="10" fill="#c94f1e" font-family="sans-serif">close-grip</text>
    <text x="14" y="64" font-size="10" fill="#c94f1e" font-family="sans-serif">+ plate</text>
  </svg>`,
};

// Fallback generic illustration for any missing exercise
function getIllustration(name) {
  if (ILLUSTRATIONS[name]) return ILLUSTRATIONS[name];
  // Generic dumbbell fallback
  return `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="40" r="12" stroke="#1a1a18" stroke-width="2.5" fill="none"/>
    <line x1="100" y1="52" x2="100" y2="95" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="86" y1="72" x2="60" y2="80" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="114" y1="72" x2="140" y2="80" stroke="#1a1a18" stroke-width="2" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="86" y2="125" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="114" y2="125" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="30" y1="78" x2="60" y2="78" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="28" cy="78" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <line x1="140" y1="78" x2="170" y2="78" stroke="#c94f1e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="172" cy="78" r="8" stroke="#c94f1e" stroke-width="2.5" fill="none"/>
    <text x="60" y="116" font-size="11" fill="#7a7870" font-family="sans-serif">${name}</text>
  </svg>`;
}
