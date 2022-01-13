import pinoLogger from 'pino';

class LoggerService {
  constructor() {
    this.logger = pinoLogger();
  }

  debug(object) {
    this.logger.debug(object);
  }

  info(object) {
    this.logger.info(object);
  }

  warn(object) {
    this.logger.warn(object);
  }

  error(object) {
    this.logger.error(object);
  }
}

export default LoggerService;
