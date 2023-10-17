import { NextApiResponse, NextApiRequest } from "next";

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
function status(req, res) {
  res.status(200).json({
    chave: "São acima da média",
  });
}

export default status;
