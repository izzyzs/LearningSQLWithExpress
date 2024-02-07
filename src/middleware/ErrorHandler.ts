import { NextFunction, Request, Response } from "express";

namespace ExportWrapper {
    class CustomAPIError extends Error {
        statusCode: number;
    
        constructor(message: string, statusCode: number) {
            super(message);
            this.statusCode = statusCode;
        }
    }
    
    const createError = (msg: string, statusCode: number) => {
        return new CustomAPIError(msg, statusCode);
    }
    
    const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof CustomAPIError) {
            return res.status(err.statusCode).json({ msg: err.message });
        }
        return res.status(500).json({msg: 'Something is wrong on our end, try again.'})
    }
    
}

export default ExportWrapper;