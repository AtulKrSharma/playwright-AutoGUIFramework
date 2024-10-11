// // Select the first checkbox by role
// let checkbox = page.getByRole("checkbox").nth(0);

// // Wait for the checkbox to be visible before interacting with it
// await checkbox.waitFor({ state: "visible" });

// // Check if the checkbox is already checked (this returns a promise, so await it)
// const isChecked = await checkbox.isChecked();

// // Check the checkbox if it's not already checked
// if (!isChecked) {
//   await checkbox.check(); // This also returns a promise, so await it
// }
