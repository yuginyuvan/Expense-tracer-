let totalBudget = 0;
let expenses = [];

// Set Budget Function
function setBudget() {
    const budgetInput = document.getElementById("budget").value;

    if (budgetInput && parseFloat(budgetInput) > 0) {
        totalBudget = parseFloat(budgetInput);
        updateBudgetDisplay();
    } else {
        alert("Enter a valid budget amount.");
    }
}

// Update Budget Display
function updateBudgetDisplay() {
    const spent = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    document.getElementById("totalBudget").textContent = totalBudget.toFixed(2);
    document.getElementById("remaining").textContent = (totalBudget - spent).toFixed(2);
}

// Add Expense Form Submit
document.getElementById("expenseForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (name && amount > 0 && category) {
        expenses.push({
            name,
            amount,
            category
        });

        updateTable();
        updateBudgetDisplay();
        this.reset();
    } else {
        alert("Please fill in all fields with valid values.");
    }
});

// Update Expense Table
function updateTable() {
    const table = document.getElementById("expenseTable");
    table.innerHTML = "";

    expenses.forEach(exp => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${exp.name}</td>
            <td>₹${exp.amount.toFixed(2)}</td>
            <td>${exp.category}</td>
        `;

        table.appendChild(row);
    });
}