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
  // Set all control pins as outputs
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);

  // Initial stop
  stopMotors();

  // Wait 5 seconds after turning on
  delay(5000);
}

void loop() {
  // Move forward for 2 seconds
  moveForward();
  delay(2000);

  // Move backward for 2 seconds
  moveBackward();
  delay(2000);

  // Stop for 5 seconds
  stopMotors();
  delay(5000);
}

void moveForward() {
  // Left motor forward
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);

  // Right motor forward
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);

  // Enable motors
  analogWrite(ENA, 200); // Speed (0-255)
  analogWrite(ENB, 200);
}

void moveBackward() {
  // Left motor backward
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);

  // Right motor backward
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);

  // Enable motors
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

// Define serial port and baud rate
arduino_port = "COM10"  # Adjust based on your system
baud_rate = 9600

// Attempt to establish serial connection
try:
    ser = serial.Serial(arduino_port, baud_rate, timeout=0.05)  # Reduce timeout for faster reads
    print("Serial connection established.")
except serial.SerialException as e:
    print(f"Failed to connect: {e}")
    exit(1)

// Initialize audio control interface
devices = AudioUtilities.GetSpeakers()
interface = devices.Activate(
    IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interface, POINTER(IAudioEndpointVolume))

// Initialize previous value for smoothing
previous_volume = 0.0
alpha = 0.1  ## Smoothing factor (0 = no smoothing, 1 = instant changes)

while True:
    if ser.in_waiting > 0:
        try:
            // Read potentiometer value from serial
            raw_data = ser.read_until().decode('utf-8').strip()
            if raw_data.isdigit():  # Check if data is numeric
                value = int(raw_data)
                print(f"Raw potentiometer value: {value}")

                // Ensure value is within expected range
                if 0 <= value <= 1023:
                    # Map potentiometer value (0-1023) to volume level (0.0-1.0)
                    new_volume = value / 1023

                    // Apply smoothing
                    smoothed_volume = alpha * new_volume + (1 - alpha) * previous_volume
                    previous_volume = smoothed_volume

                    print(f"Smoothed volume: {smoothed_volume * 100}%")

                    // Set system volume
                    volume.SetMasterVolumeLevelScalar(smoothed_volume, None)
                else:
                    print(f"Invalid value: {value}")

        except Exception as e:
            print(f"Error: {e}")



## The enclosure

I designed a cubical enclosure and a knob in SolidWorks, printed it in about 30 minutes. Press-fit the potentiometer into the top, tucked the Arduino inside, and threaded the USB cable out the back.

Currently, the python program needs to run for it to work, but I've set it to automatically run at windows start.

**Total cost: ~€11. Total time: one afternoon.**

These are my favourite kind of projects.`,
  },
]
