import type { NextFunction, Request, Response } from "express";

export function cacheControlNoCache(req: Request, res: Response, next: NextFunction): void {
	res.setHeader("Cache-Control", "no-cache");
	next();
}
