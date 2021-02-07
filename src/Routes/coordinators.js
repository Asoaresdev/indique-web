export const goToCandidate = (history) => {
  history.push("/candidate");
};

export const goToSelect = (history) => {
  history.push("/select");
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

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToHome = (history) => {
  history.push("/");
};

export const goBack = (history) => {
  history.goBack();
};
