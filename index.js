const tableData = document.querySelector("tbody");
const expenseTotal = document.querySelector("#expense-total");
const button = document.querySelector("button");

button.addEventListener("click", calculateExpenses);

const expenses = [5, 7, 12, 15];

expenses.forEach((expense) => {
  // Create a row element
  const row = document.createElement("tr");

  // Create a data element
  const data = document.createElement("td");

  // Create an input element so you can store the value
  const input = document.createElement("input");

  // Add the name attribute
  input.setAttribute("name", "expense");

  // Set the input to readonly. That way it can not be edited and can be styled to hide the input element
  input.setAttribute("readonly", true);

  // Add a class for styling
  input.classList.add("expense-input");

  // Set the value
  input.value = expense;

  // Append the elements to each other
  data.appendChild(input);
  row.appendChild(data);

  // Add to the DOM
  tableData.appendChild(row);
});

function calculateExpenses() {
  // Create a node list of all the expenses elements
  const expenses = tableData.querySelectorAll('[name="expense"]');
  // Initialise the total
  let total = 0;
  // Loop overt the expenses and add to the total
  expenses.forEach((expense) => {
    // The value is stored as a string, so it must be parsed to an integer
    total += parseInt(expense.value);
  });
  expenseTotal.innerText = total;
}
