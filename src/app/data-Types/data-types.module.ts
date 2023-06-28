export type registerUserInputs =
    {
        userEmail: string,
        passwd: string,
        userName: string
    }

export type LoginInputs =
    {
        userEmail: string,
        passwd: string,
    }

export type TransactionsInputs = {
    value: string | undefined;
    type: string;
    description: string | undefined;
}