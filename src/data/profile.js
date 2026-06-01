import {
  BrainCircuit, Code2, Cpu, Gauge, GitBranch, Layers3, RadioTower,
  Rocket, ScanLine, Settings2, ShieldCheck, Workflow,
} from 'lucide-react'

export const profile = {
  name: 'Himanshu Kumar Thakur',
  shortName: 'Himanshu.',
  role: 'Embedded Software Engineer | Robotics & Autonomous Systems',
  company: 'Aditya Precitech Ltd.',
  tagline: 'Engineering software that powers real machines.',
  email: 'thakurhk660@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/himanshu-kumar-thakur/',
  github: 'https://github.com/hktwga',
  resume: '/Himanshu_Kumar_Thakur_Embedded_Software_Engineer.pdf',
  primaryIdentity: 'Embedded Software Engineer',
  secondaryIdentity: 'Robotics & Autonomous Systems Engineer',
  coreAreas: [
    'Embedded Linux',
    'BSP Development',
    'Robotics',
    'Autonomous Systems',
    'Computer Vision',
    'System Integration',
    'Defense-Oriented Embedded Platforms',
  ],
  skillLevels: {
    Yocto: 'Intermediate',
    Buildroot: 'Intermediate',
    'Device Tree': 'Intermediate',
    'U-Boot': 'Intermediate',
    'Kernel Debugging': 'Intermediate',
    OpenCV: 'Intermediate',
    'Android Kotlin': 'Intermediate',
  },
}

export const stats = [
  { value: '03', label: 'Major Robotics Platforms' },
  { value: '10+', label: 'Linux BSP Integrations' },
  { value: '20+', label: 'Hardware Interfaces' },
  { value: '01', label: 'Month Field Validation' },
]

export const hireReasons = [
  { icon: Cpu, title: 'Embedded Linux Expertise', text: 'Hands-on experience in Linux bring-up, kernel customization, Device Tree configuration, system services, Linux internals, and platform integration on STM32MP1 and Raspberry Pi platforms.' },
  { icon: Layers3, title: 'BSP Development', text: 'Developed and maintained custom BSPs involving U-Boot, Device Tree, Yocto, Buildroot, board bring-up, peripheral enablement, and hardware validation.' },
  { icon: Gauge, title: 'Robotics Engineering', text: 'Designed and integrated autonomous UGV platforms, robotic arms, motor-control subsystems, encoder feedback systems, sensors, cameras, and vision pipelines.' },
  { icon: Workflow, title: 'End-to-End System Integration', text: 'Worked across bootloader, kernel, middleware, application software, Android interfaces, communication frameworks, and hardware validation.' },
  { icon: Rocket, title: 'Real Hardware Experience', text: 'Hands-on development and debugging on STM32MP1, Raspberry Pi Zero/2/3/4/5, ATmega series, ESP32, sensors, cameras, motor drivers, actuators, and robotics platforms.' },
  { icon: ShieldCheck, title: 'Engineering Ownership', text: 'Participated in customer discussions, requirement analysis, field testing, deployment, validation, debugging, and continuous product improvement.' },
]

export const skillGroups = [
  { icon: Code2, title: 'Embedded Linux', skills: ['Linux Internals', 'Linux Process Management', 'systemd', 'Shell Scripting'] },
  { icon: GitBranch, title: 'BSP Development', skills: ['Yocto', 'Buildroot', 'U-Boot', 'Device Tree', 'Board Bring-up', 'Kernel Debugging'] },
  { icon: Settings2, title: 'Programming & Middleware', skills: ['C', 'C++', 'Python', 'POSIX Threads', 'Shared Memory', 'Message Queues', 'DBus', 'Socket Programming'] },
  { icon: Cpu, title: 'Hardware Platforms', skills: ['STM32MP1', 'Raspberry Pi Zero', 'Raspberry Pi 2', 'Raspberry Pi 3', 'Raspberry Pi 4', 'Raspberry Pi 5', 'ATmega Series', 'ESP32'] },
  { icon: RadioTower, title: 'Communication Interfaces', skills: ['UART', 'SPI', 'I2C', 'GPIO', 'PWM'] },
  { icon: Gauge, title: 'Robotics & Control', skills: ['UGV Systems', 'Robotic Arms', 'Motor Control', 'Encoder Feedback', 'Sensor Integration', 'Autonomous Systems'] },
  { icon: ScanLine, title: 'Computer Vision', skills: ['OpenCV', 'YOLO', 'Stereo Vision', 'Thermal Imaging', 'Image Processing'] },
  { icon: BrainCircuit, title: 'System Integration', skills: ['Android Integration', 'Defense Systems', 'Cloud Workflows', 'Validation', 'Diagnostics', 'Reliability Testing'] },
]

export const timeline = [
  { year: 'May 2025 - Present', title: 'Embedded Software Engineer', place: 'Aditya Precitech Ltd.', text: 'Working on Embedded Linux platforms, BSP development, robotic systems, autonomous systems, defense-oriented embedded solutions, and distributed control architectures.' },
  { year: '2025', title: 'MMTS & RIS Defense Platform', place: 'Defense Automation', text: 'Developed Android-to-Linux-to-microcontroller architectures, operator interfaces, automation workflows, and target intervention systems.' },
  { year: 'May 2025 - September 2025', title: 'Autonomous UGV Platform', place: 'Applied Robotics', text: 'Led development activities within a five-member R&D team, including customer requirement discussions, field testing, AI-enabled workflows, cloud connectivity, thermal imaging, navigation, and precision spraying operations.' },
  { year: 'Completed May 2025', title: 'B.Tech Computer Science & Engineering', place: 'Siddharth Institute of Engineering & Technology', text: 'Developed strong foundations in software engineering, embedded systems, Linux, robotics, automation, and computer vision.' },
]
