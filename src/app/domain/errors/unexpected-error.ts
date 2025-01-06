export class UnexpectedError extends Error {
  constructor() {
    super("Um erro inesperado aconteceu. Tente novamente em breve.");
    this.name = "UnexpectedError";
  }
}
