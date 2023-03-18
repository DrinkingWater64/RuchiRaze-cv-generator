const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    moboleNumber: String,
    email: String,
    city: String,
    address: String,
    socialMediaLinks: [String],
    educations: [
      {
        school: String,
        degree: String,
        joinYear: Date,
        gradYear: Date,
      },
    ],
    experiences: [
      {
        jobTitle: String,
        company: String,
        joinYear: Date,
        leaveYear: Date,
        description: String,
      },
    ],
    skills: [String],
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("cvs", schema);
