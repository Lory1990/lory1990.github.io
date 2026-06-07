export interface TimelineEvent {
  position: string
  company: string
  location: string
  from: string
  to: string
  description: string
  /** Visually emphasises signature roles in the timeline. */
  highlight?: boolean
  /** Short keywords surfaced under the role (e.g. "SME Banking", "Microservices"). */
  tags?: string[]
}
