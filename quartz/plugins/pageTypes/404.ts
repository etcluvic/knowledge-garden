import { QuartzPageTypePlugin } from "../types"
import { match } from "./matchers"
import { NotFound } from "../../components"
import { defaultProcessedContent } from "../vfile"
import { i18n } from "../../i18n"
import { FullSlug } from "../../util/path"

export const NotFoundPageType: QuartzPageTypePlugin = () => ({
  name: "404",
  priority: -1,
  match: match.none(),
generate(ctx) {
  const cfg = ctx?.cfg ?? ctx
  const notFound = (i18n(cfg?.locale ?? "en-US") as any)?.pages?.error?.title ?? "Not Found"
    const slug = "404" as FullSlug
    const [, vfile] = defaultProcessedContent({
      slug,
      text: notFound,
      description: notFound,
      frontmatter: { title: notFound, tags: [] },
    })

    return [
      {
        slug,
        title: notFound,
        data: vfile.data,
      },
    ]
  },
  layout: "404",
  frame: "minimal",
  body: NotFound,
})
