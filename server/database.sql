
create Table videokards(
    id SERIAL PRIMARY KEY,
    store VARCHAR(255),
    type VARCHAR(255),
    name VARCHAR(255),
    price VARCHAR(255),
    link VARCHAR(255),
    videochipset VARCHAR(255),
    memory VARCHAR(255),
    frequency VARCHAR(255),
    interface VARCHAR(255),
    frequencyMemory VARCHAR(255),
    Техпроцесс VARCHAR(255),
    processTechnology VARCHAR(255),
    MemoryBusWidth VARCHAR(255),
    image VARCHAR(255)
);


create Table processors(
    id SERIAL PRIMARY KEY,
    store VARCHAR(255),
    type VARCHAR(255),
    name VARCHAR(255),
    price VARCHAR(255),
    link VARCHAR(255),
    Nucleus VARCHAR(255),
    Frequency VARCHAR(255),
    socket VARCHAR(255),
    numberOfThreads VARCHAR(255),
    heatDissipation VARCHAR(255),
    memoryType VARCHAR(255),
    maxMemory VARCHAR(255),
    numberOfCores VARCHAR(255),
    numberOfChannels VARCHAR(255),
    processTechnology VARCHAR(255),
    graphicsCoreFrequency VARCHAR(255),
    modelGraphicKernel VARCHAR(255),
    frequencyMemory VARCHAR(255),
    image VARCHAR(255)
);



create Table memoryes(
    id SERIAL PRIMARY KEY,
    store VARCHAR(255),
    type VARCHAR(255),
    name VARCHAR(255),
    price VARCHAR(255),
    link VARCHAR(255),
    capacity VARCHAR(255),
    frequency VARCHAR(255),
    latency VARCHAR(255),
    delays VARCHAR(255),
    formFactor VARCHAR(255),
    memoryType VARCHAR(255),
    numberOfModules VARCHAR(255),
    volumeModule VARCHAR(255),
    image VARCHAR(255)
);



create Table motherboards(
    id SERIAL PRIMARY KEY,
    store VARCHAR(255),
    type VARCHAR(255),
    name VARCHAR(255),
    price VARCHAR(255),
    link VARCHAR(255),
    socket VARCHAR(255),
    Chipset VARCHAR(255),
    MemoryType VARCHAR(255),
    MaxMemoryFrequency VARCHAR(255),
    MaxMemory VARCHAR(255),
    NumberOfMemoryChannels VARCHAR(255),
    NumberOfSlotsPCIE1 VARCHAR(255),
    FormFactor VARCHAR(255),
    SupportedMemoryType VARCHAR(255),
    NumberOfMemorySlots VARCHAR(255),
    image VARCHAR(255)
);