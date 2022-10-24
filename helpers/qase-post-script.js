const QaseApiHelper = require('./QaseApiHelper');

async function getLastCreatedTestRun(res) {
  return res[res.length - 1];
}

async function isAllTestCasesPassed(res) {
  getLastCreatedTestRun(res)
    .then(({ stats: runStats }) => {
      if (runStats.total === runStats.passed) {
        return true;
      }
      return false;
    });
}

async function completeLastTestRun() {
  const res = await QaseApiHelper.getAllTestRuns();
  const lastTestRunId = await getLastCreatedTestRun(res.result.entities)
    .then((testRun) => testRun.id);

  if (isAllTestCasesPassed(res.result.entities)) {
    await QaseApiHelper.completeTestRun(lastTestRunId);
  }
}

completeLastTestRun();
