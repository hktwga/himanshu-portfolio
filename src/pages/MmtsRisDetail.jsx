import { Activity, AppWindow, Cpu, Gauge, Network, RadioTower, Settings2, Workflow } from 'lucide-react'
import RoboticsShowcaseDetail from './RoboticsShowcaseDetail'

const featureIcons = [AppWindow, Network, Workflow, Cpu, Settings2, Gauge, RadioTower, Activity]

export default function MmtsRisDetail({ project, nextProject }) {
  return <RoboticsShowcaseDetail project={project} nextProject={nextProject} featureIcons={featureIcons} />
}
