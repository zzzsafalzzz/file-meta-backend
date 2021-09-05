import { Schema } from 'joi';
import { Response, Request, NextFunction } from 'express';

/**
 * Middleware creator for request body validation.
 *
 * @param {Schema} expectedSchema
 * @returns {(req: Request, res: Response, next: NextFunction) => void}
 */
export function body(expectedSchema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = expectedSchema.validate(req.body, { abortEarly: false });

    if (error) {
      return next(error);
    }

    next();
  };
}
