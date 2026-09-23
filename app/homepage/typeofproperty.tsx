const propertytype = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhKzbSGBTx9xIdJZKmNKQUv09s41YuiGXI006V16xqA&s=10",
        title: "Commercial",
        listings: "2 listings",
    },
    {
        img: "https://denver.wpresidence.net/wp-content/uploads/2014/05/house2-e1683804196607-2-525x328.jpg",
        title: "Residential",
        listings: "0 listing",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUO_Inyac9mNihG1kZ81KrsHZthvL4TG_9exhA42bEA&s=10",
        title: "Single Family Home",
        listings: "3 listings",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nj3N2Hej8NqaNFS8ei8G3iks7y8j9OraS4Kp0MF2Qg&s=10",
        title: "Apartment",
        listings: "3 listings",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7H5Wp5Q_1CkWIP5Cou-KugwLIGJA8Fgw77J7q3Lquyg&s=10",
        title: "Condo",
        listings: "3 listings",
    },
    {
        img: "https://www.loopnet.com/s/images/multifamily-vs-single-family-roi/multifamily-townhome-row-investment-property.webp",
        title: "Multi Family House",
        listings: "4 listings",
    },
];

export default function TypeOfProperty() {
    return (
        <section className="px-5 py-12 sm:px-8 lg:px-12">
            <h1 className="mx-auto text-2xl font-semibold text-gray-800 px-20 py-8">What type of properties
you can buy or sell through us</h1>
           
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
                {propertytype.map((property) => (
                    <div
                        key={property.title}
                        className="group overflow-hidden rounded-xl bg-white shadow-sm">
                        
                        <div className="h-40 overflow-hidden sm:h-48">
                            <img
                                src={property.img}
                                alt={property.title}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/>
                        </div>

                        <div className="p-4">
                            <h2 className="text-base font-semibold text-gray-900">
                                {property.title}
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">
                                {property.listings}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}