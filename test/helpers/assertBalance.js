async function assertBalance(token, account, value) {
    let balance = await token.balanceOf(account)
    assert.equal(balance, value)
}

module.exports = assertBalance
