import { Request, Response } from "express";
import Tutorial from "../models/tutorial.model";
import tutorialRepository from "../repositories/tutorial.repository";

export default class TutorialController {
    async create(req: Request, res: Response) {
        try {
            const tutorial = req.body;
            res.status(201).json({msg: 'Your item was created!', reqBody: req.body});
        } catch (error) {
            res.status(500).json({msg: 'Internal Server Error'});
        }
    }
    async findAll(req: Request, res: Response) {
        try {
            res.status(200).json({msg: 'Your items was were found!'});
        } catch (error) {
            res.status(500).json({msg: 'Internal Server Error'});
        }
    }
    async findOne(req: Request, res: Response) {
        try {
          res.status(200).json({
            message: "findOne OK",
            reqParamId: req.params.id
          });
        } catch (err) {
          res.status(500).json({
            message: "Internal Server Error!"
          });
        }
      }
    
      async update(req: Request, res: Response) {
        try {
          res.status(200).json({
            message: "update OK",
            reqParamId: req.params.id,
            reqBody: req.body
          });
        } catch (err) {
          res.status(500).json({
            message: "Internal Server Error!"
          });
        }
      }
    
      async delete(req: Request, res: Response) {
        try {
          res.status(200).json({
            message: "delete OK",
            reqParamId: req.params.id
          });
        } catch (err) {
          res.status(500).json({
            message: "Internal Server Error!"
          });
        }
      }
    async deleteAll(req: Request, res: Response) {
        try {
            res.status(200).json({
              message: "deleteAll OK",
            });
          } catch (err) {
            res.status(500).json({
              message: "Internal Server Error!"
            });
          }
    }
    async findAllPublished(req: Request, res: Response) {
        try {
            res.status(200).json({
              message: "findAllPublished OK",
            });
          } catch (err) {
            res.status(500).json({
              message: "Internal Server Error!"
            });
          }
    }
}