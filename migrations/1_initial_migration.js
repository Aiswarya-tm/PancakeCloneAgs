const Ags = artifacts.require("AGS");

module.exports = async function (deployer) {

  const ags = await deployer.deploy(Ags,
    "0xd276fcf34d54a926773c399ebaa772c12ec394ac",   //_oracleAddress
    "0x3e87fede12d340820037b62b6c23f366294c4435",   //_adminAddress
    "0x3e87fede12d340820037b62b6c23f366294c4435",   //_operatorAddress
    "300",   //_intervalSeconds
    "30",   //_bufferSeconds
    "10000000000000",   //_minBetAmount
    "300",   //_oracleUpdateAllowance
    "500",   //_treasuryFee
    )
};
