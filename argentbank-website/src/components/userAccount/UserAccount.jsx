function UserAccount({ id, title , amount , description }) {
    return (
        <article className="user-account">
            <div className="account-content">
                <h2>{title}</h2>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-button">
                <button>View transactions</button>
            </div>
        </article>
    )
}

export default UserAccount;