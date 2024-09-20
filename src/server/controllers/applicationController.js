import Application from '../models/applicationModel.js';

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
  console.log(`LOOK HERE ${req.body}`);
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
    console.log(allApps);
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

applicationController.deleteApplication = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedApp = await Application.findOneAndDelete({ _id: id });
    if (!deletedApp) {
      return next({
        log: `applicationController.deleteApplication ERROR: ${err}`,
        message: {
          err: 'Cannot find application',
        },
        status: 404,
      });
    }
    return next();
  } catch (err) {
    return next({
      log: `applicationController.deleteApplication ERROR: ${err}`,
      message: {
        err: 'Error occured in applicationController.deleteApplication',
      },
      status: 500,
    });
  }
};

// applicationController.getIndividualApplication = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const results = await Application.findOne(id);
//     res.body.results = results;
//     return next();
//   } catch (err) {
//     return next({
//       log: `applicationController.getIndividualApplication ERROR: ${err}`,
//       message: {
//         err: 'Error occured in applicationController.getIndividualApplication',
//       },
//       status: 500,
//     });
//   }
// };

export default applicationController;
