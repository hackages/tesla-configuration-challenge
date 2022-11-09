export const initialData = {
  title: "Ranger Per Charge",
  models: ["60", "60D", "75", "75D", "90D", "P100D"],
  wheels: {
    sizes: [19, 21],
    value: 19,
    focused: null,
  },
  climate: {
    value: true,
    focused: false,
  },
  temperature: {
    value: 20,
    focused: false,
    min: -10,
    max: 40,
    step: 10,
  },
  speed: {
    value: 55,
    focused: false,
    min: 45,
    max: 70,
    step: 5,
  },
};
