let basePath = "/employee/api/v1";

let routes = {
  apiEndPoints: {
    basePath: basePath,
    auth: {
      basePath: basePath + "/login"
    },
    employee: {
      basePath: basePath + "/employee",
      usersId: basePath + "/user/:userId",
      dietData: basePath + "/user/:patientId/diet",
      appointment: basePath + "/patient/appointment/make"
    }
  }
};

module.exports = { routes };
