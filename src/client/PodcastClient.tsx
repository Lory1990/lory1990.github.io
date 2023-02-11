import xmlParser from "fast-xml-parser"
import axios from "axios"

export async function fetchPodcastData() {
  const data = await axios.get("https://anchor.fm/s/6b6d6ff8/podcast/rss")

  const parsed = new xmlParser.XMLParser({
    parseTagValue: true,
    ignoreAttributes: false,
    parseAttributeValue: true,
    allowBooleanAttributes: true
  }).parse(data.data)?.rss?.channel

  return {
    ...parsed,
    item: parsed.item.map((single, index) => {
      return {
        ...single,
        date: single.pubDate,
        audioUrl: single.enclosure["@_url"],
        audioLength: single.enclosure["@_length"],
        image: single?.["itunes:image"]?.["@_href"]
      }
    })
  }
}
