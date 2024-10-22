const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const genders = ["Male", "Female", "Other"];

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const dayName = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const monthOptions = monthNames.map((month) => ({
  value: month,
  label: month,
}));

export const genderOptions = genders.map((gender) => ({
  value: gender.toLowerCase(),
  label: gender,
}));

export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));

export const dayOptions = dayName.map((item) => ({
  value: item,
  label: item,
}));
