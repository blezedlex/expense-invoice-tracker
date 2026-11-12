export default function Sidebar() {
  return (
    <nav className="flex flex-col bg-amber-300 p-4">
      <h2 className="text-2xl font-bold">Expense Tracker</h2>
      <ul>
        <li>Dashboard</li>
        <li>Expenses</li>
        <li>Invoices</li>
      </ul>
    </nav>
  );
}
