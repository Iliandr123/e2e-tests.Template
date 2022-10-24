const QaseApiHelper = require('./QaseApiHelper');

async function deleteLastTestRun() {
  const res = await QaseApiHelper.getAllTestRuns();
  const testRuns = res.result.entities;
  const idsToDelete = testRuns.filter(({ end_time: endTime }) => endTime === null);

  if (idsToDelete.length === 2) {
    QaseApiHelper.deleteTestRun(idsToDelete[0].id);
  }
}

deleteLastTestRun();
