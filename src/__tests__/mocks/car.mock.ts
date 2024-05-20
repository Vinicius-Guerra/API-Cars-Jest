export const carCreateBodyMock = {
    name: "Car name",
    description: "Car description",
    brand: "Card brand",
    year: 2023,
    km: 10000
}

export const carUpdateBodyMock = {
    name: "New Name",
    description: "Car description new",
    brand: "New Card brand",
    year: 2024,
    km: 110000
}

export const carMock = {
    id: "fe111d24-1b79-44df-931b-4c9fd5859014",
    name: "Car name",
    description: "Car description",
    brand: "Card brand",
    year: 2023,
    km: 10000
}

export const carCreateListMock = [
    {
        name: "Car name",
        description: "Car description",
        brand: "Card brand",
        year: 2023,
        km: 10000
    },
    {
        name: "Car name2",
        description: "Car description2",
        brand: "Card brand2",
        year: 2022,
        km: 50000
    }
]

export const carListMock = [
    {
        id: "fe111d24-1b79-44df-931b-4c9fd5859014",
        name: "Car name",
        description: "Car description",
        brand: "Card brand",
        year: 2023,
        km: 10000
    },
    {
        id: "63a70632-add5-469a-b592-2b6257fbe14e",
        name: "Car name2",
        description: "Car description2",
        brand: "Card brand2",
        year: 2022,
        km: 50000
    }
]

export const carInvalidCreateBodyMock = {
    description: "Car description",
    brand: "Card brand",
    year: 2023,
    km: 10000
}

export const carInvalidUpdateBodyMock = {
    name: 123
}