export class DesignSystemError extends Error {
  constructor(
    message: string,
    public component: string
  ) {
    super(`[${component}] ${message}`);
    this.name = 'DesignSystemError';
  }
}

export function createError(component: string, message: string): DesignSystemError {
  return new DesignSystemError(message, component);
}
