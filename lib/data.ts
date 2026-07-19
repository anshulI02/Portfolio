/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF CONTENT
 * Every section of the site reads from this file. To update the site,
 * edit here, no component changes needed.
 *
 * All content is derived from Anshul's resume (source of truth) and
 * supporting experience documents. Clearly marked placeholders:
 *   • Headshot        → drop a photo at /public/images/headshot.jpg
 *   • Project links   → add per-project GitHub/demo links below when public
 *   • TCS dates/city  → see the Tata Consultancy Services entry (marked TODO)
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Anshul Israni",
  firstName: "Anshul",
  initials: "AI",
  role: "Electrical Engineering Graduate · UBC",
  currentPosition: "Previously at Schneider Electric, Solar & Storage",
  tagline: "From schematic to validated system.",
  headline:
    "UBC Electrical Engineering Graduate · Previously at Schneider Electric",
  location: "Vancouver, BC, Canada",
  phone: "+1 (236) 869-2855",
  email: "anshul.israni01@gmail.com",
  linkedin: "https://www.linkedin.com/in/anshul-israni-24004b204/",
  github: "https://github.com/anshulI02",
  resumePath: "/resume/Anshul-Israni-Resume.pdf",
  availability: "Open to full-time roles in embedded, power electronics & digital systems",
  // Used for SEO. Set to the production domain after deploying to Vercel.
  url: "https://anshul-israni.vercel.app",
};

/**
 * Hero focus strip. States the domains Anshul specializes in and is seeking,
 * rather than achievements pulled from work experience.
 */
export const heroFocus = [
  {
    title: "Embedded Systems & Firmware",
    detail: "C firmware on STM32, ESP32, and PIC32 with BLE, CAN, SPI, and I²C",
  },
  {
    title: "Power Electronics & Energy",
    detail: "Battery systems, BMS, inverters, and hardware-in-the-loop validation",
  },
  {
    title: "Digital Systems & FPGA",
    detail: "SystemVerilog, MATLAB/Simulink, and digital design",
  },
];

export const about = {
  // Optional, off-the-clock line rendered as a closing note under the bio.
  // Left blank on purpose. Add a real personal detail in your own words
  // (what you build for fun, how you unwind, an interest outside the lab).
  // It only appears on the site when this is non-empty.
  personalNote: "",
  paragraphs: [
    "I'm an Electrical Engineering alum from the University of British Columbia with a strong interest in embedded systems, sustainable energy solutions, and control applications.",
    "My experience spans embedded firmware development (STM32, ESP32), PCB design using Altium and KiCAD, control design in MATLAB/Simulink, and system-level validation through Hardware-in-the-Loop (HIL) testing. I enjoy working at the intersection of hardware and software, developing control logic and reliable energy storage systems.",
    "My technical expertise is complemented by a collaborative mindset, adaptability, and a problem-solving attitude that lets me approach challenges creatively and uniquely. I'm passionate about using technology to build impactful solutions, and I'm looking for full-time embedded, power electronics, and digital systems roles where I can keep growing, learning, and contributing meaningfully.",
  ],
  philosophy: [
    {
      title: "Validate at every level",
      body: "Requirements, simulation, HIL, then hardware. A system isn't done when it compiles; it's done when its real-time behavior matches its model.",
    },
    {
      title: "Fundamentals before logic",
      body: "Most 'firmware bugs' start as a cold joint, a missing rail, or a wrong assumption at an interface. Disciplined bring-up beats clever debugging.",
    },
    {
      title: "Make testing repeatable",
      body: "A test another engineer can't reproduce isn't a test. I automate regression suites and write procedures with explicit pass/fail criteria.",
    },
  ],
  focusAreas: [
    "Embedded Systems & Firmware",
    "Power Electronics & Energy Systems",
    "Validation, Test & HIL",
    "FPGA & Digital Design",
  ],
};

export const education = {
  school: "University of British Columbia",
  degree: "BASc, Electrical Engineering",
  program: "APSC Co-op Program",
  period: "Sep 2020 - May 2026",
  location: "Vancouver, BC",
  expectedGrad: "Graduated May 2026",
  coursework: [
    "Power Electronics",
    "Control Systems",
    "Analog CMOS IC Design",
    "Digital Systems Design",
    "VLSI Systems",
  ],
  awards: [
    {
      title: "Dean's Honors List",
      detail: "2024–25 academic year",
    },
    {
      title: "Outstanding International Student Scholarship",
      detail: "$15,000 CAD merit award",
    },
  ],
};

export type Experience = {
  company: string;
  descriptor: string;
  role: string;
  period: string;
  /** Human-readable tenure, e.g. "1 yr" or "3 mos". */
  duration?: string;
  location: string;
  monogram: string;
  /** Clearbit logo URL — falls back to monogram if omitted or fails to load. */
  logo?: string;
  /** Short 1 to 2 sentence summary, shown without needing to expand. */
  summary: string;
  impact?: string;
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "Schneider Electric",
    descriptor: "Solar & Storage Division",
    role: "System Control & Energy Management Co-op",
    period: "May 2025 - Apr 2026",
    duration: "1 yr",
    location: "Richmond, BC",
    monogram: "SE",
    logo: "/images/1631312208065.jpg",
    summary:
      "I worked across two projects, the All-in-One Inverter System and Terra, developing and verifying system-level control logic for industry-standard power-flow modes including Self-Consumption, Grid-to-Vehicle, and Vehicle-to-Grid in MATLAB/Simulink. I authored structured requirements-based validation cases in Jama Connect and collaborated with senior engineers on Hardware-in-the-Loop (HIL) testing to ensure real-time controller behavior aligned with simulation. Across both projects, I gained hands-on experience in systems-level V&V, requirements traceability, and cross-functional issue resolution.",
    impact: "~40% faster regression testing through automated validation",
    tech: ["MATLAB/Simulink", "HIL Testing", "Jama", "Power Electronics"],
  },
  {
    company: "Fingerprint Technologies",
    descriptor: "E-bike startup",
    role: "Electrical & Electronics Engineer Co-op",
    period: "Jan 2025 - Mar 2025",
    duration: "3 mos",
    location: "North Vancouver, BC",
    monogram: "FT",
    logo: "/images/fingerprint_technologies_corp_logo.jpg",
    summary:
      "I implemented BLE firmware on ESP32 to stream real-time speed and cadence data to a mobile application, then expanded into motor-control PCB troubleshooting, diagnosing hardware faults and validating fixes through dynamic VESC testing. I also conducted comprehensive motor thermal performance testing on a 2WD dyno rig and designed a custom wire harness to integrate the entire drivetrain.",
    impact: "Two beta prototypes brought to production-ready state",
    tech: ["ESP32", "Embedded C", "BLE / GATT", "PCB Bring-up", "VESC"],
  },
  {
    company: "UBC Thunderbikes",
    descriptor: "Electric motorcycle design team",
    role: "Battery & Control-Circuitry Team Lead",
    period: "May 2022 - Dec 2024",
    duration: "2.5 yrs",
    location: "Vancouver, BC",
    monogram: "TB",
    logo: "/images/ubc_thunderbikes_logo.jpg",
    summary:
      "I led a team of 5 in the full-cycle design and development of a 28S3P battery pack (92V, 225A) across three modules for a Suzuki GSX-R600 electric motorcycle, from CAD models for bus bars and cell holders to fabricating the I/O wire harness interfacing with the BMS. I designed a voltage-divider-based charging circuit with precise voltage (58.4V) and current (7.5A) control for seamless BMS integration, and validated relay-control firmware in STM32CubeIDE for safe state transitions between ignition, operation, and charging modes. We showcased the motorcycle at the AHRMA Formula Lightning Race at WeatherTech Raceway Laguna Seca in July 2024.",
    impact: "100V pack integrated with CAN-based telemetry and protection",
    tech: ["LiFePO₄", "BMS / CAN Bus", "STM32", "Embedded C", "SolidWorks"],
  },
  {
    company: "STEMCELL Technologies",
    descriptor: "R&D Operations Division",
    role: "Scientific Data Management Co-op",
    period: "Sep 2023 - Apr 2024",
    duration: "8 mos",
    location: "Vancouver, BC",
    monogram: "ST",
    logo: "/images/1631301745636.jpg",
    summary:
      "I built a Lab Inventory Management System using Google Apps Script and Sheets, creating a live database for over 1,000 pieces of equipment that reduced asset search time by 25%. I also developed interactive lab floor plans dynamically linked to the inventory database and contributed to integrating a new equipment booking system. This role gave me practical exposure to quality-driven documentation standards and cross-functional collaboration within a regulated life sciences environment.",
    impact: "25% faster asset search across 1,000+ instruments",
    tech: ["Google Apps Script", "Automation", "Data Management"],
  },
  {
    company: "Tata Consultancy Services",
    descriptor: "Conversational AI, government services",
    role: "Conversational AI Developer",
    period: "Jul 2023 - Sep 2023",
    duration: "3 mos",
    location: "New Delhi, India",
    monogram: "TC",
    logo: "/images/tata_consultancy_services_logo.jpg",
    summary:
      "I developed five AI-powered chatbots using the Rasa framework to automate citizen query handling for government services, leveraging NLP for intent classification, entity recognition, and context-aware dialogue management. A key deliverable was an FAQ chatbot integrating over 50 entities for both predefined and dynamic responses. I also wrote Python scripts to fine-tune model behavior and ensure reliable, contextually relevant outputs.",
    impact: "5 specialized NLP chatbots deployed to automate query handling",
    tech: ["Python", "Rasa", "NLP", "Chatbots"],
  },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  category: "FPGA & RF" | "Controls & Robotics" | "Embedded";
  featured: boolean;
  summary: string;
  problem: string;
  solution: string;
  challenges: string[];
  lessons: string;
  tech: string[];
  links: { github?: string; docs?: string; demo?: string };
  /** Accent hue used by the generated card artwork */
  art: "array" | "gripper" | "robot" | "game" | "thermo" | "camera" | "clock" | "melody";
};

export const projects: Project[] = [
  {
    slug: "phased-array-antenna",
    title: "Phased Array Antenna System",
    period: "Sep 2024 - Apr 2025",
    category: "FPGA & RF",
    featured: true,
    summary:
      "Capstone for MDA Space: electronically steered satellite tracking with MUSIC direction-of-arrival estimation and FPGA beamforming, no moving parts.",
    problem:
      "Mechanically steered satellite-tracking antennas are bulky, slow, and expensive to maintain. MDA Space wanted proof that a compact phased array could track GPS satellites in medium Earth orbit by steering its beam electronically.",
    solution:
      "Built a 2×2 phased array prototype tracking a live laboratory transmitter, then validated scalability by simulating a 20×20 uniform rectangular array in MATLAB at the GPS L1 frequency (1.57542 GHz): modeling satellite motion from almanac orbital elements, MUSIC-based DOA estimation, Doppler shift, and dynamic beam steering. Implemented FPGA beamforming modules in SystemVerilog with real-time IQ phase shifting and trigonometric LUTs for hardware-accelerated electronic steering.",
    challenges: [
      "Implementing 2D MUSIC to separate signal from noise subspaces for high-resolution azimuth/elevation estimation in noisy conditions",
      "Incorporating Doppler shift into the received-signal model so tracking results reflected real satellite motion",
      "Proving 20×20 scalability in simulation because a full hardware build was infeasible within time and budget",
    ],
    lessons:
      "Simulation is a design-validation tool, not a substitute for hardware. The 2×2 prototype anchored the model in reality, and the model justified the architecture beyond it.",
    tech: ["SystemVerilog", "FPGA", "MATLAB", "MUSIC DOA", "Doppler Modeling", "SDR", "3D Printing"],
    links: {},
    art: "array",
  },
  {
    slug: "robotic-gripper",
    title: "Robotic Gripper System",
    period: "Jan 2023 - Apr 2023",
    category: "Controls & Robotics",
    featured: true,
    summary:
      "Closed-loop robotic claw with PID position control running in a 15 kHz interrupt service routine, holding under 5% steady-state error.",
    problem:
      "Grasping objects of different sizes and weights requires smooth, precise transitions between grasp, hold, and release. A naive open-loop approach either crushes or drops the payload.",
    solution:
      "Led the control subsystem: modeled motor dynamics and mechanical response in MATLAB/Simulink, tuned a closed-loop PID controller, and implemented it on an Arduino inside a timer-driven ISR at ~15 kHz. Encoder A/B quadrature signals were decoded by an HCTL-2022 IC into a 32-bit position count, read through PLD-based multiplexers to conserve I/O. An L298 H-bridge provided bidirectional drive; IR and pressure sensors added grasp-condition awareness. Mechanical side: DC motor, planetary gearbox, and rack-and-pinion actuation, modeled in SolidWorks with FEA.",
    challenges: [
      "Reading a 32-bit encoder count through limited microcontroller I/O without sacrificing loop rate",
      "Tuning PID against real mechanical compliance, achieving ~0.5 s settling, ~0.5 s rise, under 5% overshoot, beating design targets",
      "Keeping the ISR deterministic while juggling sensing, PID computation, and PWM updates",
    ],
    lessons:
      "Model-based design pays off: the Simulink model predicted the physical prototype closely enough that tuning on hardware took hours, not weeks.",
    tech: ["PID Control", "MATLAB/Simulink", "Arduino", "HCTL-2022", "L298 H-Bridge", "SolidWorks", "FEA"],
    links: {},
    art: "gripper",
  },
  {
    slug: "coin-picking-robot",
    title: "Coin-Picking Autonomous Robot",
    period: "Jan 2022 - Apr 2022",
    category: "Controls & Robotics",
    featured: true,
    summary:
      "Fully autonomous robot that detects, collects, and deposits coins inside a wire perimeter, built on an analog sensing front-end, a PIC32 brain, and a custom H-bridge drive.",
    problem:
      "Find and collect coins scattered inside a boundary with no human input: the robot must sense coins, distinguish the perimeter, and manipulate payloads, all from scratch-built hardware.",
    solution:
      "Built the sensing chain from first principles: a Colpitts-oscillator metal detector whose frequency shifts near a coin, and an LC tank circuit with op-amp conditioning to detect the perimeter wire's emission. A PIC32 microcontroller sequences detect, stop, pick, deposit, and resume, driving a discrete MOSFET H-bridge with optocoupler isolation for the drive motors and PWM servo actuation for a hand-wound electromagnet (28 AWG, 6 to 8 Ω) that lifts the coins.",
    challenges: [
      "Stabilizing analog oscillator thresholds so coin detection stayed reliable across supply and temperature variation",
      "Isolating noisy motor switching from the sensing front-end with optocouplers and careful grounding",
      "Sequencing all behaviors in firmware (C) with real-time sensor processing on a single MCU",
    ],
    lessons:
      "Analog front-ends fail in ways firmware can't fix. Tuning circuit thresholds early saved the control logic from chasing phantom detections.",
    tech: ["PIC32", "Embedded C", "Colpitts Oscillator", "MOSFET H-Bridge", "Optocouplers", "Servo / PWM"],
    links: {},
    art: "robot",
  },
  {
    slug: "capacitive-reaction-game",
    title: "Capacitive Sensor Reaction Game",
    period: "2023",
    category: "Embedded",
    featured: false,
    summary:
      "Two-player reaction game sensed through DIY capacitive pads. A 555-timer oscillator turns touch pressure into frequency, and an 8051-class MCU turns frequency into score.",
    problem:
      "Build an interactive game with no off-the-shelf input devices. The sensors themselves had to be designed, characterized, and read in real time.",
    solution:
      "Constructed capacitive pads from aluminum foil driven by a 555-timer oscillator; touch pressure changes capacitance, shifting the oscillation frequency. An AT89LP51RC2 measures the period with hardware timers, computes capacitance, and scores hits on an LCD, with a 2 kHz interrupt-driven speaker for feedback and nanosecond-resolution period measurement over 100-cycle averages.",
    challenges: [
      "Characterizing the capacitance-to-frequency curve so scoring thresholds matched human touch dynamics",
      "Interrupt-driven timing on an 8051-class part with multiple concurrent duties",
    ],
    lessons:
      "Verified sensor theory against collected data: measured capacitance rise and frequency drop matched predictions, which made threshold tuning systematic instead of guesswork.",
    tech: ["AT89LP51RC2", "555 Timer", "Capacitive Sensing", "Assembly", "LCD"],
    links: {},
    art: "game",
  },
  {
    slug: "temperature-monitor",
    title: "Real-Time Temperature Monitoring System",
    period: "2023",
    category: "Embedded",
    featured: false,
    summary:
      "A complete sensing-to-visualization pipeline: an LM335 sensor feeding an MCP3008 ADC over bit-banged SPI into a live Python strip-chart.",
    problem:
      "Monitor temperature with calibrated accuracy and visualize trends live, spanning analog sensing, MCU firmware, serial protocols, and desktop software.",
    solution:
      "Interfaced an LM335 sensor through an MCP3008 ADC via bit-banged SPI, converted readings on the microcontroller, streamed samples over UART, and built a Python matplotlib strip-chart with noise-filtering averages. Calibrated against known references and validated by observing live thermal response.",
    challenges: [
      "Bit-banging SPI reliably in assembly alongside continuous sampling",
      "Filtering ADC noise without hiding real thermal transients",
    ],
    lessons:
      "End-to-end ownership, from sensor physics to GUI, is the fastest way to find where a measurement chain actually loses accuracy.",
    tech: ["ATmega328P", "LM335", "MCP3008", "SPI", "UART", "Python", "matplotlib"],
    links: {},
    art: "thermo",
  },
  {
    slug: "camera-module",
    title: "OV7670 Camera Module",
    period: "2022",
    category: "Embedded",
    featured: false,
    summary:
      "640×480 image capture on an Arduino Nano, squeezing a parallel camera interface through an 8-bit MCU to a computer display.",
    problem:
      "Capture and display VGA-resolution images using a microcontroller with a fraction of the RAM needed for a single frame.",
    solution:
      "Configured the OV7670's registers over its SCCB (I²C-like) interface and streamed pixel data through the Nano to a host computer for display, managing strict timing between the camera's pixel clock and serial throughput.",
    challenges: [
      "Synchronizing to VSYNC/HREF/PCLK timing with no frame buffer to fall back on",
    ],
    lessons:
      "Datasheet fluency is a superpower. The entire project was register-level configuration and timing diagrams.",
    tech: ["Arduino Nano", "OV7670", "SCCB / I²C", "Serial", "Timing Analysis"],
    links: {},
    art: "camera",
  },
  {
    slug: "assembly-alarm-clock",
    title: "Assembly-Language Alarm Clock",
    period: "2022",
    category: "Embedded",
    featured: false,
    summary:
      "A full alarm clock (timekeeping, LCD, buttons, speaker) written entirely in 8051 assembly on an AT89LP51RC2.",
    problem:
      "Build a reliable, user-settable clock with alarm at the lowest level of the stack: no OS, no libraries, no C.",
    solution:
      "Wrote timekeeping, debounced button input for setting time and alarm, LCD driving, and speaker tone generation in assembly, coordinated through hardware timer interrupts.",
    challenges: [
      "Cycle-accurate timing and register-level peripheral control with no abstraction layer",
    ],
    lessons:
      "Assembly teaches you what every line of C actually costs, invaluable context for embedded work since.",
    tech: ["AT89LP51RC2", "8051 Assembly", "Timers / ISR", "LCD"],
    links: {},
    art: "clock",
  },
  {
    slug: "melody-player",
    title: "Arduino Melody Player",
    period: "2022",
    category: "Embedded",
    featured: false,
    summary:
      "Programmable tune player with preloaded themes, including Star Wars and Super Mario Bros, on a CEM-1203 buzzer.",
    problem:
      "Generate recognizable, multi-note melodies with accurate pitch and rhythm from a bare piezo buzzer.",
    solution:
      "Mapped note frequencies and durations into data tables and drove the CEM-1203 with timed square waves, with buttons to select among preloaded themes.",
    challenges: ["Getting rhythm right: tempo drift is instantly audible in a familiar tune"],
    lessons: "Even a toy project rewards a data-driven design: melodies as tables, player as engine.",
    tech: ["Arduino", "PWM / Tone Generation", "C"],
    links: {},
    art: "melody",
  },
];

export const projectCategories = ["All", "FPGA & RF", "Controls & Robotics", "Embedded"] as const;

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type Skill = { name: string; level: SkillLevel };

export type SkillCategory = {
  title: string;
  blurb: string;
  skills: Skill[];
};

/**
 * Levels are honest self-assessments:
 * 5 = daily driver · 4 = strong working proficiency · 3 = solid foundations
 * Categories and skills are ordered to lead with what matters most for
 * hardware, embedded, ASIC/FPGA, validation, firmware, and software roles.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    blurb: "Firmware-first languages, plus scripting for tooling and analysis",
    skills: [
      { name: "C (Embedded)", level: 5 },
      { name: "Python", level: 4 },
      { name: "Verilog / SystemVerilog", level: 4 },
      { name: "ARM Assembly", level: 3 },
    ],
  },
  {
    title: "Hardware Design & Simulation",
    blurb: "Schematic capture through assembled, working boards",
    skills: [
      { name: "Altium Designer", level: 4 },
      { name: "KiCAD", level: 4 },
      { name: "CircuitMaker", level: 3 },
      { name: "Cadence", level: 3 },
      { name: "PSIM", level: 3 },
    ],
  },
  {
    title: "Embedded Systems",
    blurb: "Platforms, protocols, and validation I've shipped firmware on",
    skills: [
      { name: "STM32", level: 4 },
      { name: "ESP32", level: 4 },
      { name: "ATmega328P", level: 5 },
      { name: "Arduino", level: 5 },
      { name: "PIC32", level: 4 },
      { name: "UART", level: 5 },
      { name: "SPI", level: 4 },
      { name: "I²C", level: 4 },
      { name: "CAN Bus", level: 4 },
      { name: "BLE / GATT", level: 4 },
    ],
  },
  {
    title: "Modelling & FPGA",
    blurb: "Model-based design and digital implementation",
    skills: [
      { name: "MATLAB / Simulink", level: 5 },
      { name: "Quartus", level: 4 },
      { name: "ModelSim", level: 4 },
      { name: "Simscape", level: 4 },
    ],
  },
  {
    title: "Prototyping & Fabrication",
    blurb: "From CAD to assembled hardware",
    skills: [
      { name: "PCB Layout & Assembly", level: 4 },
      { name: "Soldering & Rework", level: 5 },
      { name: "SolidWorks", level: 4 },
      { name: "3D Printing", level: 4 },
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
