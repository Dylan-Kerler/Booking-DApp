export const shortenAddress = address => 
    `${address.slice(0,6)}...${address.slice(-6, -1)}`;