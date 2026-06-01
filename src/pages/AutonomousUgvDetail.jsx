import { CheckCircle2, Cpu, Gauge, RadioTower, ScanLine, Sprout, Workflow } from 'lucide-react'
import RoboticsShowcaseDetail from './RoboticsShowcaseDetail'

const featureIcons = [Workflow, ScanLine, RadioTower, Cpu, Sprout, Gauge, CheckCircle2, Workflow]

export default function AutonomousUgvDetail({ project, nextProject }) {
  return <RoboticsShowcaseDetail project={project} nextProject={nextProject} featureIcons={featureIcons} />
}
