using System;
namespace ClassObject
{
    public class Transaction
    {
        public decimal Amount { get; }
        public DateTime Date { get; set; }
        public string Notes { get; }

        public Transaction(decimal amount, DateTime date, string notes)
        {
            this.Amount = amount;
            this.Date = date;
            this.Notes = notes;
        }

        public void MakeDeposit(decimal amount, DateTime date, string note) { 
            
        }

        public void MakeWithdrawal(decimal amount, DateTime date, string note) { }
    }
}
