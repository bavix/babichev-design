import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorPage } from '../ErrorPage';
import { useI18n } from '../../i18n';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundaryClass extends Component<Props & { translate: (key: string) => string }, State> {
  constructor(props: Props & { translate: (key: string) => string }) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.props.onError?.(error, errorInfo);

    if (typeof window !== 'undefined' && window.console) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorPage
          code={500}
          title={this.props.translate('errors.somethingWentWrong')}
          description={this.props.translate('errors.unexpectedError')}
          backButtonText={this.props.translate('common.returnToHome')}
          backUrl="/"
        />
      );
    }

    return this.props.children;
  }
}

export function ErrorBoundary({ children, fallback, onError }: Props) {
  const { t } = useI18n();
  return (
    <ErrorBoundaryClass translate={t} fallback={fallback} onError={onError}>
      {children}
    </ErrorBoundaryClass>
  );
}
