# CDP + Compound.finance Manager

This is a service to manage my exposure to MakerDAO's CDP and Compound.finance Staking.

Currently, I created a CDP and withdrew Dai which I then supplied to Compound.finance to earn interest.

This repo represents functionality to be deployed to a serverless environment and run on a periodic basis to check on the status of this system and move assets in and out of positions to 1) protect from being bitten in the case of a ETH price drop and 2) to maximize my earnings be moving in and out of positions.

Initial functionality:
[X] Check CDP status
[X] Check Maker Price service
[ ] Check Compound.finance position status
[ ] Withdraw Dai from Compound.finance and send back to CDP to protect against a ETH price drop
[ ] Withdraw Dai from CDP and supply to Compound.finance when ETH price increases
[ ] Display Status on a Single page
[ ] Send text message alerts