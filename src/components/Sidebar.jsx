export default function Sidebar() {
  return (
    <nav className="w-60 min-h-screen bg-amber-300 p-4 flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Expense Tracker</h2>
      <ul>
        <li className="px-3 py-2 rounded hover:bg-amber-400 cursor-pointer">
          Dashboard
        </li>
        <li className="px-3 py-2 rounded hover:bg-amber-400 cursor-pointer">
          Expenses
        </li>
        <li className="px-3 py-2 rounded hover:bg-amber-400 cursor-pointer">
          Invoices
        </li>
      </ul>
    </nav>
  );
}
