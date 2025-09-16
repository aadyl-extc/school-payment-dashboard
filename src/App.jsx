
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionDetails from "./pages/TransactionStatusCheck";
import TransactionsTable from "./components/TransactionTable";
import SchoolTransactions from "./pages/TransactionsBySchool";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionsTable />} />
        <Route path="/transactions/:customOrderId" element={<TransactionDetails />} />
        <Route path="/transactions/school/:schoolId" element={<SchoolTransactions />} />
      </Routes>
    </Router>
  );
}

export default App;
