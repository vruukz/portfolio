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
  github?: string
  github2?: string
  code?: string
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
    github: 'https://github.com/vruukz/Vox-Robot',
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
    code: `// int  led2=2; //Albastru - F - 1
int  led3=3; //Galben - O - 2
int  led4=4; //Verde - R - 3 - 7
int  led5=5; //Rosu - E - 4 - 6
int  led7=7; // RGB 3 culori - V - 5

void setup()
{
    pinMode(led2,OUTPUT);
    pinMode(led3,OUTPUT);
    pinMode(led4,OUTPUT);
    pinMode(led5,OUTPUT);
    pinMode(led7,OUTPUT);
}
void  loop()
{  
    digitalWrite(led2,HIGH);
    delay(1000);               
    digitalWrite(led2,LOW);  
    delay(1000);               

    digitalWrite(led3,HIGH);
    delay(1000);            
    digitalWrite(led3,LOW);
    delay(1000);     

    digitalWrite(led4,HIGH);
    delay(1000);            
    digitalWrite(led4,LOW);
    delay(1000);  

    digitalWrite(led5,HIGH);
    delay(1000);            
    digitalWrite(led5,LOW);
    delay(1000);     

    digitalWrite(led7,HIGH);
    delay(1000);            
    digitalWrite(led7,LOW);
    delay(1000);  

    digitalWrite(led5,HIGH);
    delay(1000);            
    digitalWrite(led5,LOW);
    delay(1000);      

    digitalWrite(led4,HIGH);
    delay(1000);            
    digitalWrite(led4,LOW);
    delay(5000);       
}`,
    tags: ['Arduino', 'C++', 'LEDs', 'Electronics', 'Client Work'],
  },
  {
    slug: 'escape-room-letterbox',
    num: '04',
    label: 'Client Work',
    name: 'Motorized Letter Dispenser — Escape Room',
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
    slug: 'weather-app',
    num: '06',
    name: 'Weather App',
    emoji: '🌤️',
    category: 'major',
    shortDesc: 'A C# desktop weather app with real-time data from a public API and smooth UI animations.',
    longDesc: `A desktop weather application built in C# that pulls real-time weather data from a public API and displays it with a clean, animated interface.

The project was a deep dive into API integration, async programming in C#, and building polished UI experiences from scratch. Animations were implemented to make the app feel responsive and alive — temperature transitions, weather condition changes, and loading states all have dedicated motion.

A practical tool that I actually use day-to-day.`,
    github: 'https://github.com/vruukz/WeatherApp',
    tags: ['C#', 'API', 'Desktop', 'UI/UX', 'Animations'],
  },
  {
    slug: 'bookshelf',
    num: '07',
    name: 'TheBookshelf — Flutter Book Reader',
    emoji: '📚',
    category: 'major',
    shortDesc: 'A local book reading app for Android with library management, progress tracking, bookmarks, and reading stats.',
    longDesc: `A full-featured local e-book reader built in Flutter, targeting Android. No accounts, no cloud, no DRM — just your files, stored and read locally.

The app supports EPUB, PDF, TXT, and MOBI formats. It reads embedded metadata automatically, tracks reading progress per book, and lets you add bookmarks. A stats screen shows reading time, books completed, and library breakdown by format.

The reader supports dark and sepia themes, adjustable font size, and tap-to-reveal navigation controls. The library view has search, filter by status (reading/finished/unread), sort options, and both list and grid layouts.

Built with Flutter and Provider for state management. The dark aesthetic — black background, lime green accents — mirrors my personal site.`,
    github: 'https://github.com/vruukz/TheBookshelf',
    tags: ['Flutter', 'Android', 'Dart', 'EPUB', 'PDF', 'Mobile'],
  },
  {
    slug: 'soundvault',
    num: '08',
    name: 'SoundVault — Flutter Music Player',
    emoji: '🎵',
    category: 'major',
    shortDesc: 'A local music player for Android & Windows with 3 switchable visualizers, auto cover art, and media notification support.',
    longDesc: `A local music player built in Flutter that runs on both Android and Windows. No streaming, no accounts — add your own files and play them.

The standout feature is the visualizer: three switchable modes (bar equalizer, waveform, radial) rendered in real time with custom Flutter painters. The radial mode rotates as music plays; the waveform uses cubic bezier curves for smooth animation.

Other features: folder watching (pick a folder, the app auto-scans for new files on launch), embedded metadata reading from FLAC/MP3 tags via audiotags, automatic cover art fetching from the iTunes API as fallback, shuffle and repeat modes, an up-next queue, and full media notification and lock screen controls on Android via audio_service.

The library organises songs into Songs, Albums, and Artists views. Adding files reads title, artist, album, duration, and cover art directly from the file tags — no manual entry needed.`,
    github: 'https://github.com/vruukz/SoundVault',
    tags: ['Flutter', 'Android', 'Windows', 'Dart', 'Audio', 'Visualizer'],
  },
  {
    slug: 'weather-flutter',
    num: '09',
    name: 'Weather App — Flutter',
    emoji: '🌦️',
    category: 'major',
    shortDesc: 'A Flutter weather app for Android, Windows and Linux, with real-time forecasts, location detection, android and windows widget, and a clean dark UI.',
    longDesc: `A Flutter reimagining of my original C# weather app, rebuilt for Android (Homescreen Widget included), Windows (Desktop Widget included, as a different app) and Linux with a cleaner architecture and a more polished interface.

Pulls real-time weather data from a public API, detects your current location automatically, and displays current conditions alongside a multi-day forecast. The UI is built around the same dark aesthetic as my other Flutter apps — black background, green accents, minimal chrome.

A personal exercise in cross-platform UI design and API integration with Flutter.`,
    github: 'https://github.com/vruukz/WeatherApp-Flutter',
    github2: 'https://github.com/vruukz/WeatherWidget-Windows',
    tags: ['Flutter', 'Android', 'Windows', 'Linux', 'Dart', 'API', 'Widget', 'Weather', 'Mobile'],
  },
  {
    slug: 'calculator',
    num: '10',
    name: 'Calculator — Flutter',
    emoji: '🔢',
    category: 'major',
    shortDesc: 'A Flutter calculator app for Android with a clean dark interface and standard arithmetic operations.',
    longDesc: `A clean, minimal calculator built in Flutter for Android. Standard arithmetic operations, a clear history display, and a keyboard layout designed for one-handed use.

The project was a focused exercise in Flutter layout, state management, and expression parsing. What looks simple on the surface involves a surprising amount of edge-case handling — chained operations, decimal inputs, negative numbers, and clear/reset behaviour all need careful logic.

Part of a broader suite of Flutter utility apps built with a consistent dark design language.`,
    github: 'https://github.com/vruukz/Calculator',
    tags: ['Flutter', 'Android', 'Dart', 'Mobile', 'UI/UX'],
  },
  {
    slug: 'notes',
    num: '11',
    name: 'NotesApp — Flutter',
    emoji: '📝',
    category: 'major',
    shortDesc: 'A local notes app for Android with create, edit, delete, and persistent storage — no account needed.',
    longDesc: `A straightforward local notes app built in Flutter. Notes are stored entirely on-device — no sync, no account, no cloud. Open it, write something, it's there when you come back.

Supports creating, editing, and deleting notes with a clean list view. Persistent storage is handled locally so nothing is ever sent anywhere.

Built as part of a series of Flutter utility apps, with the same dark design system shared across all of them.`,
    github: 'https://github.com/vruukz/NotesApp',
    tags: ['Flutter', 'Android', 'Dart', 'Mobile', 'Local Storage'],
  },
  {
    slug: 'calendar',
    num: '12',
    name: 'Calendar — Flutter',
    emoji: '📅',
    category: 'major',
    shortDesc: 'A Flutter calendar app for Android with event creation, a monthly view, and local persistence.',
    longDesc: `A calendar app built in Flutter for Android. Displays a full monthly view with navigation, lets you tap any day to add or view events, and stores everything locally on the device.

The focus was on building a functional, well-structured calendar widget from scratch in Flutter — managing the grid layout, day selection state, and event association per date. All data is persisted locally with no backend required.

Part of the same dark-themed Flutter utility suite.`,
    github: 'https://github.com/vruukz/Calendar',
    tags: ['Flutter', 'Android', 'Dart', 'Mobile', 'Productivity'],
  },
  {
    slug: 'clock',
    num: '13',
    name: 'Clock — Flutter',
    emoji: '🕐',
    category: 'major',
    shortDesc: 'A Flutter clock app for Android with an analog face, digital display, and stopwatch/timer functionality.',
    longDesc: `A clock app built in Flutter featuring both an analog and digital display, a stopwatch, and a countdown timer.

The analog face is drawn with a custom CustomPainter — hands, tick marks, and the face itself are all rendered programmatically rather than using images. The stopwatch and timer share the same underlying time logic, just displayed differently.

A clean exercise in Flutter's animation system and custom painting API, wrapped in the same minimal dark UI as the rest of the suite.`,
    github: 'https://github.com/vruukz/Clock',
    tags: ['Flutter', 'Android', 'Dart', 'Mobile', 'Animations'],
  },
  {
    slug: 'volume-knob',
    num: '14',
    name: 'Potentiometer Volume Knob',
    emoji: '🎛️',
    category: 'tinkering',
    shortDesc: 'A custom USB volume knob for my laptop — Arduino + potentiometer, just works.',
    longDesc: `Classic "I had an itch" project. I wanted a physical volume knob for my laptop while working. Rather than buying one, I wired a potentiometer to an Arduino Uno R3 and 3D printed a small enclosure for it.

The whole thing took an afternoon and cost about €11 in parts. These are my favourite kind of projects: small, fast, solves a real problem.`,
    tags: ['Arduino', 'HID', 'C++', '3D Printing', 'DIY', 'Python'],
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'potentiometer-volume-knob',
    title: 'Building a €11 USB Volume Knob in an Afternoon',
    date: '2026-03-10',
    excerpt: 'I wanted a physical volume knob for my laptop. Instead of buying one, I built one with an Arduino and a potentiometer in a few hours.',
    tags: ['Arduino', 'HID', 'DIY', '3D Printing'],
    content: `# Building a €11 USB Volume Knob in an Afternoon

I've always wanted a physical volume knob on my desk. The kind you just reach over and twist without touching the keyboard. They sell these for €30-60, which felt excessive for what is essentially a potentiometer and a microcontroller.

So I built one.

## What you need

- Arduino Uno R3 - ~€6
- Arduino Potentiometer Module - ~€5
- USB cable
- Optional: 3D printed enclosure

## How it works

The potentiometer outputs a value between 0 and 1023 depending on its position. The Arduino reads this, maps it to a volume range, and sends the appropriate HID media key commands to the OS.

## This is the C++ Arduino code that first need to be uploaded to the Arduino:

// Pins for motor driver
const int ENA = 9;
const int IN1 = 8;
const int IN2 = 7;
const int IN3 = 6;
const int IN4 = 5;
const int ENB = 10;

void setup() {
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  stopMotors();
  delay(5000);
}

void loop() {
  moveForward();
  delay(2000);
  moveBackward();
  delay(2000);
  stopMotors();
  delay(5000);
}

void moveForward() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 200);
  analogWrite(ENB, 200);
}

void moveBackward() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, 200);
  analogWrite(ENB, 200);
}

void stopMotors() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 0);
  analogWrite(ENB, 0);
}

## This, is the python code that needs to be ran:

from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume
import serial

arduino_port = "COM10"
baud_rate = 9600

try:
    ser = serial.Serial(arduino_port, baud_rate, timeout=0.05)
    print("Serial connection established.")
except serial.SerialException as e:
    print(f"Failed to connect: {e}")
    exit(1)

devices = AudioUtilities.GetSpeakers()
interface = devices.Activate(
    IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interface, POINTER(IAudioEndpointVolume))

previous_volume = 0.0
alpha = 0.1

while True:
    if ser.in_waiting > 0:
        try:
            raw_data = ser.read_until().decode('utf-8').strip()
            if raw_data.isdigit():
                value = int(raw_data)
                if 0 <= value <= 1023:
                    new_volume = value / 1023
                    smoothed_volume = alpha * new_volume + (1 - alpha) * previous_volume
                    previous_volume = smoothed_volume
                    volume.SetMasterVolumeLevelScalar(smoothed_volume, None)
        except Exception as e:
            print(f"Error: {e}")

## The enclosure

I designed a cubical enclosure and a knob in SolidWorks, printed it in about 30 minutes. Press-fit the potentiometer into the top, tucked the Arduino inside, and threaded the USB cable out the back.

Currently, the python program needs to run for it to work, but I've set it to automatically run at windows start.

**Total cost: ~€11. Total time: one afternoon.**

These are my favourite kind of projects.`,
  },
]