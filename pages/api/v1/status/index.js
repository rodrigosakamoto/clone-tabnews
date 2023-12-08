import { NextApiResponse, NextApiRequest } from "next";
import database from "infra/database";

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 as sum");
  res.status(200).json({
    chave: "São acima da média",
  });
}

export default status;
