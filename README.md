# transaction tokens (txn-tokens)

this repo showcases a small-scale example of how transaction tokens work.

## why transaction tokens

systems with implicit trust are vulnerable to internal attacks. transaction
tokens ensure that all internal requests between services are intended.

## our example

in this example, i created two services that interact with each other:

- weather service
- clothing service

the clothing service will be publicly accessible, however the weather service
is meant to only be internally called (for now, by only the clothing service).

## walkthrough

### creating the services [`p1`](https://github.com/Jish2/transaction-tokens/tree/p1)

for the purposes of this example, the weather service will only support three cities and will use a static dataset.

### creating the internal network [`p2`](https://github.com/Jish2/transaction-tokens/tree/p2)

### intruding the weather service [`p3`](https://github.com/Jish2/transaction-tokens/tree/p3)

### implementing transaction tokens [`p4`](https://github.com/Jish2/transaction-tokens/tree/p4)

[^1]: [Tranaction Tokens Draft 00](https://www.ietf.org/archive/id/draft-ietf-oauth-transaction-tokens-00.html)
[^2]: [What Are Transaction Tokens? Comparing Them to Phantom Tokens](https://curity.io/blog/transaction-tokens-new-phantom-tokens/)
