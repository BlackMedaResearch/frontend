export const dateString = () => {
  // Create a new Date object for the current date and time
  const currentDate = new Date();

  // Decrement the year if the current month is January (0)
  if (currentDate.getMonth() === 0) {
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    currentDate.setMonth(11);
  } else {
    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  // Get the last day of the previous month
  const lastDayOfPreviousMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Set the day to the last day of the previous month if the current day is greater than the last day of the previous month
  if (currentDate.getDate() > lastDayOfPreviousMonth) {
    currentDate.setDate(lastDayOfPreviousMonth);
  }

  // Format the date as a string in the format "YYYY-MM-DD"
  const formattedDate = `${currentDate.getFullYear()}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;

  console.log(formattedDate);
  return formattedDate;
};
