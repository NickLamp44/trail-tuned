const mongoose = require("mongoose");
const { Bike } = require("./userBikeModel"); // Import the Bike model

describe("UserBike Model Tests", () => {
  let bike;

  beforeEach(() => {
    bike = new Bike({
      manufacturer: "Trek",
      year: "2020",
      model: "Slash 9.8",
      wheelSize: 29,
      frontTravel: 160,
      rearTravel: 150,
      forkModel: "RockShox Lyrik",
      shockModel: "RockShox Super Deluxe",
    });
  });

  test("should successfully create a new bike", async () => {
    const savedBike = await bike.save();
    expect(savedBike._id).toBeDefined();
    expect(savedBike.manufacturer).toBe("Trek");
  });

  test("should require manufacturer, year, model, wheelSize, frontTravel, and rearTravel", async () => {
    const bikeWithoutRequiredFields = new Bike({});
    let err;
    try {
      await bikeWithoutRequiredFields.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeDefined();
    expect(err.errors.manufacturer).toBeDefined();
    expect(err.errors.year).toBeDefined();
    expect(err.errors.model).toBeDefined();
    expect(err.errors.wheelSize).toBeDefined();
    expect(err.errors.frontTravel).toBeDefined();
    expect(err.errors.rearTravel).toBeDefined();
  });

  test("should save default values for forkModel and shockModel if not provided", async () => {
    const bikeWithoutModels = new Bike({
      manufacturer: "Giant",
      year: "2019",
      model: "Reign",
      wheelSize: 27.5,
      frontTravel: 170,
      rearTravel: 160,
    });

    const savedBike = await bikeWithoutModels.save();
    expect(savedBike.forkModel).toBe("Unknown");
    expect(savedBike.shockModel).toBe("Unknown");
  });
});
