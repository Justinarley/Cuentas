import { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { ValueType } from 'rc-input/lib/interface';

export function TablaControl() {
  const [valorTotal, setValorTotal] = useState("0");
  const [gastos, setGastos] = useState([
    { category: 'Comida', percentage: 60, amount: 0 },
    { category: 'Transporte', percentage: 10, amount: 0 },
    { category: 'Salidas', percentage: 10, amount: 0 },
    { category: 'Otro', percentage: 20, amount: 0 },
  ]);

  const valorTotalCambio = (e: { target: { value: string; }; }) => {
    const newValue = parseFloat(e.target.value);
    setValorTotal(newValue.toString());

    const updatedExpenses = gastos.map(expense => ({
      ...expense,
      amount: (newValue * expense.percentage) / 100,
    }));
    setGastos(updatedExpenses);
  };

  const handlePercentageChange = (value: string, category: string) => {
    const updatedExpenses = gastos.map(expense => {
      if (expense.category === category) {
        return { ...expense, percentage: parseFloat(value) };
      }
      return expense;
    });
    setGastos(updatedExpenses);

    const newValue = parseFloat(valorTotal); 
    const recalculatedExpenses = updatedExpenses.map(expense => ({
      ...expense,
      amount: (newValue * expense.percentage) / 100,
    }));
    setGastos(recalculatedExpenses);
  };

  const columns = [
    {
      title: 'Categoría',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Porcentaje',
      dataIndex: 'percentage',
      key: 'percentage',
      render: (text: ValueType, record: { category: any; }) => (
        <Input
          value={text}
          onChange={e => handlePercentageChange(e.target.value, record.category)}
          suffix="%"
        />
      ),
    },
    {
      title: 'Cantidad asignada',
      dataIndex: 'amount',
      key: 'amount',
      render: (text: ValueType) => `$ ${text}`,
    },
  ];

  return (
    <div>
      <Input
        placeholder="Ingrese el valor total"
        type="number"
        value={valorTotal}
        onChange={valorTotalCambio}
      />
      <Table dataSource={gastos} columns={columns} pagination={false} />
      <Button type="primary" style={{ marginTop: '10px' }}>
        Guardar
      </Button>
    </div>
  );
}
