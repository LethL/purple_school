class Car {
    #brand;
    #model;
    #mileage;
  
    constructor(brand, model, mileage) {
        if (!typeof brand === "string" || brand.trim().length < 1) {
            throw new Error('Параметр brand обязателен и должен быть строкой')
        }
        this.#brand = brand

        if (!typeof model === "string" || model.trim().length < 1) {
            throw new Error('Параметр model обязателен и должен быть строкой')
        }
        this.#model = model

        if (!typeof mileage === "number" || mileage < 0) {
            throw new Error('Параметр number должен быть числом и не может быть меньше 0')
        }
        this.#mileage = mileage
    }

    info() {
        return `Марка - ${this.#brand}. Модель - ${this.#model}. Пробег - ${this.#mileage}.`
    }

    set changeMileage(newMileage) {
        if (newMileage > this.#mileage) {
            return this.#mileage = newMileage;
        } else {
            throw new Error('Пробег не может быть меньше или равен текущему')
        }
    }

    get mileage() {
        return this.#mileage;
    }
}
