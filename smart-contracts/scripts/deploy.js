const COMPANIES = {
    cola: { id: 1, maxRooms: 10 },
    pepsi: { id: 2, maxRooms: 10 },
};

async function main() {
    const Bookings = await ethers.getContractFactory("Bookings");
    const bookings = await Bookings.deploy();

    await bookings.addCompany(COMPANIES.cola.id, COMPANIES.cola.maxRooms);
    await bookings.addCompany(COMPANIES.pepsi.id, COMPANIES.pepsi.maxRooms);

    console.log("bookings deployed to:", bookings.address);
}
  
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });