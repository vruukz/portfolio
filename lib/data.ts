export type Project = {
  slug: string
  num: string
  label?: string
  name: string
  emoji: string
  shortDesc: string
  longDesc: string
  tags: string[]
  featured?: boolean
  category: 'major' | 'tinkering'
}

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}

export const projects: Project[] = [
  {
    slug: 'vox',
    num: '01',
    label: "Bachelor's Thesis",
    name: 'Vox — AI Home Companion Robot',
    emoji: '🤖',
    featured: true,
    category: 'major',
    shortDesc: 'An AI-powered home companion robot with a custom-modeled chassis, voice assistant, and manual movement control.',
    longDesc: `Vox is my Bachelor's thesis project — a fully custom AI-powered home companion robot built from scratch. Every part of it is my own work: the chassis was designed and modeled in Blender and 3D printed, the software stack runs on a Raspberry Pi with Python, and the voice assistant feature lets you interact with it naturally.

The project currently supports voice commands and manual movement control. The roadmap includes computer vision for object and face recognition, and eventually self-navigation using ultrasonic sensors and computer vision.

Building Vox meant working across the full stack: mechanical design, electronics, embedded programming, and AI integration. It's the project I'm most proud of.`,
    tags: ['Python', 'AI Integration', 'Raspberry Pi', '3D Printing', 'Blender', 'Voice Assistant'],
  },
  {
    slug: 'media-server',
    num: '02',
    name: 'Self-hosted Media Server',
    emoji: '🖥️',
    category: 'major',
    shortDesc: 'A full hosting and media web-server platform with Google Authentication and QR login, accessible from anywhere.',
    longDesc: `A self-hosted media server platform I built for personal use. It supports viewing and uploading any media type, is accessible remotely from anywhere, and is secured with Google OAuth authentication with QR code support for quick login.

Built on Linux, this project taught me a lot about networking, server administration, and security. Running your own infrastructure gives you a level of control and privacy you just can't get with commercial solutions.`,
    tags: ['Linux', 'Self-hosted', 'OAuth', 'Networking', 'Web'],
  },
  {
    slug: 'escape-room-ouija',
    num: '03',
    label: 'Client Work',
    name: 'Ouija Board Puzzle — Escape Room',
    emoji: '🔮',
    category: 'major',
    shortDesc: 'An Arduino-powered Ouija board prop for an escape room: LEDs light up in sequences that spell out a hidden word.',
    longDesc: `A commissioned project for a local escape room business. The prop is a themed Ouija board with multiple LEDs that light up in carefully designed sequences — each sequence corresponds to a letter, and the player has to decode the sequence to find the hidden word and progress in the puzzle.

The whole thing runs on an Arduino, with custom LED timing logic programmed in C++. The challenge was making the sequences intuitive enough to be solvable but not so obvious as to break the immersion. Delivered to the client and currently in active use.`,
    tags: ['Arduino', 'C++', 'LEDs', 'Electronics', 'Client Work'],
  },
  {
    slug: 'escape-room-letterbox',
    num: '04',
    label: 'Client Work',
    name: 'Motorised Letter Dispenser — Escape Room',
    emoji: '📬',
    category: 'major',
    shortDesc: 'An automated letter box controlled by Arduino: press a button and a motor shoots out a letter. Built for a local escape room.',
    longDesc: `Another commissioned build for the same escape room client. A custom letter box with a motor mechanism controlled by an Arduino, powered by a portable power bank for wireless placement anywhere in the room.

The mechanism is triggered by a single button press — when activated, the motor drives a letter out of the box as part of the room's narrative. The design had to be reliable (it runs dozens of times a day), compact, and wireless. Delivered and deployed.`,
    tags: ['Arduino', 'C++', 'Motors', 'Electronics', 'Client Work'],
  },
  {
    slug: 'game-design',
    num: '05',
    name: '3D Modeling & Game Design',
    emoji: '🎮',
    category: 'major',
    shortDesc: 'Built 3D models, animations, and small games in Blender and Unity. Also creates models for 3D printing.',
    longDesc: `A long-running creative practice combining 3D modeling in Blender, game development in Unity (C#), and functional model design for 3D printing. Projects range from animated characters and environments to small playable games built as learning projects.

3D printing is a big part of my workflow — I design parts for my own projects (like the Vox robot chassis) as well as standalone prints. There's something uniquely satisfying about designing something digitally and holding the physical result an hour later.`,
    tags: ['Blender', 'Unity', 'C#', '3D Printing', 'Game Dev'],
  },
  {
    slug: 'volume-knob',
    num: '06',
    name: 'Potentiometer Volume Knob',
    emoji: '🎛️',
    category: 'tinkering',
    shortDesc: 'A custom USB volume knob for my laptop — Arduino + potentiometer, reads as a HID device, just works.',
    longDesc: `Classic "I had an itch" project. I wanted a physical volume knob for my laptop while working. Rather than buying one, I wired a potentiometer to an Arduino Pro Micro, flashed HID firmware so it registers as a USB media device, and 3D printed a small enclosure for it.

Plug it in, it just works — no drivers, no software. The whole thing took an afternoon and cost about €5 in parts. These are my favourite kind of projects: small, fast, solves a real problem.`,
    tags: ['Arduino', 'HID', 'C++', '3D Printing', 'DIY'],
  },
  {
    slug: 'smart-car',
    num: '07',
    name: 'Smart Car Modifications',
    emoji: '🚗',
    category: 'tinkering',
    shortDesc: 'Custom electronic car mods — bespoke lighting systems, audio upgrades, and custom control electronics.',
    longDesc: `An ongoing series of custom electronic modifications to my car. This includes custom RGB lighting with Arduino-controlled sequences, audio system upgrades, and various control electronics wired into the car's existing systems.

Working with automotive electronics is a great way to learn about real-world 12V systems, CAN bus, and the constraints of building things that have to work reliably in a vehicle environment.`,
    tags: ['Arduino', 'Electronics', 'Automotive', 'DIY'],
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'potentiometer-volume-knob',
    title: 'Building a €5 USB Volume Knob in an Afternoon',
    date: '2026-03-10',
    excerpt: 'I wanted a physical volume knob for my laptop. Instead of buying one, I built one with an Arduino and a potentiometer in a few hours.',
    tags: ['Arduino', 'HID', 'DIY', '3D Printing'],
    content: `# Building a €5 USB Volume Knob in an Afternoon

I've always wanted a physical volume knob on my desk. The kind you just reach over and twist without touching the keyboard. They sell these for €30-60, which felt excessive for what is essentially a potentiometer and a microcontroller.

So I built one.

## What you need

- Arduino Pro Micro (not Uno — it needs native USB HID support) — ~€4
- A 10kΩ potentiometer — ~€0.50
- A short USB cable
- Optional: 3D printed enclosure

## How it works

The Arduino Pro Micro can register itself as a USB HID device — meaning the computer sees it as a keyboard, mouse, or media controller rather than a serial device. 

The potentiometer outputs a value between 0 and 1023 depending on its position. The Arduino reads this, maps it to a volume range, and sends the appropriate HID media key commands to the OS.

\`\`\`cpp
#include <HID-Project.h>

const int POT_PIN = A0;
int lastVolume = -1;

void setup() {
  Consumer.begin();
}

void loop() {
  int raw = analogRead(POT_PIN);
  int volume = map(raw, 0, 1023, 0, 100);
  
  if (abs(volume - lastVolume) > 1) {
    if (volume > lastVolume) {
      Consumer.write(MEDIA_VOLUME_UP);
    } else {
      Consumer.write(MEDIA_VOLUME_DOWN);
    }
    lastVolume = volume;
  }
  delay(10);
}
\`\`\`

## The enclosure

I designed a small cylindrical enclosure in Blender, printed it in about 45 minutes. Press-fit the potentiometer into the top, tucked the Arduino inside, and threaded the USB cable out the bottom.

Plug it in, it just works. No drivers, no software, no configuration. Windows, Linux, Mac — all treat it as a standard media device.

**Total cost: ~€5. Total time: one afternoon.**

These are my favourite kind of projects.`,
  },
]
