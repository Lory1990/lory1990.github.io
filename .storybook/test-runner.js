// .storybook/test-runner.js
const { toMatchImageSnapshot } = require("jest-image-snapshot")
const { injectAxe, checkA11y } = require("axe-playwright")

const customSnapshotsDir = `${process.cwd()}/__snapshots__`

const wait = (timeout = 500) => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve()
    }, 500)
  )
}

module.exports = {
  async preRender(page) {
    await injectAxe(page)
  },
  setup() {
    expect.extend({ toMatchImageSnapshot })
  },
  async postRender(page, context) {
    // If you want to take screenshot of multiple browsers, use
    // page.context().browser().browserType().name() to get the browser name to prefix the file name

    await wait(500)
    const screen = await page.$("#root > *").then(root => root ?? undefined)
    const image = await screen.screenshot()

    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
      failureThresholdType: "percent",
      failureThreshold: 0.1
    })

    if (process.env.CHECK_ACCESSIBILITY === "true") {
      await checkA11y(page, "#root", {
        detailedReport: true,
        detailedReportOptions: {
          html: true
        }
      })

      const accessibilityTree = await page.accessibility.snapshot()
      expect(accessibilityTree).toMatchSnapshot()
    }
  }
}
