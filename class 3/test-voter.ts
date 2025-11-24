import { network } from "hardhat";

const { viem } = await network.connect({
  network: "hardhatOp",
  chainType: "op",
});

const main = async () => {
  const [admin, senderClient1, senderClient2, senderClient3] =
    await viem.getWalletClients();
  const publicClient = await viem.getPublicClient();
  console.log("Deploying smart contract");
  const votingContract = await viem.deployContract("VotingContract");
  console.log("Created the smart contract");
  // const otherContract = viem.getContractAt("VotingContract", "0x0eger");
  // Register a candidate
  // const result = await votingContract.write.registerCandidate(["Adeyemi"]);
  // console.log(result);
  // const event = await publicClient.getContractEvents({
  //     eventName: "CandidateRegistered",
  //     address: votingContract.address,
  //     abi: votingContract.abi
  // })
  // console.log("This is the event: ", event)
  // const transactionResult = await publicClient.getTransactionReceipt({ hash: result })
  // console.log(transactionResult)

  // REgister a voter
  const registerVoterresult = await votingContract.write.registerAVoter(
    [], // empty args array
    { account: admin.account } // call options
  );
  console.log("Voter registered result: ", registerVoterresult);

  const gasResult = await publicClient.getTransactionReceipt({
    hash: registerVoterresult,
  });
  // check if voter is registered
  const check = await votingContract.read.checkIfVoterIsRegistered([
    senderClient1.account.address,
  ]);
  console.log("REsult: ", check);
  ("");
  // Get a candidate
  const candidateResult = votingContract.read.candidateArray;
  console.log("Candidate array: ", candidateResult);
};

main();
