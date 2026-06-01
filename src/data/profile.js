import {
  Boxes, BrainCircuit, Code2, Cpu, Gauge, GitBranch, Layers3, RadioTower,
  Rocket, ScanLine, Settings2, ShieldCheck, Workflow,
} from 'lucide-react'

export const profile = {
  name: 'Himanshu Kumar Thakur',
  shortName: 'Himanshu.',
  role: 'Embedded Linux | BSP | Robotics Software Engineer',
  company: 'Aditya Precitech Ltd.',
  email: 'himanshu.engineer@example.com',
  linkedIn: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  resume: '/resume.pdf',
}

export const stats = [
  { value: '04+', label: 'Embedded platforms' },
  { value: '03', label: 'Robotics systems' },
  { value: '10+', label: 'Linux projects' },
  { value: '12+', label: 'System integrations' },
]

export const hireReasons = [
  { icon: Cpu, title: 'Embedded Linux Expertise', text: 'Hands-on Linux internals, platform integration, and low-level debugging on real hardware.' },
  { icon: Layers3, title: 'BSP Development', text: 'Board bring-up across bootloader, kernel, device tree, root filesystem, and validation.' },
  { icon: Gauge, title: 'Robotics Engineering', text: 'Motor control, feedback loops, sensors, vision pipelines, and autonomous behaviors.' },
  { icon: Workflow, title: 'End-to-End Integration', text: 'Comfortable crossing hardware, firmware, Linux services, applications, and cloud workflows.' },
  { icon: Rocket, title: 'Rapid Learning', text: 'Fast at converting unfamiliar hardware and complex requirements into working systems.' },
  { icon: ShieldCheck, title: 'Engineering Ownership', text: 'Owns problems through root-cause analysis, implementation, field testing, and iteration.' },
]

export const skillGroups = [
  { icon: Code2, title: 'Embedded Linux', skills: ['Linux Internals', 'Kernel Debugging', 'POSIX', 'Shell'] },
  { icon: GitBranch, title: 'BSP Development', skills: ['Yocto', 'Buildroot', 'U-Boot', 'Device Tree'] },
  { icon: Settings2, title: 'Robotics', skills: ['UGV Systems', 'Robotic Arms', 'Motor Control', 'Encoders'] },
  { icon: RadioTower, title: 'Middleware', skills: ['IPC', 'UART', 'Multithreading', 'System Services'] },
  { icon: Cpu, title: 'Hardware Platforms', skills: ['STM32MP1', 'Raspberry Pi', 'ATmega2560', 'ESP32'] },
  { icon: Boxes, title: 'Android Development', skills: ['Kotlin', 'Operator UI', 'Device Connectivity', 'Automation'] },
  { icon: ScanLine, title: 'Computer Vision', skills: ['OpenCV', 'Stereo Vision', 'Object Detection', 'AI/ML'] },
  { icon: BrainCircuit, title: 'System Integration', skills: ['Defense Systems', 'Cloud Workflow', 'Validation', 'Diagnostics'] },
]

export const timeline = [
  { year: '2025 - Present', title: 'Embedded Software Engineer', place: 'Aditya Precitech Ltd.', text: 'Building Linux platforms, defense automation systems, and robotic subsystems.' },
  { year: '2025', title: 'STM32MP1 Robotic Arm', place: 'BSP + Robotics Platform', text: 'Integrated board support, motor drivers, encoder feedback, and stereo vision.' },
  { year: '2024', title: 'Autonomous UGV Platform', place: 'Applied Robotics', text: 'Developed navigation, precision actuation, thermal sensing, and cloud telemetry.' },
  { year: '2024', title: 'MMTS Defense System', place: 'Defense Automation', text: 'Created an operator-driven distributed control system across Android and embedded nodes.' },
  { year: '2021 - 2025', title: 'B.Tech Engineering', place: 'Engineering Foundation', text: 'Built a strong foundation in embedded systems, software engineering, and electronics.' },
]
