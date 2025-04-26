export const CONTRACT_ADDRESS = "0x2834C2F100E0dc7f608580e15B1c0FE889B9839";
export const ADMIN_ADDRESS = "0xf4f4f5d2a710ddc920dc6d2df48c78c5cd28dcf3";

export const CHAIN_ID = "0xAA36A7"; // Sepolia testnet
export const NETWORK_NAME = "Sepolia";
export const NETWORK_RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/4cIZMN7OYiBXnf4U2C_vkJq6UVTPNfzl";

export const CONTRACT_ABI = [
  "function deposit() external payable",
  "function withdraw(uint256 _amount) external",
  "function applyForLoan(uint256 _amount) external",
  "function repayLoan(uint256 _loanIndex) external payable",
  "function getAccountBalance() external view returns (uint256)",
  "function getUserLoans() external view returns (tuple(uint256 amount, uint256 dueTimestamp, uint256 interestAmount, bool approved, bool repaid)[])",
  "function getUserTransactionHistory() external view returns (tuple(uint256 amount, uint256 timestamp, uint8 transactionType)[])",
  "function getEthUsdPrice() public view returns (int)"
];