import { Graph, Thing, WithContext } from "schema-dts"

export default function JsonLd<T extends Thing>({
  data,
}: {
  data: WithContext<T> | Graph
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
