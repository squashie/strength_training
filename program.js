// Full program data with exercise details and coaching tips

const EXERCISE_DETAILS = {
  'Back squat': {
    desc: 'The king of lower body exercises. Bar sits on upper traps or rear delts, feet shoulder-width, toes slightly flared.',
    tips: ['Brace your core before unracking — 360° of tension', 'Drive knees out over toes throughout', 'Hip crease below parallel for full depth', 'Lead the ascent by driving the floor away']
  },
  'Romanian deadlift': {
    desc: 'A hip hinge that targets the hamstrings and glutes. Unlike a regular deadlift, the bar never touches the floor.',
    tips: ['Push your hips back — not down', 'Maintain a slight knee bend throughout', 'Feel the hamstring stretch as you lower', 'Squeeze glutes hard at the top']
  },
  'Goblet squat': {
    desc: 'Holding a weight at chest keeps you upright and forces proper squat mechanics. Great for depth.',
    tips: ['Hold a plate or the end of a dumbbell at your chest', 'Use elbows to push knees apart at the bottom', 'Pause 1–2s at the bottom to build depth', '3-second descent for extra tension']
  },
  'Seated row': {
    desc: 'A horizontal pull on the cable system. Targets mid-back, lats, and rear delts. Use the low pulley attachment.',
    tips: ['Sit tall — no swinging or using momentum', 'Pull the handle to your belly button', 'Squeeze shoulder blades together at the end', 'Control the return — 2-3 seconds eccentric']
  },
  'Plank hold': {
    desc: 'An isometric anti-extension core exercise. Build total-body stability and spinal bracing endurance.',
    tips: ['Elbows directly under shoulders', 'Squeeze everything: glutes, quads, core', 'Neutral neck — don\'t look up or drop your head', 'Quality over duration — reset if form breaks']
  },
  'Barbell overhead press': {
    desc: 'The primary overhead push. Barbell starts at shoulder height, pressed directly overhead to full lockout.',
    tips: ['Tight grip, wrists stacked over elbows', 'Brace and tuck the pelvis — no excessive lower back arch', 'Bar travels slightly back around the face, not straight up', 'Shrug and reach at the top for shoulder health']
  },
  'Incline bench press': {
    desc: 'Adjustable bench at ~30–45°. Shifts emphasis to upper pec and front delts compared to flat pressing.',
    tips: ['Retract and depress shoulder blades before each set', 'Bar touches upper chest, not neck', 'Elbows at ~45° to body — not flared 90°', 'Same foot drive and arch as flat bench']
  },
  'Lat pulldown': {
    desc: 'Cable machine overhead pull, replicating a pull-up. Essential for lat development with full control of load.',
    tips: ['Grip slightly wider than shoulder-width', 'Lean back slightly and pull bar to upper chest', 'Initiate with lats — imagine pulling elbows to your pockets', 'Do not swing or use momentum']
  },
  'EZ-bar curl': {
    desc: 'Bicep isolation with the EZ-bar, which reduces wrist strain compared to a straight bar.',
    tips: ['Pin elbows to sides — they should not move', 'Full range: stretch at the bottom, squeeze at the top', 'Don\'t swing — keep the back straight', 'Supinate (turn palms up) at the top for peak contraction']
  },
  'Tricep pushdown': {
    desc: 'Cable pushdown targeting the triceps. Use a straight bar or rope attachment on the high pulley.',
    tips: ['Keep upper arms vertical and locked to your sides', 'Full extension at the bottom — squeeze hard', 'Control the return to about 90°', 'Slight forward lean is okay but don\'t swing']
  },
  'Conventional deadlift': {
    desc: 'The fundamental hip-hinge pulling movement. Develops full posterior chain strength from floor to lockout.',
    tips: ['Bar over mid-foot, hip-width stance', 'Hips hinge back — don\'t squat down to the bar', 'Take the slack out before you pull', 'Drive the floor away, then hips through at the top']
  },
  'Bench press': {
    desc: 'The standard horizontal push. Arch, retract shoulders, full leg drive for maximum stability and strength.',
    tips: ['Retract shoulder blades hard into the bench', 'Plant feet flat on the floor and drive through them', 'Bar touches lower chest, not neck', 'Elbows at ~45° — not straight out to the sides']
  },
  'Barbell row': {
    desc: 'A hip-hinged horizontal pull with a barbell. Builds a thick upper back. Torso roughly parallel to the floor.',
    tips: ['Pull the bar to your belly button — not your chest', 'Hinge, don\'t squat — torso near parallel', 'Squeeze shoulder blades at the top', 'Don\'t let momentum take over — controlled reps']
  },
  'Walking lunge': {
    desc: 'A unilateral lower body movement that builds strength and balance, one leg at a time.',
    tips: ['Keep torso upright — don\'t lean forward', 'Front knee tracks over the second toe', 'Back knee should nearly touch the floor', 'Push off the front foot to step forward']
  },
  'Ab wheel / leg raise': {
    desc: 'Anti-extension core work. Leg raises on the pull-up bar (or using your rack) are a great substitute if no ab wheel.',
    tips: ['For leg raises: full hang, raise legs to hip height minimum', 'Tilt pelvis posterior — don\'t just swing legs', 'No kipping — slow and controlled', 'Squeeze abs, don\'t let lower back hyperextend']
  },
  'Bulgarian split squat': {
    desc: 'Rear-foot elevated split squat. One of the most effective unilateral leg exercises. Brutal and highly effective.',
    tips: ['Rear foot rests on the bench — don\'t force hip flexor stretch', 'Front foot far enough forward so knee doesn\'t pass toes excessively', 'Keep torso upright for glute emphasis', 'Add dumbbells at sides to load — barbell on back works too']
  },
  'Preacher curl': {
    desc: 'Strict bicep isolation using your bench\'s preacher pad. Eliminates cheating and maximises the stretch.',
    tips: ['Armpits pressed against the top of the pad', 'Full stretch at the bottom — resist the urge to cut range short', 'Squeeze hard at the top for 1 second', 'Use the EZ-bar to reduce wrist strain']
  },
  'Close-grip bench press': {
    desc: 'Bench press with a shoulder-width grip to emphasise tricep activation over pecs.',
    tips: ['Hands shoulder-width or slightly narrower', 'Elbows stay closer to the torso', 'Touch lower chest, same as regular bench', 'Do not use a dangerously narrow grip — shoulder-width is optimal']
  },
  'Sumo deadlift': {
    desc: 'A deadlift variation with a wide stance and toes flared out. More upright torso, emphasises inner thighs and glutes.',
    tips: ['Set up wide — heels roughly under the collars', 'Push knees out hard and maintain throughout', 'Chest up, more upright than conventional', 'Same hip lockout at the top — glutes squeeze through']
  },
  'Pendlay row': {
    desc: 'A stricter barbell row where the bar returns to the floor between every rep. Dead-stop eliminates momentum.',
    tips: ['Reset and rebrace between every single rep', 'Torso parallel or very close to it — not a yates row', 'Explosive pull, controlled return to floor', 'Bar to lower chest/upper abs, not waist']
  },
  'Reverse lunge': {
    desc: 'Step backward into the lunge. Easier on the knees than forward lunges, great for stability and control.',
    tips: ['Step back far enough for ~90° front knee bend', 'Keep chest up and core braced', 'Push through the front heel to return to standing', 'Add a barbell to the back for loading']
  },
  'Hanging knee raise': {
    desc: 'A hanging ab exercise from your pull-up bar or rack. Builds lower ab strength and grip endurance.',
    tips: ['Full dead hang to start each rep', 'Curl the hips — don\'t just kick the legs up', 'Aim to bring knees to chest height or above', 'Control the descent — no swinging']
  },
  'Hack squat (barbell)': {
    desc: 'Barbell held behind the legs for a unique squat angle. More quad emphasis, great for variation.',
    tips: ['Bar sits behind your legs, against your calves', 'Stand up straight, feet hip-width', 'Upright torso — this is naturally more like a machine squat', 'May feel awkward at first — lighter weight to learn']
  },
  'Pallof press': {
    desc: 'An anti-rotation core drill using the cable. The goal is to resist the cable pulling you sideways, not to move.',
    tips: ['Stand 90° to the cable anchor', 'Extend arms and resist the cable pulling your torso to rotate', 'Hold for 1–2 seconds extended, return controlled', 'The further from the cable, the harder it is']
  },
  'Overhead tricep ext.': {
    desc: 'EZ-bar overhead tricep extension. Fully stretches the long head of the tricep — a unique stimulus.',
    tips: ['Upper arms stay vertical — only the forearms move', 'Don\'t let elbows flare out wide', 'Lower behind your head under control', 'Use a lighter weight than pushdowns — respect the stretch']
  },
  'Floor press': {
    desc: 'Bench press performed lying on the floor. Natural range of motion limiter — elbows touch floor at bottom.',
    tips: ['Elbows touch the floor and pause momentarily between reps', 'Great for shoulders — reduced range limits pec stretch', 'Excellent option without a spotter', 'Legs can be flat or feet flat on floor — try both']
  },
  'Weighted plank': {
    desc: 'Standard forearm plank with a weight plate placed on your back. Progresses the plank significantly.',
    tips: ['Have a partner place the plate on your upper back', 'If alone, set up and slide plate into position', 'Everything else identical to a normal plank', 'Start with 10 kg and progress']
  },
  'Dead bug': {
    desc: 'Lying core exercise coordinating opposite arm and leg extensions while keeping the lower back glued to the floor.',
    tips: ['Press lower back flat into the floor the entire time — no arching', 'Move slowly and with full control', 'Breathe out as you extend, in as you return', 'Opposite arm AND leg extend simultaneously']
  },
  'Weighted dip / bench': {
    desc: 'Bench press with added load on the chest (a plate). Close-grip version for tricep emphasis.',
    tips: ['Use close-grip bench if no dip station', 'Plate or weight vest on chest adds load', 'Elbows close to body throughout', 'Full lockout at the top, controlled descent']
  },
};

const PROGRAM = {
  w1: {
    days: [
      {
        label: 'Day A', title: 'Lower — squat focus',
        exercises: [
          { name: 'Back squat', sets: '4 × 6', note: 'Moderate load, full depth' },
          { name: 'Romanian deadlift', sets: '3 × 10', note: '' },
          { name: 'Goblet squat', sets: '3 × 12', note: 'Slow 3s descent' },
          { name: 'Seated row', sets: '3 × 12', note: 'Cable attachment on rack' },
          { name: 'Plank hold', sets: '3 × 30s', note: '' },
        ]
      },
      {
        label: 'Day B', title: 'Upper — push focus',
        exercises: [
          { name: 'Barbell overhead press', sets: '4 × 6', note: '' },
          { name: 'Incline bench press', sets: '3 × 10', note: 'Bench at ~45°' },
          { name: 'Lat pulldown', sets: '4 × 10', note: '' },
          { name: 'EZ-bar curl', sets: '3 × 12', note: '' },
          { name: 'Tricep pushdown', sets: '3 × 12', note: 'Cable on rack' },
        ]
      },
      {
        label: 'Day C', title: 'Full body — hinge focus',
        exercises: [
          { name: 'Conventional deadlift', sets: '4 × 5', note: 'Heaviest lift of week' },
          { name: 'Bench press', sets: '3 × 8', note: '' },
          { name: 'Barbell row', sets: '3 × 8', note: '' },
          { name: 'Walking lunge', sets: '3 × 10ea', note: 'Barbell or bodyweight' },
          { name: 'Ab wheel / leg raise', sets: '3 × 12', note: '' },
        ]
      },
    ]
  },
  w3: {
    days: [
      {
        label: 'Day A', title: 'Lower — squat focus',
        exercises: [
          { name: 'Back squat', sets: '4 × 8', note: '+reps from week 1' },
          { name: 'Romanian deadlift', sets: '4 × 12', note: '' },
          { name: 'Bulgarian split squat', sets: '3 × 10ea', note: 'Rear foot on bench' },
          { name: 'Seated row', sets: '3 × 15', note: 'Lighter, squeeze at end' },
          { name: 'Dead bug', sets: '3 × 8ea', note: '' },
        ]
      },
      {
        label: 'Day B', title: 'Upper — push focus',
        exercises: [
          { name: 'Barbell overhead press', sets: '4 × 8', note: '' },
          { name: 'Bench press', sets: '3 × 12', note: '' },
          { name: 'Lat pulldown', sets: '4 × 12', note: 'Wider grip' },
          { name: 'Preacher curl', sets: '3 × 12', note: 'Use preacher pad on bench' },
          { name: 'Close-grip bench press', sets: '3 × 10', note: 'Tricep emphasis' },
        ]
      },
      {
        label: 'Day C', title: 'Full body — hinge focus',
        exercises: [
          { name: 'Sumo deadlift', sets: '4 × 6', note: 'Variation from week 1' },
          { name: 'Incline bench press', sets: '3 × 10', note: '' },
          { name: 'Pendlay row', sets: '3 × 10', note: 'Dead-stop each rep' },
          { name: 'Reverse lunge', sets: '3 × 12ea', note: '' },
          { name: 'Hanging knee raise', sets: '3 × 15', note: '' },
        ]
      },
    ]
  },
  w5: {
    days: [
      {
        label: 'Day A', title: 'Lower — squat focus',
        exercises: [
          { name: 'Back squat', sets: '5 × 5', note: '5–10kg heavier than week 1' },
          { name: 'Romanian deadlift', sets: '4 × 8', note: '' },
          { name: 'Hack squat (barbell)', sets: '3 × 10', note: 'Bar behind legs' },
          { name: 'Seated row', sets: '4 × 10', note: 'Heavy, controlled' },
          { name: 'Pallof press', sets: '3 × 10ea', note: 'Anti-rotation core' },
        ]
      },
      {
        label: 'Day B', title: 'Upper — push focus',
        exercises: [
          { name: 'Barbell overhead press', sets: '5 × 5', note: 'Heavier than week 1' },
          { name: 'Weighted dip / bench', sets: '4 × 6', note: 'Bench if no dip bar' },
          { name: 'Lat pulldown', sets: '4 × 8', note: 'Heavier, slow eccentric' },
          { name: 'EZ-bar curl', sets: '3 × 10', note: '' },
          { name: 'Overhead tricep ext.', sets: '3 × 10', note: 'EZ-bar behind head' },
        ]
      },
      {
        label: 'Day C', title: 'Full body — hinge focus',
        exercises: [
          { name: 'Conventional deadlift', sets: '5 × 3', note: 'Near max effort, heavy' },
          { name: 'Floor press', sets: '3 × 8', note: 'Good if no spotter' },
          { name: 'Barbell row', sets: '4 × 6', note: 'Heavy' },
          { name: 'Goblet squat', sets: '3 × 15', note: 'High-rep finisher' },
          { name: 'Weighted plank', sets: '3 × 30s', note: 'Plate on back' },
        ]
      },
    ]
  },
  w7: {
    days: [
      {
        label: 'Day A', title: 'Lower — light',
        exercises: [
          { name: 'Back squat', sets: '3 × 5', note: '60% of week 6 weight' },
          { name: 'Romanian deadlift', sets: '3 × 8', note: 'Light, stretch-focused' },
          { name: 'Goblet squat', sets: '2 × 12', note: '' },
          { name: 'Seated row', sets: '3 × 12', note: 'Light, full range' },
          { name: 'Plank hold', sets: '2 × 30s', note: '' },
        ]
      },
      {
        label: 'Day B', title: 'Upper — light',
        exercises: [
          { name: 'Barbell overhead press', sets: '3 × 5', note: '60% of week 6' },
          { name: 'Bench press', sets: '3 × 8', note: '' },
          { name: 'Lat pulldown', sets: '3 × 10', note: '' },
          { name: 'EZ-bar curl', sets: '2 × 12', note: '' },
          { name: 'Tricep pushdown', sets: '2 × 12', note: '' },
        ]
      },
      {
        label: 'Day C', title: 'Full body — light',
        exercises: [
          { name: 'Conventional deadlift', sets: '3 × 3', note: '60% of week 6' },
          { name: 'Bench press', sets: '3 × 6', note: '' },
          { name: 'Barbell row', sets: '3 × 8', note: '' },
          { name: 'Walking lunge', sets: '2 × 10ea', note: '' },
          { name: 'Dead bug', sets: '2 × 8ea', note: '' },
        ]
      },
    ]
  }
};
