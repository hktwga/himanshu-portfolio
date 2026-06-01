import { CheckCircle2, Code2, Cpu, Gauge, GitBranch, ScanLine, Settings2, Workflow } from 'lucide-react'
import RoboticsShowcaseDetail from './RoboticsShowcaseDetail'

const featureIcons = [GitBranch, Code2, Settings2, Gauge, ScanLine, Cpu, Workflow, CheckCircle2]

export default function RoboticArmDetail({ project, nextProject }) {
  return <RoboticsShowcaseDetail project={project} nextProject={nextProject} featureIcons={featureIcons} />
}
