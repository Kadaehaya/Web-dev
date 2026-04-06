from models import Vehicle, Car, Bicycle


def main():
    vehicle1 = Vehicle("Toyota", "Corolla", 2020)
    car1 = Car("BMW", "M5", 2022, "Petrol")
    bicycle1 = Bicycle("Trek", "FX 3", 2021, 21)

    vehicles = [vehicle1, car1, bicycle1]

    for vehicle in vehicles:
        print(vehicle)  # __str__
        print(vehicle.start_engine())
        print(vehicle.move())  # polymorphism
        print()

    print(car1.honk())
    print(bicycle1.ring_bell())


if __name__ == "__main__":
    main()