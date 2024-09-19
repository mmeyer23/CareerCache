const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  dateApplied: { type: String, required: true },
  resumeVersion: { type: String, required: true },
  company: { type: String, required: true },
  companyContactInfo: { type: String, required: false },
  jobTitle: { type: String, required: true },
  jobSource: { type: String, required: true },
  followedUp: { type: String, required: false },
  followedUpDate: { type: String, required: false },
  receivedResponse: { type: String, required: false },
  notes: { type: String, required: false },
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;
