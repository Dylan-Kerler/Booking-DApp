module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    console.log(deployer)

    await deploy("Bookings", {
        from: deployer,
        log: true,
    });
};

module.exports.tags = ["Bookings"];