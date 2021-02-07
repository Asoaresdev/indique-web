export const goToCandidate = (history) => {
  history.push("/candidate");
};

export const goToMentor = (history) => {
  history.push("/mentor");
};

export const goToCompany = (history) => {
  history.push("/company");
};

export const goToDashboard = (history) => {
  history.push("/dashboard");
};

export const goBack = (history) => {
  history.goBack();
};
