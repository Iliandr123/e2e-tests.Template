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
  const response = await QaseApiHelper.getAllTestRuns()
    .then((res) => res.result.entities);
  const lastTestRunId = await getLastCreatedTestRun(response)
    .then((testRun) => testRun.id);

  if (isAllTestCasesPassed(response) === true) {
    await QaseApiHelper.completeTestRun(lastTestRunId);
  }
}

completeLastTestRun();
