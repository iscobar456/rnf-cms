import config from "@payload-config"
import { getPayload } from "payload"
import { writeFile } from "fs";
import path from "path";


export const writeIndexProps = async () => {
  const payload = await getPayload({ config });
  const posts = await payload.find({
    collection: 'posts',
    depth: 2,
  })
  const fileName = 'index_props.json'
  writeFile(
    path.join(process.cwd(), 'data', fileName),
    JSON.stringify(posts),
    (err) => {
      if (err) {
        console.error("Could not write index props file")
      }
    }
  )
}
