import LoggerService from 'helpers/logger';
import React from 'react';
import { Wrapper } from './styled';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.loggerService = new LoggerService();
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    // logError(error, errorInfo);
    this.loggerService.error(error);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <Wrapper>Something went wrong.</Wrapper>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;