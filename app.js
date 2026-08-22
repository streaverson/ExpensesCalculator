const form = document.querySelector("#expense-form");
const titleInput = document.querySelector("#title");
const amountInput = document.querySelector("#amount");
const categoryInput = document.querySelector("#category");
const listElement = document.querySelector("#expense-list");
const totalElement = document.querySelector("#total-amount");

let expenses = [];

function render() {
  listElement.innerHTML = "";

  expenses.forEach((expense) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <div class="info">
        <span class="category-tag">${expense.category}</span>
        <span class="title">${expense.title}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 10px;">
        <span class="amount">${expense.amount + ""} تومان</span>
        <button class="delete-btn" onclick="deleteExpense(${expense.id})">حذف</button>
    </div>
    `;

    listElement.appendChild(li);
  });
  updateTotal();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newExpense = {
    id: Date.now(),
    title: titleInput.value,
    amount: Number(amountInput.value),
    category: categoryInput.value,
  };
  expenses.push(newExpense);
  console.log(expenses);
  render();
  form.reset();
});

function deleteExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
  render();
}

function updateTotal() {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  totalElement.textContent = total.toLocaleString() + "تومان";
}
