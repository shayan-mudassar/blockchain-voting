# Blockchain Voting Platform

This project is a secure, decentralized voting platform that leverages Ethereum smart contracts, facial authentication, and email verification to ensure a transparent and tamper-proof voting process.

## Features

- **Decentralized Voting**: Utilizes Ethereum smart contracts to manage the voting process, ensuring transparency and immutability.
- **Facial Authentication**: Incorporates facial recognition to verify voter identity, enhancing security.
- **Email Verification**: Implements email verification to confirm voter registration and participation.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Ganache](https://trufflesuite.com/ganache/)
- [MetaMask](https://metamask.io/) Chrome extension
- [Truffle](https://trufflesuite.com/truffle/)

## Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/shayan-mudassar/blockchain-voting.git
   cd blockchain-voting
   ```

2. **Install Dependencies**:

   Navigate to the `client` and `server` directories and install the required packages:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Configure Environment Variables**:

   - **MongoDB**: Set up your MongoDB connection string in `/server/.env` file.

     ```env
     MONGODB_URI=your_mongodb_connection_string
     ```

   - **Email Verification**: Register with a third-party email service to obtain a secret key. Add your email and password to the `/server/.env` file.

     ```env
     EMAIL_USER=your_email@example.com
     EMAIL_PASS=your_email_password
     ```

4. **Set Up Ganache**:

   - Install Ganache and start a new workspace.
   - Update the `truffle-config.js` file in the `smart_contract` directory with your Ganache configuration.

5. **Compile and Migrate Smart Contracts**:

   Navigate to the `smart_contract` directory and run:

   ```bash
   truffle compile
   truffle migrate
   ```

6. **Run the Application**:

   - **Server**:

     ```bash
     cd server
     npm start
     ```

   - **Client**:

     ```bash
     cd client
     npm start
     ```

## Usage

1. **Access the Application**:

   Open your browser and navigate to `http://localhost:3000`.

2. **Register an Account**:

   - Complete the registration form with your details.
   - Verify your email through the link sent to your inbox.

3. **Authenticate**:

   - Log in using your credentials.
   - Complete facial authentication to verify your identity.

4. **Participate in Voting**:

   - View available elections.
   - Cast your vote securely.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Ethereum](https://ethereum.org/)
- [Truffle Suite](https://trufflesuite.com/)
- [Ganache](https://trufflesuite.com/ganache/)
- [MetaMask](https://metamask.io/)
- [MongoDB](https://www.mongodb.com/)

For more information on blockchain-based electronic voting systems, refer to the following resources:

- [Blockchain-Based E-Voting System - IEEE Xplore](https://ieeexplore.ieee.org/document/8457919)
- [Blockchain-Based Electronic Voting System: Significance and Challenges](https://onlinelibrary.wiley.com/doi/10.1155/2024/5591147)
- [A Blockchain-based Electronic Voting System: EtherVote](https://arxiv.org/abs/2307.10726)

These resources provide valuable insights into the implementation and significance of blockchain-based voting systems. 
