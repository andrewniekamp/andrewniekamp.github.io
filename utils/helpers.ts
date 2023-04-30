import { START_DATE } from "./constants-about";

/** Returns a rounded-down number of years since I started working as a developer */
export const yearsOfExperience = (): number => {
  const startDate = START_DATE;
  const currentDate = new Date();

  const timeDiffInMs = currentDate.getTime() - startDate.getTime();
  const timeDiffInYears = timeDiffInMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(timeDiffInYears);
};
