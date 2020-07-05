const vibes =[
    '...so is this puppy! 🐶',
    '...have a great day.',
    '...nothing can stop you',
    '...keep going!',
    '...just do it!'
];
const vibe = vibes[Math.floor(Math.random()*vibes.length)];
document.querySelector('.vibe').append(vibe);