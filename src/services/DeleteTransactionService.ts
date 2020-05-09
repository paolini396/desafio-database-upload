import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const getTransactionsRepository = getCustomRepository(
      TransactionRepository,
    );

    const transaction = await getTransactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Sorry, transactions does not exist!');
    }

    await getTransactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
