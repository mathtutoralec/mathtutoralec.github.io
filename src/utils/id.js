/* eslint-disable */
// ----------------------------------------------------------------------

export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const objectId = () => {
  const timestamp = Math.floor(new Date().getTime() / 1000).toString(16);
  const machineId = Math.floor(Math.random() * 16777215).toString(16);
  const processId = Math.floor(Math.random() * 65535).toString(16);
  const increment = Math.floor(Math.random() * 16777215).toString(16);

  // Ensure each segment is exactly 6 characters long
  return [
    timestamp.padStart(8, "0"),
    machineId.padStart(6, "0"),
    processId.padStart(4, "0"),
    increment.padStart(6, "0"),
  ].join("");
};
