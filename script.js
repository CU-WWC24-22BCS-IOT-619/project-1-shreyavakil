document.getElementById('crypto-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const cryptoName = document.getElementById('crypto-name').value;
  const cryptoAmount = parseFloat(document.getElementById('crypto-amount').value);
  const cryptoPrice = parseFloat(document.getElementById('crypto-price').value);
  const totalValue = (cryptoAmount * cryptoPrice).toFixed(2);

  // Create a new table row
  const tableBody = document.querySelector('#portfolio-table tbody');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${cryptoName}</td>
    <td>${cryptoAmount}</td>
    <td>$${cryptoPrice.toFixed(2)}</td>
    <td>$${totalValue}</td>
  `;

  // Add the new row to the table
  tableBody.appendChild(newRow);

  // Clear the form
  document.getElementById('crypto-form').reset();
});
