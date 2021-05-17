import React, { useState } from 'react'

export default function BankingOperations() {

    const [amount, setAmount] = useState();
    const dispatch = useDispatch();
    return (
        <div>
            <form action="">

                <input type="text"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />

                <button
                    type="button"
                    onClick={() => dispatch(deposit(amount))}>
                    Deposit
</button>


                <button
                    type="button"
                    onClick={() => dispatch({ type: "withdraw", payload: amount })}>
                    Withdraw
</button>

                <button
                    type="button"
                    onClick={() => dispatch({ type: "interest" })}>
                    Interest
</button>


                <button
                    type="button"
                    onClick={() => dispatch({ type: "delete-account" })}>Delete Account</button>


                <button
                    type="button"
                    onClick={() => dispatch({ type: "change-accType" })}>Change Account Type</button>

            </form>
        </div>
    )
}
