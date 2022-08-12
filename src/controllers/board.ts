import { Request, Response } from 'express';
import { boardServices } from '../services/index.js';

const getBoardWithComment = async (req: Request, res: Response) => {
  try {
    const boardId = req.params.id;
    const commentOffset = req.query.offset;
    const commentLimit = req.query.limit;
    const readBoard = await boardServices.getBoardWithComment(
      boardId,
      commentOffset,
      commentLimit
    );
    return res.status(200).json(readBoard);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const getBoards = async (req: Request, res: Response) => {
  try {
    const { keyword } = req.query;
    const boardSearchResult = await boardServices.getBoards(keyword);
    if (boardSearchResult.count === 0 || keyword == '') {
      return res.sendStatus(204);
    }
    return res.status(200).json(boardSearchResult);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const increaseView = async (req: Request, res: Response) => {
  try {
    const boardId = req.params.boardId;
    const { userId } = req.body;
    const view = await services.increaseView(boardId, userId);
    return res.status(200).json(view);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: 'err.message ' });
  }
};

export default { getBoardWithComment, getBoards, increaseView };
