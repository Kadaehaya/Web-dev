class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"{self.brand} {self.model}'s engine is starting."

    def move(self):
        return f"{self.brand} {self.model} is moving."

    def __str__(self):
        return f"Vehicle: {self.brand} {self.model}, Year: {self.year}"


class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type

    def move(self):
        return f"Car {self.brand} {self.model} is driving on the road."

    def honk(self):
        return f"{self.brand} {self.model} says: Beep beep!"

    def __str__(self):
        return f"Car: {self.brand} {self.model}, Year: {self.year}, Fuel: {self.fuel_type}"


class Bicycle(Vehicle):
    def __init__(self, brand, model, year, gear_count):
        super().__init__(brand, model, year)
        self.gear_count = gear_count

    def move(self):
        return f"Bicycle {self.brand} {self.model} is being pedaled."

    def ring_bell(self):
        return f"{self.brand} {self.model} rings: Ring ring!"

    def __str__(self):
        return f"Bicycle: {self.brand} {self.model}, Year: {self.year}, Gears: {self.gear_count}"