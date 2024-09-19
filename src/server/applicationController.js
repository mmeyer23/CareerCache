import Application from './applicationModel.js';

const applicationController = {};

applicationController.addApplication = async (req, res, next) => {
  const {
    dateApplied,
    resumeVersion,
    company,
    companyContactInfo,
    jobTitle,
    jobSource,
    followedUp,
    followedUpDate,
    receivedResponse,
    notes,
  } = req.body;
  try {
    const newApplication = new Application({
      dateApplied,
      resumeVersion,
      company,
      companyContactInfo,
      jobTitle,
      jobSource,
      followedUp,
      followedUpDate,
      receivedResponse,
      notes,
    });
    const completed = await newApplication.save();
    res.locals.done = completed;
    return next();
  } catch (err) {
    return next({
      log: `applicationController.addApplication ERROR: ${err}`,
      message: { err: 'Error occured in applicationController.addApplication' },
      status: 500,
    });
  }
};

applicationController.getAllApplications = async (req, res, next) => {
  try {
    const allApps = await Application.find();
    res.locals.allApps = allApps;
    return next();
  } catch (err) {
    return next({
      log: `applicationController.getAllApplications ERROR: ${err}`,
      message: {
        err: 'Error occured in applicationController.getAllApplications',
      },
      status: 500,
    });
  }
};

export default applicationController;
