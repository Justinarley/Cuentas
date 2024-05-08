import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const { Meta } = Card;

export function Cuentas() {
  const navigate = useNavigate();

  const gastosCardClick = () => {
    navigate('/tablaControl');
  };

  return (
    <div className="container">
      <div className="card" onClick={gastosCardClick}>
        <Card hoverable style={{ width: 300, backgroundColor: '#C21919' }}>
          <Meta title="Cuentas de Gastos" description="Haz clic para ver más detalles" />
        </Card>
      </div>
    </div>
  );
}
