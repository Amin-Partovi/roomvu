export function convertIdToDate(id: number) {
  // Get the current date and time
  const currentDate = new Date();

  // Subtract days based on the id from the current date
  const correspondingDate = new Date(currentDate);
  correspondingDate.setDate(currentDate.getDate() - id);

  // Format the date to "MMM dd, yyyy" (e.g., "Jan 27, 2023")
  const formattedDate = correspondingDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
}
