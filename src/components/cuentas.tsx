import { useState } from 'react';
import { Card, Table } from 'antd';
import '../App.css';

const { Meta } = Card;

export function Cuentas() {
  const [showSavingsTable, setShowSavingsTable] = useState(false);
  const [showExpensesTable, setShowExpensesTable] = useState(false);

  const handleSavingsCardClick = () => {
    setShowSavingsTable(true);
    setShowExpensesTable(false);
  };

  const handleExpensesCardClick = () => {
    setShowSavingsTable(false);
    setShowExpensesTable(true);
  };

  const savingsData = [
    { key: '1', category: 'Comida', amount: 200 },
    { key: '2', category: 'Transporte', amount: 100 },
    { key: '3', category: 'Entretenimiento', amount: 50 },
  ];

  const expensesData = [
    { key: '1', category: 'Alquiler', amount: 800 },
    { key: '2', category: 'Compras', amount: 300 },
    { key: '3', category: 'Facturas', amount: 200 },
  ];

  const columns = [
    {
      title: 'Categoría',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Monto',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  return (
    <>
      <div className="container">
        <div className="card" onClick={handleSavingsCardClick}>
          <Card hoverable style={{ width: 300, backgroundColor: '#69c0ff' }}>
            <Meta title="Cuentas de Ahorro" description="Haz clic para ver más detalles" />
          </Card>
          {showSavingsTable && <Table dataSource={savingsData} columns={columns} />}
        </div>
        <div className="card" onClick={handleExpensesCardClick}>
          <Card hoverable style={{ width: 300, backgroundColor: '#ff7875' }}>
            <Meta title="Cuentas de Gastos" description="Haz clic para ver más detalles" />
          </Card>
          {showExpensesTable && <Table dataSource={expensesData} columns={columns} />}
        </div>
      </div>
    </>
  );
}

