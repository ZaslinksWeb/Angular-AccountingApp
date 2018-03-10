import { Participant } from '../participant/participant';
import { TransactionType } from './transaction-type.enum';
import { DocumentReference } from '@firebase/firestore-types';

export class Transaction{
    public id: string;
    constructor(public itemName?: string,
                public itemType?: TransactionType,
                public paymentDescription?: string,
                public amount?: number,
                public whosPaying?: string|DocumentReference,
                public whosReciving?: string|DocumentReference,
                public date?: Date,
                public executeStatus?: boolean,
                public billPicture?: string,
                ){}
}